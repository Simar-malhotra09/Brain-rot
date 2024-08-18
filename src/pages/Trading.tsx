// src/pages/Trading.js
import React from "react";

function Trading() {
  return (
    <div className="p-8 space-y-8">
      <div className="sticky top-0 bg-gray-100 p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
        <ul className="list-none space-y-2">
          <li>
            <a
              href="#limit-order-book"
              className="text-blue-500 hover:underline"
            >
              Building a Limit Order Book in Golang(idk Go)
            </a>
          </li>
          <li>
            <a
              href="#arrival-price-algorithm"
              className="text-blue-500 hover:underline"
            >
              Some notes on Arrival Price Algorithm
            </a>
          </li>
        </ul>
      </div>

      <div id="limit-order-book" className="pt-16">
        <h2 className="text-2xl font-bold mb-4">
          Building a Limit Order Book in Golang(idk Go)
        </h2>
        <p>Content about Building a Limit Order Book in Golang goes here.</p>
      </div>

      <div id="arrival-price-algorithm" className="pt-16">
        <h2 className="text-2xl font-bold mb-4">
          Some notes on Arrival Price Algorithm
        </h2>
        <p>Content about Arrival Price Algorithm goes here.</p>
      </div>
    </div>
  );
}

export default Trading;
