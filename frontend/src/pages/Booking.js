import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const { id } = useParams();
  const [seats, setSeats] = useState(1);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold">Booking for Package #{id}</h1>

      <label className="block mt-4">Select Seats:</label>
      <input
        type="number"
        value={seats}
        min="1"
        onChange={(e) => setSeats(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <button className="bg-green-600 text-white px-6 py-3 mt-6 rounded">
        Proceed to Payment 💳
      </button>
    </div>
  );
}