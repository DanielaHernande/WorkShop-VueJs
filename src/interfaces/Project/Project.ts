export interface Project {
  id: number;
  icon: string;
  title: string;
  client: string;
  budget: string;
  startDate: string;
  deadline: string;
  description: string;
  hoursLogged: number;
  hoursTotal: number;
  daysLeft: string;
  progress: number;
  avatars: string[];
  members: number;
  comments: number;
}
