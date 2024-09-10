import { useRef, useState, useEffect } from "react";
function useHover() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const enter = () => setIsHovered(true);
  const leave = () => setIsHovered(false);
  useEffect(() => {
    const element = ref.current;

    // Ensure the DOM element exists before adding event listeners
    if (element) {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      }
    };
  }, [ref.current]); // Dependency array includes ref.current

  return [ref, isHovered];
}
export default useHover;
