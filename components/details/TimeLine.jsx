"use client";
import React, { useContext } from 'react';
import { createContextApi } from '@/context/createContextApi';
import { Box, Alert, Stack } from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineOppositeContent,
  TimelineDot
} from '@mui/lab';
import LinearProgress from '@mui/material/LinearProgress';
import { DepartureBoard, Search } from '@mui/icons-material';

const constantsLine = {
  1: <DepartureBoard />,
  5: <Search />
}


const TimeLine = () => {
  const { line, loadingLine, errorLine } = useContext(createContextApi);
  console.log('linea', errorLine)


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
            <TimelineItem className="timeline__item" key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TimelineSeparator className='timeline__item__logo'>
                <TimelineDot>
                  {constantsLine[item.codigo]}
                </TimelineDot>
              </TimelineSeparator>

              <TimelineContent className='timeline__item__detail' sx={{ color: 'red' }}>
                <p>
                  {item.fecha} {(item.hora) ? item.hora : null}
                  <span>{item.descripcion} </span>
                </p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </div>
  )


}

export default TimeLine