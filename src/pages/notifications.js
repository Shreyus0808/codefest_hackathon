import React, { useState, useEffect } from "react";
import api from "../Api.js";

import about from "../images/about image.png";
import user from "../images/user.png";

function Notifications() {
  const [notification, setNotification] = useState([]);
  const fetchNotification = async () => {
    try {
      const uid = 1;
      const response = await api.get(`/notifications/all`);
      if (Array.isArray(response.data)) {
        setNotification(response.data.reverse());
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  return (
    <div className="w-full h-full p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]">
      <div className="flex justify-between pb-1.5">
        <h2 className=" font-sans font-bold text-3xl text-[#AAAAAA]">
          Notifications
        </h2>
        <img src={user} className="w-10 h-10 z-10"></img>
      </div>
      <div className="flex flex-col justify-between px-0 p-4">
        <div className="bg-white p-2 rounded-xl divide-y-[3px]  items-center justify-between">
          {notification.map((n) => (
            <div className="flex py-2 justify-between w-full items-center">
              <div className="flex items-center">
                <img src={about} className="w-8 h-10 z-10"></img>
                <h1 className=" pl-4">{n.notification}</h1>
              </div>

              <h1 className="text-right">{n.created_at}</h1>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center pt-10 text-gray-400 text-xs flex justify-center">
        <svg
          className="w-5 h-5 mx-2 opacity-50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        <p className=" self-baseline">ARETE powered by Lighthouse Labs 2024</p>
      </p>
    </div>
  );
}

export default Notifications;
