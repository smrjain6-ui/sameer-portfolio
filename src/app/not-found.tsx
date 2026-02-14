import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 font-serif text-5xl">Page not found</h1>
      <p className="mb-8 text-textSecondary">That page doesn&apos;t exist.</p>
      <Link href="/" className="link-underline text-accent">
        Return home
      </Link>
    </div>
  );
}
