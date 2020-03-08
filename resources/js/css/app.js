import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% -${240})`,
            marginLeft: 240
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    tollbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}))
