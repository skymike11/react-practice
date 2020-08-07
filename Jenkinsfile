pipeline {
    
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') { 
            steps {
                bat 'npm install' 
                bat 'npm build' 
            }
        }

        stage('Deploy') { 
            steps {
                bat 'xcopy C:/windows/system32/config/systemprofile/AppData/Local/Jenkins.jenkins/workspace/react-test D:/deploy /e'
            }
        }
    }
}