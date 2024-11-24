export const formatSchedule = (schedule) => {
  const { month, date, day, staff, holiday } = schedule;
  if (holiday) return `${month}월 ${date}일 ${day} (${holiday}) ${staff}`;

  return `${month}월 ${date}일 ${day} ${staff}`;
};
