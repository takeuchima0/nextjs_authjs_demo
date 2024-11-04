import { NextResponse } from 'next/server';
import { MockUser } from '@/app/types/users';

const mockUserListResponse: MockUser[] = [
  { id: 1, name: 'John Doe', age: 30, isLogin: true },
  { id: 2, name: 'Jane Smith', age: 25, isLogin: false },
  { id: 3, name: 'Alice Johnson', age: 28, isLogin: true },
  { id: 4, name: 'Bob Brown', age: 35, isLogin: false },
];

// GET api/v1/users
export async function GET() {
  return NextResponse.json(mockUserListResponse);
}
