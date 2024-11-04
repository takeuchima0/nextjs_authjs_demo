import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  // NOTE: debugモードにしたい場合はtrueに設定
  debug: false,

  // 1. secret key
  // NOTE: https://next-auth.js.org/configuration/options#secret
  secret: process.env.NEXTAUTH_SECRET || '',

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
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      authorization: {
        params: { scope: 'user:email' },
      },
      httpOptions: {
        timeout: 20000, // NOTE: Github側でタイムアウトになることが多いので長めに設定
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],

  // 4. session option
  // NOTE: https://next-auth.js.org/getting-started/upgrade-v4#session-strategy
  session: {
    strategy: 'jwt',
  },

  // 5. callback option
  // NOTE: https://next-auth.js.org/configuration/callbacks
  // callbacks: {
  //   async signIn({}) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return url.startsWith(baseUrl) ? url : baseUrl;
  //   },
  //   async jwt({ token, trigger, session, user }) {
  //     if (trigger === 'update') token.name = session?.user?.name;
  //     return {
  //       ...user,
  //       ...token,
  //     };
  //   },
  //   async session({ user, session, token }) {
  //     session.user = user;
  //     session.accessToken = token.accessToken;
  //     session.idToken = token.idToken;
  //     return session;
  //   },
  // },
};

export { authOptions };

// declare module 'next-auth' {
//   interface Session {
//     accessToken?: string
//     idToken?: string
//   }

//   interface User {
//     accessToken?: string
//     idToken?: string
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     accessToken?: string
//     idToken?: string
//   }
// }
