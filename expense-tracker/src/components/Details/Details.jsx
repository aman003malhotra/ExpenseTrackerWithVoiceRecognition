import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import { Grid } from '@material-ui/core';

function Details({ title }) {
    const classes = useStyles();
  return (
    <Card className={title === 'Income' ? classes.income:classes.expense}>
        <CardHeader title={title} />
        <CardContent>
            <Typography varient="h5" />
            {/* <Doughnut data = "Data" /> */}
        </CardContent>

    </Card>
  )
}

export default Details