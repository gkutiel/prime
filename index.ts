import * as p from "./ts/prime"

window.addEventListener('DOMContentLoaded', () => {
    const charts = document.getElementById('charts')
    charts?.appendChild(p.chart([
        {
            x: p.parse('5/6/1996').unix(),
            y: 0
        },
        {
            x: p.parse('5/6/2000').unix(),
            y: 10
        },
        {
            x: p.parse('5/6/2007').unix(),
            y: 20
        },
        {
            x: p.parse('5/6/2010').unix(),
            y: 15
        },
        {
            x: p.parse('5/6/2015').unix(),
            y: 23
        },
    ]))
})
