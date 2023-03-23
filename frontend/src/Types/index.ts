export interface ProjectTypes {
  _id: string;
  projectName: string;
  description: string;
  estimatedHours: number;
}

export interface TaskTypes {
  _id: string;
  taskName: string;
  projectId: string;
  description: string;
  creatorId: string;
  estimatedHours: string;
}
