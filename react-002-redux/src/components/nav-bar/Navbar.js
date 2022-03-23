import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <Link to="/">Home</Link> | {" "}
            <Link to="/counter">Counter</Link> | {" "}
            <Link to="/todos">Todo</Link> | {" "}
            <Link to="/users">Users</Link>
        </div>
    </div>
}


export default NavBar;
