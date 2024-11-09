import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 style={{ textAlign: 'left' }}>
                <a href="#self" style={{ color: '#5C6BC0' }} className="text-[2vh]">
                    leon's portfolio
                </a>
            </h1>

            <div className="links">
                <a href="#project" className="text-[1.5vh]">/projects</a>
                {/* <a href="#timeline">/timeline</a> */}
                <a href="#interests" className="text-[1.5vh]">/interests</a>
                <a
                    href="#contact"
                    style={{
                        color: "white",
                        backgroundColor: '#5C6BC0',
                        borderRadius: '8px'
                    }}
                    className="text-[1.5vh]"
                >
                    /contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
