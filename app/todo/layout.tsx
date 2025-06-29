import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO アプリ",
  description: "WYSIWYGエディタとドラッグ&ドロップ対応のTODOアプリ",
};

export default function TodoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">TODO アプリ</h1>
          <p className="mt-2 text-gray-600">
            WYSIWYGエディタでリッチなTODOを作成し、ドラッグ&ドロップで並び替えができます
          </p>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
