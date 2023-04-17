import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../photos/Logo.png";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    setTimeout(() => {
      const logged = localStorage.getItem("loggedUser");
      if (logged) {
        setUser(JSON.parse(logged));
      } else {
        setUser(null);
      }
    }, 1000);
  }, [localStorage.getItem("loggedUser")]);

  const handleLogOut = () => {
    localStorage.removeItem("loggedUser");
    navigate("/Home");
  };
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={Logo} alt="web site logo" className="logo-image" />
        {/* <div style={{marginLeft:'10px'}}><Link to='/Buying' className='list-text' >Buy Cars </Link></div> */}
        {/* <div style={{marginLeft:'20px'}}><Link to='/selling' className='list-text'> Sell Cars</Link></div> */}
      </div>
      <div className="list">
        <ul className="list_li">
          <li>
            <Link to="/Home" className="list-text">
              Home
            </Link>
          </li>
        </ul>
        <ul className="list_li">
          <li>
            <Link to="/Contactus" className="list-text">
              Contact US
            </Link>
          </li>
        </ul>
        <ul className="list_li">
          <li>
            <Link to="/Aboutus" className="list-text">
              About Us
            </Link>
          </li>
        </ul>

        {user && (
          <>
            <ul className="list_li">
              <li>
                <Link to="/Buying" className="list-text ">
                  Buy
                </Link>
              </li>
            </ul>
            <ul className="list_li">
              <li>
                <Link to="/Selling" className="list-text">
                  Sell
                </Link>
              </li>
            </ul>
            <ul className="list_li">
              <li>
                <Link to="/Insurancecal" className="list-text">
                  Insurance
                </Link>
              </li>
            </ul>
          </>
        )}

        {user ? (
          <>
            <ul className="list_li">
              <li>
                <button className="btn list-text" onClick={handleLogOut}>
                  {/* <Link to="/login" className="list-text"> */}
                  Logout
                  {/* </Link> */}
                </button>
              </li>
            </ul>
            <ul className="list_li">
              <li>
                <button className="btn list-text" >
                  {/* <Link to="/login" className="list-text"> */}
                  <Link to="/Bank">
                  <PersonIcon />
                  </Link>
                </button>
              </li>
            </ul>
            {/* onewwnefn */}
          </>
        ) : (
          <>
            <ul className="list_li">
              <li>
                <button className="btn">
                  <Link to="/login" className="list-text">
                    LogIn
                  </Link>
                </button>
              </li>
            </ul>
            <ul className="list_li">
              <li>
                <button className="btn">
                  <Link to="/SignUp" className="list-text">
                    SignUp
                  </Link>
                </button>
              </li>
            </ul>{" "}
          </>
        )}

        {/* <ul className='list_li'><li><button className='btn'><Link to='/Contactus' className='list-text'>Contactus</Link></button></li></ul>  */}
      </div>
    </div>
  );
};

export default Navbar;
