import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);
  console.log(cards);

  return (
    <div className="w-screen">
      <div className="grid h-[500px] w-full place-items-center">
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              cards={cards}
              setCards={setCards}
              {...card}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({
  id,
  url,
  setCards,
  cards,
  index,
  job,
  description,
  company,
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;
  console.log(isFront);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  //   return (
  //     <div className="relative w-72">
  //       <motion.img
  //         src={url}
  //         alt="Placeholder alt"
  //         className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
  //         style={{
  //           gridRow: 1,
  //           gridColumn: 1,
  //           x,
  //           opacity,
  //           rotate,
  //           transition: "0.125s transform",
  //           zIndex: index,
  //           boxShadow: isFront
  //             ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
  //             : undefined,
  //         }}
  //         animate={{
  //           scale: isFront ? 1 : 0.98,
  //         }}
  //         drag={isFront ? "x" : false}
  //         dragConstraints={{
  //           left: 0,
  //           right: 0,
  //         }}
  //         onDragEnd={handleDragEnd}
  //       />
  //       <div className="absolute bottom-0 w-full bg-white rounded-b-lg shadow-lg p-4 text-center">
  //         <h3 className="text-lg font-semibold">{job || "Job Title"}</h3>
  //         {description && <p className="text-sm text-gray-600">{description}</p>}
  //         {company && <p className="text-xs text-gray-400">{company}</p>}
  //       </div>
  //     </div>
  //   );
  // };

  // export default SwipeCards;

  return (
    <div className="absolute flex justify-center items-center">
      <motion.div
        className="relative w-72"
        style={{
          x,
          opacity,
          rotate,
          zIndex: index,
        }}
        animate={{
          scale: isFront ? 1 : 0.98,
        }}
        drag={isFront ? "x" : false}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
      >
        <motion.img
          src={url}
          alt="Placeholder alt"
          className="h-96 w-full origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
          style={{
            transition: "0.125s transform",
            boxShadow: isFront
              ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
              : undefined,
          }}
        />
        <div className="absolute bottom-0 w-full bg-white rounded-b-lg shadow-lg p-4 text-center">
          <h3 className="text-lg font-semibold">{job || "Job Title"}</h3>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
          {company && <p className="text-xs text-gray-400">{company}</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Developer",
    description: "Building cool stuff",
    company: "Tech Co.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Staff Manager",
    description: "Managing teams",
    company: "Business Inc.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Designer",
    description: "Creating amazing visuals",
    company: "Creative Agency",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Customer support",
    description: "Helping out clients",
    company: "C4C",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Technical support",
    description: "Be the technical solution",
    company: "Technical Agency",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Software Engineer",
    description: "Engineering",
    company: "Engineering Agency",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Accountant",
    description: "Creating money flow",
    company: "Accountancy Agency",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    job: "Assistant",
    description: "Be there for the boss",
    company: "Creative Assistant",
  },
];
