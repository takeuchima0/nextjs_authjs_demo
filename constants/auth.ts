export const NEXT_AUTH_CONFIG = {
  authSecret: process.env.NEXTAUTH_SECRET || '',
  github: {
    clientID: process.env.GITHUB_ID || '',
    clientSecret: process.env.GITHUB_SECRET || '',
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  },
};
