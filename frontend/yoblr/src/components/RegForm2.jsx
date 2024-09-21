import React from "react";
import { useDropzone } from "react-dropzone";

const RegForm_2 = ({ setFormData, formData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => setFormData({ ...formData, file: files[0] }), // Storing file
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
  });
  console.log(formData);
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center min-h-[500px]">
          <label
            htmlFor="file"
            className="text-primary dark:text-primary w-fit"
          >
            Upload your CV or Portfolio
          </label>

          <div
            {...getRootProps({
              className:
                "flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-border border-2 border-border border-dashed cursor-pointer dark:bg-tertiary dark:border-secondaryYellow/50 hover:bg-black/50 ease-in-out duration-300 rounded-xl",
            })}
          >
            <input
              {...getInputProps()}
              id="dropzone-file"
              type="file"
              name="file"
              className="hidden"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>

            <h2 className="mt-1 font-medium tracking-wide text-border dark:text-primary">
              Upload File
            </h2>

            <p className="mt-2 text-xs tracking-wide text-border dark:text-primary">
              Upload or drag & drop your file here.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm_2;
