import * as MockUserComponents from '@/features/mock/users/components/index';
import type { MockUser } from '@/app/types/users';

const MockAdminUserPage = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'API-Key': process.env.API_KEY || '',
    Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN || ''}`,
  };

  console.log('[info] api-key:', headers['API-Key']);
  console.log('[info] auth-token:', headers.Authorization);
  console.log(`[info] ${process.env.NEXT_PUBLIC_V1_API_BASE_URL}/users`);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_V1_API_BASE_URL}/users`,
    {
      method: 'GET',
      headers: headers,
    },
  );

  if (response.status !== 200) {
    throw new Error(`HTTP error Status: ${response.status}`);
  }

  const userList: MockUser[] = await response.json();

  return (
    <div>
      <MockUserComponents.UserList userList={userList} />
    </div>
  );
};

export default MockAdminUserPage;
