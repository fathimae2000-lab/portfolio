"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSlideBtns from "../components/WorkSlideBtns"
import {  Variants } from "framer-motion" 

const projects = [
  {
    num: "01",
    category: "CRM Platform",
    title: "Library Management",
    description:
      "CRM is a fully responsive CRM platform that organizes client profiles, communication histories, and live sales pipelines into a clean dashboard. It handles complex async operations like deep searching and instant deal updates perfectly, keeping your business data updated in real time with zero layout lag.",
    stack: [
      { name: "React Js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/crm.png",
    live: "https://crm-software-frontend-8x45jvgvm-fathimae2000-labs-projects.vercel.app",
    github: "https://github.com/fathimae2000-lab/crm_software_frontend",
  },
   {
    num: "02",
    category: "ERP Platform",
    title: "Library Management",
    description:
      "CRM is a fully responsive CRM platform that organizes client profiles, communication histories, and live sales pipelines into a clean dashboard. It handles complex async operations like deep searching and instant deal updates perfectly, keeping your business data updated in real time with zero layout lag.",
    stack: [
      { name: "React Js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/erp.png",
    live: "https://small-erp.vercel.app",
    github: "https://github.com/fathimae2000-lab/small_erp"
  },
  {
    num: "03",
    category: "Fullstack Ecommerce",
    title: "",
    description:
      "Developed a full-stack E-Commerce application using React.js, Bootstrap, and SCSS with a Node.js and Express.js backend. Implemented Redux for state management and features like product listing, cart, authentication, and responsive UI.",
    stack: [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "SCSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Redux" }
    ],
    video: "/assets/fullstack_ecomerce.mp4",
    live: "",
    github: "https://github.com/fathimae2000-lab/fullstack-ecommerce"
  },
   {
    num: "04",
    category: "CineMatch Movie App",
    title: "",
    description:
      "CineMatch is a sleek, content-focused movie discovery web application powered by the TMDb API. The platform features an asymmetrical dashboard grid that pairs real-time, dynamic media streams with an immersive, high-contrast user interface, allowing users to effortlessly explore trending titles, ratings, and cinematic synopses.",
    stack: [
      { name: "Html 5" },
      { name: "TailwindCss" },
      { name: "JavaScript" },
      { name: "NextJs" },
      { name: "Redux" },
      {name:"TMDb"}
    ],
    video: "/assets/movie_app.mp4",
    live: "https://movie-app-b631.vercel.app/",
    github: "https://github.com/fathimae2000-lab/movie_app"
  },
 
]

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}
const Projects = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2, 
          duration: 0.5,
          ease: "easeOut"
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          {/* TEXT CONTENT */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <motion.div 
              key={project.num}
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-[30px] h-[50%]"
            >
              {/* outline num */}
              <motion.div variants={textItemVariants} className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </motion.div>

              {/* project category */}
              <motion.h2 variants={textItemVariants} className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category}
              </motion.h2>

              {/* project description */}
              <motion.p variants={textItemVariants} className="text-white/60">
                {project.description}
              </motion.p>

              {/* stack list */}
              <motion.ul variants={textItemVariants} className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <span key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </span>
                ))}
              </motion.ul>

              {/* border */}
              <motion.div variants={textItemVariants} className="border border-white/20"></motion.div>

              {/* project link buttons */}
              <motion.div variants={textItemVariants} className="flex items-center gap-4">
                {/* live link */}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.button 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                          >
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-colors" />
                          </motion.button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github link */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.button 
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-colors" />
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View on GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* SLIDER CONTENT */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-black/10 overflow-hidden rounded-xl">
                    
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full h-full"
                    >
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Image
                          src={item.image || "/placeholder.png"}
                          fill
                          className="object-contain"
                          alt={item.title || "Project Image"}
                        />
                      )}
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Projects