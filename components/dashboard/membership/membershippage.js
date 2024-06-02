import React from 'react'

const Membershippage = () => {
  return (
    <main className="main-wrapper">
    
    <section className="section">
      <div className="container-fluid">
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title">
                <h2>Membership</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#0">Dashboard</a>
                    </li>
                    
                    <li className="breadcrumb-item active" aria-current="page">
                      Membership
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
          <div class="alert-box info-alert pl-10">
                  
                  <div class="alert">
                    <h4 class="alert-heading">Free Plan</h4>
                    <p class="text-medium">
                      Currently you are using free membership plan.
                    </p>
                  </div>
                </div>
          </div>
          
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 order-last order-md-first">
            <div className="copyright text-center text-md-start">
              <p className="text-sm">
                Designed and Developed by
                <a href="https://auotam.com" rel="nofollow" target="_blank">
                  Auotam INC
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="terms d-flex justify-content-center justify-content-md-end">
              <a href="#0" className="text-sm">Term & Conditions</a>
              <a href="#0" className="text-sm ml-15">Privacy & Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
  )
}

export default Membershippage;