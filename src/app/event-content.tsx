"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "Venue: Yet to be disclosed",
    des: "Join Us for a Colorful Celebration. Get ready for the most vibrant and unforgettable Holi celebration of the year! On 14th March 2025, VIBEIFY.LIVE is bringing the festival of colors to the heart of Jaipur, Rajasthan. Immerse yourself in an explosion of colors, music, dance, and pure joy as we celebrate this traditional Indian festival in the most spectacular way. Expect live performances, amazing DJ sets, delicious food, and, of course, the iconic Holi color fights with your friends and fellow party-goers. Whether you're dancing to the beats, sharing laughter with friends, or making new memories, this will be a celebration you’ll never forget. Mark your calendars, grab your passes, and get ready to experience the magic of Holi in a whole new way! Let’s spread love, laughter, and color—VIBEIFY.LIVE style!",
    name: "Holi Madness",
    position: "Where Colours Collide",
    panel: "Location: Jaipur, Rajathan",
    img: "/image/holi_event.png",
  },
  // {
  //   title: "Introduction to Machine Learning",
  //   des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
  //   name: "Marcell Glock",
  //   position: "Chief Executive, Spotify",
  //   panel: "Workshop",
  //   img: "/image/avatar2.jpg",
  // },
  // {
  //   title: "AI in Healthcare: Revolutionizing Patient Care",
  //   des: "This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.",
  //   name: "Marcell Glock",
  //   position: "Chief Executive, Spotify",
  //   panel: "Workshop",
  //   img: "/image/avatar3.jpg",
  // },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Day1" className="font-medium">
              <b>Future Events</b>
            </Tab>
            {/* <Tab value="Day2" className="font-medium">
              Day 2
            </Tab>
            <Tab value="Day3" className="font-medium">
              Day 3
            </Tab> */}
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
