import { average } from "color.js";

export default async function getAverageColorsFromImages(imgUrls: string[]) {
  const averageColors = [];

  for (const imageUrl of imgUrls) {
    const color = await average(imageUrl, { format: "hex" });
    averageColors.push(color);
  }

  return averageColors;
}
