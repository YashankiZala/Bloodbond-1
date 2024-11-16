import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DonorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id || id === 'search') {
      navigate('/'); // Redirect to home or a fallback page
      return;
    }
    fetchDonorDetails();
  }, [id]);

  const fetchDonorDetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:5000/donors/${id}`); // Adjust URL if needed
      setDonor(data);
    } catch (error) {
      console.error('Error fetching donor details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!donor) return <p>No donor details available</p>;

  return (
    <div>
      <h2>Donor Details</h2>
      <p>Name: {donor.name}</p>
      <p>Blood Group: {donor.bloodGroup}</p>
      <p>Location: {donor.location}</p>
    </div>
  );
};

export default DonorDetails;
