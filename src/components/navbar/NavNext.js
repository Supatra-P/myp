import { NavLink } from "react-router-dom";

export function NavNext({ icon, url }) {
    return (
        <NavLink
            to={url}
            style={({ isActive }) => ({
                color: isActive ? 'var(--dBlue)' : 'var(--tPink)',
            })}>
            <div style={{width: "40px"}}>
                {icon}
            </div>
        </NavLink>
    );
};