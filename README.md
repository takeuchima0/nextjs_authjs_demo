# Rule

### app/**/page.tsx
- UI上で描画するページを定義する
- APIリクエスト等のデータ取得は原則このpage.tsx内で実行し、取得したデータをpropsとしてfeature/componentsに渡すものとする。

### features/components/**/[feature].tsx
- features/components配下で定義したtsxファイル内では、APIリクエスト等のデータ取得は原則行わないようにする。
- app/**/page.tsxからpropsとして渡されたデータを利用し、個別機能に応じた描画処理を定義する。
- 各機能別でindex.tsxを定義し、componentを1つのエイリアスにまとめて名前付きexportを行う。
  ```tsx
  // index.tsx で名前付きexportを定義
  import UserByID from './UserByID/UserByID';
  import UserList from './UserList/UserList';

  export { UserByID, UserList };
  ```
  ```tsx
  // page.tsx 側で呼び出す際には以下のように定義
  import * as MockUser from '@/features/mock/components/index';
  import * as MockUser from '@/features/mock/components/index';

  import React from 'react';

  const MockUserPage = () => {
    return (
      <div>
        <MockUser.UserByID />
        <MockUser.UserList />
      </div>
    );
  };

  export default MockUserPage;
  ```