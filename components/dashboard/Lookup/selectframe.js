import React, { useState } from 'react';
import Modal from '../modal';
import MidSart from '../LookFile/secondfile';
import CleaningDrying from '../LookFile/cleaningPackage';
import Preservative from '../LookFile/thirdfile';
import Wrapping from '../LookFile/fouthfile';
import CushningMaterial from '../LookFile/cushningMaterial';
import CusningThikness from '../LookFile/firstJson';
import Unit from '../LookFile/eightfile';
import PackingCode from '../LookFile/ninefile';
import Smc from '../LookFile/fiveten';
import Hazardous from '../LookFile/hazardous';
import SpecialMarking from '../LookFile/specialMarking';
import UnitLabel from '../LookFile/unitlavel';
import OptionFeatures from '../LookFile/optionalProcedure';
import StorageCodes from '../LookFile/storagCodes';
import Lwh from '../LookFile/lengthwe';
import { TextField } from '@mui/material';

const Selectframe = () => {
  const [showModal, setShowModal] = useState(false);
  const [midSartData, setMidSartData] = useState(null);
  const [preservativeData, setPreservativeData] = useState(null);
  const [cushioningThicknessData, setCushioningThicknessData] = useState(null);
  const [cleaningData, setCleaningData] = useState(null);
  const [wrapping, setWrapping] = useState(null);
  const [cusning, setCushning] = useState(null);
  const [unit, setUnit] = useState(null);
  const [packingCode, setPackingCode] = useState(null);
  const [smsData, setSmcData] = useState(null);
  const [hazardous, setHazardous] = useState(null);
  const [unitLabel, setUnitLabel] = useState(null);
  const [optionFeatures, setOptionFeature] = useState(null);
  const [storageCodes, setStorageCode] = useState(null);
  const [specialMarking, setSpecialMarking] = useState(null);
  const [lwddata, setLdata] = useState(null);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unitType, setUnitType] = useState('inch');
  const [reset, setReset] = useState(false); // New reset state

  const handleGetData = () => {
    setShowModal(true);

    const dataToDisplay = {
      'Length': length,
      'Width': width,
      'Height': height,
      'Weight': weight,
      'MidSart Data': midSartData,
      'Preservative Data': preservativeData,
      'Cushioning Thickness Data': cushioningThicknessData,
      'Cleaning Data': cleaningData,
      'Wrapping Data': wrapping,
      'Cushning Data': cusning,
      'Unit Data': unit,
      'Packing Code': packingCode,
      'SMC Data': smsData,
      'Hazardous Data': hazardous,
      'Unit Label Data': unitLabel,
      'Option Features Data': optionFeatures,
      'Storage Codes Data': storageCodes,
      'Special Marking Data': specialMarking,
    };


    

    
    


    console.log(dataToDisplay)
  };

  const handleReset = () => {
    setLength('');
    setWidth('');
    setHeight('');
    setWeight('');
    setMidSartData(null);
    setPreservativeData(null);
    setCushioningThicknessData(null);
    setCleaningData(null);
    setWrapping(null);
    setCushning(null);
    setUnit(null);
    setPackingCode(null);
    setSmcData(null);
    setHazardous(null);
    setUnitLabel(null);
    setOptionFeature(null);
    setStorageCode(null);
    setSpecialMarking(null);
    setReset(prevReset => !prevReset); // Toggle reset state to trigger reset in child components
  };

  return (
    <>
      <div className='main-wrapper'>
        <section className='section'>
          <div className="container-fluid">
            <div className="title-wrap per pt-20 mb-10">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <h3>Lookup</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="breadcrumb-wrapper">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#0">My dashboard</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Lookup
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12'>
                <div className="form-elements-wrapper">
                  <div className="row">
                    <div className='col-lg-12'>
                      <div className="card-style mb-30">
                        <div className='row'>
                          <div className='col-md-12 '>
                            <div className='w-100 d-flex itemsnew pt-20'>
                              <h4 className='mb-20'>Codes Lookup</h4>
                              <div className='d-flex align-items-center justify-content-between'>
                               
                              </div>
                            </div>
                          </div>
                          <div className='col-md-12'>
                          </div>
                          <MidSart setData={setMidSartData} reset={reset} />
                          <CleaningDrying setData={setCleaningData} reset={reset} />
                          <Preservative setData={setPreservativeData} reset={reset} />
                          <Wrapping setData={setWrapping} reset={reset} />
                          <CushningMaterial setData={setCushning} reset={reset} />
                          <CusningThikness setData={setCushioningThicknessData} reset={reset} />
                          <Unit setData={setUnit} reset={reset} />
                          <PackingCode setData={setPackingCode} reset={reset} />
                          <Smc setData={setSmcData} reset={reset} />
                          <Hazardous setData={setHazardous} reset={reset} />
                          <SpecialMarking setData={setSpecialMarking} reset={reset} />
                          <UnitLabel setData={setUnitLabel} reset={reset} />
                          <OptionFeatures setData={setOptionFeature} reset={reset} />
                          <StorageCodes setData={setStorageCode} reset={reset} />

                            <div className='' >
                              <h4 className='mb-20'>Dimensions</h4>
                              <div className='row'>
                              <div className='col-md-3 col-lg-3 col-sm-12 mb-4'>
                            <TextField  id="outlined-basic" label="Length" variant="outlined"  placeholder="Length" value={length} onChange={(e) => setLength(e.target.value)} />
                            </div>
                            <div className='col-md-3 col-lg-3 col-sm-12 mb-4'> <TextField  id="outlined-basic" label="Width" variant="outlined" className='inputl' type="text" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
                            </div>
                            <div className='col-md-3 col-lg-3 col-sm-12 mb-4'> <TextField  id="outlined-basic" label="Height" variant="outlined"  placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div>
                            <div className='col-md-3 col-lg-3 col-sm-12 mb-4'>   <TextField  id="outlined-basic" label="Weight" variant="outlined"  placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            </div>
                            </div>

                          <div>
                            <button className='main-btn active-btn btn-hover mr-10' onClick={handleGetData}>Get the Data</button>
                            <button className='main-btn light-btn btn-hover' onClick={handleReset}>Reset</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          data={Object.fromEntries(
            Object.entries({
              'Length': length,
              'Width': width,
              'Height': height,
              'Weight': weight,
              'MidSart Data': midSartData,
              'Preservative Data': preservativeData,
              'Cushioning Thickness Data': cushioningThicknessData,
              'Cleaning Data': cleaningData,
              'Wrapping Data': wrapping,
              'Cushning Data': cusning,
              'Unit Data': unit,
              'Packing Code': packingCode,
              'SMC Data': smsData,
              'Hazardous Data': hazardous,
              'Unit Label Data': unitLabel,
              'Option Features Data': optionFeatures,
              'Storage Codes Data': storageCodes,
              'Special Marking Data': specialMarking,
            }).filter(([key, value]) => value !== null && value !== undefined)
          )}
        />
      )}
    </>
  );
};

export default Selectframe;   