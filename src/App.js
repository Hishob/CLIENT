import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  },
  headers: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  main:{
    display:"flex",
    marginTop: theme.spacing(4),
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      <Box className = {classes.main}>
      <Box m="auto" >
      <Typography variant="h5" >
          Welcome to Hishob!
      </Typography>
      </Box>
      </Box>

    </div>
  );
}

function NavBar(){
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
        <IconButton edge="start" className={classes.headers} color="inherit" aria-label="menu">
          <MenuIcon />
       </IconButton>

          <Typography variant = "h6" className={classes.headers}>
              Header1
          </Typography>

          <Typography variant = "h6" className={classes.headers}>
              Header2
          </Typography>


          <Typography variant="h6" className={classes.title}>
             Header3
          </Typography>


          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default App;
