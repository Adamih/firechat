// TODO: Create a redirect middleware

import { Context } from '@nuxt/types';

// Redirect to /chat if not on /chat and logged in

// Redirect to / if not on / and not logged in

export default function ({ store, route, redirect }: Context) {
  if (store.getters.isSignedIn && route.path !== '/chat') {
    console.debug('SIGNED IN REDIRECT');
    return redirect('/chat');
  }
  if (!store.getters.isSignedIn && route.path !== '/') {
    console.debug('NOT SIGNED IN REDIRECT');
    return redirect('/');
  }
}
