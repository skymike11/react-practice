pipeline {
    
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') { 
            steps {
                
                bat 'npm install' 
                bat 'npm run build' 
            }
        }

        stage('Deploy') { 
            steps {
                bat 'xcopy "build" "D:/deploy/react-test" /e /y'
            }
        }
    }
}
