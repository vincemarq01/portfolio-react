import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons";
import { hover } from "@testing-library/user-event/dist/hover";
const Hero = () => {
	const [mousehover, setmousehover] = useState(true);

	return (
		<>
			<div id="hero" className="flex max-w-[1000px] mx-5  md:mx-5 lg:mx-auto  w-full min-h-screen z-0 overflow-hidden">
				<div className="my-auto text-white space-y-5">
					<motion.p variants={fadeIn("right", 0.6, 0.2)} initial="hidden" animate="show" viewport={{ once: false, amount: 0.7 }} className="font-Poppins text-[#0a0b0a]">
						<p>Hello! I am</p>
					</motion.p>
					<motion.h1 variants={fadeIn("right", 0.8, 0.6)} initial="hidden" animate="show" viewport={{ once: false, amount: 0.7 }} className="text-7xl font-Poppins text-[#0a0b0a]">
						<h1>Vince Marq Montilla</h1>
					</motion.h1>
					<motion.p variants={fadeIn("right", 1, 0.7)} initial="hidden" animate="show" viewport={{ once: false, amount: 0.7 }} className="font-Poppins text-[#0a0b0a]">
						<p>
							A Front-end Web Developer who love to turn ideas into <br></br>reality through web development.
						</p>
					</motion.p>

					<motion.div variants={fadeIn("right", 1, 0.8)} initial="hidden" animate="show" viewport={{ once: false, amount: 0.7 }} className="flex flex-row gap-1  ">
						<FaGithub size={50} className="cursor-pointer text-black hover:bg-[#30A2FF] hover:text-white p-3 rounded-md" />

						<FaLinkedin size={50} className="cursor-pointer  text-black hover:bg-[#30A2FF] hover:text-white p-3 rounded-md " />
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
