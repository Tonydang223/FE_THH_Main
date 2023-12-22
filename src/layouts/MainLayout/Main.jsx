import {Outlet} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import './MainLayout.scss';

export default function Main() {
  return (
    <div className="wrapMain">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
