import { getMenu } from '../../services/apiRestaurant.js';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem.jsx';

const Menu = () => {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  return await getMenu();
};

export default Menu;
