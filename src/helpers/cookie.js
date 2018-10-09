export const expTime = () => (
  new Date(new Date().getTime() + (60 * 60 * 1000))
);

export const expInDay = () => (
  new Date(new Date().getTime() + (24 * 3600 * 1000))
);
