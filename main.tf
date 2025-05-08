provider "aws" {
  region = var.aws_region
}

# Get the default VPC
data "aws_vpc" "default" {
  default = true
}

# Get default public subnets in the default VPC
data "aws_subnets" "default_public" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
  filter {
    name   = "map-public-ip-on-launch"
    values = ["true"] # Filter for public subnets
  }
}

# Security Group for the Nginx EC2 instance
resource "aws_security_group" "nginx_sg" {
  name        = "${var.project_name}-sg"
  description = "Allow HTTP (80), HTTPS (443), and SSH (22) inbound traffic"
  vpc_id      = data.aws_vpc.default.id // Use the default VPC ID

  ingress {
    description = "HTTP from anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS from anywhere (for future SSL/TLS)"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH access from your specified IP"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.your_public_ip_for_ssh]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-sg"
  }
}

# EC2 Instance to host Nginx and the React App
resource "aws_instance" "nginx_server" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  key_name                    = var.ec2_key_pair_name
  # Launch in the first available default public subnet
  subnet_id                   = data.aws_subnets.default_public.ids[0]
  vpc_security_group_ids      = [aws_security_group.nginx_sg.id]
  associate_public_ip_address = true // Ensure it gets a public IP initially

  # User data script to install and configure Nginx for the React app
  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              # For Amazon Linux 2023 (or latest AL2, check Nginx package name if different)
              sudo yum install -y nginx
              
              # Create the webroot directory for our React app
              # The actual content will be deployed by Jenkins
              sudo mkdir -p /var/www/html/${var.project_name}
              sudo chown -R ec2-user:ec2-user /var/www/html/${var.project_name} # Give ec2-user ownership for Jenkins scp

              # Create a basic Nginx server block configuration for the React app
              # This ensures Nginx is ready to serve the app once Jenkins deploys it.
              sudo tee /etc/nginx/conf.d/${var.project_name}.conf > /dev/null <<EOT
              server {
                  listen 80 default_server;
                  server_name _; # Catch-all or replace with your domain name later

                  root /var/www/html/${var.project_name};
                  index index.html index.htm;

                  location / {
                      try_files \$uri \$uri/ /index.html; # CRITICAL for React Router (SPA routing)
                  }

                  # Optional: Customize error pages, access logs, etc.
                  # access_log /var/log/nginx/${var.project_name}.access.log;
                  # error_log /var/log/nginx/${var.project_name}.error.log;
              }
EOT

              # Remove default Nginx welcome page configuration if it exists and might conflict
              # sudo rm -f /etc/nginx/conf.d/default.conf
              # sudo rm -f /etc/nginx/sites-enabled/default # For Ubuntu style

              sudo systemctl enable nginx
              sudo systemctl start nginx
              sudo systemctl restart nginx # Ensure new config is loaded
              EOF

  tags = {
    Name = "${var.project_name}-ec2-instance"
  }
}

# Elastic IP to provide a static public IP for the EC2 instance
resource "aws_eip" "nginx_eip" {
  instance = aws_instance.nginx_server.id
  domain   = "vpc" // For EC2 instances in a VPC (which is standard now)
  tags = {
    Name = "${var.project_name}-eip"
  }
}
