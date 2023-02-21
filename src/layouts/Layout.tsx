import { PropsWithChildren } from 'react';
import { Footer } from 'components/Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
