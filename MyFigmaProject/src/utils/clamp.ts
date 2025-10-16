export function generateClamp(
  min: number,
  max: number,
  minViewport = 320,
  maxViewport = 1440
): string {
  const slope = (max - min) / (maxViewport - minViewport);
  const slopeVw = slope * 100;
  const intercept = min - slope * minViewport;

  return `clamp(${min}px, calc(${slopeVw.toFixed(4)}vw + ${intercept.toFixed(
    4
  )}px), ${max}px)`;
}
