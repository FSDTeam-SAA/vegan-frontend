// Helper function to handle text truncation
export const truncateText = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

export const toWellFormed = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
