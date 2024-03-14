const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 style={{
                textAlign: 'left'
            }}>
                <a href="#self" style = {{color: '#5C6BC0'}} className="titleName">leon's portfolio</a>
            </h1>

            <div className="links">
                <a href="#project">/projects</a>
                {/* <a href="#timeline">/timeline</a> */}
                <a href="#interests">/interests</a>
                {/* <a href="#contact" style={{
                    color: "white",
                    backgroundColor: '#5C6BC0',
                    borderRadius: '8px'
                }}>/contact</a> */}

            </div>

        </nav>
    );
}
 
export default Navbar;