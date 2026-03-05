import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white">
          Content Studio
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
            博客
          </Link>
          <Link
            href="/#waitlist"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          >
            加入等候
          </Link>
        </div>
      </div>
    </nav>
  );
}
