import { CheckSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Next.js!</h1>
        <p className="text-lg text-gray-600">サンプルアプリケーションが利用できます</p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/todo"
            className="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <CheckSquare size={20} />
            TODOアプリを使ってみる
          </Link>
          <p className="text-sm text-gray-500">
            WYSIWYGエディタとドラッグ&ドロップ機能付きのTODOアプリ
          </p>
        </div>
      </div>
    </main>
  );
}
