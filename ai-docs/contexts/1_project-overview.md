# プロジェクト概要

このファイルは、このリポジトリでコードを扱う際の Claude Code (claude.ai/code) へのガイダンスを提供します。

## 技術スタック

これは App Router パターンを使用した Next.js 15 アプリケーションで、以下の主要コンポーネントで構成されています：

- **フロントエンド**: Next.js 15（TypeScript + App Router）
- **スタイリング**: Tailwind CSS + PostCSS  
- **コード品質**: Biome（ESLint/Prettier の代替）
- **テスト**: Vitest + React Testing Library
- **データベース**: PostgreSQL（Docker Compose 経由）
- **CI/CD**: GitHub Actions（自動テスト・Lint）
- **パッケージマネージャー**: pnpm