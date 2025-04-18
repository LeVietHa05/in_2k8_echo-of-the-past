'use client'


import Card from "../ui/card";

import { usePathname } from "next/navigation";

const cards = [
  {
    text: `Martyr Phạm Đăng Nuôi (born in 1934 in Phù Việt, Thanh Hà, Hà Tĩnh; his family received his death notice in 1977, but his remains have not yet been found)\nWritten to his wife, Mrs. Nguyễn Thị Thẩm, on May 20, 1966 from Thừa Thiên`,
    bg: `/paper1.png`,
    goTo: "/detail/0",
  },
  {
    text: `Martyr Phạm Khắc Duyến (died on March 17, 1975).\nWritten to his father on January 1, 1975, from Vĩnh Linh, Quảng Trị`,
    bg: `/paper2.png`,
    goTo: "/detail/1",
  },
  {
    text: `Colonel Đỗ Sâm. (He once served in the artillery regiment of North Vietnam)\nWritten to his wife on June 1968:`,
    bg: `/paper1.png`,
    goTo: "/detail/2",
  },
  {
    text: `Martyr Văn Minh\nWritten to his family on September 21st, 1972`,
    bg: `/paper2.png`,
    goTo: "/detail/3",
  },
  {
    text: `Đặng Thùy Trâm (1942–1970, a doctor and a martyr of the Vietnam War, remembered for the moving wartime diaries she wrote while serving as a battlefield physician in Quảng Ngãi province.) \nWritten to her parents on March 8, 1964:`,
    bg: `/paper1.png`,
    goTo: "/detail/4",
  },
];

export default function Detail() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="relative min-h-screen pt-30 md:px-8 sm:px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1 justify-center items-center content-center overflow-hidden">
      {cards.map((card, i) => {
        return <Card text={card.text} bg={card.bg} key={i} goTo={card.goTo} />;
      })}
    </div>
  );
}
