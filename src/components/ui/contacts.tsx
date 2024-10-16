"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { ContactCard } from "../../components/ui/contactcard";
import * as React from "react"

const socials = [
	{
		id: 1,
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/mukeshvast/",
		label: "LinkedIn",
		handle: "@mukeshvast",
	},
	{
		id: 2,
		icon: <Mail size={20} />,
		href: "mailto:mukesh.vast.se@gmail.com",
		label: "Email",
		handle: "mukesh.vast.se@gmail.com",
	},
	{
		id: 3,
		icon: <Github size={20} />,
		href: "https://github.com/mukizonese",
		label: "Github",
		handle: "mukizonese",
	}
];

export default function Contacts() {
	return (
				<div className="grid  grid-cols-3 ">
					{socials.map((s) => (

                    <React.Fragment key={s.id}>
						<ContactCard>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-1xl text-zinc-500 group-hover:text-black font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-500 group-hover:black">
										{s.label}
									</span>
								</div>
							</Link>
						</ContactCard>

                    </React.Fragment>

					))}
				</div>
	);
}

export { Contacts }