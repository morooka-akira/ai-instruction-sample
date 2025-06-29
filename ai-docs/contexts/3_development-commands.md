# 開発コマンド

開発環境の操作には以下のコマンドを使用してください

## 開発サーバー

```bash
pnpm dev                   # 開発サーバーを起動 (http://localhost:3000)
pnpm build                 # プロダクション用にビルド
pnpm start                 # プロダクションサーバーを起動
```

## コード品質

```bash
pnpm lint                  # Biome によるLint実行
pnpm format                # Biome によるコードフォーマット
pnpm format:check          # フォーマットチェック（変更なし）
pnpm check                 # Lint + フォーマット（自動修正）
```

## テスト

```bash
pnpm test                  # ウォッチモードでテスト実行
pnpm test:ci               # テストを一度だけ実行（CI用）
pnpm vitest run path/to/test.ts  # 特定のテストファイルを実行
```

## データベース

```bash
docker-compose up -d       # PostgreSQL コンテナを起動
docker-compose down        # PostgreSQL コンテナを停止
docker-compose exec postgres psql -U postgres -d myapp_dev  # データベースに接続
```
