import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

import { useState } from "react";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const object = JSON.parse(localStorage.getItem("user"));
  const user_id = object.id;


  const navigate = useNavigate()

  const handleLogout = async (e) => {
    // e.preventDefault();
    try {
      // await axios.post("http://localhost:8800/api/auth/logout");
      navigate("/login")
    } 
    catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Connectify</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
          

        <button onClick = {handleLogout}>Logout &nbsp;<LogoutIcon/></button>


        <Link to={`/profile/${user_id}`} style={{ textDecoration: "none", color: "inherit", }} >
            <div className="user">
              <img
                src={"/upload/" + currentUser.profilePic}
                alt=""
              />
              <span>{currentUser.name}</span>
            </div>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
