import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localizedFormat);
dayjs.extend(localeData);

export function parseDate(date) {
  return dayjs(date);
}
