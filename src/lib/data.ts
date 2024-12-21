import type { RepositoryType } from "@/lib/types";

export const repositories: RepositoryType[] = [
    {
        name: "design-system",
        isPublic: true,
        language: "React",
        size: "7320 KB",
        updatedAt: "1 day ago",
    },
    {
        name: "codeant-ci-app",
        isPublic: false,
        language: "Javascript",
        size: "5871 KB",
        updatedAt: "2 days ago",
    },
    {
        name: "analytics-dashboard",
        isPublic: false,
        language: "Python",
        size: "4521 KB",
        updatedAt: "5 days ago",
    },
    {
        name: "mobile-app",
        isPublic: true,
        language: "Swift",
        size: "3096 KB",
        updatedAt: "3 days ago",
    },
    {
        name: "e-commerce-platform",
        isPublic: false,
        language: "Java",
        size: "6210 KB",
        updatedAt: "6 days ago",
    },
    {
        name: "blog-website",
        isPublic: true,
        language: "HTML/CSS",
        size: "1876 KB",
        updatedAt: "4 days ago",
    },
    {
        name: "social-network",
        isPublic: false,
        language: "PHP",
        size: "5432 KB",
        updatedAt: "7 days ago",
    },
];

export const languageColors: Record<string, string> = {
    React: "bg-blue-500",
    Javascript: "bg-yellow-500",
    Python: "bg-green-500",
    Swift: "bg-orange-500",
    Java: "bg-red-500",
    "HTML/CSS": "bg-purple-500",
    PHP: "bg-indigo-500",
};
