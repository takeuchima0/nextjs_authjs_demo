import * as MockUserComponents from '@/features/mock/components/index';
import type { MockUser } from '@/app/types/users';

import React from 'react';

const MockUserPage = () => {
  // ここでAPIリクエストを行い必要なデータを取得する。
  const mockUserProps: MockUser = {
    id: 10011011,
    name: 'Hal Ulala',
    age: 20,
    isLogin: true,
  };

  return (
    <div>
      {/* 取得したデータはpropsとして1つにまとめ、feature/components側に渡す。 */}
      <MockUserComponents.UsersMe {...mockUserProps} />
      <MockUserComponents.UserList />
    </div>
  );
};

export default MockUserPage;
