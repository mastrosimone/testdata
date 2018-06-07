var json = {

    getTotpaid_views2: function()
    
    {
    var result = 0
    for(x = 0;x < this.data.length;x++)
    {
    result += this.data[x].paid_views.desktop +
    this.data[x].paid_views.mobile
    
    }
    return 'Paid Views: ' + result
    },

    data: [
        {
            "interactions": {
                "reactions": 1,
                "comments": 0,
                "shares": 0
            },
            "q25": 74,
            "q50": 26,
            "q75": 14,
            "q100": 3,
            "q_complete": 3,
            "clicks": 1,
            "unique_views": 172,
            "reach": 1376,
            "platform": "instagram",
            "impressions": 1490,
            "coins": 230300,
            "earned_views": {
                "desktop": 0,
                "mobile": 171
            },
            "paid_views": {
                "desktop": 55631,
                "mobile": 55555
            },
            "date": "2018-03-14T00:00:00.000Z"
        }, 
        {
            "interactions": {
                "reactions": 22,
                "comments": 0,
                "shares": 0
            },
            "q25": 3918,
            "q50": 1267,
            "q75": 494,
            "q100": 269,
            "q_complete": 269,
            "clicks": 35,
            "unique_views": 7396,
            "reach": 18360,
            "platform": "facebook",
            "impressions": 21007,
            "coins": 0,
            "earned_views": {
                "desktop": 0,
                "mobile": 4847
            },
            "paid_views": {
                "desktop": 44,
                "mobile": 2853
            },
            "date": "2018-03-15T00:00:00.000Z"
        }, 
        {
            "interactions": {
                "reactions": 0,
                "comments": 0,
                "shares": 0
            },
            "q25": 390,
            "q50": 131,
            "q75": 90,
            "q100": 77,
            "q_complete": 77,
            "clicks": 12,
            "unique_views": 840,
            "reach": 912,
            "platform": "facebook",
            "impressions": 1576,
            "coins": 700,
            "earned_views": {
                "desktop": 0,
                "mobile": 1039
            },
            "paid_views": {
                "desktop": 48,
                "mobile": 388
            },
            "date": "2018-03-16T00:00:00.000Z"
        }
    ]
};