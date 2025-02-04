"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Unforgettable Entertainment!",
    description:
      "At VIBEIFY.LIVE, expect non-stop excitement with electrifying performances and immersive experiences that keep you in the moment.",
    subTitle: "",
    imageUrl: "/image/about-us_1.jpg"
  },
  {
    title: "New Connections and Networking",
    description:
      "Meet like-minded people, build new friendships, and connect with influencers and professionals in a lively, fun atmosphere.",
    subTitle: "",
    imageUrl: "/image/about-us_2.jpg"
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About Us
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend Our Events ?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        At <b>VIBEIFY.LIVE</b>, we’re all about creating experiences that get you feeling the vibe and living the moment! 
        We specialize in hosting exciting events that bring people together—whether it’s a high-energy music festival, 
        an exclusive corporate gathering, or a fun-filled themed party. Every event we curate is designed to offer something special, 
        blending incredible entertainment with unforgettable experiences. With a focus on seamless organization, 
        top-tier performances, and a vibrant atmosphere, VIBEIFY.LIVE guarantees an experience you’ll remember long after the event ends. 
        Connect with us on our socials to get updates about our events—<b>no spam</b>, just the good stuff. <br />
        At VIBEIFY.LIVE, we don’t just host events:<br /><i><b>WE CREATE MEMORIES THAT LAST A LIFETIME.</b></i>
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Escape and Relaxation!"
            subTitle=""
            description="Step away from the everyday hustle and enjoy a fun-filled escape that helps you unwind, recharge, and make lasting memories."
            imageUrl="/image/about-us_3.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
