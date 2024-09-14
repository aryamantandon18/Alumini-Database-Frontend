import { useState, useEffect } from 'react';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Loader component
const Loader = () => (
  <div className="loader"></div>
);

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [jobsData, setJobsData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    name: '',
    branch: '',
    jobTitle: '',
    skillsRequired: '',
    jobDescription: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmEditMessage, setConfirmEditMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setJobsData([
        { name: 'Alice Johnson', branch: 'Computer Science', jobTitle: 'Software Engineer', skillsRequired: 'JavaScript, React, Node.js', jobDescription: 'Developing frontend applications' },
        { name: 'Bob Smith', branch: 'Electrical Engineering', jobTitle: 'Electrical Engineer', skillsRequired: 'Circuit Design, MATLAB', jobDescription: 'Designing electrical circuits' },
        // Add more job data as needed
      ]);
      setLoading(false); // Set loading to false when data is loaded
    }, 2000); // Adjust time as needed
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleDelete = (index) => {
    setActionType('delete');
    setEditIndex(index);
    setConfirmMessage('Are you sure you want to delete this job entry?');
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setConfirmEditMessage('Are you sure you want to edit this job entry?');
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (actionType === 'add') {
      setJobsData([...jobsData, newJob]);
      toast.success('Job added successfully!');
    } else if (actionType === 'edit') {
      const updatedData = jobsData.map((entry, i) => (i === editIndex ? newJob : entry));
      setJobsData(updatedData);
      toast.success('Job updated successfully!');
    }
    resetForm();
  };

  const handleConfirmAction = () => {
    if (actionType === 'delete') {
      const updatedData = jobsData.filter((_, i) => i !== editIndex);
      setJobsData(updatedData);
      toast.success('Job deleted successfully!');
    }
    resetForm();
  };

  const handleConfirmEditAction = () => {
    setNewJob(jobsData[editIndex]);
    setShowForm(true);
    setConfirmEditMessage('');
  };

  const resetForm = () => {
    setShowForm(false);
    setConfirmMessage('');
    setConfirmEditMessage('');
    setNewJob({
      name: '',
      branch: '',
      jobTitle: '',
      skillsRequired: '',
      jobDescription: '',
    });
    setEditIndex(null);
    setActionType(null);
  };

  const filteredData = jobsData.filter(entry =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.skillsRequired.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.jobDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className='jobs'>
      <h1>Jobs</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='name'>Sort by Name</option>
          <option value='branch'>Sort by Branch</option>
          <option value='jobTitle'>Sort by Job Title</option>
          <option value='skillsRequired'>Sort by Skills Required</option>
          <option value='jobDescription'>Sort by Job Description</option>
        </select>
        <button className='add-button' onClick={() => {
          setNewJob({
            name: '',
            branch: '',
            jobTitle: '',
            skillsRequired: '',
            jobDescription: '',
          });
          setShowForm(!showForm);
          setActionType('add');
        }}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {confirmMessage && (
        <div className="confirm-message">
          {confirmMessage}
          <button type='button' onClick={handleConfirmAction}>Yes</button>
          <button type='button' onClick={resetForm}>No</button>
        </div>
      )}

      {confirmEditMessage && (
        <div className="confirm-message">
          {confirmEditMessage}
          <button type='button' onClick={handleConfirmEditAction}>Yes</button>
          <button type='button' onClick={resetForm}>No</button>
        </div>
      )}

      {showForm && !confirmMessage && !confirmEditMessage && (
        <form onSubmit={handleFormSubmit} className='jobs-form'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={newJob.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type='text'
              name='branch'
              value={newJob.branch}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Job Title:
            <input
              type='text'
              name='jobTitle'
              value={newJob.jobTitle}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Skills Required:
            <input
              type='text'
              name='skillsRequired'
              value={newJob.skillsRequired}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Job Description:
            <textarea
              name='jobDescription'
              value={newJob.jobDescription}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{actionType === 'add' ? 'Add Job' : 'Update Job'}</button>
        </form>
      )}

      {loading ? (
        <Loader />
      ) : (
        <table className='jobs-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Job Title</th>
              <th>Skills Required</th>
              <th>Job Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.branch}</td>
                <td>{entry.jobTitle}</td>
                <td>{entry.skillsRequired}</td>
                <td>{entry.jobDescription}</td>
                <td>
                  <button
                    className='action-button'
                    onClick={() => handleEdit(index)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className='action-button'
                    onClick={() => handleDelete(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ToastContainer />
    </div>
  );
}

export default Jobs;
