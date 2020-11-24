var line1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "vconcat": [{
        "data": {
        //   "url":"https://api.covidtracking.com/v1/states/current.csv"
            "url":"./data/refugee.csv"
        },
        "transform": [{
            "filter": "datum.Total >= 1000000"
        }],
        "width": 480,
        "height": 360,
        // "height": {"step": 1},
        // "mark": "line",
        "encoding": {
            "x": {"field": "Year", "type": "temporal", "title": "Year"},
            "y": {"field": "Total", "type": "quantitative", "title": "Total Refugee Population"},
            // "color": {"field": "Country of origin", "type": "nominal"},
            "color": {
                "condition": {
                    "selection": "hover",
                    "field": "Country of origin",
                    "type": "nominal",
                    "legend": null
                },
                "value": "grey"
            },
            "opacity": {
                "condition": {
                    "selection": "hover",
                    "value": 1
                },
                "value": 0.2
            },
            // "tooltip": {"field": "Total", "type": "quantitative"},
        },
        "layer": [
            {
                "selection": {
                "hover": {
                    "type": "single",
                    "on": "mouseover",
                    "empty": "all",
                    "fields": ["Country of origin"],
                    "init": {"Country of origin": "Syrian Arab Rep."}
                }
                },
                "mark": {"type": "line", "strokeWidth": 10, "stroke": "transparent", "point": {"filled": false, "fill": "white", "size": 50}}
            }, 
            {"mark": "line"}, 
            {
                "encoding": {
                "x": {"aggregate": "max", "field": "Year"},
                "y": {"aggregate": {"argmax": "Year"}, "field": "Total"}
                },
                "layer": [
                    // {"mark": {"type": "circle", "filled": false}}, 
                    {
                        "mark": {"type": "text", "align": "left", "dx": 10, "fontSize": 12},
                        "encoding": {"text": {"field":"Country of origin", "type": "nominal"}}
                    }
                ]
            }
        ],
        "config": {"view": {"stroke": null}},
        "selection": {"brush": {"type": "interval"}}
    }]
}

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

var line3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "vconcat": [{
        "data": {
        //   "url":"https://api.covidtracking.com/v1/states/current.csv"
            "url":"./data/refugee.csv"
        },
        "transform": [{
            "filter": "datum.Total >= 1000000"
        }],
        "width": 480,
        "height": 360,
        // "height": {"step": 1},
        // "mark": "line",
        "encoding": {
            "x": {"field": "Year", "type": "temporal", "title": "Year"},
            "y": {"field": "Total", "type": "quantitative", "title": "Total Refugee Population"},
            // "color": {"field": "Country of origin", "type": "nominal"},
            "color": {
                "condition": {
                    "selection": "hover",
                    "field": "Country of origin",
                    "type": "nominal",
                    "legend": null
                },
                "value": "grey"
            },
            "opacity": {
                "condition": {
                    "selection": "hover",
                    "value": 1
                },
                "value": 0.2
            },
            // "tooltip": {"field": "Total", "type": "quantitative"},
        },
        "layer": [
            {
                "selection": {
                "hover": {
                    "type": "single",
                    "on": "mouseover",
                    "empty": "all",
                    "fields": ["Country of origin"],
                    "init": {"Country of origin": "Syrian Arab Rep."}
                }
                },
                "mark": {"type": "line", "strokeWidth": 10, "stroke": "transparent", "point": {"filled": false, "fill": "white", "size": 50}}
            }, 
            {"mark": "line"}, 
            {
                "encoding": {
                "x": {"aggregate": "max", "field": "Year"},
                "y": {"aggregate": {"argmax": "Year"}, "field": "Total"}
                },
                "layer": [
                    // {"mark": {"type": "circle", "filled": false}}, 
                    {
                        "mark": {"type": "text", "align": "left", "dx": 10, "fontSize": 12},
                        "encoding": {"text": {"field":"Country of origin", "type": "nominal"}}
                    }
                ]
            }
        ],
        "config": {"view": {"stroke": null}},
        "selection": {"brush": {"type": "interval"}}
    }]
}

vegaEmbed('#line1', line1);
vegaEmbed('#bar2', bar2);
vegaEmbed('#line3', line3);