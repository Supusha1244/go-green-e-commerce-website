import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent z-50 py-4 px-6">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <Link to="/" className="text-2xl font-bold text-green-400">
      Go Green
    </Link>
  </div>
</nav>

  );
}
