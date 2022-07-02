export interface WorkSchema {
  projectName: string;
  description: string;
  image: string;
  pageUrl?: string;
  gitHubUrl: string;
  userId?: string;
}

export interface UserSchema {
  name: string;
  email: string;
  password: string;
  works?: Array<any>;
}

export type User = Omit<UserSchema, "works">;
