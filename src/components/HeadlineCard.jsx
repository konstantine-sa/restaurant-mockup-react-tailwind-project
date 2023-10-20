import React from "react";

function HeadlineCard({ title, text, imgURL }) {
  return (
    <div>
      <div className="rounded-xl relative select-none">
        {/* Overlay */}
        <div className="flex flex-col items-center absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4 ">{title}</p>
          <p className="px-2">{text}</p>
          <button
            className="border-white bg-white text-gray-900 mx-2 absolute bottom-4
           hover:bg-gray-200 hover:border-gray-200 hover:scale-105 hover:font-bold duration-100"
          >
            Jetzt bestellen
          </button>
        </div>

        <img
          className="max-h-[160px] h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={
            imgURL
              ? imgURL
              : "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Fotos des Gerrichts"
        />
      </div>
    </div>
  );
}

export default HeadlineCard;
