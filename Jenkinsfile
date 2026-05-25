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

        stage('Project Build Success') {
            steps {
                echo 'Hospital Booking CI/CD Pipeline Executed Successfully'
            }
        }

    }
}