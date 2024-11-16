import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Donor.css";

const Donor = () => {
  const [donors, setDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDonorId, setSelectedDonorId] = useState(null); // Track selected donor ID
  const [selectedDonorDetails, setSelectedDonorDetails] = useState(null); // Track selected donor details

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async (filters = {}) => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/api/donors/search", {
        params: filters,
      });
      console.log(data)
      if (Array.isArray(data)) {
          setDonors(data);  
        } else {
          console.error("API response is not an array", data);
        }
    } catch (error) {
      console.error("Error fetching donors:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDonorDetails = async (id) => {
    if (selectedDonorId === id) {
      // If the same donor is clicked again, hide their details
      setSelectedDonorId(null);
      setSelectedDonorDetails(null);
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:3000/api/donors/${id}`);
      setSelectedDonorId(id); // Set the selected donor ID
      setSelectedDonorDetails(data); // Set the donor details
    } catch (error) {
      console.error("Error fetching donor details:", error);
    }
  };

  const handleSearch = () => {
    const filters = {};
    if (bloodGroup) filters.bloodGroup = bloodGroup;
    if (location) filters.location = location;

    fetchDonors(filters); // Pass filters to fetchDonors
  };

  return (
    <div className="donor-container ubuntu-medium">
      <h2 className="ubuntu-medium title">Donor Search</h2>

      <div className="search-filters">
        <div className="filter-input">
          <label>Blood Group:</label>
          <input
            type="text"
            placeholder="Enter blood group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>

        <div className="filter-input">
          <label>Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="donor-list">
          <ul>
            {donors.length > 0 ? (
              donors.map((donor) => (
                <React.Fragment key={donor._id}>
                  <li>
                    {donor.name} - {donor.bloodGroup} - {donor.location}
                    <button
                      className="details-button"
                      onClick={() => fetchDonorDetails(donor._id)}
                    >
                      View Details
                    </button>
                  </li>
                  {selectedDonorId === donor._id && selectedDonorDetails && (
                    <li className="donor-details">
                      <div>
                        <p>Name: {selectedDonorDetails.name}</p>
                        <p>Blood Group: {selectedDonorDetails.bloodGroup}</p>
                        <p>Location: {selectedDonorDetails.location}</p>
                        <p>Address: {selectedDonorDetails.address || "N/A"}</p>
                        <p>
                          Contact: {selectedDonorDetails.contactNumber || "N/A"}
                        </p>
                      </div>
                    </li>
                  )}
                </React.Fragment>
              ))
            ) : (
              <li>No donors found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Donor;
