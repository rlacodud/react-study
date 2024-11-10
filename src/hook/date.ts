import dayjs from 'dayjs';

export const formatDate = (date: string): string => {
    const format = date.substring(0, date.indexOf('T'))
    return dayjs(format).format('YYYY년 MM월 DD일');
}