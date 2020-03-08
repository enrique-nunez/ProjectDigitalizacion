import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },

    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${240}px)`,
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
        marginLeft: 240,
        [theme.breakpoints.down("md")]: {
            marginLeft: 0
        },
        marginTop: 40,
        padding: theme.spacing(3)
    }
}))
