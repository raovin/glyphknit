import Link from "next/link";

export default function NotFound() {
  return (
    <section className="reading-shell py-16 md:py-24">
      <p className="mono-label">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">Page not found</h1>
      <p className="mt-5 text-lg text-[var(--muted)]">
        The page is missing or still marked as a TODO.
      </p>
      <Link className="focus-link mt-6 inline-flex text-sm font-semibold" href="/">
        Home
      </Link>
    </section>
  );
}
