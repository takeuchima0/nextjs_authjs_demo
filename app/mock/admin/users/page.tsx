import { API_HOST, API_REQUEST_OPTIONS } from '@/app/constants/api';
import * as MockUserComponents from '@/features/mock/users/components/index';
import type { MockUser } from '@/app/types/users';

const MockAdminUserPage = async () => {
  const response = await fetch(`${API_HOST}/users`, {
    method: 'GET',
    headers: API_REQUEST_OPTIONS.headers,
  });

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
