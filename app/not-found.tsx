import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-wide section-padding text-center">
        <p className="pill-accent mb-4 inline-flex">404</p>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
          Page not found
        </h1>
        <p className="text-sm font-body text-muted-foreground mb-8 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or may have been moved. Check
          the URL or return to the homepage.
        </p>
        <Link href="/" className="btn-primary">
          Go back home
        </Link>
      </div>
    </section>
  );
}

