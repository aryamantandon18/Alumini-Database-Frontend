import { useState } from 'react';
import PropTypes from 'prop-types';
import './RequestForm.css';

function RequestForm({ onRequestSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestSubmit(formData);
    setFormData({ name: '', email: '', requestDetails: '' });
  };

  return (
    <div className='request-form'>
      <h2>Submit a Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Request Details:
          <textarea
            name='requestDetails'
            value={formData.requestDetails}
            onChange={handleChange}
            required
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

RequestForm.propTypes = {
  onRequestSubmit: PropTypes.func.isRequired
};

export default RequestForm;
