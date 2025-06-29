# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際の Claude Code (claude.ai/code) へのガイダンスを提供します。

## 必須コマンド

### 開発
```bash
pnpm dev                   # 開発サーバーを起動 (http://localhost:3000)
pnpm build                 # プロダクション用にビルド
pnpm start                 # プロダクションサーバーを起動
```

### コード品質
```bash
pnpm lint                  # Biome によるLint実行
pnpm format                # Biome によるコードフォーマット
pnpm format:check          # フォーマットチェック（変更なし）
pnpm check                 # Lint + フォーマット（自動修正）
```

### テスト
```bash
pnpm test                  # ウォッチモードでテスト実行
pnpm test:ci               # テストを一度だけ実行（CI用）
pnpm vitest run path/to/test.ts  # 特定のテストファイルを実行
```

### データベース
```bash
docker-compose up -d       # PostgreSQL コンテナを起動
docker-compose down        # PostgreSQL コンテナを停止
docker-compose exec postgres psql -U postgres -d myapp_dev  # データベースに接続
```

## アーキテクチャ概要

これは App Router パターンを使用した Next.js 15 アプリケーションで、以下の主要コンポーネントで構成されています：

### 技術スタック
- **フロントエンド**: Next.js 15（TypeScript + App Router）
- **スタイリング**: Tailwind CSS + PostCSS
- **コード品質**: Biome（ESLint/Prettier の代替）
- **テスト**: Vitest + React Testing Library
- **データベース**: PostgreSQL（Docker Compose 経由）
- **CI/CD**: GitHub Actions（自動テスト・Lint）

### コードスタイル
- **フォーマット**: インデント2スペース、行幅100文字
- **クォート**: 文字列とJSX属性にダブルクォート使用
- **セミコロン**: 常にセミコロンを使用
- **末尾カンマ**: 常に末尾カンマを含める
- **インポート整理**: Biome により自動整理

### テスト戦略
- テストはコンポーネントと同じ場所に配置（例：`page.tsx` と `page.test.tsx`）
- グローバルテストセットアップは `test/setup.ts` に jest-dom マッチャーを含む
- インポートには `@` エイリアスを使用（プロジェクトルートを解決）

### 環境設定
- ローカル開発用に `.env.example` を `.env.local` にコピー
- データベース接続文字列形式：`postgresql://user:password@host:port/database`
- デフォルトの PostgreSQL ポートは 5432、`POSTGRES_PORT` で設定可能

### CI パイプライン
GitHub Actions は main ブランチへのプッシュ/PR 時に実行：
1. Biome Lint チェック
2. Biome フォーマットチェック
3. Vitest テスト
4. Next.js ビルド検証

テストマトリックスで Node.js 18.x と 20.x をサポート。
