import { format } from 'date-fns';

export const serializeEvent = event => {
  if (event === null) {
    return null;
  }
  const start = new Date(event.start);
  const end = new Date(event.end);
  return {
    ...event,
    start,
    end,
    color: event.color || '#2196F3',
    startDate: format(start, 'yyyy-MM-dd'),
    startTime: format(start, 'HH:mm'),
    endDate: format(end, 'yyyy-MM-dd'),
    endTime: format(end, 'HH:mm'),
  };
};
