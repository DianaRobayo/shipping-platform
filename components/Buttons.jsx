"use client";

import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Buttons = () => {

  return (
    <div>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  )
}

export default Buttons