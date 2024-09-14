import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { resumeData } from '../Page-Components/Resume-components/Resume';

const StudentProfile = () => {
  const { index } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('resumeData')) || resumeData;
    setStudent(storedData[index]);
  }, [index]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Branch:</strong> {student.branch || 'N/A'}</p>
      <p><strong>Enrollment No:</strong> {student.enrollmentNumber || 'N/A'}</p>
      <p><strong>Section:</strong> {student.section || 'N/A'}</p>
      <p><strong>Father's Name:</strong> {student.fatherName || 'N/A'}</p>
      <p><strong>Address:</strong> {student.address || 'N/A'}</p>
      <p><strong>Course:</strong> {student.course || 'N/A'}</p>
      <p><strong>LinkedIn:</strong> <a href={student.linkedIn} target="_blank" rel="noopener noreferrer">{student.linkedIn}</a></p>
      <p><strong>GitHub:</strong> <a href={student.github} target="_blank" rel="noopener noreferrer">{student.github}</a></p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Work Experience</h2>
      {student.workExperience ? (
        student.workExperience.map((exp, idx) => (
          <div key={idx} className="mb-2">
            <p><strong>Title:</strong> {exp.title}</p>
            <p><strong>Company:</strong> {exp.companyName}</p>
            <p><strong>Duration:</strong> {exp.startDate} to {exp.endDate}</p>
            <p><strong>Location:</strong> {exp.location}</p>
            <ul>
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p>N/A</p>}
      <h2 className="text-xl font-semibold mt-4 mb-2">Projects</h2>
      {student.projects ? (
        student.projects.map((project, idx) => (
          <div key={idx} className="mb-2">
            <p><strong>Title:</strong> {project.title}</p>
            <p><strong>Overview:</strong> {project.overview}</p>
            <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
            <ul>
              {project.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p>N/A</p>}
      <h2 className="text-xl font-semibold mt-4 mb-2">Achievements</h2>
      {student.achievements ? (
        student.achievements.map((achievement, idx) => (
          <div key={idx} className="mb-2">
            <p><strong>Title:</strong> {achievement.title}</p>
            <p><strong>Overview:</strong> {achievement.overview}</p>
            <ul>
              {achievement.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p>N/A</p>}
      <h2 className="text-xl font-semibold mt-4 mb-2">Positions of Responsibility</h2>
      {student.positionOfResponsibility ? (
        student.positionOfResponsibility.map((position, idx) => (
          <div key={idx} className="mb-2">
            <p><strong>Title:</strong> {position.title}</p>
            <p><strong>Position:</strong> {position.position}</p>
            <p><strong>Overview:</strong> {position.overview}</p>
            <ul>
              {position.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))
      ) : <p>N/A</p>}
    </div>
  );
};

export default StudentProfile;
