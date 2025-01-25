import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-screen gap-8 py-12 md:py-24">
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
    </section>
  );
}
