pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Poojakbanakare/hospital-booking.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Running SonarQube Analysis'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t hospital-booking .'
            }
        }

    }
}