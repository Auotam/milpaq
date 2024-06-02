import React,{useState,useEffect} from 'react'
import RecentSearches from '../recentSearch'
import Modal from '../modal';

const Dask = () => {

  const [recentSearches, setRecentSearches] = useState([]);
  const [modalData, setModalData] = useState(null);

  const handleAddRecentSearch = (searchSummary) => {
    const updatedSearches = [searchSummary, ...recentSearches];
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const handleSearchClick = (searchDetails) => {
    setModalData(searchDetails);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };
  return (
    <div className='main-wrapper'>
    <section className="section">
    <div className="container-fluid">
      
      <div className="title-wrapper pt-30">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="title">
              <h2>Dashboard</h2>
            </div>
          </div>
          
          <div className="col-md-6">
            
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#0">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Milpaq
                  </li>
                </ol>
              </nav>
            
          </div>
          
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon purple">
              <i className="lni lni-cart-full"></i>
            </div>
            <div className="content">
              <h6 className="mb-10">Total Searches</h6>
              <h3 className="text-bold mb-10">5</h3>
              <p className="text-sm text-success">
                <i className="lni lni-arrow-up"></i> +2.00%
                <span className="text-gray">(30 days)</span>
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon success">
              <i className="lni lni-dollar"></i>
            </div>
            <div className="content">
              <h6 className="mb-10">Total Quotes</h6>
              <h3 className="text-bold mb-10">17</h3>
              <p className="text-sm text-success">
                <i className="lni lni-arrow-up"></i> +5.45%
                <span className="text-gray">Increased</span>
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon primary">
              <i className="lni lni-credit-cards"></i>
            </div>
            <div className="content">
              <h6 className="mb-10">Pending Quotes</h6>
              <h3 className="text-bold mb-10">10</h3>
              <p className="text-sm text-danger">
                <i className="lni lni-arrow-down"></i> -2.00%
                <span className="text-gray">Expense</span>
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon orange">
              <i className="lni lni-user"></i>
            </div>
            <div className="content">
              <h6 className="mb-10">Query Pending</h6>
              <h3 className="text-bold mb-10">1</h3>
              <p className="text-sm text-danger">
                <i className="lni lni-arrow-down"></i> 
                <span className="text-gray"> Pending...</span>
              </p>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-sm-12">
          <div className="icon-card mb-30">
            
            <div className="content">
              <h6 className="mb-10">Recent searches</h6>
          

          <div className="tables-wrapper">
           
<div className="row">
              <div className="col-lg-12">
                <div className="card-style mb-30">
                
                  <div className="table-wrapper table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <h6>Sr.</h6>
                          </th>
                          <th>
                            <h6>Code</h6>
                          </th>
                          <th>
                            <h6>Description</h6>
                          </th>
                          <th>
                            <h6>Time</h6>
                          </th>
                          <th>
                            <h6>Date</h6>
                          </th>
                          <th>
                            <h6>Delete</h6>
                          </th>
                        </tr>
                        
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div >
                              1
                            </div>
                          </td>
                          <td className="min-width">
                            <p>Cleaning Drying</p>
                          </td>
                          <td className="min-width">
                            <p><a href="#0">5</a></p>
                          </td>
                          <td className="min-width">
                            <p> MIL-STD-2073-1B/2C code: Petroleum solvent followed by finger print removal.</p>
                          </td>
                          <td className="min-width">
                            <span className="status-btn active-btn">04:35 UST</span>
                          </td>

                          <td className="min-width">
                            <span className="status-btn active-btn">July 15 20124</span>
                          </td>
                          <td>
                            <div className="action">
                              <button className="text-danger">
                                <i className="lni lni-trash-can"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        
                        
                        
                      </tbody>
                    </table>
                    
                  </div>
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
  )
}

export default Dask