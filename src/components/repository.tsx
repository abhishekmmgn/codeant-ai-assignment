import Image from "next/image";
import type { RepositoryType } from "@/lib/types";
import { Badge } from "./ui/badge";
import db from "../../public/database.svg";

export function Repository({ repo }: { repo: RepositoryType }) {
	return (
		<div
			key={repo.name}
			className="px-6 py-4 space-y-3 border-b hover:bg-[#F5F5F5] transition-colors"
		>
			<div className="flex items-center gap-2">
				{repo.name}
				<Badge className="bg-primary/10 text-primary rounded-full hover:bg-primary/10">
					{repo.isPublic ? "Public" : "Private"}
				</Badge>
			</div>
			<div className="flex items-center gap-10">
				<div className="flex items-center gap-2">
					{repo.language}
					<div className="bg-primary rounded-full size-2" />
				</div>
				<div className="flex items-center gap-2">
					<Image src={db} alt="db" width={10.5} height={12} />
					{repo.size}
				</div>
				<div className="flex items-center gap-2">{repo.updatedAt}</div>
			</div>
		</div>
	);
}
