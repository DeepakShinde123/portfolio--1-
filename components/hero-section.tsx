import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useCallback } from "react";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientText = styled.span`
  background: linear-gradient(
    45deg,
    #ff4500,
    #ff1493,
    #ff0000,
    #8a2be2,
    #ffff00,
    #0000ff
  );
  background-size: 300% 300%;
  animation: ${gradientAnimation} 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const starAnimation = keyframes`
  0%, 100% { clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }
  50% { clip-path: polygon(50% 30%, 61% 55%, 98% 55%, 68% 77%, 79% 100%, 50% 90%, 21% 100%, 32% 77%, 2% 55%, 39% 55%); }
`;

const StarButton = styled(motion.button)`
  position: relative;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      #ff4500,
      #ff1493,
      #ff0000,
      #8a2be2,
      #ffff00,
      #0000ff
    );
    z-index: -1;
    animation: ${starAnimation} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background-color: black;
    z-index: -1;
  }
`;

export function HeroSection() {
  const handleGetInTouch = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        contactSection.focus();
      }, 1000);
    }
  }, []);

  return (
    <section className="container flex flex-col items-center justify-center min-h-screen gap-8 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GradientText>Hi, I'm Deepak Shinde</GradientText>
      </motion.h1>
      <motion.p
        className="max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Full Stack Developer building accessible, high-performance web apps with
        modern technologies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <StarButton onClick={handleGetInTouch}>Get in Touch</StarButton>
      </motion.div>
    </section>
  );
}
