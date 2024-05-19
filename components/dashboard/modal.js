import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import toast, { Toaster } from 'react-hot-toast';
import useUserData from '@/utils/UseUserdata';

const Modal = ({ onClose, data }) => {
  const userData = useUserData() || { user: { email: '' } }; // Default value for userData
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleGetQuote = async () => {
    if (Object.keys(data).length === 0 || data === null) {
      toast.error('Data not available');
      return;
    }

    const selectedData = Object.entries(data).map(([component, componentData]) => ({
      component,
      code: componentData?.code,
      description: componentData?.description,
    }));

    const userEmail = userData.user.email;
    const adminEmail = 'delivery@auotam.com';

    const quoteDetails = JSON.stringify(selectedData, null, 2);

    try {
      const response = await fetch('/api/Auth/sendQuote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail, adminEmail, quoteDetails, selectedData }),
      });

      if (response.ok) {
        toast.success('Quotation sent successfully!');
        onClose();
      } else {
        toast.error('Failed to send quotation.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send quotation.');
    }
  };

  const isDataAvailable = Object.keys(data).length > 0;

  // Extract dimensions and other package data
  const { length, width, height, Weight, ...packageData } = data;

  return (
    <div className="modal-overlay">
      <div className="modal sidenavR">
        <div className="modal-header d-flex align-items-center justify-content-between">
          <div>
            <button className='main-btn light-btn btn-hover mr-10' onClick={onClose}>Back</button>
            {isDataAvailable && (
              <>
                <button
                  className='main-btn dark-btn print-btn'
                  onClick={handlePrint}
                >
                  Print
                </button>
              </>
            )}
          </div>
          {isDataAvailable && (
            <>
              <button
                className='main-btn info-btn btn-hover'
                onClick={handleGetQuote}
              >
                Get a Quote
              </button>
            </>
          )}
        </div>
        <div className="modal-body" ref={printRef}>
          <table className="table">
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(packageData).map(([component, componentData]) => (
                <tr key={component}>
                  <td>{component}</td>
                  <td>{componentData?.code || ''}</td>
                  <td>{componentData?.description || ''}</td>
                </tr>
              ))}
              {length && (
                <tr>
                  <td>Length</td>
                  <td></td>
                  <td>{length} Inch</td>
                </tr>
              )}
              {width && (
                <tr>
                  <td>Width</td>
                  <td></td>
                  <td>{width} Inch</td>
                </tr>
              )}
              {height && (
                <tr>
                  <td>Height</td>
                  <td></td>
                  <td>{height} Inch</td>
                </tr>
              )}
              {Weight && (
                <tr>
                  <td>Weight</td>
                  <td></td>
                  <td>{Weight} Pound</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Modal;
