import React from "react";

const AboutPage = () => {

    const indentWarningCheck = 1000;

  const singleQuotesWaringCheck = 'シングルクォーテーションを使用しています。';
  const doubleQuotesWaringCheck = "ダブルクォーテーションを使用しています。";

  const semiColonWaringCheck = "文末にセミコロンを設定しない状態で警告が出ることを確認しています。"

  return (
    <div>
      このページはAboutページです。
      <p>ESLintで設定したインデント数の警告が出力されることを確認しています。  {indentWarningCheck}</p>
      <p>{singleQuotesWaringCheck}</p>
      <p>{doubleQuotesWaringCheck}</p>
      <p>{semiColonWaringCheck}</p>
    </div>
  );
};

export default AboutPage;
