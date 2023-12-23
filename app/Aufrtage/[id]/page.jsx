import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-white border-l-4 border-[#0F6583] shadow-md w-[85%] p-5 mx-auto text-[#000000B0] mb-10 flex">
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-3">Aufgabe 1</h1>
        <p className="mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eaque
          nisi voluptates maxime dolorum dolores quo! Perferendis alias porro
          minima, possimus enim velit ipsum omnis, accusamus in tempora ea
          officia aliquid explicabo at unde vitae voluptatem recusandae nesciunt
          neque delectus.
        </p>
      </div>

      <div className="w-1/2 border-l-2 pl-4">
        <h1 className="text-lg font-bold border-b-2 pb-2">Einzelheiten</h1>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p>fdasdsfaadfs</p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={100}
              className="rounded-full w-14 h-14 object-cover"
            ></Image>

            <p>Name</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p>fdasdsfaadfs</p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={100}
              className="rounded-full w-14 h-14 object-cover"
            ></Image>

            <p>Name</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p>fdasdsfaadfs</p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={100}
              className="rounded-full w-14 h-14 object-cover"
            ></Image>

            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
