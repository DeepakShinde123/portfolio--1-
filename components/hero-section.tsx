import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const GradientText = styled.span`
  background: linear-gradient(45deg, #FF4500, #FF1493, #FF0000, #8A2BE2, #FFFF00, #0000FF);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-screen gap-8 py-12 md:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
        <GradientText>Hi, I'm Deepak Shinde</GradientText>
      </h1>
      <p className="max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400">
       Full Stack Developer building accessible, high-performance web apps with modern technologies.
      </p>
    </section>
  )
}

