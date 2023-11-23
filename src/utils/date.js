import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.extend(relativeTime);

export function parseDate(date) {
  return dayjs(date);
}
