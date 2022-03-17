import React from 'react';
import useStyles from "./style";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import {useDispatch} from "react-redux";
import {deletePost} from "../../../actions/posts"
import {likePost} from "../../../actions/posts";
import Badge from '@mui/material/Badge';

 

const Post = ({ post ,setCurrentId}) => {
 const classes = useStyles();
 const dispatch=useDispatch();
  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
    <div className={classes.overlay}>
      <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className={classes.overlay2}>
      <Button size="large"  color="primary"onClick={()=>setCurrentId(post._id)}><EditIcon fontSize="default" size="large" /></Button>
    </div>
    <div className={classes.details}> 
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <Button  style={{color:"#1fe01f"}} onClick={()=>dispatch(likePost(post._id))}><ThumbUpIcon fontSize="small" size="large"/>
        <Badge badgeContent={post.likeCount} style={{marginBottom:"25px",color:"#1fe01f"}}/>
        </Button>
      <Button size="large"style={{color:"#e2482b"}} onClick={()=>dispatch(deletePost(post._id))} ><DeleteIcon fontSize="small"  size="large"/></Button>
    </CardActions>
  </Card>
  )
}

export default Post