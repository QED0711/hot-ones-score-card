function lerp(a, b, t) {
  return a * (1 - t) + b * t;
}

function rgbToHex(r, g, b) {
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function getHexColor(percent) {
  let r, g, b;
  if (percent <= 0.5) { // from green to yellow
    r = lerp(0, 255, percent * 2);
    g = 255;
    b = 0;
  } else { // from yellow to red
    r = 255;
    g = lerp(255, 0, (percent - 0.5) * 2);
    b = 0;
  }
  return rgbToHex(r, g, b);
}