# Next.js Web Application

Next.js プロジェクトです。Biome でコード整形とLint、Vitest でテスト、PostgreSQL をデータベースとして使用します。

## 技術スタック

- **フロントエンド**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS
- **コード整形・Lint**: Biome
- **テスト**: Vitest + React Testing Library
- **データベース**: PostgreSQL (Docker Compose)
- **CI**: GitHub Actions

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
│   └── globals.css        # グローバルスタイル
├── test/                   # テスト設定
│   └── setup.ts           # Vitest セットアップ
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions 設定
├── docker-compose.yml      # Docker Compose 設定
├── biome.json             # Biome 設定
├── vitest.config.ts       # Vitest 設定
├── next.config.ts         # Next.js 設定
├── tailwind.config.js     # Tailwind CSS 設定
├── postcss.config.js      # PostCSS 設定
├── tsconfig.json          # TypeScript 設定
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