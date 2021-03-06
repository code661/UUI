import { format, parse } from "date-fns"
import { getZeroDate } from "./DateTimeUtils";
import { DEFAULT_DATE_FORMAT_TOKEN } from "./DateTimeDefaults";


export function formatDate(date: Date | null) {
  return date === null ? '' : format(date, 'yyyy-MM-dd')
}
export function tryParseDateFromString(dateString: string) {
  const result = parse(dateString, DEFAULT_DATE_FORMAT_TOKEN, getZeroDate())
  if (isNaN(result.getTime())) throw new Error('date_string_parse_failed');
  return result
}