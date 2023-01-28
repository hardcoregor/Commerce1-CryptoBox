import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { color } from '@mui/system';
// import { makeStyles } from "@material-ui/core/styles";
import { CryptoContext } from '../context/cryptoContext';
import { useSelector } from 'react-redux';

const marks = [
  {
    value: 0,
    label: '0$',
  },
  {
    value: 500,
    label: '500$',
  },
  {
    value: 1000,
    label: '1000$',
  },
  {
    value: 2000,
    label: '2000$',
  },
  {
    value: 3000,
    label: '3000$',
  },
];

// const useStyles = makeStyles({
//   root: {
//     "&>.MuiSlider-markLabel": {
//       color: "white !important"
//     }
//   }
// });


const PriceSlider = () => {
  const { setPrice } = useContext(CryptoContext);
  const value = useSelector(state => state.utils.price);
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setPrice(newValue)
  }

  return (
    <Box sx={{ width: '80%' }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={value}
        step={5}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={3000}
        onChange={handleChange}
        className={classes.root}
        sx={{
          color: '#DA18A3'
        }}
      />
    </Box>
  );
}

export default PriceSlider;