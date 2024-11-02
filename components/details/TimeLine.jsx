"use client";
import React, { useContext } from 'react';
import { createContextApi } from '@/context/createContextApi';
import { Box } from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineOppositeContent,
  TimelineDot
} from '@mui/lab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LinearProgress from '@mui/material/LinearProgress';


const TimeLine = () => {
  const { line, loadingLine, errorLine } = useContext(createContextApi);
  // console.log('linea', line)

  if (loadingLine) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  } else {
    return (
      <div>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <Timeline position="right" sx={{ display: 'flex', flexDirection: 'row' }}>
            {line.map((item, index) => (
              <TimelineItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary">
                  {item.fecha}
                  {item.descripcion}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <FastfoodIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {item.descripcion}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </div>
    )
  }
}

export default TimeLine