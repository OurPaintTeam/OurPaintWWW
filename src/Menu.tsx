import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
  <div className="w-full bg-purple-800 rounded-md text-white
       flex justify-between items-center px-2 py-2 sticky top-0 z-10 shadow-md">
      <div className="flex justify-start">
        <Link
          to="/"
          className="menu_button"
        >
          Главная
        </Link>
        <Link
          to="/soon"
          className="menu_button"
        >
          OurPaintHub
        </Link>
      </div>
      <div className="flex justify-end">
        <Link
          to="/about"
          className="menu_button"
        >
          О нас
        </Link>
      </div>
  </div>
  );
}

export default Menu;
