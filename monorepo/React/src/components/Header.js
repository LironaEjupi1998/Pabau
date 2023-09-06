import React from "react";

function Header({ current }) {
  return (
    <div className="text-center">
      <h1 className="mb-0 text-2xl font-medium">Choose Service</h1>
      <p className="mt-0 text-grey text-lg">Step {current}/2</p>
    </div>
  );
}

export default Header;
