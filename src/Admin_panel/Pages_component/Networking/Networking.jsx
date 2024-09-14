import { useState, useEffect } from 'react';
import axios from 'axios'; 
import './Networking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Requests from '../Request/Requests';

function Networking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');
  const [networkingData, setNetworkingData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    position: '',
    eventName: '',
    location: '',
    date: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showRequests, setShowRequests] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchNetworkingData(); // Fetch networking data on component mount
  }, []);

  const fetchNetworkingData = async () => {
    try {
      const response = await axios.get('/api/admin/alumniattending');
      setNetworkingData(response.data);
    } catch (error) {
      console.error('Error fetching networking data:', error);
      toast.error('Failed to fetch networking data.');
    } finally {
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
    setConfirmMessage('Are you sure you want to delete this event?');
  };

  const deleteEvent = async (eventID) => {
    try {
      await axios.delete(`/api/event/${eventID}`);
      setNetworkingData(networkingData.filter((_, i) => i !== editIndex));
      toast.success('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event.');
    }
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setConfirmMessage('Are you sure you want to edit this event?');
  };

  const handleAddNew = () => {
    setShowForm(!showForm);
    setActionType(showForm ? null : 'add');
    if (showForm) {
      resetForm();
    } else {
      setNewEvent({
        name: '',
        position: '',
        eventName: '',
        location: '',
        date: '',
      });
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (actionType === 'add') {
      try {
        const response = await axios.post('/api/admin/alumniattending', newEvent);
        setNetworkingData([...networkingData, response.data]);
        toast.success('Event added successfully!');
      } catch (error) {
        console.error('Error adding event:', error);
        toast.error('Failed to add event.');
      }
    } else if (actionType === 'edit') {
      try {
        await axios.put(`/api/admin/alumniattending/${networkingData[editIndex].EventID}`, newEvent);
        const updatedData = networkingData.map((event, i) =>
          i === editIndex ? { ...event, ...newEvent } : event
        );
        setNetworkingData(updatedData);
        toast.success('Event updated successfully!');
      } catch (error) {
        console.error('Error updating event:', error);
        toast.error('Failed to update event.');
      }
    }
    resetForm();
  };

  const handleConfirmAction = () => {
    if (actionType === 'delete') {
      deleteEvent(networkingData[editIndex].EventID);
    } else if (actionType === 'edit') {
      setNewEvent(networkingData[editIndex]);
      setShowForm(true);
    }
    setConfirmMessage('');
  };

  const resetForm = () => {
    setNewEvent({ name: '', position: '', eventName: '', location: '', date: '' });
    setShowForm(false);
    setEditIndex(null);
    setActionType(null);
    setConfirmMessage('');
  };

  const handleApproval = async (id) => {
    // Implement API call for approval if needed
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, approved: true } : request
    );
    setRequests(updatedRequests);
    toast.success('Request approved!');
  };

  const handleRejection = async (id) => {
    // Implement API call for rejection if needed
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, approved: false } : request
    );
    setRequests(updatedRequests);
    toast.success('Request rejected!');
  };

  const filteredData = networkingData.filter(event =>
    event.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.Position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.Location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className='networking'>
      <h1>Networking</h1>
      <div className='search-bar'>
        <input type='text' placeholder='Search...' value={searchTerm} onChange={handleSearchChange} className='search-input' />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='FirstName'>Sort by Name</option>
          <option value='Position'>Sort by Position</option>
          <option value='Title'>Sort by Event Name</option>
          <option value='Location'>Sort by Location</option>
          <option value='EventDateTime'>Sort by Date</option>
        </select>
        <button className='add-button' onClick={handleAddNew}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
        <button className='view-button' onClick={() => setShowRequests(!showRequests)}>
          {showRequests ? 'Hide Requests' : 'View Requests'}
        </button>
      </div>
      {confirmMessage && (
        <div className="confirm-dialog">
          {confirmMessage}
          <button type='button' onClick={handleConfirmAction}>OK</button>
          <button type='button' onClick={resetForm}>Cancel</button>
        </div>
      )}
      {showForm && !confirmMessage && (
        <form onSubmit={handleFormSubmit} className='networking-form'>
          <label>
            Name:
            <input type='text' name='name' value={newEvent.name} onChange={handleFormChange} required />
          </label>
          <label>
            Position:
            <input type='text' name='position' value={newEvent.position} onChange={handleFormChange} required />
          </label>
          <label>
            Event Name:
            <input type='text' name='eventName' value={newEvent.eventName} onChange={handleFormChange} required />
          </label>
          <label>
            Location:
            <input type='text' name='location' value={newEvent.location} onChange={handleFormChange} required />
          </label>
          <label>
            Date:
            <input type='date' name='date' value={newEvent.date} onChange={handleFormChange} required />
          </label>
          <button type='submit'>{actionType === 'add' ? 'Add Event' : 'Update Event'}</button>
        </form>
      )}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <table className='networking-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Event Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((event, index) => (
                <tr key={index}>
                  <td>{event.FirstName}</td>
                  <td>{event.Position}</td>
                  <td>{event.Title}</td>
                  <td>{event.Location}</td>
                  <td>{new Date(event.EventDateTime).toLocaleDateString()}</td>
                  <td>
                    <button className='action-button' onClick={() => handleEdit(index)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className='action-button' onClick={() => handleDelete(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showRequests && (
            <Requests requests={requests} onApprove={handleApproval} onReject={handleRejection} />
          )}
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default Networking;
