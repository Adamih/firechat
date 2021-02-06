import { auth } from '@/plugins/firebase';
import { Context } from 'node-sass';

export default function ({ store }: Context) {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      store.commit('setUser', user);
    }
  });
}
