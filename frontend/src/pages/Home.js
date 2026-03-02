import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-600">
        Explore India Comfortably 🚍
      </h1>
      <p className="mt-4 text-gray-600">
        Book tourist bus packages with food & water included.
      </p>

      <Link
        to="/packages"
        className="bg-blue-600 text-white px-6 py-3 mt-6 inline-block rounded-lg"
      >
        View Packages
      </Link>
    </div>
  );
}