import React, { useEffect, useState } from 'react';
import { Link, Links, useParams } from 'react-router-dom';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    
    setIsLoading(true);
    axios.get(`https://hotel-booking-serve.vercel.app/rooms/${id}`)
      .then(res => {
        setRoom(res.data);
        setIsLoading(false);  
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);  
      });
  }, [id]);

  const handleBook = () => setIsOpen(true);
  const handleConfirmBooking = () => {
    const booking = {
      roomId: room._id,
      date: format(selectedDate, 'yyyy-MM-dd'),
      name: room.name,
      price: room.price,
      image: room.image,
    };
    console.log('Booking Confirmed:', booking);
    setIsOpen(false);
  };

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!room) return <p className="text-center py-10">Room not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-xl mt-6">
      <img src={room.image} alt={room.name} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
      <p className="text-gray-600 mb-2">{room.description}</p>
      <p><strong>Location:</strong> {room.location}</p>
      <p><strong>Type:</strong> {room.type}</p>
      <p><strong>Price:</strong> ${room.price} / night</p>
      <p><strong>Rating:</strong> ⭐ {room.rating || 'N/A'}</p>
      <p><strong>Status:</strong> {room.isBooked ? 'Booked' : 'Available'}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {room.amenities?.map((item, i) => (
          <span key={i} className="badge badge-outline">{item}</span>
        ))}
      </div>

      {/* Booking Button */}
      <button
        onClick={handleBook}
        className="btn btn-primary mt-6"
        disabled={room.isBooked}
      >
        {room.isBooked ? 'Already Booked' : 'Book Now'}
      </button>

      {/* Booking Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-xl font-bold mb-4">Confirm Booking</Dialog.Title>
            <img src={room.image} alt={room.name} className="rounded-lg w-full h-40 object-cover mb-4" />
            <p><strong>Room:</strong> {room.name}</p>
            <p><strong>Price:</strong> ${room.price}</p>
            <p className="mb-2"><strong>Description:</strong> {room.description}</p>
            <label className="block mb-2 font-semibold">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="input input-bordered w-full"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
            />
            <div className="mt-6 flex justify-end gap-3">
              <Link to="/myBookings">
              <button onClick={() => setIsOpen(false)} className="btn">Cancel</button>
              <button onClick={handleConfirmBooking} className="btn btn-primary">Confirm</button>
              </Link>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default RoomDetails;
