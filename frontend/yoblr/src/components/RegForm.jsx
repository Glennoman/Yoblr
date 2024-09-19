import React from "react";

const RegForm = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="p-4 mx-auto mt-10 max-w-xl bg-transparent">
        <h1 className="text-3xl text-primary font-extrabold text-center">
          Getting ready for that dreamjob
        </h1>
        <form className="mt-8">
          <p className="regular-16 text-primary">I'm interested in</p>
          <select
            name="selectField"
            id="jobs"
            value={formData.selectField}
            onChange={handleChange}
            placeholder=""
            className="w-full rounded-md py-3 px-4 text-primary bg-transparent border border-primary focus:bg-transparent text-sm outline-tertiary"
          >
            <option
              className="bg-tertiary appearance-none hover:bg-tertiary"
              value="finance"
            >
              Finance
            </option>
            <option className="bg-tertiary" value="it">
              IT
            </option>
            <option className="bg-tertiary" value="agriculture">
              Agriculture
            </option>
            <option className="bg-tertiary" value="cs">
              Customer Service
            </option>
          </select>
          <input
            name="regform"
            type="text"
            value={formData.regform}
            onChange={handleChange}
            placeholder="Preferred income"
            className="w-full rounded-md py-3 px-4 my-5 text-primary bg-transparent border border-primary focus:bg-transparent text-sm outline-tertiary"
          />
          <input
            name="regform2"
            type="text"
            value={formData.regform2}
            onChange={handleChange}
            placeholder="Nationality"
            className="w-full rounded-md py-3 px-4 mb-5 text-primary bg-transparent border border-primary focus:bg-transparent text-sm outline-tertiary"
          />
          <p className="regular-16 text-primary">Let them know who you are</p>
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
            placeholder="Bio"
            rows="6"
            className="w-full rounded-md px-4 text-primary bg-transparent border border-primary focus:bg-transparent text-sm pt-3 outline-tertiary"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
