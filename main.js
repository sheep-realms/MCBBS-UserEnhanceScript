// ==UserScript==
// @name         MCBBS用户增强脚本
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  MCBBS用户增强脚本
// @author       我是绵羊Yang_g
// @include     http*://*.mcbbs.net*
// @match       http://*.mcbbs.net/
// @grant        none
// ==/UserScript==

//这里包含一些废弃代码，由于它们对以后的更新还有参考价值，所以保留了。
//我已经在尽力遏制我那奔放的变量名了，请不要打我谢谢>_<
//如果您需要修改一些东西，请继续往下看

(function() {
    'use strict';

    //在此处填写您的DIY数据
    //
    //您的UID
    //更新: 直接读取本地cookie获取账号UID
    const UID = document.cookie.split(';').map(item => item.split('=')).find(item => item[0].indexOf('st_p') > -1)[1].split('%')[0];
    //获取不到UID则不继续执行后续操作
    if (!UID) return;
    //为了更直观地表达，我们接下来把右上角那个箱子图标直接称呼为工具箱
    //工具箱项目（显示名称，可使用HTML）
    var addToolsBoxItem = [
        "<b>= 签到 =</b>",
        "审核池",
        "警告记录"
    ];
    //工具箱项目（链接）
    var addToolsBoxUrl = [
        "plugin.php?id=dc_signin:sign",
        "home.php?mod=space&uid="+UID+"&do=thread&view=me&type=thread&from=&filter=aduit",
        "forum.php?mod=misc&action=viewwarning&tid=20&uid="+UID
    ];
    //工具箱项目（样式）
    var addToolsBoxStyle = [
        "",
        "",
        ""
    ];
    //工具箱项目（点击事件）
    var addToolsBoxOnclick = [
        "showWindow('sign', this.href)",
        "",
        "showWindow('viewwarning', this.href)"
    ];

    //顶部栏项目（显示名称，可使用HTML）
    var addTopBarItem = [
        "综合讨论",
        "论坛事务",
        "<b>= 签到 =</b>"
    ];
    //顶部栏项目（链接）
    var addTopBarUrl = [
        "forum-chat-1.html",
        "forum.php?gid=1",
        "plugin.php?id=dc_signin:sign"
    ];
    //顶部栏项目（样式）
    var addTopBarStyle = [
        "",
        "",
        ""
    ];
    //顶部栏项目（点击事件）
    var addTopBarOnclick = [
        "",
        "",
        "showWindow('sign', this.href)"
    ];
    //一个对一个，先后顺序要对准，别搞乱了，不需要的可以留空

    //初始化变量
    var i=0;
    var TextSave = "";

    //改变工具箱
    for(var a=2; a<3; a++) {
        TextSave = "";
        var txtUsertools_menu = document.getElementsByClassName("p_pop");
        for(i=0;i<addToolsBoxItem.length;i++) {
            TextSave += "<li><a href=\""+addToolsBoxUrl[i]+"\"";
            if (addToolsBoxOnclick[i] != "") TextSave += " onclick=\""+addToolsBoxOnclick[i]+"\"";
            if (addToolsBoxStyle[i] != "") TextSave += " style=\""+addToolsBoxStyle[i]+"\"";
            TextSave += ">"+addToolsBoxItem[i]+"</a></li>";
        }
        txtUsertools_menu[a].innerHTML += TextSave;
    }

    //for(var a=2; a<3; a++) {
    //    var txtUsertools_menu = document.getElementsByClassName("p_pop");
    //    txtUsertools_menu[a].innerHTML += "<li><a href=\"plugin.php?id=dc_signin\"><b>= 签到 =</b></a></li><li><a href=\"home.php?mod=space&uid="+UID+"&do=thread&view=me&type=thread&from=&filter=aduit\">审核池</a></li><li><a href=\"forum.php?mod=misc&action=viewwarning&tid=20&uid="+UID+"\" onclick=\"showWindow('viewwarning', this.href)\">警告记录</a></li>";
    //}

    //改变顶部栏
    for(var b=0; b<1; b++) {
        TextSave = "";
        var txtTopBar = document.getElementsByClassName("z");
        for(i=0;i<addTopBarItem.length;i++) {
            TextSave += "<a href=\""+addTopBarUrl[i]+"\"";
            if (addTopBarOnclick[i] != "") TextSave += " onclick=\""+addTopBarOnclick[i]+"\"";
            if (addTopBarStyle[i] != "") TextSave += " style=\""+addTopBarStyle[i]+"\"";
            TextSave += ">"+addTopBarItem[i]+"</a>";
        }
        txtTopBar[b].innerHTML += TextSave;
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
            showWindow('viewwarning', "forum.php?mod=misc&action=viewwarning&tid=20&uid="+txtSeach);
        }
    }

})();
