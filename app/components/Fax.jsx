"use client"

const Fax = () => {


  return (
    <div className="bg-white w-[80%] mx-auto shadow-lg rounded-t-lg">
    <div className="bg-[#3AB3B3] p-2 text-white rounded-t-lg">
    Neue Nachricht
    </div>

    <div>
      <div className="flex">
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Vom       :"
      />
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2 border-l-2"
        placeholder="Zu              :"
      />
      </div>

      <div className="flex">
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Telefon  :"
      />
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2 border-l-2"
        placeholder="Telefon      :"
      />
      </div>

      <div className="flex">
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Fax        :"
      />
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2 border-l-2"
        placeholder="Fax            :"
      />
      </div>

      <div className="flex">
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Datum   :"
      />
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2 border-l-2"
        placeholder="Seitenzahl :"
      />
      </div>

      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Thema  :"
      />
      




    
      <textarea
        name=""
        id=""
        className="w-full !outline-none p-2 h-[500px] resize-none"
        
          
      ></textarea>
    </div>

    <div className="bg-gray-50 p-3 rounded-b-lg">

      <div className="flex items-center gap-3">

          <div className="flex gap-4">
          <button className="px-8 py-2 text-white bg-[#3AB3B3] rounded-lg">
          Schicken
        </button>

          </div>
    
        <div id="x" className="flex items-center ml-auto gap-2">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0007 8.66634C12.9173 8.66634 13.6673 7.91634 13.6673 6.99967C13.6673 6.08301 12.9173 5.33301 12.0007 5.33301C11.084 5.33301 10.334 6.08301 10.334 6.99967C10.334 7.91634 11.084 8.66634 12.0007 8.66634ZM12.0007 10.333C11.084 10.333 10.334 11.083 10.334 11.9997C10.334 12.9163 11.084 13.6663 12.0007 13.6663C12.9173 13.6663 13.6673 12.9163 13.6673 11.9997C13.6673 11.083 12.9173 10.333 12.0007 10.333ZM12.0007 15.333C11.084 15.333 10.334 16.083 10.334 16.9997C10.334 17.9163 11.084 18.6663 12.0007 18.6663C12.9173 18.6663 13.6673 17.9163 13.6673 16.9997C13.6673 16.083 12.9173 15.333 12.0007 15.333Z"
                fill="#767676"
              />
            </svg>
          </button>

          <button>
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50065 15.4167C1.50065 16.425 2.32565 17.25 3.33398 17.25H10.6673C11.6757 17.25 12.5007 16.425 12.5007 15.4167V4.41667H1.50065V15.4167ZM13.4173 1.66667H10.209L9.29232 0.75H4.70898L3.79232 1.66667H0.583984V3.5H13.4173V1.66667Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </button>
   
         
       
        </div>
      </div>
    </div>


  </div>
  )
}

export default Fax