import React from "react";

const Annaouncement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 ">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaskylight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Lorem ipsum dolor</h1>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, vitae doloribus fugit beatae dictajjjjjj maiores..
          </p>
        </div>
        <div className="bg-lamapurplelight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Lorem ipsum dolor</h1>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, vitae doloribus fugit beatae dictajjjjjjjj maiores..
          </p>
        </div>
        <div className="bg-lamayellowlight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Lorem ipsum dolor</h1>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, vitae doloribus fugit beatae dictajjjjjjjjjj maiores..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annaouncement;
