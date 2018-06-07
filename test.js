function print(obj) {
    console.log(JSON.stringify(obj, undefined, 2) + '\n');
    }
    
    function getAllPlatforms()
    {
    
    var result = []
    
    for(x = 0;x < json.data.length;x++)
    {
    result.push(json.data[x].platform)
    
    }
    return result
    }
    
    
    function getTotalImpressions()
    {
    
    var result = 0
    
    for(x = 0;x < json.data.length;x++)
    {
    result += json.data[x].impressions
    
    }
    return result
    }
    
    function getTotalClicks()
    {
    
    var result = 0;
    
    for(x = 0;x < json.data.length;x++)
    {
    result += json.data[x].clicks
    
    }
    return result
    }
    
    function getClicksMedia()
    {
    var result = getTotalClicks();
    return result/json.data.length;
    }
    
    function addClicks(data, clicks)
    {
    for(x = 0;x < json.data.length;x++)
    {
    if (json.data[x].date == data)
    {
    json.data[x].clicks += clicks;
    }
    }
    }
    
    
    function getTotlaInteraction()
    
    {
    var result = 0
    for(x = 0;x < json.data.length;x++)
    {
    result += json.data[x].interactions.reactions +
    json.data[x].interactions.comments + json.data[x].interactions.shares
    
    }
    return 'Interactions: ' + result
    }

    function getTotpaid_views()
    
    {
    var result = 0
    for(x = 0;x < json.data.length;x++)
    {
    result += json.data[x].paid_views.desktop +
    json.data[x].paid_views.mobile
    
    }
    return 'Paid Views: ' + result
    }
    
    function getPercpaid_views()
    
    {
    var desktop = 0
    var mobile = 0
    var perdesktop = 0
    var permobile = 0
    var percrisultato = 0
    for(x = 0;x < json.data.length;x++)
    {
    desktop += json.data[x].paid_views.desktop;
    mobile += json.data[x].paid_views.mobile
    }

    
    if (desktop > mobile) {
        perdesktop = Math.round((desktop - mobile) / desktop * 100)
        return 'Desktop: ' + perdesktop + '% - Smartphone: ' + (100 - perdesktop) + '%'
    } else {
        permobile = Math.round((mobile - desktop) / mobile * 100)
        return 'Desktop: ' + (100 - permobile) + '% - Smartphone: ' + permobile + '%'
    }

    }
    
    function getMigliorinvestimento()
    
    {
    var impressions = 0
    var interactions = 0
    var unique_views = 0
    var earnerd_views = 0
    var paid_views = 0
    var clicks = 0
    var mediacosto = 0
    var reach = 0
    var coins = 0
    for(x = 0;x < json.data.length;x++)
    {
    impressions += json.data[x].impressions;
    interactions += json.data[x].interactions.reactions +
    json.data[x].interactions.comments + json.data[x].interactions.shares;
    unique_views += json.data[x].unique_views;
    earnerd_views += json.data[x].earned_views.desktop + json.data[x].earned_views.mobile;
    paid_views += json.data[x].paid_views.mobile + json.data[x].paid_views.desktop;
    clicks += json.data[x].clicks;
    reach += json.data[x].reach;
    coins += json.data[x].coins
    }

    mediacosto = (coins / (impressions + unique_views + earnerd_views + clicks + interactions + reach + paid_views))
    
    return mediacosto.toFixed(2) + ' Euro for single interaction'

    }
    
    
    //Execution
    
    print(
    getAllPlatforms()
    
    );
    
    print(
    getTotalImpressions()
    );
    
    print(
    getTotalClicks()
    );
    
    print(
    getClicksMedia()
    );
    
    addClicks("2018-03-15T00:00:00.000Z", 3256)
    print(json);
    
    print(
    getTotlaInteraction()
    );

    print(
    getTotpaid_views()
    );

    print(
    getPercpaid_views()
    );

    print(
    getMigliorinvestimento()
    );