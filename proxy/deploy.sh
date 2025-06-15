aws cloudformation package \
  --template-file ./sam-template.yaml \
  --s3-bucket serverless-api-native-deploy-bucket \
  --output-template-file packaged.yaml

aws cloudformation deploy \
  --template-file packaged.yaml \
  --stack-name serverless-api-native \
  --capabilities CAPABILITY_IAM \
  --region eu-central-1

