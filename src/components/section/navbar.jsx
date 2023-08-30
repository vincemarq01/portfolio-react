import React, { useState } from "react";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, mobileMenu } from "./variants";
import { navLinks, skills } from "../../constant/content";
import { HashLink as Link } from "react-router-hash-link";
import "../../index.css";
const Navbar = () => {
	const [nav, setnav] = useState(true);

	const handleNav = () => {
		setnav((prevNav) => !prevNav);
		console.log("test");

		if (nav === true) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	};

	return (
		<section className="fixed h-24 w-full md:mx-5 lg:mx-auto  bg-white z-10">
			<div className="mx-5 flex relative justify-between h-24 items-center md:mx-auto max-w-[1000px] text-black  ">
				<div href="/" className="font-Poppins">
					Vince Marq Montilla
				</div>

				<div className="">
					{skills.map((skills) => {
						<img src={skills.icon}></img>;
					})}
				</div>
				<div>
					<ul className="hidden md:flex w-full font-Poppins md:mx-5 z-50">
						{navLinks.map((links) => {
							return (
								<Link to={links.url} smooth>
									<li className="px-2 hover:bg-[#30A2FF] hover:text-white py-2 rounded-md">{links.title}</li>
								</Link>
							);
						})}
					</ul>

					<div onClick={handleNav} className="md:hidden ml-5 cursor-pointer h-5 w-5">
						<img src={!nav ? close : menu} className="cursor-pointer"></img>
					</div>
				</div>
			</div>

			{/* <div className={!nav ? "mx-auto flex h-screen w-full overflow-hidden bg-white lg:hidden top-[20] ease-in-out duration-1000" : "fixed top-[-50%] ease-out duration-1000"}> */}
			{/* <ul className="md:flex flex-col text-3xl mx-auto items-center justify-center mt-[-30%] gap-5   font-Poppins text-black"> */}
			{/* <ul className={!nav ? "flex flex-col text-3xl items-center pt-[50%] overflow-hidden h-screen bg-white gap-5 font-Poppins md:hidden" : " fixed top-[-50%] "}> */}

			<AnimatePresence>
				{!nav && (
					<motion.div
						variants={mobileMenu}
						initial="hidden"
						animate="show"
						transition="transition"
						exit="exit"
						className={`top-0 h-screen w-full bg-darkPrimary flex flex-col items-center`}
					>
						<ul className="flex flex-col text-3xl items-center pt-[50%] overflow-hidden h-screen w-full bg-white gap-5 font-Poppins md:hidden">
							{navLinks.map((link, index) => {
								return (
									<motion.li variants={fadeIn("up", index * 0.3, 0.3)} initial="hidden" animate="show" exit="exit">
										<a target="_blank" rel="noreferrer">
											{link.title}
										</a>
									</motion.li>
								);
							})}
							{/* <motion.li variants={fadeIn("up", 0.3, 0.3)} initial="hidden" animate="show" exit="exit">
								<li className="px-2">Profile</li>
							</motion.li>
							<motion.li variants={fadeIn("up", 0.4, 0.4)} initial="hidden" animate="show" exit="exit">
								<li className="px-2">Skills</li>
							</motion.li>
							<motion.li variants={fadeIn("up", 0.5, 0.5)} initial="hidden" animate="show" exit="exit">
								<li className="px-2">About</li>
							</motion.li> */}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Navbar;
