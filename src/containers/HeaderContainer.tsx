import { useAuth } from "hooks/useAuth";

import Header from "../components/UI/Header";

export default function HeaderContainer() {
  const { logout } = useAuth();
  return (
    <div>
      <Header
        Links={[
          { to: "/", label: "dashboard" },
          { to: "/maids", label: "maids" },
        ]}
        onLogout={() => {
          logout();
        }}
      />
    </div>
  );
}
