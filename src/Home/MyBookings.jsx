import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/bookings/${id}`)
//       .then(res => setBookings(res.data));
//   }, []);

  
  const handleBookingClick = (id) => {
    navigate(`/booking-details/${id}`); 
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Room</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id} onClick={() => handleBookingClick(booking._id)} className="cursor-pointer hover:bg-gray-100">
              <td><img src={booking.image} alt={booking.name} className="w-16 h-16 object-cover rounded" /></td>
              <td>{booking.name}</td>
              <td>{booking.date}</td>
              <td>${booking.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
