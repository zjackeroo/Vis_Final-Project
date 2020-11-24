var bar2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {
        //"url":"https://data.world/polymathic/casualties-of-the-syrian-civil-war 
        "url":"./data/demographics.csv"
    },
    "width": 480,
    "height": 360,
    "selection": {
        "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
        "select": {"type": "multi"}
    },
    "mark": {
        "type": "bar",
        "cornerRadiusTopLeft":4,
        "cornerRadiusTopRight":4,
        "stroke": "black",
        "cursor": "pointer",
        "tooltip": true
      },
    "encoding":{
        "x":{
            "timeUnit": "year",
            "field":"deathdate",
            "type":"ordinal",
            "title":"Year"
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
                "range": [ "#89cff0","#9370DB"]
            },
            "title": "Status of the casualities"
        },
        "fillOpacity": {
            "condition": {"selection": "select", "value": 1},
            "value": 0.3
        },
        "strokeWidth": {
            "condition": [
              {
                "test": {
                  "and": [
                    {"selection": "select"},
                    "length(data(\"select_store\"))"
                  ]
                },
                "value": 2
              },
              {"selection": "highlight", "value": 1}
            ],
            "value": 0
          }
    }
}
vegaEmbed('#bar2', bar2);



       