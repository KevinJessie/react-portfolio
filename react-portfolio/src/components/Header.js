import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Nav";

function Header(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header>
            <h1>
                <Link to="/">
                    Kevin Jessie
                </Link>
            </h1>
            <Nav
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Nav>
        </header>
    );
}

export default Header;