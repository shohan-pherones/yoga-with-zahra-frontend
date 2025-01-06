"use client";

import gsap from "gsap";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import Overlay from "./Overlay";

const Hero = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const opt = useRef({
    width: 0,
    height: 0,
    midY: 0,
    points: 80,
    stretch: 10,
    sinHeight: 0,
    speed: -0.1,
    strokeColor: "#ffffff",
    strokeWidth: 1.5,
  });

  useEffect(() => {
    const c = document.querySelector("canvas") as HTMLCanvasElement;

    opt.current.width = c?.offsetWidth;
    opt.current.height = c?.offsetHeight;
    opt.current.midY = c?.offsetHeight / 2;

    c.width = opt.current.width * 2;
    c.height = opt.current.height * 2;
    c.style.width = opt.current.width.toString();
    c.style.height = opt.current.height.toString();

    const ctx = c.getContext("2d") as CanvasRenderingContext2D;
    ctx?.scale(2, 2);

    ctx.strokeStyle = opt.current.strokeColor;
    ctx.lineWidth = opt.current.strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let time = 0;

    const render = () => {
      window.requestAnimationFrame(render);
      ctx.clearRect(0, 0, opt.current.width, opt.current.height);
      time += 1;
      ctx.beginPath();

      let increment = 0;

      for (let i = 0; i <= opt.current.points; i++) {
        if (i < opt.current.points / 2) {
          increment += 0.1;
        } else {
          increment += -0.1;
        }

        const x = (opt.current.width / opt.current.points) * i;
        const y =
          opt.current.midY +
          Math.sin(time * opt.current.speed + i / opt.current.stretch) *
            opt.current.sinHeight *
            increment;

        ctx.lineTo(x, y);
      }

      ctx.stroke();
    };

    render();
  }, []);

  const handlePlayMusic = () => {
    setIsMuted(!isMuted);

    if (isMuted) {
      gsap.to(opt.current, {
        duration: 1,
        sinHeight: 4,
        stretch: 5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(opt.current, {
        duration: 1,
        sinHeight: 0,
        stretch: 10,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)] relative overflow-hidden">
      <Suspense fallback={<Loading />}>
        <video
          autoPlay
          loop
          muted={isMuted}
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Overlay />
        <h1 className="absolute top-0 left-0 right-0 bottom-0 z-[2] flex items-center justify-center text-center text-[10vw] text-white font-medium">
          Yoga with Zahra
        </h1>
        <button
          onClick={handlePlayMusic}
          className="absolute bottom-10 right-10 z-[2] text-white flex items-center gap-5"
        >
          {isMuted ? <span>Play</span> : <span>Pause</span>}
          <canvas
            width="200"
            height="200"
            className="w-[100px] h-[100px] cursor-pointer"
          />
        </button>
      </Suspense>
    </div>
  );
};

export default Hero;
