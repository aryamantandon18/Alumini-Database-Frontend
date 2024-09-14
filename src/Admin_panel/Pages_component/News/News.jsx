import { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Requests from '../Request/Requests';

function News1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([
    { id: 1, name: 'Sumit', email: 'sumit@example.com', class: '2023', branch: 'Computer Science', approved: false },
    { id: 2, name: 'Rohan', email: 'rohan@example.com', class: '2024', branch: 'Mechanical Engineering', approved: false }
  ]);
  const [showRequests, setShowRequests] = useState(false);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('/api/admin/news');
        setNewsData(response.data);
      } catch (error) {
        toast.error('Failed to fetch news data.');
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleApproval = (id) => {
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, approved: true } : request
    );
    setRequests(updatedRequests);
    toast.success('Request approved!');
  };

  const handleRejection = (id) => {
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, approved: false } : request
    );
    setRequests(updatedRequests);
    toast.success('Request rejected!');
  };

  const filteredData = newsData.filter(newsItem =>
    newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsItem.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className='news'>
      <h1>News</h1>
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
          <option value='title'>Sort by Title</option>
          <option value='date'>Sort by Date</option>
        </select>
        <button className='view-button' onClick={() => setShowRequests(!showRequests)}>
          {showRequests ? 'Hide Requests' : 'View Requests'}
        </button>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <table className='news-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((newsItem, index) => (
              <tr key={index}>
                <td>{newsItem.title}</td>
                <td>{newsItem.description}</td>
                <td>{new Date(newsItem.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showRequests && (
        <Requests requests={requests} onApprove={handleApproval} onReject={handleRejection} />
      )}
      <ToastContainer />
    </div>
  );
}

export default News1;
