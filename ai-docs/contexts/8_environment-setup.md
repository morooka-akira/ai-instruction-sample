# 環境設定

## 環境変数
- ローカル開発用に `.env.example` を `.env.local` にコピー
- `.env.local` は Git に含まれません

## データベース設定
- 接続文字列形式: `postgresql://user:password@host:port/database`
- デフォルトポート: 5432
- ポート変更: `POSTGRES_PORT` 環境変数で設定可能

## Docker Compose
- PostgreSQL 16 Alpine を使用
- ヘルスチェック設定済み
- データは `postgres_data` ボリュームに永続化

## 環境変数の例
```env
# Database Configuration
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=myapp_dev
POSTGRES_PORT=5432

# Database URL for Next.js
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/myapp_dev

# Next.js Environment
NODE_ENV=development
```