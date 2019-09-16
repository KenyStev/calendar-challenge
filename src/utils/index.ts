export function padZero(str: string, len?: number) {
    len = len || 2;
    const zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

export function invertColor(hex: string, bw?: boolean) {
	let hexVal = hex;

  if (hexVal.indexOf('#') === 0) {
      hexVal = hexVal.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hexVal.length === 3) {
      hexVal = hexVal[0] + hexVal[0] + hexVal[1] + hexVal[1] + hexVal[2] + hexVal[2];
  }
  if (hexVal.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  let r: string | number = parseInt(hexVal.slice(0, 2), 16),
      g: string | number = parseInt(hexVal.slice(2, 4), 16),
      b: string | number = parseInt(hexVal.slice(4, 6), 16);
  if (bw) {
      // http://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}
