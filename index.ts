import Chart from 'chart.js'

import { buildings } from './data/building'
import moment from 'moment'
import * as prime from './ts/prime'
import { parse } from './ts/prime'

window.addEventListener('DOMContentLoaded', () => {
    const lable = prime.label(prime.parse('20/5/2006'))
    console.log(lable)
    console.log(prime.extrapolate({
        date: parse('5/7/1999'),
        value: 0
    }, {
        date: parse('7/7/1999'),
        value: 10
    }))
})
