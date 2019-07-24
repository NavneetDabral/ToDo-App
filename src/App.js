import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import TextField from '@material-ui/core/TextField';
import TopHeader from './Components/Topheader'
import Grid from '@material-ui/core/Grid';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
const useStyles = makeStyles(theme => ({
  card: {
    paddingLeft:'5vw',
    paddingRight:'5vw',
    paddingBottom:'5vw',
    backgroundColor:'#FFFFFF',
    marginLeft:'3vw',
    marginRight:'3vw',
    textAlign:'center'
  },
  card1: {
    paddingLeft:'5vw',
    paddingRight:'5vw',
    paddingBottom:'5vw',
    backgroundColor:'#FFFFFF',
    marginLeft:'10vw',
    marginRight:'10vw',
    textAlign:'center'
  },
  root: {
    padding: theme.spacing(3, 2),
    textAlign:'center',
    backgroundColor:'#FFFFFF',
    marginLeft:'2vw',
    marginRight:'2vw'
    
  },
  icon: {
    fontSize: 32,
    cursor:'pointer',
    color:'#D32F2F'
  },
  icon1: {
    fontSize: 32,
    cursor:'pointer',
    color:'green'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(2),
  
  },
  list:{
    margin:'4px',
    borderStyle:'solid',
    borderWidth:'1px',
    fontWeight:'400'

  },
  gridme:{
    flexGrow: 1,
  },
  completedTasks:{
      width:'50vw'
  }
}));


function SimpleContainer() {
    
 const  [state, setState] = React.useState({
    doList:["Learn React","Learn Redux"],
    doneList:[],
    item:""
  });

    const  classes = useStyles();
    const  addItem=(e)=>{
       e.preventDefault();
       console.log(state.item);
       if(state.item!==''){
        setState(state => {
          const doList = state.doList.concat(state.item);
          const doneList=state.doneList;
          return {
            doList,
            doneList,
            item: "",
          };
        })

       }
    }

    const addToDone=(index,item)=>{
      state.doList.splice(index,1);
      console.log(`  new list ${state.doList}`);
     setState(state=>{
        const doneList = state.doneList.concat(item);
        const doList=state.doList;
        return(
          {
            doList,
            doneList,
            item:""
          }
        )
      })

    }  



   const handleChange=(e)=>{
      setState({...state,item : e.target.value})       
       
    }

   let list= state.doList.map((item,index)=>{

      console.log(index);
          return   <ListItem key={index} className={classes.list}>
  
          <ListItemText primary={item} /> <DeleteForeverOutlinedIcon className={classes.icon} onClick={() => addToDone(index,item)}/>
        </ListItem>

    })


    let Donelist;
       if(state.doneList)
       { 
        Donelist= state.doneList.map(item=>{

          return   <ListItem key={item} className={classes.list}>
  
          <ListItemText primary={item} /> <CheckCircleOutline className={classes.icon1}  />
        </ListItem>

    })

       }
       else{
         Donelist=null;
       }
  



    return(

      <React.Fragment>
      <CssBaseline />
      
        <Typography component="div"  variant='h6' align='center'  style={{ height: '13vh'}} gutterBottom >
<TopHeader></TopHeader>

        </Typography>
  
   <div className={classes.gridme}>
        <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        <Paper className={classes.root}>
      <form  className={classes.container}  onSubmit={addItem} noValidate autoComplete="off">

<TextField
        id="outlined-email-input"
        label="Item Name"
        type="text"
        autoComplete="off"
        className={classes.textField}
        name="item"
        margin="normal"
        variant="outlined"
        value={state.item}
        onChange={handleChange}
      />
      <Button variant="outlined" type="submit" color="secondary" className={classes.button}>
        Add Item
      </Button>
         </form>
      </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Card className={classes.card}>
          <h2> Tasks ToDO </h2>
        {list}
          </Card>
        </Grid>
        <Grid item  xs={12} className={classes.completedTasks}>
           
           <Card className={classes.card1}>
          <h2> Completed Tasks </h2>
        {Donelist}
          </Card>
        </Grid>
</Grid>

</div>
</React.Fragment>
    
  
      )

}



export default SimpleContainer;