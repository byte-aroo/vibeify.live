"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://whatsapp.com/channel/0029Vb50Kv35Ejy0L2QwLG3r" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        {...({} as React.ComponentProps<typeof Button>)}
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="WhatsApp"
          src="/vibeify.live/logos/WhatsApp.png"
        />{" "}
        WhatsApp
      </Button>
    </a>
  );
}
