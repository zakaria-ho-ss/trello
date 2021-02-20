import React from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import './index.css'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

 
  
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Todo = (props) => {
  const classes = useStyles();

  return (
      <div className='flex' >

    <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={props.thechange}  id="outlined-basic" label="Number" type="number"  variant="outlined" value={props.value} />
    </form>
    <Button onClick={props.HandleClick} variant="contained" color="primary" disableElevation>
        Enter
      </Button>
    </div>
  );
  
};

export default Todo;
