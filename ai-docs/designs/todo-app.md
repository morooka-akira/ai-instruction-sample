# TODOリストアプリ設計

## 概要

WYSIWYGエディタとドラッグ&ドロップ機能を持つTODOリストアプリケーション

**✅ 実装完了**: 2024年6月29日

## 要件

1. **WYSIWYG入力**: リッチテキストエディタでTODO項目を入力
2. **ドラッグ&ドロップ**: TODO項目の順序変更
3. **チェック機能**: 完了したTODOをリストから削除
4. **履歴機能**: 完了したTODOの確認

## 技術選定

### WYSIWYG エディタ
- **Tiptap**: Vue/React対応のモダンなWYSIWYGエディタ
  - 軽量でカスタマイズ性が高い
  - TypeScript対応
  - Reactとの統合が容易

### ドラッグ&ドロップ
- **@dnd-kit/core**: モダンなDrag and Dropライブラリ
  - アクセシビリティ対応
  - TypeScript対応
  - React 18対応

### 状態管理
- **useState + useReducer**: 小規模アプリのため、Reactの標準機能を使用
- **localStorage**: データの永続化

## データ構造

```typescript
interface TodoItem {
  id: string;
  content: string; // HTML形式のリッチテキスト
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
  order: number;
}

interface AppState {
  todos: TodoItem[];
  completedTodos: TodoItem[];
}
```

## コンポーネント設計

```
TodoApp
├── TodoEditor          # WYSIWYG入力コンポーネント
├── TodoList           # TODO一覧表示
│   └── TodoItem       # 個別TODO項目
├── CompletedTodos     # 完了済みTODO一覧
└── TodoStats          # 統計情報（オプション）
```

## 画面構成

1. **メイン画面**
   - WYSIWYGエディタ（新規TODO入力）
   - アクティブTODO一覧（ドラッグ&ドロップ対応）
   - 完了済みTODO表示切り替えボタン

2. **完了済みTODO画面**
   - 完了済みTODO一覧
   - 完了日時表示
   - メイン画面への戻るボタン

## 機能詳細

### WYSIWYG機能
- **基本フォーマット**: 太字、斜体、下線
- **リスト**: 箇条書き、番号付きリスト
- **リンク**: URL挿入
- **カラー**: テキスト色変更

### ドラッグ&ドロップ機能
- マウス/タッチでの並び替え
- ドラッグ中の視覚的フィードバック
- キーボードナビゲーション対応

### ストレージ
- ブラウザのlocalStorageを使用
- JSON形式でデータ保存
- 自動保存機能

## 今後の拡張可能性

- カテゴリ分類機能
- 期限設定機能
- タグ機能
- データエクスポート機能
- クラウド同期機能