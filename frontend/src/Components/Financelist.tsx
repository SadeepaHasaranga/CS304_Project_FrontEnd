import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Banklist.css'

export default function SelectAutoWidth({Finance,handleChange}:any) {
  // const [company, setCompany] = React.useState();

  // const handleChange = (event: SelectChangeEvent) => {
  //   setFinance(event.target.value);
  // };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label"><h3 className='inc'>Company</h3></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="company"
          name="company"
          value={Finance}
          onChange={handleChange}
          autoWidth
          label="Bank"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Softlogic</MenuItem>
          <MenuItem value={2}>Nations Trust</MenuItem>
          <MenuItem value={3}>Commercial</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
