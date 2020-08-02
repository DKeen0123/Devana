export const dateToUnixTimestamp = (date: Date) =>
  Math.round(date.getTime() / 1000);

export const unixTimestampToDate = (timestamp: number) => new Date(timestamp);
