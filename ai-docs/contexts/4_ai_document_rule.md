# AI ドキュメント管理ルール

ドキュメントを作成するときは以下のルールに従ってください

## 設計ドキュメント

技術的な設計、仕様、基本計画などをまとめる場所

### 配置場所

```
ai-docs/designs/
```

### ファイル命名規則

```
<design name>.md
```

### 例

- `user-authentication.md` - ユーザー認証設計
- `database-schema.md` - データベーススキーマ設計
- `api-specification.md` - API 仕様書
- `component-architecture.md` - コンポーネント設計

## 作業タスク管理

作業のタスク一覧をまとめるところ。
設計ベースに作業を進めるときは、必ずドキュメントへのリンクを追加してください。

### 配置場所

```
ai-docs/works/
```

### ファイル命名規則

```
<yyyymmdd_work name>.md
```

### 例

- `20241229_user_profile_feature.md` - ユーザープロフィール機能実装
- `20241230_database_migration.md` - データベースマイグレーション作業
- `20250101_performance_optimization.md` - パフォーマンス最適化

### フォーマット例

```md
# <作業名>

# <参照ドキュメント>

@<designs ファイルへのリンク>

# タスク一覧

- [ ] xxxx
- [ ] xxxx
- [ ] xxxx
```
