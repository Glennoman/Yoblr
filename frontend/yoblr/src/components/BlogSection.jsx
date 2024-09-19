import React from "react";

const BlogSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-tertiary to-tertiary/25 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary">
              DID YOU KNOW..
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 max-md:max-w-lg mx-auto xs:grid-cols-1">
            <div className="group rounded overflow-hidden p-6 hover:bg-primary transition-all duration-300">
              <img
                src="https://readymadeui.com/Imagination.webp"
                alt="Blog Post 1"
                className="w-full h-64 object-cover rounded"
              />
              <div className="text-center">
                <span className="text-sm block text-primary group-hover:text-tertiary mb-2 mt-4">
                  10 FEB 2023 | BY JOHN DOE
                </span>
                <h3 className="text-xl font-bold text-primary group-hover:text-tertiary mb-4">
                  Igniting Your Imagination
                </h3>
                <p className="text-primary group-hover:text-tertiary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
                <button
                  type="button"
                  className="rounded-lg px-6 py-3 text-tertiary text-sm tracking-wider border-none outline-none bg-primary hover:bg-tertiary hover:text-primary mt-6"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="rounded overflow-hidden p-6 group bg-tertiary hover:bg-primary transition-all duration-300">
              <img
                src="https://readymadeui.com/hacks-watch.webp"
                alt="Blog Post 2"
                className="w-full h-64 object-cover rounded"
              />
              <div className="text-center">
                <span className="text-sm block text-primary group-hover:text-tertiary mb-2 mt-4">
                  7 JUN 2023 | BY MARK ADAIR
                </span>
                <h3 className="text-xl font-bold text-primary group-hover:text-tertiary mb-4">
                  Hacks to Supercharge Your Day
                </h3>
                <p className="text-primary group-hover:text-tertiary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
                <button
                  type="button"
                  className="px-6 py-3 rounded-lg text-tertiary text-sm tracking-wider border-none outline-none bg-primary hover:bg-tertiary hover:text-primary mt-6"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="rounded overflow-hidden p-6 group hover:bg-primary transition-all duration-300">
              <img
                src="https://readymadeui.com/prediction.webp"
                alt="Blog Post 3"
                className="w-full h-64 object-cover rounded"
              />
              <div className="text-center">
                <span className="text-sm block text-primary group-hover:text-tertiary mb-2 mt-4">
                  5 OCT 2023 | BY SIMON KONECKI
                </span>
                <h3 className="text-xl font-bold text-primary group-hover:text-tertiary mb-4">
                  Trends and Predictions
                </h3>
                <p className="text-primary group-hover:text-tertiary text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
                <button
                  type="button"
                  className="px-6 py-3 rounded-lg text-tertiary text-sm tracking-wider border-none outline-none bg-primary hover:bg-tertiary hover:text-primary mt-6"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default BlogSection;
