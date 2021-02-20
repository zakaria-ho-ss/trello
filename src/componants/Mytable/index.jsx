import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 const Mytable =(props)=> {
  const classes = useStyles();
const myData =[1,2,3,4,5,6,7,8,9,10]
  return props.givenumber? (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
        { myData.map(item=><StyledTableCell align="right">{item}</StyledTableCell>)}

        </TableHead>
        <TableBody>
         
             { myData.map(item=><StyledTableCell align="right">{item * props.givenumber}</StyledTableCell>)}
             
         
        </TableBody>
      </Table>
    </TableContainer>

  ):null;
}
export default Mytable;