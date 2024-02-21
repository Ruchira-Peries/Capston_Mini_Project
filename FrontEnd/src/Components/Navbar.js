/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assests/Medical Clinic Logo .png";
import "../Styles/Navbar.css"
// import Profile from "../Assets/user.png";
// import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/"
    },
    {
      text: "Services",
      icon: <InfoIcon />,
      path: "/Services",
    },
    {
      text: "Our Staff",
      icon: <CommentRoundedIcon />,
      path:"/staff",
    },
    {
      text: "Appointments",
      icon: <PhoneRoundedIcon />,
      path:"/appoinments",
    },
    {
      text: "About",
      icon: <ShoppingCartRoundedIcon />,
      path:"/about",
    },
  ];
  return (
    <div className="outer-container1">
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
      {menuOptions.map((item) => (
            <Link key={item.text} to={item.path}>
              {item.text}
            </Link>
          ))}
        {/* <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Our Staff</a>
        <a href="">Appointments</a>
        <a href="">About</a> */}
        <button className="primary-button" onClick={()=> navigate("/login")}>Log In</button>
        {/* <button className="primary-button">Log In</button> */}
        
      </div>
      {/* <div className="profile-pic">
      <a href="">
        <img src={Profile} alt="" />
        </a>
      </div> */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    </div>
  );
};

export default Navbar;
