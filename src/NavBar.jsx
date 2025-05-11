import "./navBar.css"
import { useState, useEffect } from "react";

function NavBar() {
    const tabs = [
        { name: "Home", id: "home" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Certificates", id: "certificates" },
        { name: "Contact", id: "contact" }
    ];

    const [activeTab, setActiveTab] = useState(0);

    // Scroll to section on click
    const scrollToSection = (id, index) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveTab(index);
        }
    };

    // Detect which section is in view on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = 0; i < tabs.length; i++) {
                const section = document.getElementById(tabs[i].id);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(i);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="nav">
            <div className="navOpts">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className="navOptions"
                        style={{ color: activeTab === index ? "white" : null }}
                        onClick={() => scrollToSection(tab.id, index)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavBar;