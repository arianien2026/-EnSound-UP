/// <reference types="vite/client" />

declare module '*.dict?raw' {
  const content: string
  export default content
}