import { parseISO, format } from 'date-fns'

export const dateStringToDate = (dateString: string) =>
  format(parseISO(dateString), 'HH:mm:ss uuuu-LL-dd')
