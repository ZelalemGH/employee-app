import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { EmployeesContext } from "../EmployeesContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function NavBar() {
  const navItems = [
    { item: "Add-Employees", to: "/add-employees" },
    { item: "EmployeesList", to: "/employees-list" },
    { item: "Article", to: "/article" },
  ];
  const { isAuthenticated } = useContext(EmployeesContext);
  console.log("is auth", isAuthenticated);
  return (
    <>
      <AppBar sx={{ height: "8%", backgroundColor: "#2196F3" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <MenuIcon {...bindTrigger(popupState)}/>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Add-Employees</MenuItem>
                    <MenuItem onClick={popupState.close}>Employees-List</MenuItem>
                    <MenuItem onClick={popupState.close}>Article</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Employees Profile
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/employee-app">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
            {isAuthenticated &&
              navItems.map((item) => (
                <Link to={item.to} style={{ textDecoration: "none" }}>
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item.item}
                  </Button>
                </Link>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
