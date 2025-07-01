import React from "react";
import ProfileCard from "./ProfileCard";

const team = [
  {
    name: "Ayaan Malik",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Code is poetry. Coffee is fuel.",
  },
  {
    name: "Hina Qureshi",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Design with empathy and clarity.",
  },
  {
    name: "Zeeshan Ali",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Secure. Scalable. Strong.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 underline mb-10">
        Meet Our Creative Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <ProfileCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default App;
