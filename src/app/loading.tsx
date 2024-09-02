import Image from "next/image";
import React from "react";
import { PacmanLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Image
        src={"/assets/images/loader.gif"}
        width={100}
        height={100}
        alt="abc"
      />
    </section>
  );
}
