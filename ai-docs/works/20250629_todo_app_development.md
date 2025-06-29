# TODOリストアプリ開発

## 参照ドキュメント

@ai-docs/designs/todo-app.md

**✅ 実装完了**: 2024年6月29日

すべてのタスクが完了し、TODOアプリが正常に動作しています。

## タスク一覧

### 1. 環境準備
- [x] 必要なパッケージをインストール
  - [x] `pnpm add @tiptap/react @tiptap/pm @tiptap/starter-kit`
  - [x] `pnpm add @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities`
  - [x] `pnpm add lucide-react` (アイコン用)
  - [x] `pnpm add -D @types/uuid uuid`

### 2. 型定義とユーティリティ
- [x] `types/todo.ts` - TodoItem インターフェース定義
- [x] `lib/todo-utils.ts` - TODO操作用ユーティリティ関数
- [x] `lib/storage.ts` - localStorage操作関数

### 3. WYSIWYGエディタコンポーネント
- [x] `components/TodoEditor.tsx` - Tiptapベースのエディタ
- [x] `components/TodoEditor.test.tsx` - エディタのテスト

### 4. ドラッグ&ドロップ対応TODOリスト
- [x] `components/TodoList.tsx` - @dnd-kit対応のリスト
- [x] `components/TodoItem.tsx` - 個別TODO項目コンポーネント
- [x] `components/TodoList.test.tsx` - リストのテスト
- [x] `components/TodoItem.test.tsx` - 項目のテスト

### 5. 完了済みTODO管理
- [x] `components/CompletedTodos.tsx` - 完了済み一覧コンポーネント
- [x] `components/CompletedTodos.test.tsx` - 完了済み一覧のテスト

### 6. メインアプリケーション
- [x] `app/todo/page.tsx` - TODOアプリのメインページ
- [x] `app/todo/layout.tsx` - TODOアプリのレイアウト
- [x] `app/todo/page.test.tsx` - メインページのテスト

### 7. スタイリング
- [x] TODOエディタのTailwindスタイル
- [x] ドラッグ&ドロップ時の視覚効果
- [x] レスポンシブデザイン対応

### 8. 状態管理とロジック
- [x] `hooks/useTodos.ts` - TODO操作カスタムフック
- [x] `hooks/useTodos.test.ts` - カスタムフックのテスト

### 9. ナビゲーション更新
- [x] `app/page.tsx` - ホームページにTODOアプリへのリンク追加

### 10. テストとビルド確認
- [x] 全テスト実行 (`pnpm test:ci`)
- [x] Lint/Format確認 (`pnpm check`)
- [x] 型チェック (`pnpm tsc --noEmit`)
- [x] ビルド確認 (`pnpm build`)

### 11. 動作確認
- [x] WYSIWYGエディタでの入力
- [x] ドラッグ&ドロップでの並び替え
- [x] チェック機能での削除
- [x] 完了済みTODOの表示
- [x] データの永続化確認