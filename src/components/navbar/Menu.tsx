import { NavLink } from "react-router-dom";

const Menu = () => {
  const items = [
    {
      title: "home",
      path: "/home",
    },
    {
      title: "coins",
      path: "/coin",
    },
    {
      title: "analyze",
      path: "/analyze",
    },
    {
      title: "news",
      path: "/news",
    },
  ];
  return (
    <ul className="flex gap-4 uppercase ">
      {items.map((item,index) => (
        <NavLink key={index} to={item.path}>{item.title}</NavLink>
      ))}
    </ul>
  );
};

export default Menu;
