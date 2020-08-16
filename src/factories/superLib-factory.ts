import { SuperLib } from "../lib/superLib";

export class SuperLibFactory {
  static create(name: string, options: {}) {
    return new SuperLib(name, options);
  }
}
