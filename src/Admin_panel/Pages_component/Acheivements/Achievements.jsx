import { useState, useEffect } from 'react';
import './Achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Requests from '../Request/Requests';

function Achievements() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [achievementsData, setAchievementsData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAchievement, setNewAchievement] = useState({
    AlumniID: 1, //set as default
    title: '',
    description: '',
    dateAchieved: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmEditMessage, setConfirmEditMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showRequests, setShowRequests] = useState(false);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/admin/achievements');
      setAchievementsData(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error('Failed to fetch achievements');
      setIsLoading(false);
    }
  };

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
    setConfirmMessage('Are you sure you want to delete this achievement?');
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setNewAchievement(achievementsData[index]);
    setConfirmEditMessage('Are you sure you want to edit this achievement?');
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewAchievement({ ...newAchievement, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (actionType === 'add') {
        const response = await axios.post('/api/achievement', newAchievement);
        setAchievementsData([...achievementsData, response.data]);
        toast.success('New achievement added successfully!');
      } else if (actionType === 'edit') {
        const response = await axios.put(`/achievement/${newAchievement.AchievementID}`, newAchievement);
        const updatedData = achievementsData.map((item, i) =>
          i === editIndex ? response.data : item
        );
        setAchievementsData(updatedData);
        toast.success('Achievement updated successfully!');
      }
    } catch (error) {
      toast.error('Failed to save achievement');
    }
    resetForm();
  };

  const handleConfirmAction = async () => {
    if (actionType === 'delete' && editIndex !== null) {
      try {
        await axios.delete(`/api/achievement/${achievementsData[editIndex].AchievementID}`);
        setAchievementsData(achievementsData.filter((_, i) => i !== editIndex));
        toast.success('Achievement deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete achievement');
      }
    }
    resetForm();
  };

  const handleConfirmEditAction = () => {
    setShowForm(true);
    setConfirmEditMessage('');
  };

  const resetForm = () => {
    setShowForm(false);
    setConfirmMessage('');
    setConfirmEditMessage('');
    setNewAchievement({
      AlumniID: 1,
      title: '',
      description: '',
      dateAchieved: '',
    });
    setEditIndex(null);
    setActionType(null);
  };

  const filteredData = achievementsData.filter(entry =>
    entry.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.Branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className='achievements'>
      <h1>Achievements</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='FirstName'>Sort by First Name</option>
          <option value='LastName'>Sort by Last Name</option>
          <option value='Branch'>Sort by Branch</option>
          <option value='Title'>Sort by Title</option>
          <option value='dateAchieved'>Sort by Date</option>
        </select>
        <button
          className='add-button'
          onClick={() => {
            setNewAchievement({ AlumniID: 1, title: '', description: '', dateAchieved: '' });
            setShowForm(!showForm);
            setActionType('add');
          }}
        >
          {showForm ? 'Cancel' : 'Add'}
        </button>
        <button
          className='view-requests-button'
          onClick={() => setShowRequests(!showRequests)}
        >
          {showRequests ? 'Hide Requests' : 'View Requests'}
        </button>
      </div>

      {confirmMessage && (
        <div className="confirm-message">
          {confirmMessage}
          <button type='button' onClick={handleConfirmAction}>OK</button>
          <button type='button' onClick={resetForm}>Cancel</button>
        </div>
      )}

      {confirmEditMessage && (
        <div className="confirm-message">
          {confirmEditMessage}
          <button type='button' onClick={handleConfirmEditAction}>OK</button>
          <button type='button' onClick={resetForm}>Cancel</button>
        </div>
      )}

      {showForm && !confirmMessage && !confirmEditMessage && (
        <form onSubmit={handleFormSubmit} className='achievements-form'>
          <label>
            Title:
            <input
              type='text'
              name='title'
              value={newAchievement.title}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name='description'
              value={newAchievement.description}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Date Achieved:
            <input
              type='date'
              name='dateAchieved'
              value={newAchievement.dateAchieved.split('T')[0]} // Format date for input
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>
            {actionType === 'add' ? 'Add Achievement' : 'Update Achievement'}
          </button>
        </form>
      )}

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <table className='achievements-table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Branch</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.FirstName}</td>
                <td>{entry.LastName}</td>
                <td>{entry.Branch}</td>
                <td>{entry.Title}</td>
                <td>{entry.DateAchieved.split('T')[0]}</td> {/* Format date */}
                <td>
                  <button
                    className='action-button'
                    onClick={() => handleEdit(achievementsData.findIndex(e => e === entry))}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className='action-button'
                    onClick={() => handleDelete(achievementsData.findIndex(e => e === entry))}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showRequests && <Requests />}

      <ToastContainer />
    </div>
  );
}

export default Achievements;
