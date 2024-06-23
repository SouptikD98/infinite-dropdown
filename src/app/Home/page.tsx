"use client";
import React, { useState } from "react";
import "./home.css";
import { dummyData } from "@/constants/dummyData";
import InfiniteDropdown from "@/components/InfiniteDropdown/infiniteDropdown";


interface Item {
  label: string;
  options: Item[];
}

const Home = () => {
  const [inputValue, setInputValue] = useState<Item[]>([]);
  const [activateDropdownFlag, setActivateDropdownFlag] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const inputString = e.target.elements.textarea.value;
    try {
      const parsedInput = JSON.parse(inputString); 
      console.log(parsedInput); // Debug: Log parsed input
      setInputValue(parsedInput);
      setActivateDropdownFlag(true);
    } catch (error) {
      console.error("Invalid JSON:", error);
      alert("Invalid JSON input. Please correct it and try again.");
    }
  };

  return (
    <div className="base-class h-screen w-full flex flex-col md:flex-row custom-gradient">
      <div className="input-section relative flex-1 flex items-center justify-center">
        <form 
          onSubmit={handleOnSubmit} 
          onChange={() => { setActivateDropdownFlag(false); }} 
          className="relative md:h-[600px] md:w-[600px] bg-[#FEFDED] overflow-hidden rounded-lg shadow-md"
        >
          <textarea
            name="textarea"
            className="json_input_textarea h-full w-full rounded-lg p-4"
            placeholder={JSON.stringify(dummyData, undefined, 2)}
            defaultValue={JSON.stringify(dummyData, undefined, 2)} 
          ></textarea>
          <button 
            type="submit" 
            className="absolute shadow-md hover:shadow-2xl focus:ring focus:ring-orange-300 bg-inherit hover:bg-orange-200 bottom-20 right-20 p-4 rounded-3xl"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className="output-section relative flex-1 flex items-center justify-center">
        <div className="md:h-[600px] md:w-[600px] bg-[#FEFDED] rounded-lg shadow-md p-4">
          <div className="h-full w-full rounded-lg">
            {activateDropdownFlag && <InfiniteDropdown items={inputValue} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
