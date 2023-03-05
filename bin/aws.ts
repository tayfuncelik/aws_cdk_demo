#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdAwsPipelineStack } from '../lib/ci-cd-aws-pipeline-stack';

const app = new cdk.App();
new CiCdAwsPipelineStack(app, 'CiCdAwsPipelineDemoStack', {
  env: {
    account: '175560813486',
    region: 'eu-east-1',
  }
});

app.synth()