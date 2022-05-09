import { ReactNode } from "react";
import "./header.css";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}
const Header = ({ title = "", children }: HeaderProps) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Header;
