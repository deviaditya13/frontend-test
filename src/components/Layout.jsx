import { Outlet } from 'react-router-dom';
import Header from './organisms/header/Header';

const Layout = () => {
  return (
    <div>
        <Outlet />
    </div>
  );
};

export default Layout;