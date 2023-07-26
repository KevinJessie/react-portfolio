import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    const [pages] = useState([
        { name: "about" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const renderPage = () => {
        switch (currentPage.name) {
            case "portfolio":
                return <Portfolio />;
            case "contact":
                return <Contact />;
            case "resume":
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Header>
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
