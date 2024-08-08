import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="../../assets/Images/logo (6).png" alt="Logo" />
      <ul className="nav-menu">
        <li><a style={{color:"white",textDecoration:"none"}} href="#home">Home</a></li>
    
        <li><a style={{color:"white",textDecoration:"none"}}  href="#About">About Me</a></li>
        <li><a style={{color:"white",textDecoration:"none"}}  href="#Sevices">Services</a></li>
        <li><a style={{color:"white",textDecoration:"none"}} href="#portfolio">Portfolio</a></li>
        <li><a style={{color:"white",textDecoration:"none"}}  href="#Contact">Contact</a></li>
      </ul>
      <div>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
