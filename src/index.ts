import { SuperLib } from "./lib/superLib";

const lib = new SuperLib("Super Name", { next: true });

console.log(lib.name);
console.log(lib.options);
