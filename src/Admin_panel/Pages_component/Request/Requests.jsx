import { useState } from 'react';
import PropTypes from 'prop-types';
import './Requests.css';

function Requests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Sumit', email: 'sumit@example.com', class: '2023', branch: 'Computer Science', approved: false },
    { id: 2, name: 'Rohan', email: 'rohan@example.com', class: '2024', branch: 'Mechanical Engineering', approved: false }
  ]);

  const [confirmation, setConfirmation] = useState(null);

  const handleApproval = (id) => {
    setConfirmation({
      message: 'Are you sure you want to approve this request?',
      onConfirm: () => {
        setRequests(requests.map(request => request.id === id ? { ...request, approved: true } : request));
        setConfirmation(null);
      },
      onCancel: () => setConfirmation(null)
    });
  };

  const handleRejection = (id) => {
    setConfirmation({
      message: 'Are you sure you want to reject this request?',
      onConfirm: () => {
        setRequests(requests.filter(request => request.id !== id));
        setConfirmation(null);
      },
      onCancel: () => setConfirmation(null)
    });
  };

  const ConfirmationDialog = ({ message, onConfirm, onCancel }) => (
    <div className="confirmation-dialog-overlay">
      <div className="confirmation-dialog">
        <p>{message}</p>
        <div className="confirmation-dialog-buttons">
          <button className="confirm" onClick={onConfirm}>Yes</button>
          <button className="cancel" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );

  ConfirmationDialog.propTypes = {
    message: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  return (
    <div className='requests'>
      <h1>Submitted Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <div className='name'>
              <strong>{request.name}</strong> ({request.email})<br />
              <span className='class'>Class of:-{request.class}</span><br />
              <span className='branch'>{request.branch}</span>
            </div>
            <div className='btn'>
              {request.approved ? (
                <span>Approved</span>
              ) : (
                <>
                  <button className='approve' onClick={() => handleApproval(request.id)}>Approve</button>
                  <button className='reject' onClick={() => handleRejection(request.id)}>Reject</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      {confirmation && (
        <ConfirmationDialog
          message={confirmation.message}
          onConfirm={confirmation.onConfirm}
          onCancel={confirmation.onCancel}
        />
      )}
    </div>
  );
}

export default Requests;
