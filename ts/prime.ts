import moment, { Moment } from 'moment'


const primes = [
    ['13/7/92', 'רבין'],
    ['22/11/95', 'פרס'],
    ['18/6/96', 'ביבי'],
    ['6/7/99', 'ברק'],
    ['7/3/01', 'שרון'],
    ['14/4/06', 'אולמרט'],
    ['31/3/09', 'ביבי'],
]


type point = {
    x: number,
    y: number,
}

export function parse(date: string) {
    return moment(date, 'DD/MM/YYYY')
}

export function chart(points: point[]) {
    const scale = 500
    const labels = primes.map(p => {
        return {
            unix: parse(p[0]).unix(),
            label: p[1]
        }
    })

    labels.push({ unix: moment().unix(), label: '?' })

    const minX = Math.min(...labels.map(l => l.unix))
    const maxX = Math.max(...labels.map(l => l.unix))

    const scaleX = (x: number) => (x - minX) / (maxX - minX) * scale

    const ys = points.map(p => p.y)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)

    const scaleY = (y: number) => (y - minY) / (maxY - minY) * scale

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute('viewBox', `0 0 ${scale} ${scale}`)

    const rect = (x: number, width: number, label: string) => {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")

        rect.setAttribute('x', `${x}`)
        rect.setAttribute('width', `${width}`)
        rect.setAttribute('height', `${scale}`)
        rect.setAttribute('data-label', label)
        rect.setAttribute('class', 'prime')

        return rect
    }

    for (let i = 0; i < labels.length - 1; i++) {
        const label = labels[i].label
        const x = scaleX(labels[i].unix)
        const width = scaleX(labels[i + 1].unix) - x
        svg.appendChild(rect(x, width, label))
    }

    const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline")
    line.setAttribute('points', points.map(p => `${scaleX(p.x)},${scaleY(p.y)}`).join(' '))

    svg.appendChild(line)
    return svg
}

