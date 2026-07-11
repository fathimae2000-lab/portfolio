"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { FiDownload } from "react-icons/fi"

import Social from "./components/ui/Social"
import Photo from "./components/ui/Photo"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-x-20 xl:pt-8 xl:pb-24">

          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              className="text-xl block"
            >
              Software Developer
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="h1 mb-6"
            >
              Hello I'm <br /> <span className="text-accent xl:inline-block xl:mt-3">Fathima E</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="max-w-[500px] mb-9 text-white/80"
            >
              Passionate Full Stack Developer focused on building responsive and user-friendly web applications using React.js, Next.js, Node.js, and Express.js. Skilled in creating modern UI designs and scalable backend systems with clean and efficient code.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home