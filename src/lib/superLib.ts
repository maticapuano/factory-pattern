export class SuperLib {
  private readonly _name: string;
  private readonly _options: {};

  constructor(name: string, options: {}) {
    this._name = name;
    this._options = options;
  }

  public get name(): string {
    return this._name;
  }
  public get options(): {} {
    return this._options;
  }
}
