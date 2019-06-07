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
        stage('Lint') {
            steps {
                echo 'Lint...'
                sh 'yarn lint'
            }
        }
        stage('Build') {
            steps {
                echo 'Build...'
                sh 'yarn build:app'
            }
        }
        stage('Start') {
            steps {
                echo 'Start...'
                sh 'pm2 start ecosystem.config.js --env production'
            }
        }        
    }
}
