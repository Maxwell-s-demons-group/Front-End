// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  withCredentials: true,
  baseUrl: "http://projectthreebean-env.eba-czwka6nm.us-east-1.elasticbeanstalk.com",
  //baseUrl: "http://p3-env.eba-wtsm73yr.us-east-1.elasticbeanstalk.com",

  headers: {
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': 'http://maxwellfrontend.s3-website-us-east-1.amazonaws.com',
    'Access-Control-Allow-Origin': '*',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
