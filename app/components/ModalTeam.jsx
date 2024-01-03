import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserTeamModal from "./UserTeamModal";

const ModalTeam = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 mt-20 "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
         

          <motion.div
            className=" flex items-center justify-center "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#ECEFF1] shadow-xl rounded-[25px] w-1/2 border-2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                scale: 0.5,
                opacity: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-center text-[#7B838B] text-xl mb-5 font-semibold mt-4">
                Team 1
              </h1>

              <div >
                <div className="bg-white p-5 rounded-[25px]">
              
                  <UserTeamModal
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    name={"Alexa Liras"}
                    email={"alexa@simmmple.com"}
                    icon={"leader"}
                  />
                  <UserTeamModal
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    name={"Alexa Liras"}
                    email={"alexa@simmmple.com"}
                    icon={"minus"}
                  />
                  <UserTeamModal
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    name={"Alexa Liras"}
                    email={"alexa@simmmple.com"}
                    icon={"minus"}
                  />
                </div>

                <div className="text-center text-[#8B9299] text-lg my-12">
                  <p>Die restlichen Mitarbeiter</p>
                </div>


                <div className="bg-white p-5 rounded-[25px]">
                
                  <UserTeamModal
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    name={"Alexa Liras"}
                    email={"alexa@simmmple.com"}
                    icon={"plus"}
                  />
                  <UserTeamModal
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    name={"Alexa Liras"}
                    email={"alexa@simmmple.com"}
                    icon={"plus"}
                  />
                  <UserTeamModal
                    img={
                      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    name={"Alexa Liras"}
                    email={"alexa@simmmple.com"}
                    icon={"plus"}
                  />
                </div>











                <div className="flex justify-end p-10 ">
                  <button
                    id="x"
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

export default ModalTeam;
