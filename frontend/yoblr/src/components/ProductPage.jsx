import React from "react";

const ProductPage = () => {
  return (
    <div className="bg-grid bg-no-repeat bg-top bg-contain bg-opacity-50">
      <div
        className="flex justify-center pt-10 pb-36 bg-gradient-to-b from-tertiary/80 to-tertiary/80 "
        id="product-page"
      >
        <div className="grid xl:grid-cols-2 xs:grid-cols-1 gap-10 xs:gap-5 w-fit">
          <div className="p-6 bg-tertiary rounded-3xl w-[600px] h-[400px] xs:w-[90%] xs:pt-20 mx-auto">
            <h3 className="h3 text-primary">For Employees</h3>
            <p className="text-primary xs:w-[90%] xs:text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              corporis harum laudantium minus soluta expedita quod enim
              deleniti! Explicabo libero ab magnam eius qui nobis laudantium
              earum et, totam suscipit?
            </p>
            <button className="text-sm font-semibold text-tertiary bg-gradient-to-b from-secondary to-secondaryYellow hover:bg-tertiary px-4 py-2 tracking-wide mt-6 rounded xs:w-fit">
              Read More
            </button>
          </div>
          <div className="bg-employer bg-cover rounded-3xl w-[600px] h-[400px] xs:w-[90%] xs:ml-5"></div>
          <div className="bg-employee bg-cover rounded-3xl w-[600px] h-[400px] xs:w-[90%] xs:ml-5"></div>
          <div className="p-6 bg-tertiary rounded-3xl w-[600px] h-[400px] xs:w-[90%]">
            <h3 className="h3 text-primary">For Employers</h3>
            <p className="text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              corporis harum laudantium minus soluta expedita quod enim
              deleniti! Explicabo libero ab magnam eius qui nobis laudantium
              earum et, totam suscipit?
            </p>
            <button className="text-sm font-semibold text-tertiary bg-gradient-to-b from-secondary to-secondaryYellow hover:bg-primary px-4 py-2 tracking-wide mt-6 rounded xs:w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
