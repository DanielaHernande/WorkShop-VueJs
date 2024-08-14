export interface Project {
    id: number;
    name: string;
    icon: string;
    type: string;
    leader: string;
    team: { avatar: string; name: string}[];
    extraTeamMembers?: number;
    progress: number
}