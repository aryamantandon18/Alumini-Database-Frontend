import { useState, useEffect } from 'react';
import './Ranklist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Loader component
const Loader = () => (
  <div className="loader"></div>
);

function Ranklist() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [sortDirection, setSortDirection] = useState('asc');
  const [ranklistData, setRanklistData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newRank, setNewRank] = useState({
    rank: '',
    name: '',
    enrollment: '',
    skills: '',
    workExperience: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmEditMessage, setConfirmEditMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setRanklistData([
        { rank: 1, name: 'Alice Johnson', enrollment: '12345678901', skills: 'React, Node.js', workExperience: '2 years' },
        { rank: 2, name: 'Bob Smith', enrollment: '23456789012', skills: 'Python, Data Science', workExperience: '3 years' },
        { rank: 3, name: 'Charlie Brown', enrollment: '34567890123', skills: 'Java, Spring', workExperience: '1 year' },
      ]);
      setLoading(false); // Set loading to false when data is loaded
    }, 2000); // Adjust time as needed
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    if (sortBy === newSortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortDirection('asc');
    }
  };

  const handleDelete = (index) => {
    setActionType('delete');
    setEditIndex(index);
    setConfirmMessage('Are you sure you want to delete this entry?');
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setConfirmEditMessage('Are you sure you want to edit this entry?');
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewRank({ ...newRank, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (actionType === 'add') {
      setRanklistData([...ranklistData, { ...newRank, rank: ranklistData.length + 1 }]);
      toast.success('Entry added successfully!');
    } else if (actionType === 'edit') {
      const updatedData = ranklistData.map((entry, i) =>
        i === editIndex ? { ...newRank, rank: parseInt(newRank.rank) } : entry
      );
      setRanklistData(updatedData);
      toast.success('Entry updated successfully!');
    }
    resetForm();
  };

  const handleConfirmAction = () => {
    if (actionType === 'delete') {
      const updatedData = ranklistData.filter((_, i) => i !== editIndex);
      setRanklistData(updatedData);
      toast.success('Entry deleted successfully!');
    }
    resetForm();
  };

  const handleConfirmEditAction = () => {
    setNewRank(ranklistData[editIndex]);
    setShowForm(true);
    setConfirmEditMessage('');
  };

  const resetForm = () => {
    setShowForm(false);
    setConfirmMessage('');
    setConfirmEditMessage('');
    setNewRank({
      rank: '',
      name: '',
      enrollment: '',
      skills: '',
      workExperience: '',
    });
    setEditIndex(null);
    setActionType(null);
  };

  const filteredData = ranklistData.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.enrollment.includes(searchTerm) ||
    entry.skills.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.workExperience.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className='ranklist'>
      <h1>Ranklist</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='rank'>Sort by Rank</option>
          <option value='name'>Sort by Name</option>
          <option value='enrollment'>Sort by Enrollment No</option>
          <option value='skills'>Sort by Skills</option>
          <option value='workExperience'>Sort by Work Experience</option>
        </select>
        <button
          className='add-button'
          onClick={() => {
            setNewRank({
              rank: '',
              name: '',
              enrollment: '',
              skills: '',
              workExperience: '',
            });
            setShowForm(!showForm);
            setActionType('add');
          }}
        >
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
        <form onSubmit={handleFormSubmit} className='ranklist-form'>
          <label>
            Rank:
            <input
              type='number'
              name='rank'
              value={newRank.rank}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={newRank.name}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Enrollment No:
            <input
              type='text'
              name='enrollment'
              value={newRank.enrollment}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Skills:
            <input
              type='text'
              name='skills'
              value={newRank.skills}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Work Experience:
            <input
              type='text'
              name='workExperience'
              value={newRank.workExperience}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{actionType === 'add' ? 'Add Entry' : 'Update Entry'}</button>
        </form>
      )}

      {loading ? (
        <Loader />
      ) : (
        <table className='ranklist-table'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Enrollment No</th>
              <th>Skills</th>
              <th>Work Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.enrollment}</td>
                <td>{entry.skills}</td>
                <td>{entry.workExperience}</td>
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

export default Ranklist;
