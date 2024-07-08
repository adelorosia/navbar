import DarkMode from "./DarkMode";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <div className="flex justify-between container ">
           <Menu />
           <DarkMode />
        </div>
    );
}

export default Navbar;