/// <reference types="react-scripts" />
declare module '*.pdf';
declare module '*.png' {
  const src = string;
  export = src;
}
