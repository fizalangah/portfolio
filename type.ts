// File: types.ts
export interface Project {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    description?: string;
    fullDescription?: string;
    tools?: string[];
    link?:string

  }