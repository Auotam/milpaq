import React, { useState, useEffect } from 'react';

import MidSart from '../LookFile/secondfile';
import CusningThikness from '../LookFile/firstJson';
import Preservative from '../LookFile/thirdfile';
import Wrapping from '../LookFile/fouthfile';
import PackingCode from '../LookFile/ninefile';
import Smc from '../LookFile/fiveten';

const Selectframe = () => {

  

  return (
    <div className='main-wrapper'>
      <section className='section'>
      <div className="container-fluid">
        <div className="title-wrapper pt-30">
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

      <div className='row '>
    <div className='col-md-12'>
      <div className="form-elements-wrapper">
        <div className="row">
          <div className='col-lg-12'>
            <div className="card-style mb-30">
                <div className='row'>
              
              <MidSart />
                <Preservative />
              <CusningThikness />
              <Wrapping />
              <PackingCode />
              <Smc />
              
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
  );
}

export default Selectframe;
