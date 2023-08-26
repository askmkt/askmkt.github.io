import FootLayout from "./FootLayout";
import HeadLayout from "./HeadLayout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.ComponentType<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeadLayout />
      {children}
      <FootLayout />
    </>
  );
};

export default Layout;
