import React from "react";

const SupplyCard = () => {
  return (
    <div className="card  w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <div className=" flex justify-start gap-2">
            <p>Category : </p>
            <p>Medical Equipment</p>
        </div>
        <div className=" flex justify-start gap-2">
            <p>Amount : </p>
            <p>25 pcs</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn mt-7">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SupplyCard;
