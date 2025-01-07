import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScrollAnimation = (
  ref: React.RefObject<HTMLDivElement | null>,
  translateY: number = -200
) => {
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        y: translateY,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [ref, translateY]);
};
