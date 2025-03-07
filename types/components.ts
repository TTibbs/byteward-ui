export type Logo = {
  src: string; // Logo source
  alt: string; // Logo alternative text
};

export type CodeBlockProps = {
  code: string; // Code block content
  language?: string; // Language of the code block
  filename?: string; // Filename of the code block
  showLineNumbers?: boolean; // Whether to show line numbers
};

// Component example type
export type ComponentExample = {
  name: string; // Example name
  description: string; // Example description
  code: string; // Example code
  component: React.ReactNode | React.ComponentType<any>; // Example component
  props?: Record<string, any>; // Example props
};

// Component prop type
export type ComponentProp = {
  name: string; // Prop name
  type: string; // Prop type
  default: string; // Prop default value
  description: string; // Prop description
};

// Component documentation type
export type ComponentDoc = {
  name?: string; // Component name
  title: string; // Component title
  description: string; // Component description
  usage?: string; // Component usage
  props?: ComponentProp[]; // Component props
  examples?: ComponentExample[]; // Component examples
  component?: React.ReactNode | React.ComponentType<any>; // Component component
  code?: string; // Component code
};
