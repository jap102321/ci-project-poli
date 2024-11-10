pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'b0a4d4c1-98c9-4415-94e3-dac94219d178', url: 'git@github.com:jap102321/ci-project-poli.git'
            }
        }
        stage("build"){
            steps{
                echo "project build from jenkins"
            }
        }
        stage("test"){
            steps{
                echo "testing from jenkins"
            }
        }
        stage("deploy"){
            steps{
                echo "deploy from jenkins"
            }
        }
    }
}
