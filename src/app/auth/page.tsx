import Image from "next/image";
import logo from "../../../public/logo.svg";
import icon from "../../../public/icon.svg";
import bigIcon from "../../../public/big.svg";
import gitlab from "../../../public/gitlab.svg";
import github from "../../../public/github.svg";
import bitbucket from "../../../public/bitbucket.svg";
import azure from "../../../public/azure.svg";
import eclipse from "../../../public/eclipse.svg";
import key from "../../../public/key.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function AuthPage() {
	return (
		<main className="relative grid lg:grid-cols-2 bg-[#fafafa]">
			<SectionOne />
			<SectionTwo />
		</main>
	);
}

function SectionOne() {
	return (
		<section className="bg-white flex-col h-screen hidden lg:flex items-center justify-center border">
			<div className="mb-4 ml-4 flex flex-col items-end">
				<div className="mr-4 bg-white shadow-[0_0_24px_rgba(0,0,0,0.1)] border rounded-[24px] w-[448px] h-[170px]">
					<div className="p-5 flex items-center gap-2 border-b-[2px]">
						<Image src={icon} width={28} height={31} alt="icon" />
						<h2 className="font-semibold text-lg">
							AI to Detect & Autofix Bad Code
						</h2>
					</div>
					<div className="p-5 flex items-center justify-between">
						<div className="text-center">
							<p className="font-semibold text-lg">30+</p>
							<p className="text-secondary-foreground text-sm">
								Language support
							</p>
						</div>
						<div className="text-center">
							<p className="font-semibold text-lg">10K+</p>
							<p className="text-secondary-foreground text-sm">Developers</p>
						</div>
						<div className="text-center">
							<p className="font-semibold text-lg">100K+</p>
							<p className="text-secondary-foreground text-sm">Hours Saved</p>
						</div>
					</div>
				</div>
				<div className="-mt-4 bg-white z-20 shadow-[0_0_24px_rgba(0,0,0,0.1)] border w-[265px] h-[164px] px-8 py-4 rounded-[24px] space-y-4">
					<div className="flex justify-between">
						<Image src={eclipse} alt="icon" width={56} height={56} />
						<div>
							<div className="text-[#0049C6] flex items-center">
								<ArrowUp className="size-4" />
								<p className="font-bold">14%</p>
							</div>
							<p className="text-xs text-secondary-foreground">This week</p>
						</div>
					</div>
					<div>
						<p className="font-bold text-secondary-foreground">Issues Fixed</p>
						<p className="font-bold text-[2rem]">500K+</p>
					</div>
				</div>
			</div>
			<Image
				src={bigIcon}
				alt="icon"
				width={284}
				height={319}
				className="absolute bottom-0 left-0 aspect-auto h-60 xl:h-80"
			/>
		</section>
	);
}

function SectionTwo() {
	return (
		<section className="h-screen px-4 flex flex-col justify-center gap-8 bg-[#fafafa] md:px-6">
			<div className="relative rounded-lg bg-white shadow-sm border px-4 md:px-6 pt-9 pb-6">
				<div className="space-y-6 md:space-y-9">
					<Image src={logo} alt="logo" className="mx-auto" />
					<h1 className="text-center font-semibold text-[1.5rem] md:text-[2rem]">
						Welcome to CodeAnt AI
					</h1>
				</div>
				<Tabs defaultValue="sass" className="w-full mx-auto max-w-xl mt-5">
					<TabsList className="mb-9 grid w-full grid-cols-2 h-[52px] md:h-[60px]">
						<TabsTrigger value="sass">SASS</TabsTrigger>
						<TabsTrigger value="self">Self Hosted</TabsTrigger>
					</TabsList>
					<div className="absolute w-full inset-x-0 h-0.5 bg-border" />
					<TabsContent
						value="sass"
						className="mt-[60px] grid place-items-center space-y-4"
					>
						<Button variant="outline">
							<Image src={github} alt="key" width={20} height={20} />
							Sign in with Github
						</Button>
						<Button variant="outline">
							<Image src={bitbucket} alt="key" width={20} height={20} />
							Sign in with Bitbucket
						</Button>
						<Button variant="outline">
							<Image src={azure} alt="key" width={20} height={20} />
							Sign in with Azure Devops
						</Button>
						<Button variant="outline">
							<Image src={gitlab} alt="key" width={20} height={20} />
							Sign in with GitLab
						</Button>
					</TabsContent>
					<TabsContent
						value="self"
						className="grid place-items-center space-y-4"
					>
						<Button variant="outline">
							<Image src={gitlab} alt="key" width={20} height={20} />
							Self Hosted GitLab
						</Button>
						<Button variant="outline">
							<Image src={key} alt="key" width={20} height={20} />
							Sign in with SSO
						</Button>
						<Button variant="outline" className="invisible">
							Sign in with GitLab
						</Button>
						<Button variant="outline" className="invisible">
							Sign in with GitLab
						</Button>
					</TabsContent>
				</Tabs>
			</div>
			<p className="text-sm text-center">
				By signing up you agree to the <b>Privacy Policy</b>.
			</p>
		</section>
	);
}
