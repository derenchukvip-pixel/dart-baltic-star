import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container-tight flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-highlight">404</span>
        <h1 className="mt-3 text-balance text-5xl font-bold md:text-6xl">Off-target.</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist — or has moved. Let's get you back on course.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild className="bg-foreground text-background hover:opacity-90">
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
