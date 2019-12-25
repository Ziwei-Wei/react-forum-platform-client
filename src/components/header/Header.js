import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Search />
                </li>
                <li>
                    <Link to="/user">Login</Link>
                </li>
            </ul>
        </nav>
    </>
);

export default Header;
