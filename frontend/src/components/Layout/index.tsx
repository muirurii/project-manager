import { ReactNode } from "react";
import { REFRESH_USER } from "../../graphQL/queries/users";
import { useQuery } from "@apollo/client";

const Layout = ({ children }: { children: ReactNode }) => {
  const {loading,error,data} = useQuery(REFRESH_USER);

  // if(loading) return <p>Loading</p>
  // if(error) return <p>Error</p>

  console.log(data)
  return (
    <div className="mb-5">
      {children}
    </div>
  );
};

export default Layout;
