import React from 'react';
import offer1 from '../../assets/hotel-room.jpg'
import offer2 from '../../assets/hotel-room2.jpg'
import offer3 from '../../assets/luxury-bedroom-hotel.jpg'
const Offers = () => {
    return (
        <div>
            <div>
            <section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-2xl shadow">
        <img src={offer1} alt="Service" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">24/7 Customer Support</h3>
        <p className="text-gray-600 mt-2">We are available round the clock to help you with your bookings and inquiries.</p>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow">
        <img src={offer2} alt="Safety" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">Safe & Secure Booking</h3>
        <p className="text-gray-600 mt-2">Your privacy and payment details are safe with our secure system.</p>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow">
        <img src={offer3} alt="Discount" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700">Best Price Guarantee</h3>
        <p className="text-gray-600 mt-2">Get the best deals and discounts exclusively from our website.</p>
      </div>
    </div>
  </div>
</section>

            </div>
            <div>
            <section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events & Offers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-yellow-50 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold text-gray-700">Eid Holiday Special 🎉</h3>
        <p className="mt-2 text-gray-600">Book your room before Eid and enjoy 20% discount with free breakfast included!</p>
        <span className="block mt-3 text-sm text-gray-500">Valid till: 10 June 2025</span>
      </div>
      <div className="bg-blue-50 p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold text-gray-700">Summer Beach Festival 🌊</h3>
        <p className="mt-2 text-gray-600">Enjoy our beachfront properties with special live events and free dinner for couples.</p>
        <span className="block mt-3 text-sm text-gray-500">Event Date: 15 - 20 July 2025</span>
      </div>
    </div>
  </div>
</section>

            </div>
        </div>
    );
};

export default Offers;