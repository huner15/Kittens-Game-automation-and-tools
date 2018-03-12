// ==UserScript==
// @name         Kittens Game Automation
// @namespace    https://github.com/Alistair1231/Kittens-Game-automation-and-tools
// @version      0.3.0
// @description  Auto craft resources when full, auto pray, auto hunt, auto trade, fast autosave, simple save export/import, ...
// @author       Alistair1231
// @match        http*://bloodrizer.ru/games/kittens/*
// @grant        none
// @license GPL-3.0
// @copyright 2018, Alistair1231 (https://openuserjs.org/users/Alistair1231)
// ==/UserScript==

// ==OpenUserJS==
// @author Alistair1231
// ==/OpenUserJS==
var script='';
var object='';
var ln1='';
var ln2='';
var ln3='';

script+='<script src="https://rawcdn.githack.com/Alistair1231/Kittens-Game-automation-and-tools/e5c32c6/kittens.js"></script>'+
	'<script>let bot = new kittenBot();</script>';
ln1+="<a href='#' onclick='bot.trade(1)'>Trade</a><span> | </span>";
ln2+="<a href='#' onclick='bot.start(1)'>1</a><span> </span><a href='#' onclick='bot.start(2)'>2</a><span> </span>"+
	"<a href='#' onclick='bot.start(3)'>3</a><span> </span><a href='#' onclick='bot.start(4)'>4</a><span> | </span>"+
	"<span> </span><a href='#' onclick='bot.pray()'>Pray</a><span> | </span><span> </span>"+
	"<a href='#' onclick='bot.craft()'>Craft</a><span> | </span><span> </span>"+
	"<a href='#' onclick='bot.hunt()'>Hunt</a><span> | </span>";
ln3+="<a href='#' onclick='bot.export()'>Export</a><span> </span><a href='#' onclick='bot.import()'>Import</a>"+
	"<span> | </span>";

$(script).insertBefore("div[id*='gamePageContainer']");
$(ln1).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
$(ln2).insertBefore("a[onclick*='bot.trade(1)']");
$(ln3).insertBefore("a[onclick*='bot.start(1)']");