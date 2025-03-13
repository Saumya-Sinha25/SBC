import React, { memo, useRef } from "react"
import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { motion } from 'framer-motion';
import A from "../public/1.jpeg"
import B from "../public/2.jpeg"
import C from "../public/3.jpeg"
import D from "../public/4.jpeg"
import E from "../public/5.jpeg"

const TeamSection = memo(() => {
    const teamMembers = [
        {
            name: "Shubham Pal",
            role: "Chair",
            image: A,
            linkedin: "https://www.linkedin.com/in/shubham-pal8317",
            github: "https://github.com/gaurangp22",
        },
        {
            name: "Adarsh Upadhyay ",
            role: "Vice Chair",
            image: B,
            linkedin: "https://www.linkedin.com/in/adarsh-upadhyay-77261b307",
            github: "https://github.com/Anant-06/Anant-06",
        },
        {
            name: "Urvashi Rawat",
            role: "Secretary",
            image: C,
            linkedin: "https://www.linkedin.com/in/urvashi-rawat-91951931a",
            github: "https://github.com/kshitijbajpai007",
        },
        {
            name: "Ashish Kumar",
            role: "Webmaster",
            image: D,
            linkedin: "https://www.linkedin.com/in/ashish-kumar-948563327",
            github: "https://github.com/MS-Programmer0",
        },
        {
            name: "Anant Chaubey",
            role: "Treasurer",
            image: E,
            linkedin: "https://www.linkedin.com/in/anant-chaubey-b543a12a0",
            github: "https://github.com/MS-Programmer0",
        },
    ]

    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <motion.section
            id="team"
            className="py-16"
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
                <div className="bg-black backdrop-blur-sm p-8">
                    <h2 className="text-3xl font-bold mb-8 text-[#53E140]">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-slate-800/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#53E140]/10 border border-transparent hover:border-[#53E140]/20"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        style={{ width: 'auto', height: 'auto', aspectRatio: '1/1' }}
                                        className="rounded-full object-cover"
                                        priority={index < 2}
                                    />
                                    <div className="absolute inset-0 rounded-full bg-[#53E140]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold group-hover:text-[#53E140] transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-400">{member.role}</p>
                                <div className="flex justify-center space-x-3 mt-4">
                                    <a href={member.linkedin} className="text-gray-400 hover:text-[#53E140] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.github} className="text-gray-400 hover:text-[#53E140] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;
