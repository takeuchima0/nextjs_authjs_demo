import React from 'react'

const AboutPage = () => {

    const indentWarningCheck = 1000;

  return (
    <div>
      このページはAboutページです。
      <p>ESLintで設定したインデント数の警告が出力されることを確認しています。  {indentWarningCheck}</p>
    </div>
  )
}

export default AboutPage;

