import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const getBostonWeeather = functions.https.onRequest(
  (request, response) => {
    admin
      .firestore()
      .doc('cities-weather/boston-ma-use')
      .get()
      .then((snap) => {
        const data = snap.data();
        response.send(data);
      })
      .catch((error) => {
        console.error(error);
        response.status(500).send(error);
      });
  },
);
