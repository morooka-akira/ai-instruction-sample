# テスト戦略

## テストの配置
- テストはコンポーネントと同じ場所に配置
- 例: `page.tsx` と `page.test.tsx`

## テストセットアップ
- グローバルテストセットアップは `test/setup.ts` に配置
- jest-dom マッチャーを自動的に含む

## テストの実行
- 開発中: `pnpm test` (ウォッチモード)
- CI環境: `pnpm test:ci` (一度だけ実行)
- 特定ファイル: `pnpm vitest run path/to/test.ts`

## テストの書き方
```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ComponentName from "./ComponentName";

describe("ComponentName", () => {
  it("should render correctly", () => {
    render(<ComponentName />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });
});
```