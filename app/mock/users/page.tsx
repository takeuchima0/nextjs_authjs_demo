import * as MockUser from '@/features/mock/components/index';

import React from 'react';

const MockUserPage = () => {
  // ここでAPIリクエストを行い必要なデータを取得する。
  const userData = {
    id: 1,
    name: 'John Doe',
    age: 25,
    isLogin: true,
  };

  return (
    <div>
      {/* 取得したデータはpropsとして1つにまとめ、feature/components側に渡す。 */}
      <MockUser.UsersMe {...userData} />
      <MockUser.UserList />
    </div>
  );
};

export default MockUserPage;
