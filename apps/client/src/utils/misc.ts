
export const capitaliseWord = (word: string) =>
  word.length > 0
    ? word[0].toLocaleUpperCase() + word.substring(1)
    : word;
  