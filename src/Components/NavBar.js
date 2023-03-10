import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import styled from "styled-components";

const StyledLink = styled(Link)`
text-decoration: none;

`

function NavBar() {
  const { isAuthenticated, handleLogout } = useContext(EmployeesContext);
  console.log("is auth", isAuthenticated);
  const navigate = useNavigate();

  const navItems = [
    { item: "Add-Employees", to: "/add-employees" },
    { item: "EmployeesList", to: "/employees-list" },
    { item: "Article", to: "/article" },
  ];

  const handleLogoutRedirect = () => {
    handleLogout();
    navigate({
      pathname: "/employee-app",
    });
  };

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
                  <MenuIcon {...bindTrigger(popupState)} />
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/add-employees"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Add-Employees
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/employees-list"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Employees-List
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/article"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        Article
                      </Link>
                    </MenuItem>
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
            <StyledLink to="/employee-app" >
              <Button sx={{ color: "#fff" }}>Home</Button>
            </StyledLink>
            {isAuthenticated &&
              navItems.map((item) => (
                <StyledLink to={item.to} >
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item.item}
                  </Button>
                </StyledLink>
              ))}
          </Box>
          {isAuthenticated && (
            <Button onClick={handleLogoutRedirect} sx={{ color: "#fff" }}>
              Sign-out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
