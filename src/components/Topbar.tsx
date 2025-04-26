"use client";
import Image from "next/image";

const imagePath = "/man.png";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-300 shadow-md">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-2xl border-gray-400 w-1/3 pl-6 ml-30"
      />
      <div className="flex items-center gap-4 pr-8">
        <Image
          src={imagePath}
          width={32}
          height={32}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">Kalyani Kumar</span>
      </div>
    </header>
  );
};

export default Topbar;
