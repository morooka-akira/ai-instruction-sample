# CI/CD パイプライン

## GitHub Actions

### トリガー条件
- `main` ブランチへのプッシュ時
- `main` ブランチへのプルリクエスト作成時

### 実行内容
1. **Lint チェック**: Biome によるコード品質チェック
2. **Format チェック**: Biome によるフォーマットチェック  
3. **Test 実行**: Vitest によるテスト実行
4. **Type チェック**: TypeScript の型チェック (`tsc --noEmit`)
5. **Build 実行**: Next.js のビルド確認

### サポート環境
- Node.js 18.x と 20.x でテスト実行
- Ubuntu latest 環境で実行
- pnpm 9.x を使用

### ワークフロー設定
- `.github/workflows/ci.yml` に定義
- 依存関係は `--frozen-lockfile` でインストール