#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
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
        stage('Build') {
            steps {
                echo 'Build...'
                sh 'yarn build'
            }
        }
    }
}
