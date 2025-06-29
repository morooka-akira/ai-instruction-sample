# プロジェクト構造

## ディレクトリ構成

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── page.test.tsx      # ホームページのテスト
│   └── globals.css        # グローバルスタイル
├── components/            # 共通コンポーネント（今後追加）
├── lib/                   # ユーティリティ関数（今後追加）
├── test/                  # テスト設定
│   └── setup.ts          # Vitest セットアップ
├── public/               # 静的ファイル
├── ai-docs/              # AI アシスタント用ドキュメント
│   ├── contexts/         # コンテキストファイル
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions 設定
├── docker-compose.yml     # Docker Compose 設定
├── biome.json            # Biome 設定
├── vitest.config.ts      # Vitest 設定
├── next.config.ts        # Next.js 設定
├── tailwind.config.js    # Tailwind CSS 設定
├── postcss.config.js     # PostCSS 設定
├── tsconfig.json         # TypeScript 設定
├── aicm-config.yml       # AICM 設定
├── .env.example          # 環境変数のサンプル
├── .env.local           # ローカル環境変数（Git無視）
├── package.json         # パッケージ設定
└── pnpm-lock.yaml       # pnpm ロックファイル
```

## ファイル配置のルール

- コンポーネントは `app/` または `components/` に配置
- ユーティリティ関数は `lib/` に配置
- テストファイルは対象ファイルと同じディレクトリに配置
- 型定義は `types/` ディレクトリまたは各ファイル内に配置
