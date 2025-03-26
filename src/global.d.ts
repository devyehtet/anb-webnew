declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    (id: string): unknow | any;
  };
};

// Custom RequireContext type
interface RequireContext {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  (id: string): unknow | any; // Type for imported module
  keys(): string[]; // Returns an array of keys for the modules
}
