<template>
  <div class="flex flex-col h-screen">
    <div
      class="px-6 bg-gray-800 flex items-center justify-between h-16 flex-shrink-0"
    >
      <firestore-logo class="h-8 w-8" />
      <button
        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        @click="signOut"
      >
        Sign out
      </button>
    </div>
    <div class="flex-auto overflow-y-auto">
      <div
        v-for="(message, i) in messages"
        :key="i"
        class="flex items-center p-2"
      >
        <img
          :src="message.photo_url"
          class="rounded-full h-8 w-8"
          :alt="message.display_name + '_profile_photo'"
        />
        <div class="flex-auto pl-2">
          <h2 :class="getTextColor(message.uid)">
            {{ message.display_name }}
          </h2>
          <div class="text-white break-word">
            {{ message.content }}
          </div>
        </div>
      </div>
      <div ref="bottomOfChat"></div>
    </div>
    <div class="px-3 bg-blue-800 flex items-center min-h-16 gap-2">
      <textarea
        v-model.trim="messageInput"
        rows="1"
        class="flex-auto p-3 m-3 rounded break-word"
        type="text"
        @keyup.enter="sendMessage"
      />
      <button
        class="w-10 h-10 flex-shrink-0 focus:outline-none"
        @click="sendMessage"
      >
        <send-icon />
      </button>
    </div>
  </div>
</template>

<script>
import Prando from 'prando';
import FirestoreLogo from '~/components/FirestoreLogo.vue';
import SendIcon from '~/components/SendIcon.vue';

export default {
  components: { FirestoreLogo, SendIcon },
  data() {
    return {
      messageInput: null,
      loaded: false,
      messagesRef: null,
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
  watch: {
    loaded() {
      this.$refs.bottomOfChat.scrollIntoView();
    },
  },
  beforeCreate() {
    this.$store.dispatch('subscribeToMessages').then(() => {
      this.loaded = true;
    });
  },
  beforeDestroy() {
    this.$store.dispatch('unsubscribeToMessages');
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.push('/');
      });
    },
    sendMessage() {
      if (this.messageInput) {
        this.$store.dispatch('sendMessage', this.messageInput);
        this.messageInput = '';
        this.$refs.bottomOfChat.scrollIntoView();
      }
    },
    getTextColor(uid) {
      const random = new Prando(uid);
      const selection = random.nextInt(0, 9);
      switch (selection) {
        case 0:
          return 'text-white';
        case 1:
          return 'text-indigo-500';
        case 2:
          return 'text-red-500';
        case 3:
          return 'text-green-500';
        case 4:
          return 'text-blue-500';
        case 5:
          return 'text-yellow-500';
        case 6:
          return 'text-orange-500';
        case 7:
          return 'text-purple-500';
        case 8:
          return 'text-pink-500';
        case 9:
          return 'text-teal-500';
        default:
          return 'text-white';
      }
    },
  },
};
</script>
