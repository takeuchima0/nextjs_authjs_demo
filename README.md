# nextjs_authjs_demo

### ディレクトリ構成
```bash
.
├── app            // ルーティングに関するコンポーネントを配置
│   ├── api        // バックエンドサーバの振る舞いを定義
│   ├── components // ロジックがない共通のコンポーネントを配置（header, footerなど）
│   ├── mock       // Mock用のページ
│   └── types      // 共通の型定義
├── constants      // 共通の定数定義
├── features       // ロジック+コンポーネントをまとめたディレクトリ、ドメインに依存するため今後頻繁に更新され得ることを想定している
│   └── mock       // Mock用の機能、基本的にはapp/mockと対応する作りとする
├── hooks          // 共通ロジックのうち、React Hooksが「ある」もの
├── library        // 共通ロジックのうち、React Hooksが「ない」もの
└── public         // publicに公開しても良い画像やアイコン等のコンテンツ
```
