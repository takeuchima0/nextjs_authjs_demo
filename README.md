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
  import UsersMe from './UsersMe/UsersMe';
  import UserList from './UserList/UserList';

  export { UsersMe, UserList };

  ```
  ```tsx
  // page.tsx 側で呼び出す際には以下のように定義
  import * as MockUser from '@/features/mock/components/index';

  import React from 'react';

  const MockUserPage = () => {
    // ここでAPIリクエストを行い必要なデータを取得する。
    return (
      <div>
        // 取得したデータはpropsとして1つにまとめ、feature/components側に渡す。
        <MockUser.UsersMe props={data} />
      </div>
    );
  };

  export default MockUserPage;
  ```


### このあたりどうしようかと考えているところ
- 1. SSRでデータ取得する（page.tsx）
- 2. APIで取得したデータをpropsに詰め込み、page.tsx -> feature/components/[feature].tsxに渡す
- 3. feature/componentsでデータの状態管理を行い描画する ※useState, useEffect etc...

3の状態で例えばフォームアクションによるPOST/PUT/DELETE のリクエストを行う場合、どのような構成になるか。<br>
feature/components 配下ではあくまでもデータ取得等は行わないとしているので、postリクエスト等は必要に応じて実装するのが良い?<br>
