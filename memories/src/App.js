import React,{useEffect,useState} from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style";
import {useDispatch} from "react-redux";
import {getPost} from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId,setCurrentId]= useState(null)

  useEffect(()=>{
    dispatch(getPost())
  },[currentId, dispatch]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <AppBar className={classes.appBar} position="static" width="90" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img
            className={classes.image}
            src="https://i.postimg.cc/WzPN7TFm/memories.png"
            alt="logo"
            height="60"
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
          className={classes.maincontainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
