import "./NavMenu.scss";
import "../../App.scss";
import type { NavItemType } from "./Nav";
import NavItem from "./NavItem";

type Props = {
    navItems: NavItemType[];
};

const NavMenu = ({ navItems }: Props) => {
    return (
        <div className="nav-menu nav-font">
            {navItems.map((navItem) => (<NavItem navItem={navItem}/>))}
        </div>
    );
};

export default NavMenu;
