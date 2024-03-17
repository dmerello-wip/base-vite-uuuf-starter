export const checkHexColor = value => {
  const regex = /^#([0-9A-F]{3}){1,2}$/i;
  return regex.test(value);
}

export const checkRGB = value => {
  const valSan = value ? value.replace(/\s/g, "") : "";
  const reg = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/;
  const matches = reg.exec(valSan);
  let red, green, blue;
  if (matches != null) {
    red = parseFloat(matches[1]) <= 255;
    green = parseFloat(matches[2]) <= 255;
    blue = parseFloat(matches[3]) <= 255;
  }
  return red && green && blue;
}

export const isValidColor = value => {
  const style = new Option().style;

  style.color = value;

  const validStringColor = style.color === value;
  const validHexColor = checkHexColor(value);
  const validRGBColor = checkRGB(value);
  return validStringColor || validHexColor || validRGBColor;
}
