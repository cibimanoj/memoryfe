import React,{useState,useEffect} from 'react'
import useStyles from "./style";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FileBase from 'react-file-base64';
import {useDispatch,useSelector } from "react-redux";
import {createPost,updatePost} from "../../actions/posts"

const Form = ({currentId,setCurrentId}) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id===currentId):null);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(post) setPostData(post)
  },[post])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData));
    }else{
      dispatch(createPost(postData));
    }
    clear()
  };

  const clear=()=>{
    setCurrentId(0)
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }
  return (
    <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId ?"Editing" :"Add"} your post</Typography>
      <TextField name="creator" variant="outlined" label="Creator Name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <TextField name="title" variant="outlined" label="Title" fullWidth   value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}multiline rows={4} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      <TextField name="tags" variant="outlined" label="Caption" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
    </form>
  </Paper>
  )
}

export default Form
