import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { CartContextProvider } from '../contexts/CartProvider';

export function DefaultLayout() {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  );
}
