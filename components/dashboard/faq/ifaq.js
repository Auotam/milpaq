import React, { useState } from 'react';

const Ifaq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (faqIndex) => {
    setOpenFaq(openFaq === faqIndex ? null : faqIndex);
  };

  return (
    <div className='main-wrapper'>
      <section id="faqs-2" className="gr--whitesmoke pb-30 mt-10 faqs-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="inner-page-title">
                <h2 className="s-52 w-700">Questions &amp; Answers</h2>
                <p className="p-lg">Some common questions we get about Martex</p>
              </div>
              <section className="faq-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 offset-md-3"></div>
                    <div className="col-md-12">
                      <div className="faq" id="accordion">
                        {[...Array(4)].map((_, i) => (
                          <div className="card" key={i}>
                            <div className="card-header" id={`faqHeading-${i+1}`}>
                              <div className="mb-0">
                                <h5 className="faq-title" onClick={() => handleToggle(i + 1)} style={{ cursor: 'pointer' }}>
                                  <span className="badge">{i + 1}</span> {getFaqTitle(i + 1)}
                                </h5>
                              </div>
                            </div>
                            <div id={`faqCollapse-${i+1}`} className={`collapse ${openFaq === i + 1 ? 'show' : ''}`} aria-labelledby={`faqHeading-${i+1}`} data-parent="#accordion">
                              <div className="card-body">
                                <p>{getFaqContent(i + 1)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      
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
    <label for="list">Name</label>
    <input type="text" className="form-control mt-2" id="list" aria-describedby="emailHelp" />
  </div>
  <div className="form-group mb-2">
    <label for="tags">Email</label>
    <input type="text" className="form-control mt-2" id="tags" />
  </div>
      
    <div className="form-group mb-2">
    <label for="describe">Message</label>
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
  );
};

const getFaqTitle = (index) => {
  const titles = [
    'Can I use MILPAQ for both small and large-scale packaging projects',
    ' Is MILPAQ compliant with MIL-STD-2073 and MIL-STD-129 requirements? ',
    'Can I purchase the required packaging materials directly through MILPAQ?',
    'Is there a support team available to assist if I encounter any issues while using MILPAQ ?',
   
  ];
  return titles[index - 1];
};

const getFaqContent = (index) => {
  const contents = [
    'Absolutely! MILPAQ is designed to accommodate the needs of businesses and government agencies of all sizes. Whether you are packaging a single item or managing a large-scale deployment, MILPAQs intuitive interface and comprehensive features are here to streamline your packaging process.',
    'Yes, MILPAQ is fully compliant with both MIL-STD-2073 and MIL-STD-129 standards. Our software is meticulously designed to interpret the complex packaging codes and provide clear instructions to ensure compliance with government regulations.',
    'Yes, MILPAQ provides convenient links to purchase the necessary packaging materials directly from trusted suppliers. This feature saves you time and ensures a seamless packaging process from start to finish.',
    'Absolutely! Our dedicated support team is here to assist you every step of the way. Whether you have questions about using the software or encounter any technical issues, we are just a click away. Simply reach out to us via email or through our support portal, and we will be happy to help.',
  ];
  return contents[index - 1];
};

export default Ifaq;
