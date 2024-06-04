import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = ({ item, depth = 0 }) => {
  const [collapsed, setCollapsed] = useState(true);
  const depthClass = `depth-${depth}`;

  const toggleCollapse = () => {
    setCollapsed((prevValue) => !prevValue);
  };

  if (item.childrens && item.childrens.length > 0) {
    return (
      <div>
        <div className={`SbTitle ${depthClass}`} onClick={toggleCollapse}>
          [{depth}] {item.menuNm}
        </div>
        <div className={`SbSub ${collapsed ? '' : 'open'}`}>
          {item.childrens.map((child) => (
            <SideBarItem item={child} depth={depth + 1} key={child.menuId} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`SbTitle ${depthClass}`}>
        <Link to={item.windowUrl} className="SbLink">
          [{depth}] {item.menuNm}
        </Link>
      </div>
    );
  }
};

export default SideBarItem;
