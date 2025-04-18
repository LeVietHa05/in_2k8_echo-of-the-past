import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Link
        href={'/detail'}
        className="center w-[699] h-[450px] envelop-container cursor-pointer">
        {/* Envelope Image */}
        <div className="w-full h-full absolute">
          <Image
            src="/front-envelope.png" // Ensure this matches the filename in /public/
            alt="Envelope"
            width={3166}
            height={2201}
            quality={75}
            priority
            className=" z-4 absolute bottom-0 envelope"
          />
        </div>
        <div className="absolute z-2 w-full h-full ">
          {/* Sliding Paper */}
          <div className="w-[607px] h-[410px] absolute">
            <Image
              src="/paper1.png" // Ensure this matches the filename in /public/
              alt="Envelope"
              width={607}
              height={410}
              className="absolute paper z-1 left-[10%] top-[5%] rotate-355 clippath-custom"
              style={{
                width: "90%",
              }}
            />
          </div>
          <Image
            src="/paper2.png" // Ensure this matches the filename in /public/
            alt="Envelope"
            width={633}
            height={444}
            className="absolute paper z-2 left-[8%] top-[5%] rotate-350 clippath-custom"
            style={{
              width: "90%",
            }}
          />
          <Image
            src="/paper2.png" // Ensure this matches the filename in /public/
            alt="Envelope"
            width={633}
            height={444}
            className="absolute paper z-3 left-[10%] top-[10%] rotate-345 clippath-custom"
            style={{
              width: "90%",
            }}
          />
          <div className="w-[607px] h-[410px] absolute">
            <Image
              src="/paper1.png" // Ensure this matches the filename in /public/
              alt="Envelope"
              width={607}
              height={410}
              className="absolute paper z-4 left-[15%] top-[23%] rotate-341 clippath-custom"
              style={{
                width: "90%",
              }}
            />
          </div>
        </div>
        <div className="w-full h-full absolute">
          <Image
            src="/back-envelope.png" // Ensure this matches the filename in /public/
            alt="Envelope"
            width={3245}
            height={2731}
            quality={75}
            priority
            className=" z-1 absolute bottom-0 envelope"
          />
        </div>
      </Link>
    </div>
  );
}
