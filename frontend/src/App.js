import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [seats, setSeats] = useState(1);
  const [places, setPlaces] = useState([]);
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const handleBooking = async () => {
    const response = await fetch("http://127.0.0.1:8000/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, destination, seats }),
    });

    const data = await response.json();

    setMessage(data.message);
    setPlaces(data.places);
    setTotalPrice(data.total_price);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚍 TripNest</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />

      <br />

      <input
        type="text"
        placeholder="State (Goa / Karnataka)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />

      <br />

      <input
        type="number"
        min="1"
        placeholder="Seats"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />

      <br />

      <button
        onClick={handleBooking}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Book Trip
      </button>

      {message && <h3 style={{ marginTop: "30px" }}>{message}</h3>}

      {totalPrice && (
        <h2 style={{ color: "green" }}>Total Price: ₹{totalPrice}</h2>
      )}

      {places.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>🌍 Tourist Places</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {places.map((place, index) => (
              <div key={index}>
                <img
                  src={place.image}
                  alt={place.name}
                  width="200"
                  height="150"
                  style={{ borderRadius: "10px" }}
                />
                <p>{place.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;