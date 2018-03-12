let bot;
class kittenBot
{
    var observe,save;
    constructor()
    {        
        observe= setInterval(function(){
            if(gamePage.calendar.observeBtn)
                gamePage.calendar.observeBtn.click();
        },1000);

        save= setTimeout(function(){
            gamePage.autosaveFrequency = 20;
        gamePage.ticksBeforeSave=1;
        },1000);
        bot = new kittenBot();        
    }
    export() 
    {
    	$(".exported").remove();
        gamePage.saveExport();
        var text = $("textarea[id*='exportData']").val();
        console.log(text);
        $('#exportDiv').hide();
		$( "<div class='exported'><span id='exportedVal'>"+text+"</span></div>" ).insertBefore("a[onclick*='bot.export()']").hide();
		bot.copyToClipboard("#exportedVal");
    }

    import() 
    {
    	$('#importDiv').show();
    	$("#importData").select();		
    }
    
    trade()
    {
    	autoTrade=setInterval(function(){            	
            if(gamePage.resPool.get('uranium').value < 5 && gamePage.resPool.get('titanium').value >= 250 && gamePage.diplomacy.get('dragons').unlocked)
                gamePage.diplomacy.tradeAll(gamePage.diplomacy.get('dragons'));
            else if(gamePage.diplomacy.get('zebras').unlocked)
                gamePage.diplomacy.tradeAll(gamePage.diplomacy.get('zebras'));
            },10000);
    }
    start()
    {
        if(arguments.length>=1)
        {
            var length = 15000;
            for (var i = arguments.length - 1; i >= 0; i--) 
            {
                if(arguments[i]==30)
                	clearInterval(compedium);
                if(arguments[i]==3 && gamePage.workshop.getCraft('compedium').unlocked)
                    compedium = setInterval(function(){gamePage.craftAll('compedium');},length);
                
                if(arguments[i]==20)
                	clearInterval(manuscript);
                if(arguments[i]==2 && gamePage.workshop.getCraft('manuscript').unlocked)
                    manuscript = setInterval(function(){gamePage.craftAll('manuscript');},length);

                if(arguments[i]==10)
                	clearInterval(parchment);
                if(arguments[i]==1 && gamePage.workshop.getCraft('parchment').unlocked)
                    parchment = setInterval(function(){gamePage.craftAll('parchment');},length);
        		
                
                if(arguments[i]==40)
                	clearInterval(blueprint);
                if(arguments[i]==4 && gamePage.workshop.getCraft('blueprint').unlocked)
                    blueprint = setInterval(function(){gamePage.craftAll('blueprint');},length);

            }
        }
    }

    hunt()
    {
        autoHunt = setInterval(function() 
        {
            var catpower = gamePage.resPool.get('manpower');
            if (catpower.value / catpower.maxValue > 0.95) 
            {
                $("a:contains('Send hunters')").click();
            }
        }, 5 * 1000);
    }

    craft()
    {                
        autoCraft = setInterval(function() 
        {
            var resources = 
            [
                ["wood", "beam"],
                ["minerals", "slab"],
                ["coal", "steel"],
                ["iron", "plate"],
                
            ];

            for (var i = 0; i < resources.length; i++) 
            {
                var curRes = gamePage.resPool.get(resources[i][0]);
                if (curRes.value / curRes.maxValue > 0.95 && gamePage.workshop.getCraft(resources[i][1]).unlocked) 
                {
                    gamePage.craft(resources[i][1],10);
                    gamePage.craft(resources[i][1],10);
                    gamePage.craft(resources[i][1],10);
                    gamePage.craft(resources[i][1],10);
                    gamePage.craft(resources[i][1],10);
                }
            }
            if(gamePage.resPool.get('slab').value > 120000 && gamePage.resPool.get('concrate').unlocked)
                while(gamePage.resPool.get('slab').value > 90000)
                    gamePage.craft(gamePage.resPool.get('concrate'),1);
            var titan = gamePage.resPool.get('titanium');
            var steel = gamePage.resPool.get('steel');
            var coal = gamePage.resPool.get('coal');
            if(titan.value/titan.maxValue>0.95 && steel.value/coal.maxValue>0.1 && gamePage.resPool.get('alloy').unlocked)
                gamePage.craft(gamePage.resPool.get('alloy'),10);
        }, 2 * 1000);
    }
        
    pray()
    {
        autoPray = setInterval(function() 
        {
            if (gamePage.resPool.get('faith').value / gamePage.resPool.get('faith').maxValue > 0.95) 
                this.game.religion.praise();
        }, 10 * 1000);
    }

    copyToClipboard(element) 
    {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }

}          


