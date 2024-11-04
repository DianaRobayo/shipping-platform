"use client";
import React, { useContext } from 'react';
import { createContextApi } from '@/context/createContextApi';
import { Box, Alert, Stack, Typography } from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineContent, TimelineDot
} from '@mui/lab';
import LinearProgress from '@mui/material/LinearProgress';
import { Business, LocalShipping } from '@mui/icons-material';

const constantsLine = {
  1: <Business color="blue" />,
  5: <LocalShipping />
}

const TimeLine = () => {
  const { line, loadingLine, errorLine } = useContext(createContextApi);

  return (
    <div>
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        {
          (loadingLine) ?
            <Box sx={{ display: 'flex' }}>
              <LinearProgress />
            </Box> : null
        }
        {
          (errorLine !== null) ?
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">
                {(errorLine) ? errorLine : 'Se ha generado un error.'}
              </Alert>
            </Stack> : null
        }
        <Timeline className="timeline" position="right" sx={{ display: 'flex', flexDirection: 'row' }}>
          {line.map((item, index) => (
            <TimelineItem className="timeline__item" key={index} 
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TimelineSeparator className='timeline__item__logo'>
                <TimelineDot className='timeline__item__logo__dot'>
                  {constantsLine[item.codigo]}
                </TimelineDot>
              </TimelineSeparator>

              <TimelineContent className='timeline__item__detail'>
                <Typography variant="text">
                  {item.fecha} {(item.hora) ? item.hora : null}
                </Typography>

                <Typography variant="text">
                  {item.descripcion}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </div>
  )
}

export default TimeLine