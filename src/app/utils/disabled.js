import theme from "../store/theme";
import fontSize from "../store/fontSize";
import images from "../store/images";
export const handleThemeMain = () => {
  fontSize.original();
  theme.main();
  images.on();
};
export const toggleIconColor = (
  mainColor,
  whiteColor,
  blackColor,
  contrastColor
) => {
  const currentTheme = theme.theme;
  if (currentTheme === "main") {
    return mainColor;
  } else if (currentTheme === "white") {
    const whiteColorCurrent = whiteColor ? whiteColor : "#000";
    return whiteColorCurrent;
  } else if (currentTheme === "black") {
    const whiteColorCurrent = blackColor ? blackColor : "#fff";
    return whiteColorCurrent;
  } else if (currentTheme === "contrast") {
    const whiteColorCurrent = contrastColor ? contrastColor : "#195183";
    return whiteColorCurrent;
  }
};
export const toggleIconWidthSize = (
  widthOriginal,
  widthNormal,
  widthMedium,
  widthLarge
) => {
  const size = fontSize.fontSize;
  if (size === "original") {
    return widthOriginal;
  } else if (size === "normal") {
    return widthNormal;
  } else if (size === "medium") {
    return widthMedium;
  } else if (size === "large") {
    return widthLarge;
  }
};
export const toggleIconHeightSize = (
  widthOriginal,
  widthNormal,
  widthMedium,
  widthLarge
) => {
  const size = fontSize.fontSize;
  if (size === "original") {
    return widthOriginal;
  } else if (size === "normal") {
    return widthNormal;
  } else if (size === "medium") {
    return widthMedium;
  } else if (size === "large") {
    return widthLarge;
  }
};
export const toggleFontSize = (originalSize) => {
  const size = fontSize.fontSize;
  if (size === "original") return `${originalSize}rem`;
  if (size === "normal") return `${originalSize + 0.175}rem`;
  if (size === "medium") return `${originalSize + 0.275}rem`;
  if (size === "large") return `${originalSize + 0.575}rem`;
};
export const toggleClassName = (
  mainTheme,
  whiteTheme,
  blackTheme,
  contrastTheme
) => {
  const currentTheme = theme.theme;
  if (currentTheme === "main") return mainTheme;
  if (currentTheme === "white") return whiteTheme;
  if (currentTheme === "black") return blackTheme;
  if (currentTheme === "contrast") return contrastTheme;
};
export const toggleImagesClassName = (color, gray, on, off) => {
  const currentImage = images.image;
  if (currentImage === "color") return color;
  if (currentImage === "gray") return gray;
  if (currentImage === "on") return on;
  if (currentImage === "off") return off;
};
export const disabled = () => {
  fontSize.normal();
  theme.white();
  images.gray();
};
