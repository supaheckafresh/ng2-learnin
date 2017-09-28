import { Injectable } from '@angular/core';

@Injectable()
export class Tool {
  /**
   * Return an zero or one-based array of numbers for a range.
   *
   * @param length
   * @param zeroBased
   * @return {Array<number>}
   */
  range(length: number, zeroBased: boolean): Array<number> {
    if (zeroBased !== false) {
      zeroBased = true;
    }
    const arr = Array.from({ length }, (val, key) => key);

    // for 1-based array:
    if (!zeroBased) {
      arr.shift();
      arr.push(length);
    }
    return arr;
  }

  /**
   * Return a promisified function which will invoke the resolve callback on the return value,
   * or invoke the reject callback on an error.
   *
   * @param {Function} func
   * @returns {(...args: any[]) => Promise<any>}
   */
  promisify(func: Function): () => any {
    return function (...args) {
      return new Promise((resolve, reject) => {
        try {
          return resolve(func(...args));
        } catch (err) {
          return reject(err);
        }
      });
    };
  }
}
