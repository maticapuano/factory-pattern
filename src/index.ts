import { SuperLibFactory } from "./factories/superLib-factory";
import { SuperLib } from "./lib/superLib";

/**
 * Using: No using factory pattern
 */
const lib = new SuperLib("Super Name", { next: true });

console.log(lib.name);
console.log(lib.options);

/**
 * Using: implemented factory pattern
 */

const libFactory = SuperLibFactory.create("Super factory", {
  next: true,
});

console.log(libFactory.name);
console.log(libFactory.options);
