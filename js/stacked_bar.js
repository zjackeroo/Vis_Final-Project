var bar2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        //   "url":"https://data.world/polymathic/casualties-of-the-syrian-civil-war 
        "url":"./data/demographics.csv"
    },
    "width": 480,
    "height": 360,
    "mark":"bar",
    "encoding":{
        "x":{
            "timeUnit": "year",
            "field":"deathdate",
            "type":"ordinal",
            "title":"Number of Civilians and non-Civilians deaths per year"
        },
        "y":{
            "aggregate":"count",
            "type":"quantitative"
        },
        "color":{
            "field":"status",
            "type":"nominal",
            "scale":{
                "domain": ["Civilian","Non-Civilian"],
                "range": [ "#e7ba52","#c7c7c7"]
            },
            "title": "Status of the casualities"
        }
    }
}
vegaEmbed('#bar2', bar2);



       