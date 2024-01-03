"use client"

import EmojiPicker, { EmojiStyle } from "emoji-picker-react"
import { useState, useRef, useEffect } from "react"

const Email = () => {

  const [selectedEmoji, setSelectedEmoji] = useState("1f60a")
  const [inputValue, setInputValue] = useState("")
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)
  const buttonRef = useRef(null)

  function onClick(emojiData, event) {
    setInputValue(
      (inputValue) =>
        inputValue +
        (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    )
    setSelectedEmoji(emojiData.unified)
  }

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen((prevState) => !prevState)
  }

  // Set the position of the emoji picker when it opens
  useEffect(() => {
    if (isEmojiPickerOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const pickerHeight = 300 // Adjust this value as needed
      document.documentElement.style.setProperty(
        "--emoji-picker-top",
        `${buttonRect.top - pickerHeight}px`
      )
    }
  }, [isEmojiPickerOpen])

  return (
    <div className="bg-white w-[80%] mx-auto shadow-lg rounded-t-lg ">
    <div className="bg-[#3AB3B3] p-2 text-white rounded-t-lg">
    Neue Nachricht
    </div>

    <div>
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Vom"
      />
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Zu"
      />
      <input
        type="text"
        className="border-b-2 w-full !outline-none p-2"
        placeholder="Thema"
      />
      <textarea
        name=""
        id=""
        className="w-full !outline-none p-2 h-[600px] resize-none"
        value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          
      ></textarea>
    </div>

    <div className="bg-gray-50 p-3 rounded-b-lg">

      <div className="flex items-center gap-3">

          <div className="flex gap-4">
          <button className="px-8 py-2 text-white bg-[#3AB3B3] rounded-lg">
          Schicken
        </button>

        <div className="flex gap-3">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1243 6.50033V17.042C16.1243 19.0678 14.4835 20.7087 12.4577 20.7087C10.4318 20.7087 8.79102 19.0678 8.79102 17.042V5.58366C8.79102 4.31866 9.81768 3.29199 11.0827 3.29199C12.3477 3.29199 13.3743 4.31866 13.3743 5.58366V15.2087C13.3743 15.7128 12.9618 16.1253 12.4577 16.1253C11.9535 16.1253 11.541 15.7128 11.541 15.2087V6.50033H10.166V15.2087C10.166 16.4737 11.1927 17.5003 12.4577 17.5003C13.7227 17.5003 14.7493 16.4737 14.7493 15.2087V5.58366C14.7493 3.55783 13.1085 1.91699 11.0827 1.91699C9.05685 1.91699 7.41602 3.55783 7.41602 5.58366V17.042C7.41602 19.8287 9.67102 22.0837 12.4577 22.0837C15.2443 22.0837 17.4993 19.8287 17.4993 17.042V6.50033H16.1243Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </button>

          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.57565 12.0003C4.57565 10.4328 5.84982 9.15866 7.41732 9.15866H11.084V7.41699H7.41732C4.88732 7.41699 2.83398 9.47033 2.83398 12.0003C2.83398 14.5303 4.88732 16.5837 7.41732 16.5837H11.084V14.842H7.41732C5.84982 14.842 4.57565 13.5678 4.57565 12.0003ZM8.33398 12.917H15.6673V11.0837H8.33398V12.917ZM16.584 7.41699H12.9173V9.15866H16.584C18.1515 9.15866 19.4257 10.4328 19.4257 12.0003C19.4257 13.5678 18.1515 14.842 16.584 14.842H12.9173V16.5837H16.584C19.114 16.5837 21.1673 14.5303 21.1673 12.0003C21.1673 9.47033 19.114 7.41699 16.584 7.41699Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </button>

          <button ref={buttonRef} onClick={toggleEmojiPicker}>
          
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99148 0.833008C4.93148 0.833008 0.833984 4.93967 0.833984 9.99967C0.833984 15.0597 4.93148 19.1663 9.99148 19.1663C15.0607 19.1663 19.1673 15.0597 19.1673 9.99967C19.1673 4.93967 15.0607 0.833008 9.99148 0.833008ZM10.0007 17.333C5.94898 17.333 2.66732 14.0513 2.66732 9.99967C2.66732 5.94801 5.94898 2.66634 10.0007 2.66634C14.0523 2.66634 17.334 5.94801 17.334 9.99967C17.334 14.0513 14.0523 17.333 10.0007 17.333ZM13.209 9.08301C13.9698 9.08301 14.584 8.46884 14.584 7.70801C14.584 6.94717 13.9698 6.33301 13.209 6.33301C12.4482 6.33301 11.834 6.94717 11.834 7.70801C11.834 8.46884 12.4482 9.08301 13.209 9.08301ZM6.79232 9.08301C7.55315 9.08301 8.16732 8.46884 8.16732 7.70801C8.16732 6.94717 7.55315 6.33301 6.79232 6.33301C6.03148 6.33301 5.41732 6.94717 5.41732 7.70801C5.41732 8.46884 6.03148 9.08301 6.79232 9.08301ZM10.0007 15.0413C12.1365 15.0413 13.9515 13.703 14.6848 11.833H5.31648C6.04982 13.703 7.86482 15.0413 10.0007 15.0413Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </button>
          {isEmojiPickerOpen && (
        <div 
          style={{
            position: "absolute",
            top: 450,
            right:620,
            
            zIndex: 1,

          }}
          
        >
          <EmojiPicker
            onEmojiClick={onClick}
            autoFocusSearch={false}
            emojiStyle={EmojiStyle.NATIVE}
          />
        </div>
      )}

          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.18744 17.7077C3.52744 17.7077 2.92244 17.3593 2.60161 16.791L0.438277 13.0327C0.108277 12.4643 0.117444 11.7677 0.447444 11.1993L6.25911 1.19852C6.58911 0.639349 7.19411 0.291016 7.84494 0.291016H9.49902H9.98994H12.1443C12.7951 0.291016 13.4001 0.639349 13.7301 1.19852L19.5418 11.1993C19.8718 11.7677 19.881 12.4643 19.551 13.0327L17.3876 16.791C17.0668 17.3593 16.4618 17.7077 15.8018 17.7077H9.99931L9.98994 17.6733V17.7077H4.18744ZM9.49902 15.8743H9.98994H15.8018L17.956 12.1252L12.1443 2.12435H9.99931L9.98994 2.09001V2.12435H7.84494L2.03328 12.1252L4.18744 15.8743H9.49902ZM5.64494 13.5827L4.97578 12.4185L9.17411 5.10352H9.49902H9.98994H10.8151L15.0135 12.4185L14.3443 13.5827H9.98994H9.49902H5.64494ZM9.49902 11.7493H9.98994H12.511L9.99931 7.34018L9.98994 7.29829V7.34018L7.47828 11.7493H9.49902Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </button>

          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75H2.58333C1.575 0.75 0.75 1.575 0.75 2.58333V15.4167C0.75 16.425 1.575 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167ZM5.79167 10.375L8.08333 13.1342L11.2917 9L15.4167 14.5H2.58333L5.79167 10.375Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
          </button>
        </div>

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

export default Email