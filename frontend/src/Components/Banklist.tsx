import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Banklist.css'

export default function SelectAutoWidth({Bank,handleChange}:any) {
  // const [Bank, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label"><h3 className='inc'>Bank</h3></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="bankName"
          value={Bank}
          name="bankName"
          onChange={handleChange}
          autoWidth
          label="Bank"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"BOC"}>Bank of ceylon</MenuItem>
          <MenuItem value={"Peoples"}>Peoples</MenuItem>
          <MenuItem value={"Commercial"}>Commercial</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

