import { SuperLibFactory } from "./factories/superLib-factory";
import { SuperLib } from "./lib/superLib";

/**
 * Using: No using factory pattern
 *
 * const lib = new SuperLib("Super Name", { next: true }); //error in constructor resolved in factory pattern, not affect in constructor.

console.log(lib.name);
console.log(lib.options);
*/

/**
 * Using: implemented factory pattern
 */

const libFactory = SuperLibFactory.create("Super factory", {
  next: true,
});

console.log(libFactory.id);
console.log(libFactory.name);
console.log(libFactory.options);
