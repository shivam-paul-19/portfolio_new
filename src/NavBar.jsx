import "./navBar.css"
import { useState } from "react";

function NavBar() {
    const tabs = ["Home", "Skills", "Education", "Projects", "Certificates", "Contact"];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="nav">
                <div className="navOpts">
                {tabs.map((tabName, index) => (
                    <div
                        key={index}
                        className="navOptions"
                        style={{ color: activeTab === index ? "white" : null }}
                        onClick={() => setActiveTab(index)}
                    >
                        {tabName}
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default NavBar;