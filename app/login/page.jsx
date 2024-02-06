import Link from "next/link";
import React from "react";
import img1 from "../images/logo.png"
import Image from "next/image";

const Login = () => {
  return (
    <div className="p-7">
      <div className="inline-block">
        <div className="text-center ">
          <Image className="mb-3 ml-16 w-24 h-24" src={img1}/>
        </div>
        <div className="text-center">
          <p className="text-[#156585] text-xl font-bold">
            MR Finconsulting GmbH
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-[55vh] rounded-[40px] shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#3AB3B3] ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#265E739C] md:text-2xl mb-16 ">
              Anmelden
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C12.81 15 13.5 14.7 14.11 14.11C14.7 13.5 15 12.81 15 12C15 11.19 14.7 10.5 14.11 9.89C13.5 9.3 12.81 9 12 9C11.19 9 10.5 9.3 9.89 9.89C9.3 10.5 9 11.19 9 12C9 12.81 9.3 13.5 9.89 14.11C10.5 14.7 11.19 15 12 15ZM12 2C14.75 2 17.1 3 19.05 4.95C21 6.9 22 9.25 22 12V13.45C22 14.45 21.65 15.3 21 16C20.3 16.67 19.5 17 18.5 17C17.3 17 16.31 16.5 15.56 15.5C14.56 16.5 13.38 17 12 17C10.63 17 9.45 16.5 8.46 15.54C7.5 14.55 7 13.38 7 12C7 10.63 7.5 9.45 8.46 8.46C9.45 7.5 10.63 7 12 7C13.38 7 14.55 7.5 15.54 8.46C16.5 9.45 17 10.63 17 12V13.45C17 13.86 17.16 14.22 17.46 14.53C17.76 14.84 18.11 15 18.5 15C18.92 15 19.27 14.84 19.57 14.53C19.87 14.22 20 13.86 20 13.45V12C20 9.81 19.23 7.93 17.65 6.35C16.07 4.77 14.19 4 12 4C9.81 4 7.93 4.77 6.35 6.35C4.77 7.93 4 9.81 4 12C4 14.19 4.77 16.07 6.35 17.65C7.93 19.23 9.81 20 12 20H17V22H12C9.25 22 6.9 21 4.95 19.05C3 17.1 2 14.75 2 12C2 9.25 3 6.9 4.95 4.95C6.9 3 9.25 2 12 2Z"
                      fill="#7BA5B8"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border ps-10 border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ID"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.64C11.6429 12.6414 11.296 12.76 11.0129 12.9777C10.7297 13.1954 10.5259 13.5 10.4328 13.8448C10.3396 14.1896 10.3623 14.5555 10.4973 14.8861C10.6323 15.2168 10.8721 15.4939 11.18 15.675V18H12.84V15.675C13.0836 15.5309 13.2857 15.3263 13.4268 15.081C13.5678 14.8356 13.643 14.558 13.645 14.275C13.645 14.0594 13.6024 13.846 13.5196 13.647C13.4368 13.448 13.3155 13.2673 13.1626 13.1153C13.0097 12.9634 12.8283 12.8431 12.6288 12.7616C12.4292 12.68 12.2156 12.6387 12 12.64Z"
                      stroke="#97CFE4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.145 8.88499H5.85C4.65707 8.88499 3.69 9.85206 3.69 11.045V19.59C3.69 20.7829 4.65707 21.75 5.85 21.75H18.145C19.3379 21.75 20.305 20.7829 20.305 19.59V11.045C20.305 9.85206 19.3379 8.88499 18.145 8.88499Z"
                      stroke="#97CFE4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.67499 8.885V7.58C6.67499 6.1664 7.23654 4.81069 8.23611 3.81112C9.23568 2.81155 10.5914 2.25 12.005 2.25C13.4186 2.25 14.7743 2.81155 15.7739 3.81112C16.7734 4.81069 17.335 6.1664 17.335 7.58V8.885"
                      stroke="#97CFE4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border ps-10 border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Passwort"
                  required
                />
              </div>

              <div>
                <Link href="/selectBranch">
                  <button className="bg-gray-50 border border-gray-300 text-[#265E739C] font-bold sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    Anmeldung
                  </button>
                </Link>
              </div>

              <div className="flex justify-between px-6">
                <p className="text-sm text-gray-50">
                  {" "}
                  Sie haben noch kein Konto?{" "}
                </p>

                <a
                  href="#"
                  className="font-medium text-[#97CFE4] border-b-2 border-[#97CFE4]"
                >
                  Registrierung
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
