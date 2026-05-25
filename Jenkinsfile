pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Poojakbanakare/hospital-booking.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Running SonarQube Analysis'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hospital-booking .'
            }
        }

    }
}