export interface HeaderProps {
  Links: Array<{
    to: string;
    label: string;
  }>;
  onLogout?: () => void;
}
