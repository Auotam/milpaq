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

  const handleGetData = () => {
    setShowModal(true);

    const dataToDisplay = {
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

    console.log('Data to Display:', dataToDisplay);
  };

  return (
    <>
      <div className='main-wrapper'>
        <section className='section'>
          <div className="container-fluid">
            <div className="title-wrap per pt-30">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="title">
                    <h2>Lookup</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="breadcrumb-wrapper">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#0">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item"><a href="#0">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Settings
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
                          <MidSart setData={setMidSartData} />
                          <CleaningDrying setData={setCleaningData} />
                          <Preservative setData={setPreservativeData} />
                          <Wrapping setData={setWrapping} />
                          <CushningMaterial setData={setCushning} />
                          <CusningThikness setData={setCushioningThicknessData} />
                          <Unit setData={setUnit} />
                          <PackingCode setData={setPackingCode} />
                          <Smc setData={setSmcData} />
                          <Hazardous setData={setHazardous} />
                          <SpecialMarking setData={setSpecialMarking} />
                          <UnitLabel setData={setUnitLabel} />
                          <OptionFeatures setData={setOptionFeature} />
                          <StorageCodes setData={setStorageCode} />

                          <button className='main-btn active-btn btn-hover w-20 col-md-3 ml-' onClick={handleGetData}>Get the Data</button>
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
          data={{
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
          }}
        />
      )}
    </>
  );
};

export default Selectframe;
