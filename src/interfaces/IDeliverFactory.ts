import { IDeliver } from "./IDeliver";

export enum DeliverType {
  ship,
  truck,
}

export interface IDeliverFactory {
  createDeliver(deliverType?: DeliverType): IDeliver;
}
