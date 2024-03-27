import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GearIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Logout from "./Logout";
import Link from "next/link";

export default function Profile({ user }) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild id="close-popover">
          <Image
            src={user?.image}
            width={50}
            height={50}
            alt={user?.user}
            className="rounded-full ring-green-500 ring cursor-pointer hover:scale-125 transition-all animate-fade"
          />
        </PopoverTrigger>
        <PopoverContent className="w-72 space-y-5 divide-y" align="end">
          <Link href={"/admin"}>
            <Button
              className="w-full flex items-center justify-between rounded-none"
              variant="ghost"
              onClick={() => {
                document.getElementById("close-popover")?.click();
              }}
            >
              Profile <GearIcon />
            </Button>
          </Link>
          <Logout />
        </PopoverContent>
      </Popover>
    </>
  );
}
