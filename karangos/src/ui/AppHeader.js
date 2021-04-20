import { Toolbar, makeStyles } from '@material-ui/core';
import logo from '../img/karangos.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.primary.main
  },
  img: {
    width: '300px'
  }
}))

export default function AppHeader() {
    
    const classes = useStyles();

    return (
      <Toolbar className={classes.toolbar}>
          <img className={classes.img} src={logo} alt="Karangos" /> 
      </Toolbar>
    )
}