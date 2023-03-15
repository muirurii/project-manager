import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-5">
      {children}
    </div>
  );
};

export default Layout;
