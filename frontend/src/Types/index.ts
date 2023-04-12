export interface ProjectTypes {
  _id: string;
  projectName: string;
  creator: UserBasicTypes;
  description: string;
  estimatedHours: number;
  status:string;
  createdAt:string;
}


export interface TaskTypes  {
  _id: string;
  taskName: string;
  project: ProjectTypes;
  description: string;
  creator: UserBasicTypes;
  estimatedHours: string;
}

export interface UserBasicTypes {
  _id:string;
  username:string;
  picture: string;
}
export interface UserTypes extends UserBasicTypes {
  isLogged: boolean;
  accessToken: string;
  createdAt:string;
  projects: ProjectTypes[];
}