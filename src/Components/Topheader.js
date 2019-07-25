import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height:'10vh',
    paddingTop:"1vh",
    fontSize:"4vh",
    color:"white",
    backgroundColor:"#4A148C",
    boxShadow: "0 8px 6px -6px #E1BEE7"
  },
  icon:{
    fontSize:50,
    color:"#F3E5F5"

  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
       <AssignmentIcon className={classes.icon}/>
              
      
    </div>
  );
}
