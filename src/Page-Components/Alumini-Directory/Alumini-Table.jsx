import React, { useEffect, useState } from "react";
import "./AlumniTable.css"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchAlumni } from "../../features/alumniDataSlice";

const Alumni_Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const dispatch = useDispatch();
  const alumniDetails = useSelector((state) => state.alumniData.alumniData);
  const status = useSelector((state) => state.alumniData.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAlumni());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        Loading...
      </div>
    );
  }

  const filteredData = alumniDetails.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOption === "name") {
      return (a.FirstName + " " + a.LastName).localeCompare(b.FirstName + " " + b.LastName);
    } else if (sortOption === "batchYear") {
      return a.BatchYear - b.BatchYear;
    } else if (sortOption === "branch") {
      return a.Branch.localeCompare(b.Branch);
    } else if (sortOption === "status") {
      return a.Status.localeCompare(b.Status);
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By...</option>
          <option value="name">Sort by Name</option>
          <option value="batchYear">Sort by Batch Year</option>
          <option value="branch">Sort by Branch</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Full Name</th>
            <th>Photo</th>
            <th>Batch Year</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Degree</th>
            <th>GitHub Profile</th>
            <th>LeetCode Profile</th>
            <th>LinkedIn Profile</th>
            <th>Codeforces Profile</th>
            <th>CodeChef Profile</th>
            <th>Instagram Profile</th>
            <th>Twitter Profile</th>
            <th>GeeksForGeeks Profile</th>
            <th>CodingNinjas Profile</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={row.AlumniID}>
              <td>{index + 1}</td>
              <td>{`${row.FirstName} ${row.LastName}`}</td>
              <td>
                <img
                  src={row.ProfilePicture || "https://via.placeholder.com/150"}
                  alt="Alumni Photo"
                />
              </td>
              <td>{row.BatchYear}</td>
              <td>{row.Branch}</td>
              <td>{row.status}</td>
              <td>{row.Email}</td>
              <td>{row.MobileNo}</td>
              <td>{row.Degree}</td>
              <td>
                <a href={`https://${row.GithubProfile}`}>{row.GithubProfile}</a>
              </td>
              <td>
                <a href={`https://${row.LeetCodeProfile}`}>{row.LeetCodeProfile}</a>
              </td>
              <td>
                <a href={`https://${row.LinkedInProfile}`}>{row.LinkedInProfile}</a>
              </td>
              <td>
                <a href={`https://${row.CodeforceProfile}`}>{row.CodeforceProfile}</a>
              </td>
              <td>
                <a href={`https://${row.CodeChefProfile}`}>{row.CodeChefProfile}</a>
              </td>
              <td>
                <a href={`https://${row.InstagramProfile}`}>{row.InstagramProfile}</a>
              </td>
              <td>
                <a href={`https://${row.TwitterProfile}`}>{row.TwitterProfile}</a>
              </td>
              <td>
                <a href={`https://${row.GeeksForGeeksProfile}`}>{row.GeeksForGeeksProfile}</a>
              </td>
              <td>
                <a href={`https://${row.CodingNinjasProfile}`}>{row.CodingNinjasProfile}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alumni_Table;
