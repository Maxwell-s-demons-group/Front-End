export const environment = {
  production: true,
  withCredentials: true,
  baseUrl: "http://projectthreebean-env.eba-czwka6nm.us-east-1.elasticbeanstalk.com",
 //baseUrl: "http://localhost:8080",
 //baseUrl: "http://p3-env.eba-wtsm73yr.us-east-1.elasticbeanstalk.com",
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Origin': '*',
  },
};
