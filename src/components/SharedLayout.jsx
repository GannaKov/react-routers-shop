import { Outlet, NavLink } from "react-router-dom";
import styles from "../styles/SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.wrapperSection}>
      <header className={styles.headerWrp}>
        <nav>
          <ul className={styles.headerNavList}>
            <li>
              <NavLink
                to="/"
                className={styles.headerNavLink}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "green",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={styles.headerNavLink}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "green",
                })}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={styles.headerNavLink}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "green",
                })}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
