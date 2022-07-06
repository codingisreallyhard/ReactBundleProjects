import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <Link to="/products/p1">
          <li>Book</li>
        </Link>
        <Link to="/products/p2">
          <li>Caropet</li>
        </Link>
        <Link to="/products/p3">
          <li>Course</li>
        </Link>
      </ul>
    </section>
  );
}
