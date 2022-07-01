export interface WorkSchema {
  projectName: string;
  description: string;
  image: string;
  pageUrl?: string;
  gitHubUrl: string;
  user: UserSchema;
}

export interface UserSchema {
  name: string;
  email: string;
  password: string;
  works: WorkSchema[];
}
