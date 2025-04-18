"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
export default function Nav() {
  const param = useParams<{ user: string }>();
  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-white/30 backdrop-blur-sm rounded-lg p-4">
      <Link
        href={`${+param.user >= 0 ? `/detail` : "/"}/`}
        className={`text-[40px] text-gray-600 hover:text-gray-800 font-semibold flex`}>
        {+param.user >= 0 ? (
          <div className="flex items-center justify-center group">
            <Image
              src={"/arrow-left.png"}
              width={40}
              height={40}
              alt="arrow"
              className="group-hover:scale-115"
              style={{ width: "44px", height: "44px" }}
            />
            <div>Echos from the Past</div>
          </div>
        ) : (
          <div>Echos from the Past</div>
        )}
      </Link>
    </header>
  );
}
