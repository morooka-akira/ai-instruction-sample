# Next.js Web Application

Next.js プロジェクトです。Biome でコード整形とLint、Vitest でテスト、PostgreSQL をデータベースとして使用します。

## アプリケーション

### TODOアプリ 📝

WYSIWYGエディタとドラッグ&ドロップ機能を搭載したTODOアプリが利用できます。

**機能:**
- ✅ **リッチテキスト入力**: Tiptapを使用したWYSIWYGエディタ
- ✅ **ドラッグ&ドロップ**: TODO項目の直感的な並び替え
- ✅ **完了管理**: チェックボタンでTODOを完了済みに移動
- ✅ **履歴確認**: 完了済みTODOの一覧表示と完了日時の記録
- ✅ **データ永続化**: ブラウザのlocalStorageに自動保存

**アクセス方法:**
1. 開発サーバーを起動: `pnpm dev`
2. [http://localhost:3000](http://localhost:3000) でホームページを開く
3. 「TODOアプリを使ってみる」ボタンをクリック

## 技術スタック

- **フロントエンド**: Next.js 15 (App Router) + TypeScript
- **スタイリング**: Tailwind CSS + PostCSS
- **コード整形・Lint**: Biome (ESLint/Prettierの代替)
- **テスト**: Vitest + React Testing Library
- **データベース**: PostgreSQL (Docker Compose)
- **CI**: GitHub Actions
- **その他**: 
  - **WYSIWYGエディタ**: Tiptap
  - **ドラッグ&ドロップ**: @dnd-kit
  - **アイコン**: Lucide React
  - **パッケージマネージャー**: pnpm

## セットアップ

### 前提条件

- Node.js 18.x 以上
- Docker と Docker Compose
- Git

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd ai-instruction-sample
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 環境変数の設定

```bash
cp .env.example .env.local
```

必要に応じて `.env.local` ファイルを編集してください。

### 4. データベースの起動

```bash
docker-compose up -d
```

PostgreSQL がポート 5432 で起動します。

## 開発

### 開発サーバーの起動

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションにアクセスできます。

### コマンド一覧

```bash
# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# プロダクションサーバーの起動
pnpm start

# テストの実行（ウォッチモード）
pnpm test

# テストの実行（CI用）
pnpm test:ci

# Lintの実行
pnpm lint

# コードフォーマット
pnpm format

# フォーマットチェック（CI用）
pnpm format:check

# Lint + フォーマット（自動修正）
pnpm check
```

## データベース管理

### PostgreSQL の起動

```bash
docker-compose up -d
```

### PostgreSQL の停止

```bash
docker-compose down
```

### データベースへの接続

```bash
docker-compose exec postgres psql -U postgres -d myapp_dev
```

## CI/CD

GitHub Actions を使用して以下を自動実行します：

- Biome による Lint チェック
- Biome によるフォーマットチェック
- Vitest によるテスト実行
- Next.js のビルド

プルリクエストやメインブランチへのプッシュ時に自動的に実行されます。

## プロジェクト構造

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── page.test.tsx      # ホームページのテスト
│   ├── globals.css        # グローバルスタイル
│   └── todo/              # TODOアプリ
│       ├── layout.tsx     # TODOアプリのレイアウト
│       ├── page.tsx       # TODOアプリのメインページ
│       └── page.test.tsx  # TODOアプリのテスト
├── components/            # 共通コンポーネント
│   ├── TodoEditor.tsx     # WYSIWYGエディタ
│   ├── TodoList.tsx       # ドラッグ&ドロップ対応TODOリスト
│   ├── TodoItem.tsx       # 個別TODO項目
│   ├── CompletedTodos.tsx # 完了済みTODO管理
│   └── *.test.tsx         # 各コンポーネントのテスト
├── hooks/                 # カスタムフック
│   ├── useTodos.ts        # TODO操作ロジック
│   └── useTodos.test.ts   # カスタムフックのテスト
├── lib/                   # ユーティリティ関数
│   ├── todo-utils.ts      # TODO操作ヘルパー
│   └── storage.ts         # localStorage操作
├── types/                 # 型定義
│   └── todo.ts            # TODO関連の型
├── ai-docs/               # AI アシスタント用ドキュメント
│   ├── contexts/          # コンテキストファイル
│   ├── designs/           # 設計ドキュメント
│   └── works/             # 作業履歴
├── test/                  # テスト設定
│   └── setup.ts           # Vitest セットアップ
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions 設定
├── docker-compose.yml     # Docker Compose 設定
├── biome.json             # Biome 設定
├── vitest.config.ts       # Vitest 設定
├── next.config.ts         # Next.js 設定
├── tailwind.config.js     # Tailwind CSS 設定
├── postcss.config.js      # PostCSS 設定
├── tsconfig.json          # TypeScript 設定
├── aicm-config.yml        # AICM 設定
├── CLAUDE.md              # Claude Code用プロジェクト指示
├── .env.example           # 環境変数のサンプル
├── package.json           # パッケージ設定
└── pnpm-lock.yaml         # pnpm ロックファイル
```

## トラブルシューティング

### ポート 5432 が使用中の場合

`.env.local` ファイルで `POSTGRES_PORT` を変更してください：

```env
POSTGRES_PORT=5433
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/myapp_dev
```

### テストが失敗する場合

```bash
# node_modules を削除して再インストール
rm -rf node_modules
pnpm install
```

## ライセンス

ISC