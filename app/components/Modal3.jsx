import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserDetails from "./UserDetails";

const Modal3 = ({ isOpen, onClose }) => {
  const handleModalClick = (e) => {
    // Check if the click occurred outside the inner modal content
    if (e.target.classList.contains("fixed") ) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleModalClick}
        >
          <div
            className="fixed inset-0 transition-opacity "
            aria-hidden="true"
          ></div>

          <motion.div
            className="fixed inset-0 flex items-center justify-center "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#ECEFF1] text-left  shadow-xl w-7/12 p-5 rounded-[25px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div >
                <div className="text-[#7B838B] text-2xl py-4 text-center">
                  Kunden{" "}
                </div>
                <div className="bg-white flex flex-col gap-5 p-5 rounded-[25px] ">
                  <UserDetails
                    name={"Usama Rabie"}
                    email={"usamarabie21@gmail.com"}
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />

                  <UserDetails
                    name={"Usama Rabie"}
                    email={"usamarabie21@gmail.com"}
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />

                  <UserDetails
                    name={"Usama Rabie"}
                    email={"usamarabie21@gmail.com"}
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />

                  <UserDetails
                    name={"Usama Rabie"}
                    email={"usamarabie21@gmail.com"}
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                     <UserDetails
                    name={"Usama Rabie"}
                    email={"usamarabie21@gmail.com"}
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                  
                 
                </div>

                <div className="mt-5 mb-10 p-5 flex flex-col ">
                  <div className="bg-white p-2 mb-2">
                    <input type="checkbox" id="first" />{" "}
                    <label htmlFor="first">
                      {" "}
                      <span className="text-[#202124] font-bold">
                        Build prototypes without code
                      </span>
                      <span className="text-[#0000008A] mx-4">
                        Sunt qui esse pariatur duis deserunt mollit dolore
                        cillum minim tempor enim.{" "}
                      </span>
                    </label>
                  </div>
                  <div className="bg-white p-2 mb-2">
                    <input type="checkbox" id="second" />{" "}
                    <label htmlFor="second">
                      <span className="text-[#202124] font-bold">
                        Build prototypes without code
                      </span>
                      <span className="text-[#0000008A] mx-4">
                        Sunt qui esse pariatur duis deserunt mollit dolore
                        cillum minim tempor enim.{" "}
                      </span>
                    </label>
                  </div>
                  <div className="bg-white p-2 mb-2">
                    <input type="checkbox" id="third" />{" "}
                    <label htmlFor="third">
                    <span className="text-[#202124] font-bold">
                        Build prototypes without code
                      </span>
                      <span className="text-[#0000008A] mx-4">
                        Sunt qui esse pariatur duis deserunt mollit dolore
                        cillum minim tempor enim.{" "}
                      </span>
                    </label>
                  </div>
                  <div className="bg-white p-2 mb-2">
                    <input type="checkbox" id="fourth" />{" "}
                    <label htmlFor="fourth">
                    <span className="text-[#202124] font-bold">
                        Build prototypes without code
                      </span>
                      <span className="text-[#0000008A] mx-4">
                        Sunt qui esse pariatur duis deserunt mollit dolore
                        cillum minim tempor enim.{" "}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-5">
                <button
                  className="rounded-[25px] py-4 px-8 bg-[#3AB3B3] text-white transition-all duration-200 hover:bg-[#329a9a]"
                  onClick={onClose}
                >
                  speichern
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal3;
