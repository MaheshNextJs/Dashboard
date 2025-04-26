"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const imagePath = "/organization.png";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen pl-10 bg-white border-r border-gray-300 shadow-lg p-4 flex flex-col">
      <div className="mb-8">
        <Image
          src={imagePath}
          width={32}
          height={32}
          alt="Logo"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link href="/" className={pathname === "/" ? "text-blue-600" : ""}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/article"
              className={pathname === "/article" ? "text-blue-600" : ""}
            >
              Article
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? "text-blue-600" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className={pathname === "/career" ? "text-blue-600" : ""}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className={pathname === "/product" ? "text-blue-600" : ""}
            >
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
