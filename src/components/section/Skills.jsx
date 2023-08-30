import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./variants";
import SkillCard from "../SkillCard";
import { skills } from "../../constant/content";
const Skills = () => {
	return (
		<section id="skills" className="flex flex-col max-w-[1000px] mx-5 md:mx-5 lg:mx-auto h-screen  text-white ">
			<div className="my-auto">
				<motion.div variants={fadeIn("right", 0.7, 0.6)} initial="hidden" whileInView="show" viewport={{ once: "false", amount: 0.4 }} className="py-[50px] ">
					<h1 className="text-4xl font-bold font-Poppins text-left text-[#0a0b0a] ">Skills</h1>
					<h2 className="text-2xl font-bold font-Poppins text-left text-[#0a0b0a]">Technologies and tools that I use in building websites.</h2>
				</motion.div>
				<motion.div variants={staggerContainer(0, 0)} initial="hidden" whileInView="show" viewport={{ once: "false", amount: 0.4 }}>
					<motion.div className="max-w-[1240px] grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-5">
						{skills.map((skill, index) => {
							return (
								<motion.div variants={fadeIn("up", index * 0.2, 0.6)} initial="hidden" whileInView="show" viewport={{ once: "false", amount: 0.4 }}>
									<SkillCard key={skill.name} name={skill.name} icon={skill.icon} size="50px" />
								</motion.div>
							);
						})}

						{/*                     
					<div className="w-full ">1</div>
					<div className="w-full ">2</div>
					<div className="w-full ">3</div> */}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
