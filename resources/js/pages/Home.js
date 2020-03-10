import React from "react"
import { useStyles } from "../css/app"
import { useTheme, Divider, CssBaseline, Hidden, Drawer } from "@material-ui/core";
import PropTypes from 'prop-types';
import SideBar from "../layouts/sideBar";
import Header from "../layouts/Header";
import { Router } from "@reach/router"
import DocumentIdentity from "./DocumentIdentity";
import CategoryPage from "./CategoryPage"
function Home(props) {
    const { container } = props
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <React.Fragment>
            <div className={classes.tollbar} />
            <Divider />
            <SideBar />
            <Divider />
        </React.Fragment>

    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header handleDrawerToggle={handleDrawerToggle} />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer container={container} variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpen}
                        onClose={handleDrawerToggle} classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Router>
                    <DocumentIdentity path="/documentidentity" />
                    <CategoryPage path="/category" />
                </Router>
            </main>
        </div>

    )
}
Home.propTypes = {
    container: PropTypes.any,
};
export default Home;