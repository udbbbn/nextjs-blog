import {parseISO, format} from 'date-fns'

export default function date({ dateString }) {
    const date = parseISO(dateString)
    return <time datetime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}