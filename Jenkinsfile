pipeline {
    agent any

    tools {
        nodejs "NodeJS_20" // Change this to match your Jenkins Node.js tool name
    }

    environment {
        NODE_ENV = 'development'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/yashrajk03/SEPM-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo '🏗️ Building the React project...'
                bat 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running tests...'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying project...'
                // Replace below with your actual deployment command (SCP, rsync, S3 upload, etc.)
                bat 'echo Deploy step executed'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment completed successfully.'
        }
        failure {
            echo '❌ Build failed. Check the logs.'
        }
    }
}
