import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Page from "./Page";

function Landing() {
  const [current, setCurrent] = useState(1);
  const [selectedOption, setSelectedOption] = useState(false);
  const [option, setOption] = useState(null);
  const handleOptionChange = value => {
    setOption(value);
    setSelectedOption(true);
    setCurrent(2);
  };
  const handleClick = () => {
    setSelectedOption(false);
    setCurrent(1);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header current={current} />
      {selectedOption ? (
        <div className="grow bg-light-grey">
          <Page option={option} />
          <button
            onClick={handleClick}
            className="block m-auto border px-6 py-2 rounded bg-slate-200 font-medium text-slate-900"
          >
            Back
          </button>
        </div>
      ) : (
        <Body handleChange={handleOptionChange} />
      )}
      <Footer />
    </div>
  );
}

export default Landing;
