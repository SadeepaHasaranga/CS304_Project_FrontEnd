import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Radio.css'
export default function CheckboxLabels() {
  return (
    
    <div className='Items'>
      <div>
        
      </div>
      
      
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label  ="Flooding" />
      <FormControlLabel control={<Checkbox />} label="No claim bonus" className="font-bold"/>
      <FormControlLabel control={<Checkbox />} label="Antitheft" className="font-bold" />
      <FormControlLabel control={<Checkbox />} label="Fire"className="font-bold" />
      <FormControlLabel control={<Checkbox />} label="Life Insurance"className="font-bold" />
      {/* <FormControlLabel control={<Checkbox />} label="Fire" /> */}
      {/* <FormControlLabel control={<Checkbox />} label="Fire" /> */}
      {/* <FormControlLabel control={<Checkbox />} label="Fire" /> */}

      </FormGroup>
  
    </div>  
  
  );
}
