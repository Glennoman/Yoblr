import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axiosInstance from "../api/axiosInstance";
import RegForm from "../components/RegForm";
import RegForm_2 from "../components/RegForm2";
import RegForm_3 from "../components/RegForm_3";
import { Link } from "react-router-dom";

const SwipeSettings = () => {
  const [stepsComplete, setStepsComplete] = useState(1);
  const [formData, setFormData] = useState({
    regform: "",
    regform2: "",
    selectField: "",
    file: null,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const numSteps = 4;

  const handleStep = (num) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }
    setStepsComplete((pv) => pv + num);
  };

  // Input change and to save state
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // console.log(e.target.value);
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();

    // Append fields to FormData
    for (const key in formData) {
      if (key === "file") {
        formDataToSend.append("file", formData[key], formData[key].name);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      // Set the correct headers for multipart/form-data
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      // Submitting form data to backend with Axios
      const response = await axiosInstance.post(
        "/api/auth/submit-form",
        formDataToSend,
        config
      );

      if (response.data.success) {
        console.log("Form submitted successfully");
      } else {
        console.error("Submission failed:", response.data);
      }
    } catch (error) {
      console.error("Error in submitForm:", error);
    }
  };

  return (
    <div className="relative px-4 py-14 bg-tertiary h-screen">
      <div className="p-8 mt-10 bg-black shadow-lg rounded-md w-full max-w-screen-2xl min-h-full mx-auto">
        <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
        <div className="p-2 my-6 min-h-[600px] bg-tertiary border-2 border-dashed border-secondaryYellow/50 rounded-lg">
          <AnimatePresence mode="wait">
            {stepsComplete === 0 && (
              <RegForm formData={formData} handleChange={handleChange} />
            )}
            {stepsComplete === 1 && (
              <RegForm_2 setFormData={setFormData} formData={formData} />
            )}
            {stepsComplete === 2 && (
              <RegForm_3 formData={formData} handleChange={handleChange} />
            )}
            {/* Form 4 */}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-end gap-2">
          {stepsComplete > 0 && (
            <button
              className="px-4 py-1 rounded border border-border bg-tertiary text-primary hover:bg-black ease-in-out duration-300"
              onClick={() => handleStep(-1)}
            >
              Prev
            </button>
          )}
          {stepsComplete < 3 ? (
            <button
              className="px-4 py-1 rounded border border-border bg-tertiary text-primary hover:bg-black ease-in-out duration-300"
              onClick={() => handleStep(1)}
            >
              Next
            </button>
          ) : (
            <Link to="/get-started">
              <button
                className="px-4 py-1 rounded border border-border bg-tertiary text-primary hover:bg-black ease-in-out duration-300"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Steps = ({ numSteps, stepsComplete }) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="w-full h-1 rounded-full bg-gray-200 relative">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-border rounded-full"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm z-10 transition-colors duration-300 ${
          isActive
            ? "border-border bg-gradient-to-b from-secondary to-secondaryYellow text-white"
            : "border-secondaryYellow text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute z-0 -inset-1.5 bg-border/50 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default SwipeSettings;
