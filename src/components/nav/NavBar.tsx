import { HiOutlineUserCircle, HiOutlineShoppingCart } from 'react-icons/hi';
import { BrowserRouter, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContexts';

const NavBar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav
      className={
        'bg-gray-600 text-gray-50 flex flex-row justify-between items-center px-10 py-3 lg:px-[10%]'
      }
    >
      {/* <BrowserRouter> */}
      <div className={'text-lg font-medium'}>
        <a href="/">e-Commerce by Praveen</a>
      </div>

      <div className={'flex flex-row gap-3 text-xl'}>
        <a href="/cart">
          <HiOutlineShoppingCart />
        </a>
        <a href="/login">
          {isAuthenticated ? <div>{user}</div> : <HiOutlineUserCircle />}
        </a>
      </div>
      {/* </BrowserRouter> */}
    </nav>
  );
};

export default NavBar;
