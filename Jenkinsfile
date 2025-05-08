pipeline {
    agent any

    environment {
        EC2_USER = 'ec2-user'
        EC2_HOST = 'http://13.51.167.19/'
        REMOTE_DIR = '/home/ec2-user/sepm-react'
        SSH_KEY_ID = 'ec2-ssh-key'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/yashrajk03/SEPM-.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent (credentials: [SSH_KEY_ID]) {
                    bat """
                    pscp -i C:\\path\\to\\your-key.ppk -r build/* ec2-user@%EC2_HOST%:%REMOTE_DIR%
                    """
                }
            }
        }
    }
}
