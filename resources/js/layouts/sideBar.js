import { List, ListItem, ListItemIcon, Typography, ListItemText, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import React from "react";
import { useStyles } from "../css/app";
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from "@material-ui/icons/Inbox";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "@reach/router";
function SideBar(props) {
    const [expanded, setExpanded] = React.useState(false)
    const classes = useStyles();
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return <React.Fragment>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography className={classes.heading}>Negocio</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List>
                    {[{ name: "clases", path: "" }, { name: "Membresias", path: "" }, { name: "Categorias", path: "category" }, { name: "Recordatorios", path: "" }, { name: "Creditos", path: "" }].map((object, index) => (
                        <ListItem button key={index}>
                            <Link to={object.path} >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={object.name} />
                            </Link>
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
                    {[{ name: "Documentos de identidad", path: "documentidentity" }].map((object, index) => (
                        <ListItem button key={object.name}>
                            <Link to={object.path} >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={object.name} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </React.Fragment>
}
export default SideBar;