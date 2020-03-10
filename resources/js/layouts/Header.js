import React from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from "../css/app"
function Header(props) {
    const classes = useStyles();
    return <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton color="inherit" arial-label="open drawer" edge="start" onClick={props.handleDrawerToggle} className={classes.menuButton}>
                    <MenuIcon />

                </IconButton>
                <Typography variant="h6" noWrap>
                    GymFitt
                    </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
}
export default Header;