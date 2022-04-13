import React from "react";
import Link from "next/link";

function ButtonOderNow() {
  return (
    <Link href="/Shop">
      <button className="bg-[#ff514e] rounded-3xl font-bold text-white py-2 px-3 uppercase border-2 border-[#ff514e] hover:bg-white hover:text-[#ff514e]">
        Order Now
      </button>
    </Link>
  );
}
export default ButtonOderNow;
