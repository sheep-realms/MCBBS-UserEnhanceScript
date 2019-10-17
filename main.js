// ==UserScript==
// @name         MCBBS用户增强脚本
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  MCBBS用户增强脚本
// @author       我是绵羊Yang_g
// @include     http*://*.mcbbs.net*
// @match       http://*.mcbbs.net/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var UID = 2153967;
    var addToolsBoxItem = [
        "<b>= 签到 =</b>",
        "审核池"
    ];
    var addToolsBoxUrl = [
        "plugin.php?id=dc_signin:sign",
        "home.php?mod=space&uid="+UID+"&do=thread&view=me&type=thread&from=&filter=aduit"
    ];
    var addToolsBoxOnclick = [
        "showWindow('sign', this.href)",
        ""
    ];

    //var txtSeach = document.getElementById("srchtxt").value;

    for(var a=2; a<3; a++) {
        var txtUsertools_menu = document.getElementsByClassName("p_pop");
        txtUsertools_menu[a].innerHTML += "<li><a href=\"plugin.php?id=dc_signin:sign\" onclick=\"showWindow('sign', this.href)\"><b>= 签到 =</b></a></li><li><a href=\"home.php?mod=space&uid="+UID+"&do=thread&view=me&type=thread&from=&filter=aduit\">审核池</a></li><li><a href=\"forum.php?mod=misc&action=viewwarning&tid=20&uid="+UID+"\" onclick=\"showWindow('viewwarning', this.href)\">警告记录</a></li>";

    }

    //for(var a=2; a<3; a++) {
    //    var txtUsertools_menu = document.getElementsByClassName("p_pop");
    //    txtUsertools_menu[a].innerHTML += "<li><a href=\"plugin.php?id=dc_signin\"><b>= 签到 =</b></a></li><li><a href=\"home.php?mod=space&uid="+UID+"&do=thread&view=me&type=thread&from=&filter=aduit\">审核池</a></li><li><a href=\"forum.php?mod=misc&action=viewwarning&tid=20&uid="+UID+"\" onclick=\"showWindow('viewwarning', this.href)\">警告记录</a></li>";
    //}

    for(var b=0; b<1; b++) {
        var txtTitle = document.getElementsByClassName("z");
        txtTitle[b].innerHTML += "<a href=\"forum-chat-1.html\">矿工茶馆</a><a href=\"forum.php?gid=1\">论坛事务</a>";
    }

    //for(var c=0; c<1; c++) {
    //    var txtUserpageName = document.getElementsByClassName("xw0");
    //    var txtUID = parseInt(window.location.pathname);
    //    txtUserpageName[b].innerHTML += "<a href=\"forum.php?mod=misc&action=viewwarning&tid=20&uid="+txtUID+"\">警告记录</a>";
    //}

    function warnLogSeach()
    {
        var txtSeach = document.getElementById("srchtxt").value;
        if (txtSeach != "" ) {
            showWindow('viewwarning', "forum.php?mod=misc&action=viewwarning&tid=20&uid="+txtSeach)
        }
    }




})();
