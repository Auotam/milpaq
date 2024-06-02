import React, { useState, useEffect } from "react";
import RecentSearches from "../recentSearch";
import Modal from "../modal";

const Dask = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    console.log("Stored Searches:", storedSearches); // Log stored searches
    // Filter out null values
    const filteredSearches = storedSearches.filter((search) => search !== null);
    setRecentSearches(filteredSearches);
  }, []);

  const handleShowModal = (search) => {
    setModalData(search);
  };

  return (
    <div className="main-wrapper">
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
                </div>
              </div>
            </div>
          </div>

          <div className="tables-wrapper">
            <div className="row">
              <div className="col-xl-12">
                <div className="card-style mb-30">
                  <div className="table-wrapper table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <h6>Sr.</h6>
                          </th>
                          <th>
                            <h6>Time</h6>
                          </th>
                          <th>
                            <h6>Date</h6>
                          </th>
                          <th>
                            <h6>Show data</h6>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentSearches.map((search, index) => (
                          
                          <tr key={index}>
                            <td>{index + 1}</td>
                          {console.log("searchdata", search)}

                            <td>
                              {search.timestamp ?
                                new Date(Number(search.timestamp)).toLocaleTimeString() :
                                "No timestamp available"
                              }
                            </td>
                            <td>
                              {search.timestamp ?
                                new Date(Number(search.timestamp)).toLocaleDateString() :
                                "No timestamp available"
                              }
                            </td>
                            <td>
                              <button
                                className="btn btn-primary bgcl"
                                onClick={() => handleShowModal(search)}
                              >
                                Show
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modalData && (
        <Modal data={modalData} onClose={() => setModalData(null)} />
      )}
    </div>
  );
};

export default Dask;
