import { Context } from '@nuxt/types';
import VuexPersistence from 'vuex-persist';

export default ({ store }: Context) => {
  new VuexPersistence({
    storage: window.localStorage,
  }).plugin(store);
};
