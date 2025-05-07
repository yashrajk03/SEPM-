pipeline {
    agent any // This will run on your Windows Jenkins controller

    stages {
        stage('Clone Repository') {
            steps {
                // For a public repo, credentialsId might be optional for cloning
                // but good to include if you have it. Replace 'github-yashrajk03'
                // with the ID you created in Step 1.
                // Specify the branch name explicitly.
                git branch: 'main', // Or 'master' if your repo uses that
                    credentialsId: 'github-yashrajk03', 
                    url: 'https://github.com/yashrajk03/SEPM-.git'
            }
        }

        stage('Build Project') {
            steps {
                // Add your project's build commands here.
                // Since it's a Windows agent, use Windows commands (e.g., bat 'npm install')
                // Example for a Node.js project:
                // bat 'npm install'
                // bat 'npm run build' 
                echo 'Build commands would go here. Example: npm install, npm build'
                // If your project is Python, Java, etc., use appropriate commands.
            }
        }

        stage('Deploy to EC2') {
            steps {
                // Replace 'ec2-ssh-key' with the ID you created in Step 2.
                // Replace 'ec2-user' with your actual EC2 username if different.
                // Replace '13.51.167.19' with your EC2 public IP.
                // The 'target' path is where files will be copied on EC2.
                // The 'script' contains commands to run on EC2 after copying.

                // Since your Jenkins controller is Windows, scp/ssh directly might be tricky
                // without ssh-agent plugin correctly configured for Windows or using tools like PuTTY's pscp.
                // A common approach is to use the SSH Pipeline Steps plugin.
                
                sshagent(credentials: ['ec2-ssh-key']) {
                    // Example: Copy all files from workspace to /home/ec2-user/app on EC2
                    // You might need to adjust the source './*' depending on your build output.
                    bat "scp -o StrictHostKeyChecking=no -r .\\* ec2-user@13.51.167.19:/home/ec2-user/app/"
                    
                    // Example: Restart your application on EC2 (e.g., using PM2 for Node.js)
                    bat "ssh -o StrictHostKeyChecking=no ec2-user@13.51.167.19 \"cd /home/ec2-user/app && echo 'Deployed! Now run your app startup script.'\""
                    // For a real deployment, you'd have a script on EC2 to restart your service:
                    // bat "ssh -o StrictHostKeyChecking=no ec2-user@13.51.167.19 \"cd /home/ec2-user/app && ./deploy.sh\""
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
