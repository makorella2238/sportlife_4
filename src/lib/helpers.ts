const leading_zero = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export const format_time = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${leading_zero(minutes)}:${leading_zero(seconds)}`;
};