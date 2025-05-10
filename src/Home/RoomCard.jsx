import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  const { _id, name, image, price, location, isBooked } = room;

  const handleCardClick = () => {
    navigate(`/rooms/${_id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="card w-80 bg-white shadow-md border border-gray-200 hover:shadow-xl transition cursor-pointer ml-24"
    >
      <figure className="px-4 pt-4">
        <img className="rounded-xl w-full h-48 object-cover" src={image} alt={name} />
      </figure>
      <div className="card-body text-left space-y-2">
        <h2 className="card-title text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-700 font-medium">${price} / night</p>
        <p className="text-sm text-gray-700">Status: {isBooked ? 'Booked' : 'Available'}</p>

        <div className="card-actions justify-end pt-2">
          <button
            className="btn btn-primary w-full"
            disabled={isBooked}
            onClick={(e) => e.stopPropagation()}
          >
            {isBooked ? 'Already Booked' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;