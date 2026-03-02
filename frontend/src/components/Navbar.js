import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">TouristBus 🚍</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
      </div>
    </nav>
  );
}