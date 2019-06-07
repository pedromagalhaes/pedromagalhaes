#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'ubuntu'
            args '-u root'
        }
    }

    stages {
        stage('Install') {
            steps {
                echo 'Install...'
                sh 'yarn install'
            }
        }
        stage('Lint') {
            steps {
                echo 'Lint...'
                sh 'yarn lint:js'
            }
        }
        stage('Build') {
            steps {
                echo 'Build...'
                sh 'yarn build'
            }
        }        
    }
}
