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

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/users`,
    {
      method: 'GET',
      headers: headers,
    },
  );

  console.log('[info] response status:', response.status);

  if (response.status !== 200) {
    return <div>ユーザ情報の取得に失敗しました。</div>;
  }

  const userList: MockUser[] = await response.json();

  return (
    <div>
      <MockUserComponents.UserList userList={userList} />
    </div>
  );
};

export default MockAdminUserPage;
