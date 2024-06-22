"use client";
import React, { useState } from "react";
import "./home.css";
import { dummyData } from "@/constants/dummyData";
import InfiniteDropdown from "@/components/InfiniteDropdown/infiniteDropdown";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const input_string = JSON.parse(e.target.elements.textarea.value); 
    console.log(input_string)
    setInputValue(input_string);
  };
  return (
    <div className="base-class h-screen w-full flex flex-col md:flex-row custom-gradient">
      <div className="input-section relative flex-1 flex items-center justify-center">
        <form onSubmit={handleOnSubmit} className="relative md:h-[600px] md:w-[600px] bg-[#FEFDED] overflow-hidden rounded-lg shadow-md">
          <textarea
            name="textarea"
            className="json_input_textarea h-full w-full rounded-lg p-4"
            placeholder={JSON.stringify(dummyData, undefined, 2)}
          ></textarea>
          <button type="submit" className="absolute shadow-md hover:shadow-2xl focus:ring focus:ring-orange-300 bg-inherit hover:bg-orange-200 bottom-20 right-20 p-4 rounded-3xl">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="output-section relative flex-1 flex items-center justify-center">
        <div className="md:h-[600px] md:w-[600px] bg-[#FEFDED] rounded-lg shadow-md p-4">
          <div className="h-full w-full rounded-lg">
            <InfiniteDropdown items = { inputValue } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
