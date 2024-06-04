import SideBarItem from './SideBarItem';
import menuData from '../menuData.json';

const SideBar = () => {
  const nest = (menuData, menuId = 'ROOT', link = 'pmenuId') =>
    menuData
      .filter((item) => item[link] === menuId)
      .map((item) => ({ ...item, childrens: nest(menuData, item.menuId) }));

  const tree = nest(menuData);

  return (
    <div className="SbContainer">
      {tree.map((subItem, index) => (
        <SideBarItem item={subItem} key={index} />
      ))}
    </div>
  );
};

export default SideBar;
