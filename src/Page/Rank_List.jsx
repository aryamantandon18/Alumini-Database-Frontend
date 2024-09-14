import React, { useState } from "react";
import styles from "./RanklistPage.module.css";

const RanklistPage = () => {
  const [students, setStudents] = useState([
    {
      enrollment_no: "123456",
      name: "John Doe",
      skills: ["React", "Node.js", "CSS"],
      section: "A",
      projects: [
        {
          name: "Project A",
          description: "A project about A",
          link: "http://example.com",
        },
      ],
      work_experience: [
        {
          title: "Software Engineer",
          organization: "ABC Corp",
          location: "New York",
          duration: "Jan 2020 - Dec 2021",
          responsibilities: "Developed web applications",
        },
      ],
    },
    {
      enrollment_no: "654321",
      name: "Jane Smith",
      skills: ["Angular", "Python", "HTML"],
      section: "B",
      projects: [
        {
          name: "Project B",
          description: "A project about B",
          link: "http://example.com",
        },
      ],
      work_experience: [
        {
          title: "Backend Developer",
          organization: "XYZ Inc",
          location: "San Francisco",
          duration: "Mar 2019 - Nov 2020",
          responsibilities: "Built APIs",
        },
      ],
    },
    {
      enrollment_no: "111213",
      name: "Alice Johnson",
      skills: ["Java", "Spring", "Hibernate"],
      section: "C",
      projects: [
        {
          name: "Project C",
          description: "A project about C",
          link: "http://example.com",
        },
      ],
      work_experience: [
        {
          title: "Full Stack Developer",
          organization: "Tech Solutions",
          location: "Chicago",
          duration: "Feb 2021 - Present",
          responsibilities: "Developed full stack applications",
        },
      ],
    },
    {
      enrollment_no: "141516",
      name: "Bob Brown",
      skills: ["PHP", "Laravel", "JavaScript"],
      section: "D",
      projects: [
        {
          name: "Project D",
          description: "A project about D",
          link: "http://example.com",
        },
      ],
      work_experience: [
        {
          title: "Web Developer",
          organization: "WebWorks",
          location: "Los Angeles",
          duration: "Jun 2020 - Apr 2022",
          responsibilities: "Developed websites and web applications",
        },
      ],
    },
    {
      enrollment_no: "171819",
      name: "Carol White",
      skills: ["Python", "Django", "SQL"],
      section: "E",
      projects: [
        {
          name: "Project E",
          description: "A project about E",
          link: "http://example.com",
        },
      ],
      work_experience: [
        {
          title: "Backend Engineer",
          organization: "Data Solutions",
          location: "Houston",
          duration: "Sep 2018 - Dec 2020",
          responsibilities: "Built and maintained backend systems",
        },
      ],
    },
  ]);

  const [expandedStudent, setExpandedStudent] = useState(null);

  const handleToggle = (enrollment_no) => {
    setExpandedStudent((prev) => (prev === enrollment_no ? null : enrollment_no));
  };

  const sortStudentsBySkills = (students) => {
    return students.sort((a, b) => b.skills.length - a.skills.length);
  };

  const sortedStudents = sortStudentsBySkills(students);

  return (
    <div className={`${styles.container} my-16 mx-auto w-9/12`}>
      <h1 className="text-3xl font-bold my-8 text-center text-indigo-700">Ranklist of Students</h1>
      <div className={styles.ranklist}>
        {sortedStudents.map((student, index) => (
          <div
            key={student.enrollment_no}
            className={`${styles.studentCard} ${expandedStudent === student.enrollment_no ? styles.expanded : ""}`}
            onClick={() => handleToggle(student.enrollment_no)}
          >
            <div className={styles.studentSummary}>
              <h2 className="text-2xl font-semibold text-indigo-600">
                Rank {index + 1}: {student.name}
              </h2>
            </div>
            {expandedStudent === student.enrollment_no && (
              <div className={`${styles.studentDetails} bg-gray-100 p-4 rounded-b-lg`}>
                <p className="text-gray-600 mb-2">
                  <strong>Enrollment No:</strong> {student.enrollment_no}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Skills:</strong> {student.skills.join(", ")}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Section:</strong> {student.section}
                </p>
                <div className={styles.section}>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600">Projects:</h3>
                  {student.projects.map((project, idx) => (
                    <div key={idx} className={styles.project}>
                      <p className="text-gray-700 mb-1">
                        <strong>Name:</strong> {project.name}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Description:</strong> {project.description}
                      </p>
                      <p className="text-blue-500 mb-2">
                        <strong>Link:</strong>{" "}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                          {project.link}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.section}>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600">Work Experience:</h3>
                  {student.work_experience.map((work, idx) => (
                    <div key={idx} className={styles.workExperience}>
                      <p className="text-gray-700 mb-1">
                        <strong>Title:</strong> {work.title}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Organization:</strong> {work.organization}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Location:</strong> {work.location}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Duration:</strong> {work.duration}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Responsibilities:</strong> {work.responsibilities}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RanklistPage;
