import { ReactNode } from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/nav/NavBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <NavBar />
        <main className="px-4 py-3">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
