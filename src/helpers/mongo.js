export const generateMongoId = (length) => {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = length; i > 0; i -= 1) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }
  return result;
};

export { generateMongoId as default };
