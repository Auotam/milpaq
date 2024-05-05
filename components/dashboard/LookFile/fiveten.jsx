import { useState, useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const path = require("path");
const Unit = ({ setData }) => {
  const [movieOptions, setMovieOptions] = useState([]);

  
  const handleGetData = () => {
    
    const newData = 'Data from MidSart component';
    
    setData(newData);
  };

  const handleOptionSelected = (option) => {
    setData(option);
  };

  
  const [openAlert, setOpenAlert] = useState(true);
  const [imgSrc, setImgSrc] = useState("/images/avatars/1.png");

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className='col-md-4 col-lg-4 col-sm-12 mb-4'>
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => `${option.code} - ${option.description}`}
      renderInput={(params) => <TextField {...params} label="Special Material Content"/>}
      filterOptions={(options, state) => {
        if (!state.inputValue) return options;
        return options.filter(option => option.code.toLowerCase().includes(state.inputValue.toLowerCase()));
      }}
      onChange={(event, value) => handleOptionSelected(value)} 
    />
  </div>
  );
};

export default Unit;

const top100Films = [
  {
    "code": "A",
    "SMCC Image": "",
    "description": "Medical",
  },
  {
    "code": "B",
    "SMCC Image": "",
    "description": "Lithium battery, large form",
  },
  {
    "code": "C",
    "SMCC Image": "",
    "description": "Corrosive Solids/Corrosive Liquids (other than acid)",
  },
  {
    "code": "D",
    "SMCC Image": "",
    "description":
      "Alcohol (ethanol, ethyl alcohol, or grain alcohol only). Storage and custody requirements for medical supplies are provided in NAVMED P-117, Manual of the Medical Department.",
  },
  {
    "code": "E",
    "SMCC Image": "",
    "description": "Lithium battery",
  },
  {
    "code": "F",
    "SMCC Image": "",
    "description":
      "Flammable Liquid, flash point not more than 60 degrees C (140 degrees F)",
  },
  {
    "code": "G",
    "SMCC Image": "",
    "description":
      "Combustible Liquid, flash point 60 degrees C (140 degrees F) to 93 degrees C (200 degrees F)",
  },
  {
    "code": "H",
    "SMCC Image": "",
    "description": "Item that is hazardous under typical use or handling",
  },
  {
    "code": "I",
    "SMCC Image": "",
    "description":
      "Aerosols. A non-refillable receptacle containing a compressed, liquefied or dissolved gas under pressure, with a self-closing release device. Consult MSDS and Label precautions",
  },
  {
    "code": "J",
    "SMCC Image": "",
    "description": "Oxidizing Material",
  },
  {
    "code": "K",
    "SMCC Image": "",
    "description": "Organic Peroxides",
  },
  {
    "code": "L",
    "SMCC Image": "",
    "description": "Radioactive material",
  },
  {
    "code": "M",
    "SMCC Image": "",
    "description": "Magnetic",
  },
  {
    "code": "N",
    "SMCC Image": "",
    "description":
      "Asbestos (item capable of emitting asbestos dust/fibers)",
  },
  {
    "code": "O",
    "SMCC Image": "",
    "description":
      "Off-Gassing considerations/atmospheric controlled item for submarines",
  },
  {
    "code": "P",
    "SMCC Image": "",
    "description":
      "Poison (including Methanol, Wood Alcohol, Denatured Alcohol). Storage & Custody requirements for medical items are found in NAVMED P-117, Manual of the Medical Department.",
  },
  {
    "code": "Q",
    "SMCC Image": "",
    "description": "Explosive Non-Ordnance Items",
  },
  {
    "code": "R",
    "SMCC Image": "",
    "description": "Radioactive Material",
  },
  {
    "code": "S",
    "SMCC Image": "",
    "description": "Oils/Petroleum Products (Not otherwise specified)",
  },
  {
    "code": "T",
    "SMCC Image": "",
    "description":
      "Toxic substance. Storage and custody requirements for medical supplies are provided in NAVMED P-117, Manual of the Medical Department.",
  },
  {
    "code": "U",
    "SMCC Image": "",
    "description":
      "Mercury (items containing Mercury). Follow established Mercury Control and Abatement programs.",
  },
  {
    "code": "V",
    "SMCC Image": "",
    "description": "Acid",
  },
  {
    "code": "W",
    "SMCC Image": "",
    "description": "Non-Flammable Compressed Gas",
  },
  {
    "code": "X",
    "SMCC Image": "",
    "description": "Radioactive and Magnetic Material",
  },
  {
    "code": "Y",
    "SMCC Image": "",
    "description": "Magnetically sensitive",
  },
  {
    "code": "Z",
    "SMCC Image": "",
    "description": "Flammable Solids",
  },
  {
    "code": "0",
    "SMCC Image": "",
    "description": "(Reserved)",
  },
  {
    "code": "1",
    "SMCC Image": "",
    "description":
      "Item that has a hazardous component and is regulated for transportation",
  },
  {
    "code": "2",
    "SMCC Image": "",
    "description":
      "Electrostatic discharge (ESD)/electromagnetic (EM) sensitive Item",
  },
  {
    "code": "3",
    "SMCC Image": "",
    "description": "Electrostatic discharge sensitive (ESDS) Item",
  },
  {
    "code": "4",
    "SMCC Image": "",
    "description":
      "Item or part that contains hazardous material(s) and could require special handling during maintenance or disposal operations",
  },
  {
    "code": "5",
    "SMCC Image": "",
    "description":
      "Hazardous Material (non-specific), item's unique formulations may produce different hazard classes. Consult item's Material Safety Data Sheet (MSDS) or container warning label.",
  },
  {
    "code": "6",
    "SMCC Image": "",
    "description": "Military munitions",
  },
  {
    "code": "7",
    "SMCC Image": "",
    "description": "Dangerous When Wet material",
  },
  {
    "code": "8",
    "SMCC Image": "",
    "description": "Spontaneously Combustible Material",
  },
  {
    "code": "9",
    "SMCC Image": "",
    "description": "Non-hazardous or non-sensitive",
  },
  {
    "code": "",
    "SMCC Image": "",
    "description": "Item not evaluated",
  },
];
