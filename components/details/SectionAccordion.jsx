"use client";

import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const SectionAccordion = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header" >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Resumen de unidades" value="1" />
                  <Tab label="Estado actual de unidad" value="2" />
                  <Tab label="Detalle de Unidades" value="3" />
                </TabList>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <TabPanel value="1" sx={{ color: 'black' }}>Resumen de unidades</TabPanel>
              <TabPanel value="2" sx={{ color: 'black' }}>Estado actual de unidad</TabPanel>
              <TabPanel value="3" sx={{ color: 'black' }}>Detalle de Unidades</TabPanel>
            </AccordionDetails>
          </Accordion>
        </TabContext>
      </Box>
    </div >
  )
}

export default SectionAccordion
