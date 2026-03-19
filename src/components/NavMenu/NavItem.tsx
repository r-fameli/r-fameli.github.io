import useIntersection from "../../hooks/useIntersection";
import type { NavItemType } from "./Nav";

type Props = {
    navItem: NavItemType;
}

const NavItem = ({ navItem }: Props) => {
    const { sentinel, key, label } = navItem;
    const isIntersecting = useIntersection(sentinel, {threshold: 0.2});
    const intersectClass = isIntersecting ? 'vis-item' : 'not-vis-item';
    return <div key={key}>
        <a href={`#${key}`} className={'nav-item ' + intersectClass}>{label}</a>
    </div>
}

export default NavItem;