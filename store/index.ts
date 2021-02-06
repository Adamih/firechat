import Vuex from 'vuex';
import firebase, { auth, db } from '@/plugins/firebase';
import { firestoreAction, vuexfireMutations } from 'vuexfire';

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      messages: [],
    },
    getters: {
      isSignedIn(state: any) {
        return !!state.user;
      },
    },
    actions: {
      async signInWithGoogle({ commit }): Promise<void> {
        auth.useDeviceLanguage();
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        provider.setCustomParameters({
          login_hint: 'user@example.com',
        });
        const result = await auth.signInWithPopup(provider);

        commit('setUser', result.user);
      },
      async signOut({ commit }): Promise<void> {
        await auth.signOut();
        commit('resetUser');
      },
      subscribeToMessages: firestoreAction(({ bindFirestoreRef }) => {
        // return the promise returned by `bindFirestoreRef`
        console.debug('SUBSCRIBED_TO_MESSAGES');
        return bindFirestoreRef(
          'messages',
          db.collection('messages').orderBy('created_at').limitToLast(25)
        );
      }),
      unsubscribeToMessages: firestoreAction(({ unbindFirestoreRef }) => {
        console.debug('UNSUBSCRIBED_TO_MESSAGES');
        unbindFirestoreRef('messages');
      }),
      sendMessage: async ({ state, getters }, content: string) => {
        if (getters.isSignedIn) {
          const { uid, displayName, photoURL } = state.user;
          const message = {
            content,
            created_at: Date.now(),
            uid,
            display_name: displayName,
            photo_url: photoURL,
          };
          console.debug('MESSAGE_SENT', message);
          await db.collection('messages').add(message);
        }
      },
    },
    mutations: {
      ...vuexfireMutations,
      setUser(state, user): void {
        console.debug('USER_SET: ', user);
        state.user = user;
      },
      resetUser(state): void {
        console.debug('USER_RESET');
        state.user = null;
      },
    },
  });
};

export default createStore;
