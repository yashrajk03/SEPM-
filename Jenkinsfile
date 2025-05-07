pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    environment {
        EC2_HOST = "13.51.167.19" // Updated with the correct public IP
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/yashrajk03/SEPM-.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
        stage('Deploy') {
            steps {
                sshagent(credentials: ['ec2-ssh-key']) {
                    sh """
                    scp -o StrictHostKeyChecking=no -r build/* ec2-user@${EC2_HOST}:/usr/share/nginx/html/
                    ssh -o StrictHostKeyChecking=no ec2-user@${EC2_HOST} 'sudo systemctl restart nginx'
                    """
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}
