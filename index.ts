import moment from 'moment'
import * as prime from "./ts/prime"

window.addEventListener('DOMContentLoaded', () => {
    const charts = document.getElementById('charts')

    const fuel = [
        { "val": "39710.1", "year": 1992 },
        { "val": "41249.8", "year": 1993 },
        { "val": "46807.5", "year": 1994 },
        { "val": "50555.0", "year": 1995 },
        { "val": "55609.6", "year": 1996 },
        { "val": "58124.0", "year": 1997 },
        { "val": "59092.0", "year": 1998 },
        { "val": "63621.0", "year": 1999 },
        { "val": "57397.7", "year": 2000 },
        { "val": "58522.0", "year": 2001 },
        { "val": "59856.8", "year": 2002 },
        { "val": "61085.7", "year": 2003 },
        { "val": "61071.9", "year": 2004 },
        { "val": "61109.2", "year": 2005 },
        { "val": "62052.7", "year": 2006 },
        { "val": "64789.8", "year": 2007 },
        { "val": "64415.9", "year": 2008 },
        { "val": "61990.4", "year": 2009 },
        { "val": "63537.5", "year": 2010 },
        { "val": "65081.5", "year": 2011 },
        { "val": "70250.7", "year": 2012 },
        { "val": "64237.9", "year": 2013 },
        { "val": "61919.7", "year": 2014 },
        { "val": "64383.3", "year": 2015 },
        { "val": "63256.8", "year": 2016 },
        { "val": "62934.8", "year": 2017 },
        { "val": "62873.6", "year": 2018 }
    ].map(
        p => ({
            x: moment([p.year]).endOf('year').unix(),
            y: parseFloat(p.val)
        })
    )

    const edu = [
        { "val": 48545.0, "year": 2006 },
        { "val": 52176.0, "year": 2007 },
        { "val": 55737.0, "year": 2008 },
        { "val": 57153.0, "year": 2009 },
        { "val": 61879.0, "year": 2010 },
        { "val": 66376.0, "year": 2011 },
        { "val": 72390.0, "year": 2012 },
        { "val": 80880.0, "year": 2013 },
        { "val": 84058.0, "year": 2014 },
        { "val": 88050.0, "year": 2015 }
    ].map(
        p => ({
            x: moment([p.year]).endOf('year').unix(),
            y: p.val
        })
    )

    const babies = [
        { "val": 5.5, "year": 2000.0 },
        { "val": 5.1, "year": 2001.0 },
        { "val": 5.4, "year": 2002.0 },
        { "val": 4.9, "year": 2003.0 },
        { "val": 4.6, "year": 2004.0 },
        { "val": 4.4, "year": 2005.0 },
        { "val": 4.0, "year": 2006.0 },
        { "val": 3.9, "year": 2007.0 },
        { "val": 3.8, "year": 2008.0 },
        { "val": 3.8, "year": 2009.0 },
        { "val": 3.7, "year": 2010.0 },
        { "val": 3.5, "year": 2011.0 },
        { "val": 3.6, "year": 2012.0 },
        { "val": 3.1, "year": 2013.0 },
        { "val": 3.1, "year": 2014.0 },
        { "val": 3.2, "year": 2015.0 },
        { "val": 3.1, "year": 2016.0 },
        { "val": 3.1, "year": 2017.0 },
        { "val": 3.0, "year": 2018.0 }
    ].map(
        p => ({
            x: moment([p.year]).endOf('year').unix(),
            y: p.val
        })
    )

    charts?.appendChild(prime.chart('שריפת דלק', fuel))
    charts?.appendChild(prime.chart('מימון הוצאות החינוך ללא בלאי - סך כולל', edu))
    charts?.appendChild(prime.chart('תמותת תינוקות ל-1000 לידות', babies))
})
