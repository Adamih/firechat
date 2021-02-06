import * as functions from 'firebase-functions';

import Filter from 'bad-words';

import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.firestore();

exports.profanityFilter = functions.firestore
  .document('messages/{msgId}')
  .onCreate(async (doc, _) => {
    const filter = new Filter();
    const { content, uid } = doc.data();

    if (filter.isProfane(content)) {
      const cleaned = filter.clean(content);
      await doc.ref.update({
        content: `🤐 I got BANNED for life by saying: ${cleaned}`,
      });
      await db.collection('banned').doc(uid).set({});
    }
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
