import * as p from "./ts/prime"

window.addEventListener('DOMContentLoaded', () => {
    const charts = document.getElementById('charts')
    charts?.appendChild(p.chart('Some Title', [
        {
            x: p.parse('1/1/99').unix(),
            y: 0
        },
        {
            x: p.parse('1/1/2000').unix(),
            y: 10
        },
        {
            x: p.parse('1/1/2001').unix(),
            y: 15
        },
        {
            x: p.parse('1/1/2002').unix(),
            y: 10
        },
        {
            x: p.parse('1/1/2003').unix(),
            y: 23
        },
        {
            x: p.parse('1/1/2004').unix(),
            y: 10
        },
        {
            x: p.parse('1/1/2005').unix(),
            y: 30
        },
    ]))
    charts?.appendChild(p.chart('Another Title', [
        {
            x: p.parse('1/1/99').unix(),
            y: 0
        },
        {
            x: p.parse('1/1/2000').unix(),
            y: 10
        },
        {
            x: p.parse('1/1/2001').unix(),
            y: 15
        },
        {
            x: p.parse('1/1/2002').unix(),
            y: 10
        },
        {
            x: p.parse('1/1/2003').unix(),
            y: 23
        },
        {
            x: p.parse('1/1/2004').unix(),
            y: 10
        },
        {
            x: p.parse('1/1/2005').unix(),
            y: 30
        },
    ]))
})
