import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const theme= createTheme()

export default makeStyles(() => ({
  appBar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    height: 60,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor:"pointer"
  },
  heading: {
        color: "inherit",
  },
  image: {
    marginLeft: "5px",
  },
  [theme.breakpoints.down('sm')]:{
    maincontainer:{
      flexDirection:"column-reverse"
    }
  }
}));
