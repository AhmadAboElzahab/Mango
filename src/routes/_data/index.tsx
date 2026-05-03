import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Icon } from "components/UI/Icon/Icon";
import Toolbar from "components/UI/Toolbar";
import { useAuthStore } from "store/auth.store";

export const Route = createFileRoute("/_data/")({
  component: Index,
});

function Index() {
  return (
    <div className=" bg-white overflow-y-auto max-h-[calc(100vh-56px)]  h-full">
      <div className="max-h-11 min-h-11 relative z-7 flex flex-row justify-between items-center left-0 right-2 top-0 text-inherit whitespace-nowrap px-3 bg-white font-normal border-b border-[#c2c5c8]">
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <Icon name="Plus" width={16} height={16} fill="#1d1f24" />
          Add
        </div>
        
      </div>


      
    </div>
  );
}
