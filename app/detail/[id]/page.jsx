"use client"

import React from 'react'
import { Typography } from '@mui/material';
import Navigation from "@/components/Navigation";
import TimeLine from "@/components/details/TimeLine";
import Tabs from "@/components/details/Tabs";

const Detail = ({params}) => {
  const { id } = React.use(params);
  console.log('param', id)
  return (
    <div>
      <Navigation />
      <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 14 }}>
        Información General de Envío
      </Typography>
      <TimeLine/>
      <Tabs />
    </div>
  )
}

export default Detail