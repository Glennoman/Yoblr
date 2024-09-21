import { useEffect, useRef } from "react";
import styles from "../components/ShinyButton.module.css";

const ComplexButton = () => {
  return (
    <div className="bg-transparent min-h-[200px] flex items-center justify-center">
      <ShinySkeuButton />
    </div>
  );
};

const ShinySkeuButton = () => {
  const parentRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current.addEventListener("mouseover", () => {
      parentRef.current.style.setProperty("--size", "250px");
      parentRef.current.style.setProperty(
        "--shineColor",
        "rgba(255, 255, 255, 0.3)"
      );
    });

    btnRef.current.addEventListener("mouseleave", () => {
      parentRef.current.style.setProperty("--size", "0px");
      parentRef.current.style.setProperty(
        "--shineColor",
        "rgba(255, 255, 255, 0.0)"
      );
    });

    btnRef.current.addEventListener("mousemove", (e) => {
      parentRef.current.style.setProperty("--x", e.offsetX + "px");
      parentRef.current.style.setProperty("--y", e.offsetY + "px");
    });
  }, []);

  return (
    <div ref={parentRef} className={styles.skeuParent}>
      <button
        ref={btnRef}
        className={`overflow-hidden font-mono cursor-pointer text-primary rounded px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 border border-violet-500 transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[active:shadow-[inset_0px_3px_7px_rgba(234,179,8,0.75)]] ${styles.skeu}`}
      >
        Try it out for yourself!
      </button>
    </div>
  );
};

export default ComplexButton;
