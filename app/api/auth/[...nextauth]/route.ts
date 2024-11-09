import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import { authOptions } from '@/library/auth/auth';

export const POST = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, {
    ...authOptions,
  });
};

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, {
    ...authOptions,
  });
};
