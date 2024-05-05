import React from 'react';

const Modal = ({ onClose, data }) => {

    console.log(data)
  return (
    <div className="modal-overlay ">
      <div className="modal sidenavR">
        <div className="modal-header">
          
          <button className='status-btn close-btn' onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          <table className="table">
            <thead>
              <tr>
                <th  style={{ width: '20%' }}>Package Name</th>
                <th  style={{ width: '15%' }}>Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([component, componentData]) => (
                
                <tr key={component}>
                  <td>{component}</td>
                  <td>{componentData && componentData.code}</td>
                  <td>{componentData && componentData.description}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
