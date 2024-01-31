import Image from "next/image";
import React from "react";

const items = [
  {
    id: 1,
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consectetur ducimus impedit voluptatibus porro unde ea, at pariatur! In odio recusandae dicta esse tenetur, eaque repellendus facere nisi velit voluptatibus quibusdam ab distinctio tempora amet earum asperiores maiores doloribus labore.",

    images: [
      {
        img1: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: 2,
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consectetur ducimus impedit voluptatibus porro unde ea, at pariatur! In odio recusandae dicta esse tenetur, eaque repellendus facere nisi velit voluptatibus quibusdam ab distinctio tempora amet earum asperiores maiores doloribus labore.",

    images: [
      {
        img1: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

const Gesamtauftrag = () => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h1 className="text-center text-2xl text-[#2D3748] mb-5">
              Team {item.id}
            </h1>

            <div
              
              className="flex gap-6 flex-col bg-white border-l-4 border-[#0F6583] shadow-md w-[80%] p-5 mx-auto text-[#000000B0] mb-10 font-bold text-lg "
            >
              <div className="flex border-b-2">
                <div className="flex items-center w-1/5">
                  <Image
                    width={200}
                    height={200}
                    class="rounded-[15px] w-[35px] h-[60px] object-cover  mr-4 "
                    src={items[0].images[0].img1}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[#2D3748]">Alex Liras</p>
                    <p className="text-sm text-[#718096] font-normal">alexa@simmmple.com</p>
                  </div>
                </div>

                <div className="w-4/5">
                  <p className="mb-5">{item.paragraph}</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex items-center w-1/5">
                  <Image
                    width={200}
                    height={200}
                    class="rounded-[15px] w-[35px] h-[60px] object-cover  mr-4 "
                    src={items[0].images[0].img1}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[#2D3748]">Alex Liras</p>
                    <p className="text-sm text-[#718096] font-normal">alexa@simmmple.com</p>
                  </div>
                </div>

                <div className="w-4/5">
                  <p className="mb-5">{item.paragraph}</p>
                </div>
              </div>

              


            </div>
          </div>
        );
      })}
    </>
  );
};

export default Gesamtauftrag;
