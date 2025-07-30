export interface Project {
    title: string;
    description: string[];
    tags: string[];
  }
  
  export interface Skill {
    title: string;
    items: string[];
  }

  export interface EducationItem {
    school: string;
    degree: string;
    major?: string; // optional
    location: string;
    graduationDate: string;
  }
  