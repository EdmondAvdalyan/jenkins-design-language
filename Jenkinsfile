pipeline {
    agent {
        docker { image 'node:carbon' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
