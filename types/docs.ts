export interface ComponentDoc {
  title: string;
  description: string;
  usage: string;
  props?: {
    name: string;
    type: string;
    description: string;
    default?: string;
    required?: boolean;
  }[];
  examples?: {
    title: string;
    code: string;
    description?: string;
  }[];
}

export interface ComponentDocs {
  [key: string]: ComponentDoc;
}
