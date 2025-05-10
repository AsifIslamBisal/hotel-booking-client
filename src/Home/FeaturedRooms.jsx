import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms") 
      .then((res) => res.json())
      .then((data) => setRooms(data.slice(0, 6))); 
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms.map(room => (
            <div key={room._id} className="bg-white rounded-2xl shadow hover:shadow-lg transition">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{room.name}</h3>
                <p className="text-gray-600 text-sm">{room.description.slice(0, 80)}...</p>
                <p className="text-primary mt-2 font-bold">${room.price} / night</p>
                <Link to={`/rooms/${room._id}`}>
                  <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <Link to="/rooms">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg">
              See More Rooms
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
