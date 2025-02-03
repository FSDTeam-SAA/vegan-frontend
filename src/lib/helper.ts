// Helper function to handle text truncation
export const truncateText = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};
