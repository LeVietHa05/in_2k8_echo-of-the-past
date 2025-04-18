import Image from "next/image";
import Link from "next/link";

interface Cardprops {
  text: string;
  bg: string;
  goTo: string;
}

export default function Card({ text, bg, goTo }: Cardprops) {
  const newText = text.split("\n");
  return (
    <div className="animate relative max-w-[440px] h-[297px] w-full flex items-center justify-center">
      <Image
        src={bg}
        fill={true}
        objectFit="cover"
        alt="bg"
        className={`${bg.includes("2") ? "rotate-180" : ""}`}
      />
      <ul
        className={`relative z-1 list-disc px-12 leading-9 ${
          bg.includes("2") ? "pl-20" : ""
        }`}>
        {newText.map((item, index) => (
          <li key={index} className="text-left ">
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={goTo}
        className="absolute bottom-4 right-4 text-2xl animate-ping cursor-pointer">
        Click me
      </Link>
    </div>
  );
}
