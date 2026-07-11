"use client"

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaBootstrap,
} from "react-icons/fa"
import { SiRedux, SiExpress, SiPrisma, SiMongodb, SiPostgresql } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../components/ui/tooltip"
import { ScrollArea } from "../components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
    title: "About me",
    description: "Passionate Full Stack Developer with experience in building responsive and user-friendly web applications using React.js, Next.js, Node.js, and Express.js. Skilled in creating modern UI designs, state management with Redux, and developing scalable backend systems. Focused on writing clean code and delivering smooth user experiences.",
    info: [
        { fieldName: "Name", fieldValue: "Fathima E" },
        { fieldName: "Phone", fieldValue: "+91 8592032757" },
        { fieldName: "Experience", fieldValue: "3 months" },
        { fieldName: "Email", fieldValue: "fathijais858@gmail.com" },
        { fieldName: "Freelance", fieldValue: "Available" },
    ]
}

const experience = {
    title: "My Experience",
    description:
        "Gained hands-on experience in full-stack web development through a MERN Stack internship, working with technologies such as React.js, Node.js, Express.js, MongoDB, and Redux. Developed responsive web applications, improved frontend UI/UX, and collaborated on real-world projects while strengthening problem-solving and coding skills.",
    items: [
        {
            company: "Upcode Software Labs",
            position: "Full Stack Intern",
            duration: "3 Months"
        }
    ]
}

const education = {
    title: "My Education",
    description:
        "Completed Higher Secondary education and later pursued a MERN Stack internship program to build practical web development skills. After a career break of 6 years, restarted my academic journey by enrolling in the Bachelor of Computer Applications (BCA) program at IGNOU through distance education, while continuing to strengthen my full-stack development expertise.",
    items: [
        {
            institution: "IGNOU University",
            degree: "Bachelor of Computer Applications (BCA)",
            duration: "2025 - Present"
        },
        {
            institution: "Upcode Software Labs",
            degree: "MERN Stack Internship Programme",
            duration: "2024 - Present"
        },
        {
            institution: "Higher Secondary Education",
            degree: "Plus Two",
            duration: "2016-2018"
        }
    ]
}

const skills = {
    title: "My Skills",
    description: "Technologies I use to bring ideas to life.",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <DiNodejsSmall />, name: "Node.js" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiExpress />, name: "ExpressJs" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPostgresql />, name: "Postgresql" },
        { icon: <SiPrisma />, name: "Prisma" },
    ]
}

// 1. Container ആനിമേഷൻ (ഉള്ളിലെ എലമെന്റുകൾ ഒന്നിന് പുറകെ ഒന്നായി വരാൻ)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // ഓരോ എലമെന്റും തമ്മിലുള്ള ഗ്യാപ്പ്
        }
    }
}

// 2. ഓരോ ചൈൽഡ് എലമെന്റുകൾക്കുമുള്ള ആനിമേഷൻ
const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full" asChild>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-[30px] text-center xl:text-left"
                            >
                                <motion.h3 variants={itemVariants} className="text-4xl font-bold">{experience.title}</motion.h3>
                                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</motion.p>
                                <motion.div variants={itemVariants}>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => (
                                                <motion.li 
                                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                                    key={index} 
                                                    className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 shadow-md"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </motion.div>
                            </motion.div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full" asChild>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-[30px] text-center xl:text-left"
                            >
                                <motion.h3 variants={itemVariants} className="text-4xl font-bold">{education.title}</motion.h3>
                                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</motion.p>
                                <motion.div variants={itemVariants}>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => (
                                                <motion.li 
                                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                                    key={index} 
                                                    className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 shadow-md"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </motion.div>
                            </motion.div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full" asChild>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-[30px]"
                            >
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <motion.h3 variants={itemVariants} className="text-4xl font-bold">{skills.title}</motion.h3>
                                    <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</motion.p>
                                </div>
                                <motion.ul variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    {/* Hover ചെയ്യുമ്പോൾ കാർഡും ഐക്കണും ചെറുതായി വലുതാവാൻ (scale: 1.05) */}
                                                    <TooltipTrigger asChild>
                                                        <motion.button 
                                                            whileHover={{ scale: 1.05, translateY: -5 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-colors duration-300"
                                                        >
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </motion.button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left" asChild>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-[30px]"
                            >
                                <motion.h3 variants={itemVariants} className="text-4xl font-bold">{about.title}</motion.h3>
                                <motion.p variants={itemVariants} className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</motion.p>
                                <motion.ul variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 w-full">
                                    {about.info.map((item, index) => (
                                        <motion.li 
                                            whileHover={{ x: 5 }}
                                            key={index} 
                                            className="flex items-center justify-center xl:justify-start gap-4 p-2 rounded-lg hover:bg-[#232329]/30 transition-all duration-200"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;