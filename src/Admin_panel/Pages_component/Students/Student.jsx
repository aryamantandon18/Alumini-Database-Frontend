import { useState, useEffect } from 'react';
import axios from 'axios';
import './Student.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Student() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('fullName');
  const [studentData, setStudentData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    fullName: '',
    year: '',
    branch: '',
    gpa: '',
    linkedin: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmEditMessage, setConfirmEditMessage] = useState('');
  const [actionType, setActionType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentData();
  }, []);


  const fetchStudentData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/alumni/achievements?status=student');
      setStudentData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching student data:", error);
      setLoading(false);
      toast.error('Failed to fetch student data.');
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleDelete = (index) => {
    setActionType('delete');
    setEditIndex(index);
    setConfirmMessage('Are you sure you want to delete this student?');
  };

  const handleEdit = (index) => {
    setActionType('edit');
    setEditIndex(index);
    setConfirmEditMessage('Are you sure you want to edit this student?');
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (actionType === 'add') {
        await axios.post('/api/alumni', {
          ...newStudent,
          Status: "student"
        });
        toast.success('Student added successfully!');
      } else if (actionType === 'edit') {
        const student = studentData[editIndex];
        await axios.put(`/api/alumni/${student.AlumniID}`, newStudent);
        toast.success('Student updated successfully!');
      }
      fetchStudentData();
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error('Failed to save student.');
    }
  };

  const handleConfirmAction = async () => {
    try {
      if (actionType === 'delete') {
        const student = studentData[editIndex];
        await axios.delete(`/api/alumni/${student.AlumniID}`);
        toast.success('Student deleted successfully!');
      }
      fetchStudentData();
      resetForm();
    } catch (error) {
      console.error("Error confirming action:", error);
      toast.error('Failed to delete student.');
    }
  };

  const handleConfirmEditAction = () => {
    const student = studentData[editIndex];
    setNewStudent({
      fullName: student.FirstName + ' ' + student.LastName,
      year: student.BatchYear,
      branch: student.Branch,
      gpa: student.Tenth, 
      linkedin: student.LinkedInProfile
    });
    setShowForm(true);
    setConfirmEditMessage('');
  };

  const resetForm = () => {
    setShowForm(false);
    setConfirmMessage('');
    setConfirmEditMessage('');
    setNewStudent({
      fullName: '',
      year: '',
      branch: '',
      gpa: '',
      linkedin: ''
    });
    setEditIndex(null);
    setActionType(null);
  };

  const filteredData = studentData.filter(student =>
    `${student.FirstName} ${student.LastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.BatchYear.toString().includes(searchTerm.toLowerCase()) ||
    student.Branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.Tenth.toString().includes(searchTerm.toLowerCase()) ||
    student.LinkedInProfile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className='student-directory'>
      <h1>Student Directory</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='fullName'>Sort by Full Name</option>
          <option value='BatchYear'>Sort by Year</option>
          <option value='Branch'>Sort by Branch</option>
          <option value='Tenth'>Sort by GPA</option>
          <option value='LinkedInProfile'>Sort by LinkedIn</option>
        </select>
        <button
          className='add-button'
          onClick={() => {
            setNewStudent({
              fullName: '',
              year: '',
              branch: '',
              gpa: '',
              linkedin: ''
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
        <form onSubmit={handleFormSubmit} className='student-form'>
          <label>
            Full Name:
            <input
              type='text'
              name='fullName'
              value={newStudent.fullName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Year:
            <input
              type='text'
              name='year'
              value={newStudent.year}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type='text'
              name='branch'
              value={newStudent.branch}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            GPA:
            <input
              type='text'
              name='gpa'
              value={newStudent.gpa}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            LinkedIn Profile:
            <input
              type='text'
              name='linkedin'
              value={newStudent.linkedin}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{actionType === 'add' ? 'Add Student' : 'Update Student'}</button>
        </form>
      )}

      {loading ? (
        <div className="loader"></div>
      ) : (
        <table className='student-table'>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Year</th>
              <th>Branch</th>
              <th>GPA</th>
              <th>LinkedIn Profile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((student, index) => (
              <tr key={index}>
                <td>{`${student.FirstName} ${student.LastName}`}</td>
                <td>{student.BatchYear}</td>
                <td>{student.Branch}</td>
                <td>{student.Tenth}</td>
                <td>{student.LinkedInProfile}</td>
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

export default Student;
