import { NEXT_AUTH_CONFIG } from '@/constants/auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  // NOTE: debugモードにしたい場合はtrueに設定
  debug: false,

  // 1. secret key
  // NOTE: https://next-auth.js.org/configuration/options#secret
  secret: NEXT_AUTH_CONFIG.authSecret,

  // 2. logger option
  // NOTE: https://next-auth.js.org/configuration/options#logger
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
  },

  // 3. providers option
  // NOTE: https://next-auth.js.org/providers/
  providers: [
    GithubProvider({
      clientId: NEXT_AUTH_CONFIG.github.clientID,
      clientSecret: NEXT_AUTH_CONFIG.github.clientSecret,
      authorization: {
        params: { scope: 'user:email' },
      },
      httpOptions: {
        timeout: 20000, // NOTE: Github側でタイムアウトになることが多いので長めに設定
      },
    }),
    GoogleProvider({
      clientId: NEXT_AUTH_CONFIG.google.clientID,
      clientSecret: NEXT_AUTH_CONFIG.google.clientSecret,
    }),
  ],

  // 4. session option
  // NOTE: https://next-auth.js.org/getting-started/upgrade-v4#session-strategy
  session: {
    // sessionをブラウザのcookieに保存 (default)
    strategy: 'jwt',

    // sessionをDBに保存 (指定した場合はadapterの指定が必要)
    // NOTE:https://next-auth.js.org/adapters
    // strategy: 'database',
  },

  // 5. callback option
  // NOTE: https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({}) {
      return true;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};

export { authOptions };
