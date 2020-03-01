import moment, { Moment } from 'moment'


const primes = [
    ['13/7/92', 'רבין'],
    ['22/11/95', 'פרס'],
    ['18/6/96', 'ביבי'],
    ['6/7/99', 'ברק'],
    ['7/3/01', 'שרון'],
    ['14/4/06', 'אולמרט'],
    ['31/3/09', 'ביבי'],
].map((tuple) => {
    return {
        name: tuple[1]
        , startDate: parse(tuple[0])
    }
})

type point = {
    date: Moment
    value: number
}

export function parse(date: string) {
    return moment(date, 'DD/MM/YYYY')
}

export function label(date: Moment) {
    for (let prime of primes.reverse()) {
        if (date.isAfter(prime.startDate)) {
            return prime.name
        }
    }
}

function value(p1: point, p2: point, date: Moment) {
    const r = (date.unix() - p1.date.unix()) / (p2.date.unix() - p1.date.unix())
    const d = (p2.value - p1.value)
    console.log(r, d)
    return p1.value + r * d
}

export function extrapolate(p1: point, p2: point) {
    const points: point[] = [p1]

    for (let prime of primes) {
        if (prime.startDate.isBetween(p1.date, p2.date)) {
            points.push({
                date: prime.startDate,
                value: value(p1, p2, prime.startDate)
            })
        }
    }

    points.push(p2)

    return points
}

export function get(series: point[]) {

}