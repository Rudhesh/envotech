
import { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    
      <div className="flex">
       
        <div  className="w-screen p-10" >
          {children}
        </div>
      </div>
   
  );
};

export default Layout;
