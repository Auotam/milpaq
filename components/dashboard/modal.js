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
              {Object.entries(data).map(([key, value]) => (
                typeof value === 'object' ? (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value?.code || ''}</td>
                    <td>{value?.description || ''}</td>
                  </tr>
                ) : (
                  <tr key={key}>
                    <td>{key}</td>
                    <td></td>
                    <td>{value}</td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Modal;
