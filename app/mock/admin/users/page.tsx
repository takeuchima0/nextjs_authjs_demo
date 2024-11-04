import * as MockUserComponents from '@/features/mock/users/components/index';
import type { MockUser } from '@/app/types/users';

const MockAdminUserPage = async () => {
  const response = await fetch('http://localhost:3000/api/v1/users');

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
