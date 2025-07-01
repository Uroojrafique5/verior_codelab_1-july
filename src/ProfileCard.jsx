import React from "react";

const ProfileCard = ({ image, name, role, bio }) => {
  return (
    <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-extrabold text-center">{name}</h2>
      <p className="text-center text-sm text-[#aee1f9] font-medium mb-2">{role}</p>
      <p className="text-center text-white/80 text-sm mb-4">{bio}</p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-[#1e3c72] font-semibold px-4 py-1 rounded-full text-sm hover:bg-[#aee1f9] hover:text-[#1e3c72] transition">
          Connect
        </button>
        <button className="border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-[#2a5298] transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
