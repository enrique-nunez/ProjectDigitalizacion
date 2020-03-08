import React, { useState } from "react"
import { useStyles } from "../css/app"
import { useTheme, Divider, List, ListItem, ListItemIcon, CssBaseline, AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, ListItemText, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from "@material-ui/icons/Inbox";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

function ResponsiveDrawer(props) {
    const { container } = props
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    const drawer = (
        <React.Fragment>
            <div className={classes.tollbar} />
            <Divider />
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography className={classes.heading}>Negocio</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        {["Clases", "Membresias", "Categorias", "Recordatorios", "Creditos"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <Typography className={classes.heading}>Usuarios</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>

                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header">
                    <Typography className={classes.heading}>Ventas</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>

                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header">
                    <Typography className={classes.heading}>Compras</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>

                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header">
                    <Typography className={classes.heading}>Almacen</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>

                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header">
                    <Typography className={classes.heading}>RRHH</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>

                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header">
                    <Typography className={classes.heading}>Configuracion</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>

                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <Divider />

        </React.Fragment>

    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" arial-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
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
                <div className={classes.tollbar} />
                {props.children}
            </main>
        </div>

    )
}
ResponsiveDrawer.propTypes = {
    container: PropTypes.any,
};
export default ResponsiveDrawer;