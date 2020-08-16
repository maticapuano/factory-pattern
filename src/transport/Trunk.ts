import { IDeliver } from "../interfaces/IDeliver";

export class Trunk implements IDeliver {
  deliver() {
    console.log("Warehouse delivery");
  }
}
