import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme= createTheme()

export default makeStyles(({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    cursor:"pointer"
  },
  fileInput: {
    width: '97%',
    height: '100%',
    margin: '10px  0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));