// ==UserScript==
// @name         MCBBS用户增强脚本
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  MCBBS用户增强脚本
// @author       我是绵羊Yang_g
// @include     http*://*.mcbbs.net*
// @match       http://*.mcbbs.net/
// @run-at       document-end
// @grant        none
// ==/UserScript==

//这里包含一些废弃代码，由于它们对以后的更新还有参考价值，所以保留了。
//我已经在尽力遏制我那奔放的变量名了，请不要打我谢谢>_<
//如果您需要修改一些东西，请继续往下看

(function() {
    'use strict';

    // 版本号
    const version = "1.1";


    //读取本地cookie获取账号UID - GitHub贡献者：HUANGHU1
    const UID = document.cookie.split(';').map(item => item.split('=')).find(item => item[0].indexOf('st_p') > -1)[1].split('%')[0];
    // 获取不到UID则不继续执行后续操作
    if (!UID) return;

    // 在此处填写您的DIY数据
    //
    // 为了更直观地表达，我们接下来把右上角那个箱子图标直接称呼为工具箱

    // 更新: 将原来的四个数组改成用对象字面量来声明要添加的项目
    // 例子如下：
    /*
    {
        name: '项目名称（支持html）',
        url: '项目链接',
        style: '内联样式',
        onClick: "alert('点击事件')"
    }
    */

    // 更新: 工具箱项目
    const toolsBoxItem = [{
        name: '审核池',
        url: 'home.php?mod=space&uid=' + UID + '&do=thread&view=me&type=thread&from=&filter=aduit',
        style: '',
        onClick: ""
    }, {
        name: '警告记录',
        url: 'forum.php?mod=misc&action=viewwarning&tid=20&uid=' + UID,
        style: '',
        onClick: ""
    }, {
        name: '<b>= 签到 =</b>',
        url: 'plugin.php?id=dc_signin:sign',
        style: '',
        onClick: "showWindow('sign', this.href)"
    }]

    // 更新: 顶部菜单栏(左)项目
    const topMenuZItem = [{
        name: '矿工茶馆',
        url: 'forum-chat-1.html',
        style: '',
        onClick: ""
    }, {
        name: '论坛事务',
        url: 'forum.php?gid=1',
        style: '',
        onClick: ""
    }, {
        name: '<b>= 签到 =</b>',
        url: 'plugin.php?id=dc_signin:sign',
        style: '',
        onClick: "showWindow('sign', this.href)"
    }]

    // 获取元素的dom对象
    // 改用document.querySelector获取，用法类似jquery简单方便
    const userToolsMenu = document.querySelector('ul#usertools_menu.p_pop'), // 工具箱弹出层
          topMenuZ = document.querySelector('div.new_wp.wp .z'); // 顶部菜单栏(左)

    // 重构掉for...语句了，改用数组方法forEach遍历，看起来简洁明了
    // 遍历工具箱项目数组
    toolsBoxItem.forEach(item => {
        let li = document.createElement('li') // 创建dom对象
        item.style ? li.setAttribute('style', item.style) : null // 设置style属性
        li.innerHTML = '<a href="' + (item.url || '#') + '" onClick="' + (item.onClick) + '">' + item.name + '</a>' // li的html内容，里面放了个a标签
        userToolsMenu.insertBefore(li, userToolsMenu.lastChild) // 在末尾插入子元素
    })

    // 遍历顶部菜单栏(左)项目数组
    topMenuZItem.forEach(item => {
        let a = document.createElement('a') // 注释同上。。。。
        a.setAttribute('href', item.url || '#')
        item.style ? a.setAttribute('style', item.style) : null
        item.onClick ? a.setAttribute('onclick', item.onClick) : null
        a.innerHTML = item.name
        topMenuZ.insertBefore(a, topMenuZ.lastChild)
    })

    //for(var a=2; a<3; a++) {
    //    var txtUsertools_menu = document.getElementsByClassName("p_pop");
    //    txtUsertools_menu[a].innerHTML += "<li><a href=\"plugin.php?id=dc_signin\"><b>= 签到 =</b></a></li><li><a href=\"home.php?mod=space&uid="+UID+"&do=thread&view=me&type=thread&from=&filter=aduit\">审核池</a></li><li><a href=\"forum.php?mod=misc&action=viewwarning&tid=20&uid="+UID+"\" onclick=\"showWindow('viewwarning', this.href)\">警告记录</a></li>";
    //}

    // 你这里还要做一个判断当前页面是否是帖子内页面的状态判断
    // 否则在其它页面就会出现找不到dom的报错导致脚本不会继续运行了
    // 这里给你个思路吧 直接通过window.location.href获取当前页面url
    // 然后判断url是否包含‘thread’关键字（当然你想用正则表达式也可以…）
    // 暂时帮你屏蔽掉了有问题的部分
    // ----------------
    /*
    for(b=0; b<1; b++) {
        var txtRulesPtm = document.getElementsByClassName("ptm pnpost");
        txtRulesPtm[b].innerHTML += "<span class=\"pipe\">|</span><a href=\"thread-7808-1-1.html\" target=\"_blank\">论坛规则</a>";
    }

    for(b=1; b<2; b++) {
        var txtDebuginfo = document.getElementsByClassName("xs0");
        txtDebuginfo[b].innerHTML += "<p><b>页面上已加载脚本，该页面并非原始网页</b></p><div class=\"spr_mcbbs_jslist\"><p><a href=\"https://www.mcbbs.net/thread-920721-1-1.html\"><small>MCBBS用户增强脚本 v"+version+"</small></a> - by <a href=\"https://www.mcbbs.net/?2153967\"><small>我是绵羊Yang_g</small></a></p></div>";
    }
    */
    // ----------------

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
