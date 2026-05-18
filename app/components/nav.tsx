import Link from "next/link";

const linkClass =
  "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white">
          AutoContent
        </Link>
        <div className="flex items-center gap-5 md:gap-6">
          <Link href="/features" className={linkClass}>
            功能
          </Link>
          <Link href="/tools" className={linkClass}>
            工具
          </Link>
          <Link href="/blog" className={linkClass}>
            博客
          </Link>
          <Link
            href="https://app.autocontent.net/register"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          >
            免费体验
          </Link>
        </div>
      </div>
    </nav>
  );
}
