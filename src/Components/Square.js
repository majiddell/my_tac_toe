import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "../index.css";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Square = ({ value, onClick }) => {
  const style = useStyles();
  return (
    <Button variant="contained" color="secondary" className={style.root} onClick={onClick}>
      {value}
    </Button>
  );
};

export default Square;
