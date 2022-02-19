// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'adfc-staging',
    appId: '1:714822540529:web:88207784196dae0c745d50',
    databaseURL: 'https://adfc-staging-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'adfc-staging.appspot.com',
    locationId: 'europe-west3',
    apiKey: 'AIzaSyDvFWeSCcxw4oMLw2nkY91ARtizGSLJRVU',
    authDomain: 'adfc-staging.firebaseapp.com',
    messagingSenderId: '714822540529',
  },
  useEmulators: true,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
