export type Logo = {
  src: string;
  alt: string;
};

export type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
};

// Define component example type
export type ComponentExample = {
  name: string;
  description: string;
  code: string;
  component: React.ReactNode | React.ComponentType<any>;
  props?: Record<string, any>;
};

// Define component prop type
export type ComponentProp = {
  name: string;
  type: string;
  default: string;
  description: string;
};

// Define component documentation type
export type ComponentDoc = {
  name?: string;
  title: string;
  description: string;
  usage?: string;
  props?: ComponentProp[];
  examples?: ComponentExample[];
  component?: React.ReactNode | React.ComponentType<any>;
  code?: string;
};
