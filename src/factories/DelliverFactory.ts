import { DeliverType, IDeliverFactory } from "../interfaces/IDeliverFactory";
import { Ship } from "../transport/Ship";
import { Trunk } from "../transport/Trunk";

export class DeliveryFactory implements IDeliverFactory {
  createDeliver(deliveryType: DeliverType) {
    if (deliveryType === DeliverType.ship) {
      return new Ship();
    } else if (deliveryType === DeliverType.truck) {
      return new Trunk();
    }

    throw new Error(`Invalid type "${deliveryType}." passed`);
  }
}
