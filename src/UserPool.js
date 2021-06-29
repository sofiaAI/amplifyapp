import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_EYPTgv3Rs',
  ClientId: '60befk00hkdp8oqi38jpdf4pfi'
};

export default new CognitoUserPool(poolData);
