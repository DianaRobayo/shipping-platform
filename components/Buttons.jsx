"use client";

import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Buttons = ({props}) => {
console.log('prop', props)
  return (
    <div>
      <Button startIcon={<DeleteIcon />}>
        {props}
      </Button>
    </div>
  )
}

export default Buttons