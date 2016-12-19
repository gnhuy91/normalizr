export default class ValuesSchema {
  constructor(definition) {
    this.define(definition);
  }

  define(definition) {
    this.schema = definition;
  }

  normalize(input, parent, key, visit, addEntity) {
    if (typeof input !== 'object') {
      throw new Error(`Expected object of but found ${typeof input}.`);
    }

    return Object.entries(input).reduce((output, [ key, value ], index) => {
      return { ...output, [key]: visit(value, input, key, this.schema, addEntity) };
    }, {});
  }
}
