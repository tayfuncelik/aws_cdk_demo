# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


1- Go to Developer Settings in Github and copy Personal Access Tokens
 *create new token by selectig
 -repo
 -admin:repo-hook
 generate token.


2-We should add this token to be able to create an access between GitHub and AWS
   Open AWS "Secret Manager"    
   create a new secret
   -other type of secret
   -paste your token into plaintext tab

3- now you can create initial version of pipeline by running " cdk deploy" using terminal

4- check "cloud formation"  if our "stack" is "CREATE_IN_PROGRESS" it will take some time to complete
  *you can go to "Events"and change preferences and you can show/hide necessary colums to be able to see Type,Status...etc

5- open "CodePipeline" by using search box and you can see all changes regarding to deployment by CDK


npx cdk bootstrap --profile default --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess\ aws://175560813486/eu-east-1


npx cdk bootstrap aws://<YOUR_ACCONT_ID>/<YOUR_REGION> --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://<YOUR_AWS_ACCONT_ID>/<YOUR_REGION>
