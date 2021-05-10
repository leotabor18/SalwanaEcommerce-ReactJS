import React from "react";

const Rates = ({ checked }) => {
  return (
    <div>
      <span
        className={
          checked ? "fa-sm fa fa-star checked mr-1" : "fa-sm far fa-star"
        }
      ></span>
    </div>
  );
};

export default Rates;
