/**
 * @file 类型检测
 * @author ss.feng
 */
class Type {
  inspect(target) {
    const type = Object.prototype.toString.call(target).toLowerCase();
    const regex = /^\[object (\w+)\]$/;

    return regex.test(type) ? type.match(regex)[1] : 'unknow';
  }

  isSymbol(target) {
    return this.inspect(target) === 'symbol';
  }

  isObject(target) {
    return this.inspect(target) === 'object';
  }

  isArray(target) {
    return this.inspect(target) === 'array';
  }

  isFunction(target) {
    return this.inspect(target) === 'function';
  }

  isRegExp(target) {
    return this.inspect(target) === 'regexp';
  }

  isDate(target) {
    return this.inspect(target) === 'date';
  }

  isMath(target) {
    return this.inspect(target) === 'math';
  }

  isError(target) {
    return this.inspect(target) === 'error';
  }

  isJSON(target) {
    return this.inspect(target) === 'json';
  }

  isArguments(target) {
    return this.inspect(target) === 'arguments';
  }

  isMap(target) {
    return this.inspect(target) === 'map';
  }

  isSet(target) {
    return this.inspect(target) === 'set';
  }

  isString(target) {
    return this.inspect(target) === 'string';
  }

  isNumber(target) {
    return this.inspect(target) === 'number';
  }

  isBoolean(target) {
    return this.inspect(target) === 'boolean';
  }

  isNull(target) {
    return this.inspect(target) === 'null';
  }

  isUndefined(target) {
    return this.inspect(target) === 'undefined';
  }

  isEmpty(target) {
    if (this.isArray(target) || this.isArguments(target)) {
      return !target.length;
    }

    if (this.isMap(target) || this.isSet(target)) {
      return !target.size;
    }

    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }
}

export default new Type;
