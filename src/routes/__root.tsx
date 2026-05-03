import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import HeaderContainer from "containers/HeaderContainer";

export const Route = createRootRoute({
  defaultPendingMs: 0,

  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
  notFoundComponent: () => <div>404 Not Found</div>,
});
