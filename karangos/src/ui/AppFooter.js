import { Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    minHeight: '32px',
    position: 'fixed',
    width: '100%',
    bottom: 0    
  },
  pCenter: {
      textAlign: 'center',
      width: '100%',
      margin: 0
  }
}))

export default function AppFooter() {
    
    const classes = useStyles();

    return (
      <Toolbar className={classes.toolbar}>
          <p className={classes.pCenter}>&copy; 2021 Prof. Fausto Cintra</p> 
      </Toolbar>
    )
}