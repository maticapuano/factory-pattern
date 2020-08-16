import { SuperLib } from "../lib/superLib";

export class SuperLibFactory {
  static create(name: string, options: {}) {
    const id = Math.random().toString(32).slice(2);
    return new SuperLib(id, name, options);
  }
}
