variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "eu-north-1" // Europe (Stockholm)
}

variable "project_name" {
  description = "A name prefix for all created resources for easy identification"
  type        = string
  default     = "react-nginx-deploy"
}

variable "instance_type" {
  description = "EC2 instance type for the Nginx server"
  type        = string
  default     = "t2.micro" // Free-tier eligible
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance (Amazon Linux 2023 in eu-north-1)"
  type        = string
  default     = "ami-02c2e3e5a5d9e162d"
}

variable "ec2_key_pair_name" {
  description = "Name of an existing EC2 Key Pair (no .pem extension)"
  type        = string
  default     = "my-key"
}

variable "your_public_ip_for_ssh" {
  description = "Your public IP address in CIDR format to allow SSH access"
  type        = string
  default     = "13.51.167.19/32"
}
