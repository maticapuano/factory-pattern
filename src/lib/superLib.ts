export class SuperLib {
  private readonly _name: string;
  private readonly _options: {};
  private readonly _id: string;

  constructor(id: string, name: string, options: {}) {
    this._id = id;
    this._name = name;
    this._options = options;
  }

  public get name(): string {
    return this._name;
  }
  public get options(): {} {
    return this._options;
  }
  public get id(): string {
    return this.id;
  }
}
