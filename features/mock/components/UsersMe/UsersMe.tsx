import React from 'react';

type UserProps = {
  id: number;
  name: string;
  age: number;
  isLogin: boolean;
};

const UsersMe: React.FC<UserProps> = ({ id, name, age, isLogin }) => {
  return (
    <div className="">
      <p>
        ./features/mock/components/ 配下で定義したUsersMeのコンポーネントです。
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Status:</strong> {isLogin ? 'Logged In' : 'Logged Out'}
      </p>
    </div>
  );
};

export default UsersMe;
