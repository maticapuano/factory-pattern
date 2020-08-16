import { IDeliver } from "../interfaces/IDeliver";

export class Ship implements IDeliver {
  deliver() {
    console.log("Seaport delivery");
  }
}
