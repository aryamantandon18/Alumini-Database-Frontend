import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F033FF",
  "#FF33A6",
  "#33FFF0",
  "#FF8C33",
  "#33FF8C",
  "#8C33FF",
  "#FF3333",
];

const getColor = (index) => colors[index % colors.length];

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('resumeData')) || [];
    if (storedData.length === 0) {
      // Generate dummy data if no data is found in localStorage
      const dummyData = [
        { 
          name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', branch: 'Computer Science', enrollmentNumber: 'CS2021001', section: 'A', 
          fatherName: 'Mr. Doe', address: '123 Main St', course: 'B.Tech', linkedIn: 'https://linkedin.com/john', github: 'https://github.com/john', 
          workExperience: 'Intern at XYZ', projects: 'Chat App', achievements: 'Best Student', positionOfResponsibility: 'Class Representative' 
        },
        { 
          name: 'Jane Smith', phone: '234-567-8901', email: 'jane@example.com', branch: 'Electrical Engineering', enrollmentNumber: 'EE2021002', section: 'B', 
          fatherName: 'Mr. Smith', address: '456 Elm St', course: 'B.Tech', linkedIn: 'https://linkedin.com/jane', github: 'https://github.com/jane', 
          workExperience: 'Intern at ABC', projects: 'E-commerce App', achievements: 'Top Scorer', positionOfResponsibility: 'Team Lead' 
        },
        { 
          name: 'Alice Johnson', phone: '345-678-9012', email: 'alice@example.com', branch: 'Mechanical Engineering', enrollmentNumber: 'ME2021003', section: 'C', 
          fatherName: 'Mr. Johnson', address: '789 Pine St', course: 'B.Tech', linkedIn: 'https://linkedin.com/alice', github: 'https://github.com/alice', 
          workExperience: 'Intern at DEF', projects: 'Robotics', achievements: 'Innovator Award', positionOfResponsibility: 'Club President' 
        },
        { 
          name: 'Bob Brown', phone: '456-789-0123', email: 'bob@example.com', branch: 'Civil Engineering', enrollmentNumber: 'CE2021004', section: 'D', 
          fatherName: 'Mr. Brown', address: '101 Maple St', course: 'B.Tech', linkedIn: 'https://linkedin.com/bob', github: 'https://github.com/bob', 
          workExperience: 'Intern at GHI', projects: 'Bridge Design', achievements: 'Merit Award', positionOfResponsibility: 'Project Manager' 
        },
      ];
      setStudents(dummyData);
    } else {
      setStudents(storedData);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-800">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Email</th>
            <th className="py-2">Branch</th>
            <th className="py-2">Enrollment No</th>
            <th className="py-2">Section</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="text-center">
              <td className="py-2" style={{ color: index === 0 ? 'black' : 'inherit' }}>{student.name}</td>
              <td className="py-2">{student.phone}</td>
              <td className="py-2">{student.email}</td>
              <td className="py-2">
                <span
                  className="rounded-full px-2 py-1"
                  style={{ backgroundColor: getColor(index), color: 'white' }}
                >
                  {student.branch || 'N/A'}
                </span>
              </td>
              <td className="py-2">{student.enrollmentNumber || 'N/A'}</td>
              <td className="py-2">{student.section || 'N/A'}</td>
              <td className="py-2">
                <Link to={`/student-profile/id`} className="bg-blue-500 text-white px-4 py-2 rounded-full">View Profile</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
