import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface authProps {
  children: ReactNode;
}

const AuthProvider: React.FC<authProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
