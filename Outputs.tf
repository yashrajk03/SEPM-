output "instance_public_ip" {
  description = "Public IP address of the Nginx EC2 instance (via Elastic IP)"
  value       = aws_eip.nginx_eip.public_ip
}

output "instance_id" {
  description = "ID of the Nginx EC2 instance"
  value       = aws_instance.nginx_server.id
}

output "nginx_app_webroot_on_ec2" {
  description = "The absolute path on the EC2 instance where Nginx expects the website files"
  value       = "/var/www/html/${var.project_name}"
}

output "ssh_command" {
  description = "Command to SSH into the EC2 instance"
  value       = "ssh -i /path/to/your/${var.ec2_key_pair_name}.pem ec2-user@${aws_eip.nginx_eip.public_ip}"
  // <<--- ACTION: Remind user to replace /path/to/your/ with the actual path to their .pem file.
}
