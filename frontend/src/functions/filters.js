import { isWithinInterval } from 'date-fns';
import { serializeEvent } from './serializers';

export const filterEventsByDate = (events, date) => {
  return events
    .map(event => serializeEvent(event))
    .filter(event =>
      isWithinInterval(new Date(date), { start: new Date(event.startDate), end: new Date(event.endDate) })
    )
    .sort((a, b) => {
      if (a.start < b.start) return -1;
      if (a.start > b.start) return 1;
      return 0;
    });
};