"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. How do I register for the Holi Madness event?",
    desc: "Register for the Holi Madness event by reaching out to us via our social media channels or by giving us a call. You’ll find our contact details at the bottom of the page.",
  },
  {
    title: "2. What are the registration fees, and what is included?",
    desc: "The registration fees depend on the plan you choose. We offer three options: STANDARD, DELUXE, and LUXURY. What's truly important is the experience and the people you’ll meet. For detailed information on each plan, check out the event poster or contact us using the details at the bottom of the page.",
  },
  {
    title: "3. Can I get a refund if I need to cancel my registration?",
    desc: "Unfortunately, we don’t offer refunds for cancellations. However, in some cases, we may consider a refund at our discretion. To request a refund, please contact us directly, and we’ll review your situation individually.",
  },
  {
    title: "4. Will there be on-site registration available?",
    desc: "Yes, on-site registration will be available, but it depends on the availability of passes. We typically sell out fast, so the chances of securing a pass at the last minute are low. Additionally, please note that the prices of passes may increase on the day of the event at our discretion. To avoid any hassle and secure the best price, we highly recommend booking your pass now.",
  },
  {
    title: "5. Can we bring alcohol or other such things inside event?",
    desc: "No, bringing alcohol or any other such items into the event is not allowed. However, don't worry! We will have a variety of beers (pint) from multiple brands available inside for you to enjoy.",
  },
  {
    title: "6: Are multiple entries and exits allowed?",
    desc: "Yes, multiple entries and exits will be allowed throughout the event. Enjoy the freedom to come and go as you please!"
  }
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            <u>Frequently asked questions</u>
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Welcome to the Holi Madness FAQ section. We&apos;re here to
            address your most common queries and provide you with the
            information you need to make the most of your experience with us.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
