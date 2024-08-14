import type { Statistics } from "./Statistics";

export interface Perfil {
    name: string;
    avatar: string;
    charge: string;
    skills: string[];
    statistics: Statistics;
    icon: string;
}