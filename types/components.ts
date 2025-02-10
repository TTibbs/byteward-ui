export type Logo = {
  src: string;
  alt: string;
};

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}
