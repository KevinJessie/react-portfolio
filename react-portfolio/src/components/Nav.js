import React from "react";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                    <li className={`mx-1 ${currentPage.name === page.name && 'navActive'}`} key={page.name}>
                        <span onClick={() => { setCurrentPage(page) }}>
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;