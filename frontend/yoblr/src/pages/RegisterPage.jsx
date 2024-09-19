import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/auth/register", {
        name,
        email,
        password,
      });
      dispatch(logout(res.data.token));
      navigate("/"); // Redirect to home page or wherever you want
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Server error");
      }
    }
  };

  return (
    <div className="bg-tertiary flex lg:flex lg:items-center md:h-full lg:h-screen p-4">
      <div className="w-full max-w-4xl md:flex lg:flex mx-auto">
        <div className="bg-#1B1F29 border border-border grid md:grid-cols-1 lg:grid-cols-2 gap-16 w-full h-fit sm:p-8 p-6 shadow-md rounded-xl overflow-hidden">
          <div className="md:order-1 space-y-6">
            <h3 className="text-white mb-16 text-2xl text-center font-bold">
              Get Started
            </h3>
            <div className="grid h-full items-start justify-center">
              <div className="space-y-6">
                <button
                  type="button"
                  className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    fill="#fff"
                    className="inline shrink-0 mr-4"
                    viewBox="0 0 167.657 167.657"
                  >
                    <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" />
                  </svg>
                  Continue with Facebook
                </button>
                <button
                  type="button"
                  className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-gray-800 text-base tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    fill="#fff"
                    className="inline shrink-0 mr-4"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fbbd00"
                      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                      data-original="#fbbd00"
                    />
                    <path
                      fill="#0f9d58"
                      d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                      data-original="#0f9d58"
                    />
                    <path
                      fill="#31aa52"
                      d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                      data-original="#31aa52"
                    />
                    <path
                      fill="#3c79e6"
                      d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                      data-original="#3c79e6"
                    />
                    <path
                      fill="#cf2d48"
                      d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                      data-original="#cf2d48"
                    />
                    <path
                      fill="#eb4132"
                      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                      data-original="#eb4132"
                    />
                  </svg>
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    fill="#fff"
                    className="inline shrink-0 mr-4"
                    viewBox="0 0 22.773 22.773"
                  >
                    <path
                      d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                      data-original="#000000"
                    />
                  </svg>
                  Continue with Apple
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleRegister} className="w-full">
            {error && <p className="error-message">{error}</p>}
            <div className="mb-8">
              <h3 className="text-white text-2xl font-bold">Register</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-tertiary border-border border-2 w-full text-sm text-primary pl-4 pr-10 py-2.5 rounded-md outline-border"
                    placeholder="Enter name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.41-1.42l-2.29 2.29a1 1 0 0 0 0 1.42l2.29 2.29a1 1 0 0 0 1.41-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-tertiary border-2 border-border w-full text-sm text-primary pl-4 pr-10 py-2.5 rounded-md outline-border"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m22 12-4-3v6zm-8 5h-4l-4-4zm-4-10h4l4 4z"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-tertiary border-2 border-border w-full text-sm text-tertiary pl-4 pr-10 py-2.5 rounded-md outline-border"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m22 12-4-3v6zm-8 5h-4l-4-4zm-4-10h4l4 4z"></path>
                  </svg>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    value={acceptTerms}
                    accent-color="#111418"
                    required
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="h-4 w-4 shrink-0 appearance-none border border-border checked:bg-border checked:border-border shadow-sm focus:border-border focus:ring focus:ring-border focus:ring-opacity-50"
                  />
                  <label
                    htmlFor="remember-me"
                    className="text-white ml-3 block text-sm"
                  >
                    I accept the
                    <a
                      href="javascript:void(0);"
                      className="text-orange-500/70 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full shadow-xl bg-gradient-to-b from-secondary to-secondaryYellow/60 hover:underline focus:outline-none text-tertiary font-semibold py-2.5 rounded-md tracking-wide"
                >
                  Create Account
                </button>
              </div>
            </div>
            <p className="text-white text-sm mt-6 text-center">
              Already have an account?
              <Link
                to="/login"
                className="text-orange-500/70 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
