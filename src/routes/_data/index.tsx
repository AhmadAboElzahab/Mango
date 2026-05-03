import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useAuthStore } from "store/auth.store";

export const Route = createFileRoute("/_data/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center bg-white overflow-y-auto max-h-[calc(100vh-56px)]  h-full">
      ahmad
    </div>
  );
}
