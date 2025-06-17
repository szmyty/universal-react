// Route definition for the about page.
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./index";
import type { ComponentType } from "react";
import { lazy, Suspense } from "react";
import { PageLoader } from "@universal/components";

const LazyAbout = lazy(() =>
  import("../pages/About.js").then((mod) => mod as unknown as { default: ComponentType<any> })
);

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LazyAbout />
    </Suspense>
  ),
});
