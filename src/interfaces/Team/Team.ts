import type { Member } from "./Member";

export interface Team {
    id: number;
    name: string;
    icon: string;
    description: string;
    tags: string[];
    members: Member[];
    star: string;
}