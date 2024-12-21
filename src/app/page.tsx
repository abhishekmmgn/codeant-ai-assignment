"use client";

import {
	Search,
	Home,
	Code2,
	Shield,
	BookOpen,
	Settings,
	Phone,
	LogOut,
	RefreshCw,
	Plus,
	AlignJustify,
	X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { repositories } from "@/lib/data";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Repository } from "@/components/repository";

type IconType = { icon: any; text: string };

const sidebarItems: IconType[] = [
	{ icon: Home, text: "Repositories" },
	{ icon: Code2, text: "AI Code Review" },
	{ icon: Shield, text: "Cloud Security" },
	{ icon: BookOpen, text: "How to Use" },
	{ icon: Settings, text: "Settings" },
	{ icon: Phone, text: "Support" },
	{ icon: LogOut, text: "Logout" },
];

const users = ["UtkarshDhairyaPanwar", "Jimmy", "John", "Jane"];

export default function RepositoryDashboard() {
	const [filteredRepos, setFilteredRepos] = useState(repositories);
	const [term, setTerm] = useState("");
	return (
		<div className="flex flex-col bg-secondary h-screen sm:flex-row">
			<Sidebar />
			<Navbar />
			<ScrollArea className="w-full rounded-md sm:border">
				<div className="flex-1 sm:p-6">
					<div className="sm:border bg-white mx-auto rounded-lg">
						{/* Header */}
						<div className="border-b px-6 py-5 space-y-4">
							<div className="flex flex-col gap-3 justify-between md:items-center md:flex-row">
								<div>
									<h1 className="text-2xl font-semibold mb-1">Repositories</h1>
									<p className="text-muted-foreground text-sm">
										33 total repositories
									</p>
								</div>
								<div className="flex gap-2">
									<Button
										variant="outline"
										size="sm"
										className=" gap-[6px] h-10"
									>
										<RefreshCw className="h-4 w-4" />
										Refresh All
									</Button>
									<Button size="sm" className=" gap-[6px] h-10">
										<Plus className="h-4 w-4" />
										Add Repository
									</Button>
								</div>
							</div>
							<div className="relative">
								<Search className="absolute left-3 top-[9px] h-4 w-4 text-muted-foreground" />
								<Input
									placeholder="Search Repositories"
									className="pl-9 max-w-sm"
									value={term}
									onChange={(e) => {
										setTerm(e.target.value);
										setFilteredRepos(
											repositories.filter((repo) =>
												repo.name
													.toLowerCase()
													.includes(e.target.value.toLowerCase()),
											),
										);
									}}
								/>
							</div>
						</div>
						{filteredRepos.map((repo) => (
							<Repository repo={repo} key={repo.name} />
						))}
					</div>
				</div>
			</ScrollArea>
		</div>
	);
}

function Sidebar() {
	return (
		<aside className="hidden w-60 border-r bg-card py-6 px-4 gap-y-5 sm:flex flex-col">
			<Image src={logo} alt={logo} className="aspect-auto h-8" />
			<SelectUser />
			<div className="-mt-1">
				<NavItems items={sidebarItems.slice(0, 5)} />
			</div>
			<div className="fixed bottom-4 space-y-0.5">
				{sidebarItems.slice(5).map((item) => (
					<Button
						key={item.text}
						variant="ghost"
						className="w-full justify-start gap-3 h-10 rounded-lg"
					>
						<item.icon className="h-5 w-5" />
						{item.text}
					</Button>
				))}
			</div>
		</aside>
	);
}

function Navbar() {
	const [open, setIsOpen] = useState(false);
	return (
		<>
			<nav
				className={`h-16 sm:hidden bg-white py-5 px-4 flex items-center justify-between ${!open && "border-b "}`}
			>
				<Image src={logo} alt={logo} className="-ml-4 aspect-auto h-8" />
				{open ? (
					<X className="size-5" onClick={() => setIsOpen(false)} />
				) : (
					<AlignJustify className="size-5" onClick={() => setIsOpen(true)} />
				)}
			</nav>
			{open && (
				<div className="sm:hidden z-50 fixed top-16 bottom-0 inset-x-0 bg-black/30">
					<div className="px-4 pb-6 bg-white space-y-3">
						<SelectUser />
						<NavItems items={sidebarItems} />
					</div>
				</div>
			)}
		</>
	);
}

function SelectUser() {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder={users[0]} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Select user</SelectLabel>
					{users.map((user) => (
						<SelectItem value={user} key={user} className="capitalize">
							{user}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

function NavItems({ items }: { items: IconType[] }) {
	return (
		<div className="space-y-1">
			{items.map((item) => (
				<Button
					key={item.text}
					variant={item.text === "Repositories" ? "default" : "ghost"}
					className="w-full justify-start gap-3 h-10 rounded-lg font-medium	"
				>
					<item.icon className="h-5 w-5" />
					{item.text}
				</Button>
			))}
		</div>
	);
}
