// components/MeetOurTalent.tsx
import Footer from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ismoyo Refal Dipojati",
    role: "Designer",
    photo:
      "https://i.ibb.co.com/RNWdn6k/Whats-App-Image-2024-11-04-at-12-27-22-e0de016e.jpg",
  },
  {
    name: "Rava Syaqqiya",
    role: "Web Developer",
    photo:
      "https://i.ibb.co.com/PDFDXgM/Whats-App-Image-2024-11-04-at-12-27-37-b87127fe.jpg",
  },
  {
    name: "Dzulham Affandi",
    role: "UI/UX Design",
    photo:
      "https://i.ibb.co.com/nMpYZFD/Whats-App-Image-2024-11-04-at-12-31-44-397bf35e.jpg",
  },
  { name: "Joko", role: "Graphic Design", photo: "photo4.jpg" },
];

const Tim: React.FC = () => {
  return (
    <div>
      <Nav />
      <section className="pt-16">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#004d40]">
              OUR TEAM
            </h1>
            <p className="text-center mb-12 text-[#004d40]">
              our team is a collection of creative and innovative individuals
              committed to delivering exceptional event experiences. With a
              spirit of collaboration and out-of-the-box thinking, we
              continuously explore new ideas to create unforgettable moments for
              our audience. Together, we make every event a living work of art.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h2 className="text-xl font-bold text-[#004d40]">
                    {member.name}
                  </h2>
                  <p className="text-gray-700">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Tim;
