import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardStock from '../../card';
import Productos from './Productos'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
          {Productos.map(products =>(
              <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardStock key={products.id} products={products}
      />
        </Grid>
          ))
        
}
      </Grid>
    </div>
  );
}
