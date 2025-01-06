const customEase = [0.45, 0, 0.55, 1];

export const slideDown = (delay = 0, duration = 0.5) => ({
  hidden: {
    y: "-100%",
    transition: {
      duration,
      delay,
      ease: customEase,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration,
      delay,
      ease: customEase,
    },
  },
});
