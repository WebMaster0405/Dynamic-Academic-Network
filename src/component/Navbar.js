import { Styles } from './Carosu/styles';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#5E3FDC",
    },
    "&:focus": {
      color: "#5E3FDC",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Styles>
    <AppBar position="static" style={{backgroundColor:'#FAFAFA', color:'black'}}>
      <CssBaseline />
      <Toolbar className="container" style={{paddingLeft:'-24px'}}>
        <Typography>
          <div className="logostyle"><a>Logo</a></div>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks} >
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/english-tour" className={classes.link}>
              English Tour
            </Link>
            <Link to="/whowe" className={classes.link}>
              Who we are?
            </Link>
            <Link to="/take-tour" className={classes.link}>
              Take a tour
            </Link>
            <Link to="/news" className={classes.link}>
              News
            </Link>
          </div>
          
        )}
        <div className="d-flex sign-up">
            <div className='btn-search'><img src="assets/images/search-icons.png" alt="" width="30" /></div>
            <div className='btn-sign'><a href="/signin" style={{color:'black',textDecoration:'none'}}>Sign in</a></div>
        </div>
      </Toolbar>
    </AppBar>
    </Styles>
  );
}
export default Navbar;
