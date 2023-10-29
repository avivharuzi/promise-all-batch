export const sleep = (time: number): Promise<number> => {
  return new Promise((resolve) => setTimeout(() => resolve(time), time));
};
