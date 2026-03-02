import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/packages")
      .then(res => setPackages(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {packages.map(pkg => (
        <div key={pkg.id} className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{pkg.title}</h2>
          <p>{pkg.location}</p>
          <p>₹{pkg.price}</p>

          <button
            onClick={() => navigate(`/packages/${pkg.id}`)}
            className="bg-blue-600 text-white px-4 py-2 mt-3 rounded"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}