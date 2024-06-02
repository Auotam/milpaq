import React from 'react'

const Help = () => {
  return (
    
    <div className='main-wrapper'>

<section className="card-components">
            <div className="container-fluid">
              
            <div className="container mt-40">
              <div className='cards-styles card p-5' >
  <div className="row">
  <div className="col-md-6">
    <h1 className='headhelp'>Let's get you some help!</h1>
    <h6 className='mb-2'>Have any issue? Send us an </h6>

   <span className='d-flex '> <h6 className='mr-10 font-xl mt-2  '>Email us: </h6><span className="email-us">info@milpaq.com</span></span>
    <div className="img-wrapper">
    
      </div>
  </div>
  
  <div className="col-md-6">
    
  <div className="form-group mb-2">
    <label for="list">What list are you looking for ?</label>
    <input type="text" className="form-control mt-2" id="list" aria-describedby="emailHelp" />
  </div>
  <div className="form-group mb-2">
    <label for="tags">Please Few Primary Codes ?</label>
    <input type="text" className="form-control mt-2" id="tags" />
  </div>
      
    <div className="form-group mb-2">
    <label for="describe">Please desribe your list needs ?</label>
    <textarea type="text" className="form-control mt-2" id="describe" rows="5"></textarea>
  </div>
      
            
<button type="button" className="btn btn-primary main-btn primary-btn btn-hover mt-20"><span>Submit</span> <i className="fas fa-long-arrow-alt-right"></i></button>
  </div>
    
  </div>

  </div>
</div>
           
              
              
            </div>
            
          </section>
          </div>
  )
}

export default Help