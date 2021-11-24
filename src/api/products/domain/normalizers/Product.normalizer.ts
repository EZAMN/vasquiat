/* eslint-disable no-useless-escape */

export class ProductNormalizer {
  handle({ product }) {
    const { name, category, price } = product;

    return {
      name: this.normalizeString({ string: name }),
      category: this.normalizeString({ string: category }),
      price: this.normalizeFloat({ number: price }),
    };
  }

  normalizeFloat({ number }) {
    return parseFloat(number).toFixed(2);
  }

  normalizeString({ string }) {
    // eslint-disable
    const replacedString = string.replace(
      // eslint-disable-next-line no-control-regex
      /[\0\x08\x09\x1a\n\r"'\\\%]/g,
      function (char) {
        switch (char) {
          case '\0':
            return '\\0';
          case '\x08':
            return '\\b';
          case '\x09':
            return '\\t';
          case '\x1a':
            return '\\z';
          case '\n':
            return '\\n';
          case '\r':
            return '\\r';
          case '"':
          case "'":
          case '\\':
          case '%':
            return '\\' + char; // prepends a backslash to backslash, percent,
          // and double/single quotes
          default:
            return char;
        }
      }
    );

    return replacedString.normalize();
  }
}
