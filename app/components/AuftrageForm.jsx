import Image from "next/image";
import Link from "next/link";
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

  {
    id: 3,
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

const AuftrageForm = () => {
  return (
    <>
      {items.map((item) => {
        return (

            <div key={item.id} className="bg-white border-l-4 border-[#0F6583] shadow-md w-[80%] p-5 mx-auto text-[#000000B0] mb-10 font-bold text-lg">
              <p className="mb-5">{item.paragraph}</p>

              <div className="flex gap-4 justify-end">
                <Image
                  src={item.images[0].img1}
                  width={100}
                  height={100}
                  className="rounded-full w-14 h-14 object-cover"
                ></Image>
                <Image
                  src={item.images[0].img2}
                  width={100}
                  height={100}
                  className="rounded-full w-14 h-14 object-cover"
                ></Image>

                <Image
                  src={item.images[0].img3}
                  width={100}
                  height={100}
                  className="rounded-full w-14 h-14 object-cover"
                ></Image>
              </div>
            </div>
         
        );
      })}
    </>
  );
};

export default AuftrageForm;
