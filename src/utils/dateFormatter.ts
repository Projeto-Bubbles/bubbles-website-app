export const formatter = (options: Intl.DateTimeFormatOptions, date: Date) => {
  const formatter = new Intl.DateTimeFormat('pt-BR', options);
  return formatter.format(date);
};
