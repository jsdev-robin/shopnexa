import React from "react";
import Link from "next/link";
import Heading from "../ui/heading";

const MainLogo = () => {
  return (
    <Link href="/">
      <Heading as="h4" className="text-orange-500 font-bold">
        MUN
      </Heading>
    </Link>
  );
};

export default MainLogo;
