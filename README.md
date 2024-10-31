# Rule

- component側で定義したtsxファイル内ではAPI等のデータ取得(fetch)は行わない。
- データ取得処理はpage.tsx側で行うようにする。
- component側では呼び出し側からデータを受け取るためのpropsを定義するのみとし、page.tsx側は予めcomponentが定めた型/interfaceを基づいたデータを渡すような実装を行う。

- APIリクエストの処理はapp/lib/fetch.tsで定義した関数「xxx」を使用する
- page.tsx側では上記ライブラリ内で定義したAPIコール関数を呼び出すのみとし、個別で定義等は行わないようにする。

<br>

# ディレクトリ構成

#### app ディレクトリについて

[概要]

app ディレクトリは、Next.js アプリケーションの主要な部分を構成し、ページ、API、コンポーネント、スタイルなどが含まれています。このディレクトリは、ルーティングやページの構造に直接関与しています。

```bash
$ tree app
app
├── about
│   └── page.tsx
├── api
│   ├── v1
│   │   └── blog
│   │       ├── getAllBlogs
│   │       │   └── route.ts
│   │       └── getBlogById
│   │           └── route.ts
│   └── v2
│       ├── getAllBlogs
│       │   └── route.ts
│       └── getBlogById
│           └── route.ts
├── blog
│   ├── [blogId]
│   │   └── page.tsx
│   └── page.tsx
├── components
│   ├── elements
│   │   ├── button
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.tsx
│   │   └── input
│   │       ├── Input.stories.tsx
│   │       ├── Input.test.tsx
│   │       └── Input.tsx
│   └── layouts
│       ├── footer
│       │   ├── Footer.stories.tsx
│       │   ├── Footer.test.tsx
│       │   └── Footer.tsx
│       └── header
│           ├── Header.stories.tsx
│           ├── Header.test.tsx
│           └── Header.tsx
├── constans
├── favicon.ico
├── fonts
│   ├── GeistMonoVF.woff
│   └── GeistVF.woff
├── globals.css
├── hooks
├── layout.tsx
├── lib
│   └── fetch.ts
├── page.tsx
└── types

23 directories, 26 files
```

[構成要素]

- about:

  - /about/page.tsx は、/about ルートに対応するページコンポーネントです。

- api:

  - API エンドポイントを構成するためのディレクトリで、バージョンごとに API を整理しています。v1 と v2 というサブディレクトリがあり、それぞれに getAllBlogs と getBlogById のエンドポイントが含まれています。
  - 各エンドポイントは、route.ts ファイルで具体的な処理を記述しています。

- blog:

  - ブログ関連のページを含むディレクトリ。[blogId] ディレクトリは、動的ルーティングを使用して特定のブログ記事を表示するためのものです。

- components:

  - アプリケーション内で使用される再利用可能な UI コンポーネントを格納します。
  - elements と layouts サブディレクトリには、ボタンや入力フィールド、フッター、ヘッダーなど、さまざまな UI 要素が含まれています。

- constans:

  - 定数やグローバルな設定を定義するためのディレクトリ（内容は不明ですが、一般的に使用されます）。

- favicon.ico:

  - ウェブサイトのファビコンを指定するファイルです。

- fonts:

  - プロジェクトで使用するカスタムフォントを格納するディレクトリ。

- globals.css:

  - グローバルスタイルを定義する CSS ファイル。

- hooks:

  - React のカスタムフックを格納するためのディレクトリ。

- layout.tsx:

  - アプリ全体のレイアウトを管理するコンポーネントを定義するファイル。

- lib:

  - アプリケーション全体で使用されるユーティリティ関数やライブラリを格納するディレクトリ。ここでは fetch.ts が含まれています。

- page.tsx:

  - アプリケーションのルートページを定義するコンポーネントです。

- types:
  - TypeScript の型定義を格納するディレクトリ。

<br>

### features ディレクトリについて

[概要]

features ディレクトリは、特定の機能やコンポーネントをモジュール化して管理するためのディレクトリです。このアプローチは、アプリケーションの機能ごとにディレクトリを分けることで、可読性やメンテナンス性を向上させます。

```bash
$ tree features
features
└── blog
    ├── components
    │   ├── BlogCard
    │   │   ├── BlogCard.stories.tsx
    │   │   ├── BlogCard.test.tsx
    │   │   └── BlogCard.tsx
    │   ├── BlogImage
    │   │   ├── BlogImage.stories.tsx
    │   │   ├── BlogImage.test.tsx
    │   │   └── BlogImage.tsx
    │   ├── BlogList
    │   │   ├── BlogList.stories.tsx
    │   │   ├── BlogList.test.tsx
    │   │   └── BlogList.tsx
    │   └── index.ts
    ├── constants
    ├── hooks
    │   └── useBlog.ts
    ├── stores
    └── types
        └── index.ts

9 directories, 12 files
```

[構成要素]

- blog:

  - ブログ機能に関連するすべてのコンポーネントやロジックが含まれています。

- components:

  - ブログに関連するコンポーネント（BlogCard, BlogImage, BlogList）がそれぞれのサブディレクトリに格納されています。各コンポーネントには、ストーリー（Storybook 用）、テスト、メインのコンポーネントファイルが含まれています。

- constants:

  - ブログ機能に特化した定数を定義するためのディレクトリ（詳細は不明）。

- hooks:

  - ブログに関連するカスタムフック（ここでは useBlog.ts）が含まれています。

- stores:

  - 状態管理のためのストア（内容は不明ですが、例えば Redux ストアや Zustand など）。

- types:
  - ブログ機能に関連する TypeScript の型定義を格納するディレクトリ（index.ts が含まれています）。

<br>

# まとめ

- app ディレクトリ: Next.js のページ、API、全体のレイアウトやスタイルを構成する主要な部分です。
- features ディレクトリ: 特定の機能（この場合はブログ）に特化したコードを整理して管理するための構造です。このように分けることで、コードの可読性と保守性が向上します。
