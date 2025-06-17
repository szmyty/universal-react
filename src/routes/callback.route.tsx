// Route used after completing the OIDC login flow.
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./index";
import type { ComponentType } from "react";
import { lazy, Suspense } from "react";
import { PageLoader } from "@universal/components";

const LazyCallback = lazy(() =>
  import("../pages/Callback.js").then((mod) => mod as unknown as { default: ComponentType<any> })
);

export const callbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/callback",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LazyCallback />
    </Suspense>
  ),
});
