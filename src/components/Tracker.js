import React from 'react'
import { useState } from 'react';
import CycleCalendar from './CycleCalendar';
import '../css/style.css'


function Tracker() {
    const [cycles, setCycles] = useState([]);

  // Function to add a new cycle to the list
  const addCycle = (cycle) => {
    setCycles([...cycles, cycle]);
  };

  return (
    <>
    <div align='center' className='tracker' style={{margin:'100px'}}>
    <h1>Menstrual Cycle Tracker</h1>
      <CycleCalendar addCycle={addCycle} /> 
    </div>
    </>
  )
}

export default Tracker
