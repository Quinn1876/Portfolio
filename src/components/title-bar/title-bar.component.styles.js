const styles = theme => ({
  root: {
    display: "flex",
    width: "100%"
  },
  appbar: {
    color: theme.palette.primary
  },
  title: {
    color: "white",
    flexGrow: 1
  },
  icon: {
    float: "right"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
});

export default styles;
