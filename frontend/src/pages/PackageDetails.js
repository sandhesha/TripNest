import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/packages/${id}`)
      .then(res => setPkg(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!pkg) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600">{pkg.title}</h1>
      <p>{pkg.location}</p>
      <p>Duration: {pkg.duration}</p>
      <p>Bus: {pkg.bus_type}</p>
      <p>₹{pkg.price}</p>

      {pkg.food_included && <p>✔ Food Included</p>}
      {pkg.water_included && <p>✔ Water Included</p>}

      <button
        onClick={() => navigate(`/booking/${pkg.id}`)}
        className="bg-blue-600 text-white px-6 py-3 mt-6 rounded"
      >
        Book Now
      </button>
    </div>
  );
}