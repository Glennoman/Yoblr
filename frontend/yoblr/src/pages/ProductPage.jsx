import React from "react";
import employer from "../assets/For_Employers.jpg";
import employee from "../assets/For_Employees.jpg";

const ProductPage = () => {
  return (
    <div className="flex justify-center pb-80" id="product-page">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-6 w-fit">
        <div className="p-6 bg-tertiary rounded-3xl w-[600px] h-[400px]">
          <h3 className="h3 text-primary">For Employees</h3>
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
            harum laudantium minus soluta expedita quod enim deleniti! Explicabo
            libero ab magnam eius qui nobis laudantium earum et, totam suscipit?
          </p>
          <button className="text-sm text-white bg-gradient-to-b from-pink-500 to-orange-500/80 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded">
            Read More
          </button>
        </div>
        <div className="bg-tertiary rounded-3xl w-[600px] h-[400px]">
          <img src={employer} alt="" className="object-cover rounded-3xl" />
        </div>
        <div className="bg-tertiary rounded-3xl w-[600px] h-[400px]">
          <img src={employee} alt="" className="rounded-3xl object-cover" />
        </div>
        <div className="p-6 bg-tertiary rounded-3xl w-[600px] h-[400px]">
          <h3 className="h3 text-primary">For Employers</h3>
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
            harum laudantium minus soluta expedita quod enim deleniti! Explicabo
            libero ab magnam eius qui nobis laudantium earum et, totam suscipit?
          </p>
          <button className="text-sm text-white bg-gradient-to-b from-pink-500 to-orange-500/80 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
