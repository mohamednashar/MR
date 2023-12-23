import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal1 = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
          ></div>

          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#ECEFF1] text-left overflow-hidden shadow-xl w-2/3 p-5 rounded-[25px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}

              transition={{ duration: 0.3 }}
            >
              <h1 className="text-center text-[#7B838B] text-xl mb-5 font-semibold">
                Standort
              </h1>

              <div className="bg-white p-5 rounded-[25px]">
              <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            

                
                
                <div className="flex justify-end mt-5">
                  <button id="x"
                    className="rounded-[25px] py-4 px-8 bg-[#3AB3B3] text-white transition-all duration-200 hover:bg-[#329a9a]"
                    onClick={onClose}
                  >
                    speichern
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal1;
