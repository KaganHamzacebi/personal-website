/// <reference types="react-scripts" />
declare module '*.pdf';

declare module '*.png' {
    const value: any;
    export = value;
}
