function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + ((q - p) * 6 * t);
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + ((q - p) * ((2 / 3) - t) * 6);
    return p;
}

function pad(v) {
    let hex = Number(v).toString(16);
    if (hex.length < 2) {
        hex = `0${hex}`;
    }
    return hex;
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
export function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    const l = (max + min) / 2;

    if (max === min) {
        h = 0; // achromatic
        s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d) + (g < b ? 6 : 0); break;
            case g: h = ((b - r) / d) + 2; break;
            case b: h = ((r - g) / d) + 4; break;
            default:
        }
        h /= 6;
    }

    return [h, s, l];
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
export function hslToRgb(h, s, l) {
    let r;
    let g;
    let b;

    if (s === 0) {
        r = l;
        g = l;
        b = l; // achromatic
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + (s - (l * s));
        const p = (2 * l) - q;
        r = hue2rgb(p, q, h + (1 / 3));
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function hslToRgbStr(h, s, l) {
    const [r, g, b] = hslToRgb(h, s, l);
    return `#${pad(r)}${pad(g)}${pad(b)}`;
}

export function colorBrightness(origColor, brightness) {
    let color = origColor;
    if (typeof origColor === 'string') {
        color = parseInt(origColor.substr(1), 16);
    }
    // eslint-disable-next-line no-bitwise
    const [h, s, l] = rgbToHsl(color >> 16, (color >> 8) & 0xFF, color & 0xFF);
    const [r, g, b] = hslToRgb(h, s, l * brightness);
    if (typeof origColor === 'string') {
        return `#${pad(r)}${pad(g)}${pad(b)}`;
    }
    // eslint-disable-next-line no-bitwise
    return b + (g << 8) + (r << 16);
}

export function multiply(origColor, factor) {
    let color = origColor;
    if (typeof origColor === 'string') {
        color = parseInt(origColor.substr(1), 16);
    }
    // eslint-disable-next-line no-bitwise
    let [r, g, b] = [color >> 16, (color >> 8) & 0xFF, color & 0xFF];
    r = Math.round(r * factor);
    g = Math.round(g * factor);
    b = Math.round(b * factor);
    if (typeof origColor === 'string') {
        return `#${pad(r)}${pad(g)}${pad(b)}`;
    }
    // eslint-disable-next-line no-bitwise
    return b + (g << 8) + (r << 16);
}
