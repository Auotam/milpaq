import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem from Material-UI

const Lwh = ({ sendData }) => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('inch'); // Default unit is inch

  // Function to handle unit change
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    // When unit changes, send all the field values and the unit to the parent component
    sendData({ length, width, height, unit: event.target.value });
  };

  // Function to handle input change for length, width, and height
  const handleInputChange = (event, setterFunc) => {
    const value = event.target.value;
    setterFunc(value);
    // Send updated field values and current unit to the parent component
    sendData({ length, width, height, unit });
  };

  return (
    <>
    <div className="row">
    <div className='col-md-2 col-lg-2 col-sm-3 mb-4'>
      <TextField
        label="Length"
        value={length}
        onChange={(e) => handleInputChange(e, setLength)}
        fullWidth
      />
      </div>
      <div className='col-md-2 col-lg-2 col-sm-3 mb-4'>
      <TextField
        label="Width"
        value={width}
        onChange={(e) => handleInputChange(e, setWidth)}
        fullWidth
      />
      </div>
      <div className='col-md-2 col-lg-2 col-sm-3 mb-4'>
      <TextField
        label="Height"
        value={height}
        onChange={(e) => handleInputChange(e, setHeight)}
        fullWidth
      />
      </div>
      
      <div className='col-md-2 col-lg-2 col-sm-3 mb-4'>
      <TextField
        select
        label="Unit"
        value={unit}
        onChange={handleUnitChange}
        fullWidth
      >
        
        <MenuItem value="inch">Inch</MenuItem>
        <MenuItem value="cm">Centimeter</MenuItem>
      </TextField>
      </div>
      </div>
      </>
    
  );
};

export default Lwh;
