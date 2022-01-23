Vue.component("common", {
    data() {
        return {
            username: ''
        }
    },
    template: '<div>\n' +
        '\t\t\t<div class="topbar-wrap white">\n' +
        '\t\t\t\t<div class="topbar-inner clearfix">\n' +
        '\t\t\t\t\t<div class="topbar-logo-wrap clearfix">\n' +
        '\t\t\t\t\t\t<h1 class="topbar-logo none">\n' +
        '\t\t\t\t\t\t\t<a href="index.html" class="navbar-brand">后台管理</a>\n' +
        '\t\t\t\t\t\t</h1>\n' +
        '\t\t\t\t\t\t<ul class="navbar-list clearfix">\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="on sendRequest" href="index.html">\n' +
        '\t\t\t\t\t\t\t\t\t首页\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t<div class="top-info-wrap">\n' +
        '\t\t\t\t\t\t<ul class="top-info-list clearfix">\n' +
        '\t\t\t\t\t\t\t<li>欢迎您，{{username}}！</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a href="javascript:void(0)" @click="logout()">退出</a>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<div class="container clearfix">\n' +
        '\t\t\t\t<div class="sidebar-wrap">\n' +
        '\t\t\t\t\t<div class="sidebar-title">\n' +
        '\t\t\t\t\t\t<h1>菜单</h1>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t<div class="sidebar-content">\n' +
        '\t\t\t\t\t\t<ul class="sidebar-list">\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe003;</i>\n' +
        '\t\t\t\t\t\t\t\t\t房源信息\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="ahouselist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe008;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t房源列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="addhouse.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe008;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t添加房源\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t租赁及合同信息\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="zulist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t在租列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="checkout.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe037;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t已退租列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t申请列表\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="applylist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe037;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t看房申请\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="applyout.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe037;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t退租申请\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t报障模块\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="wrong.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t待处理报障\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="solve.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t已处理报障\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe003;</i>\n' +
        '\t\t\t\t\t\t\t\t\t租金信息\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="addpaid.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe008;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t我要收租\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="topaid.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe008;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t租客待缴租金\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="paid.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe008;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t租客已缴租金\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t我的日程\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="schedule.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t查看日程\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="addschedule.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t添加日程\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t其他操作\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="userlist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t账户管理\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t\t<!--/sidebar-->\n' +
        '\t\t\t\t<div class="main-wrap">\n' +
        '\t\t\t\t\t<div class="crumb-wrap">\n' +
        '\t\t\t\t\t\t<div class="crumb-list">\n' +
        '\t\t\t\t\t\t\t<i class="icon-font">&#xe06b;</i>\n' +
        '\t\t\t\t\t\t\t<span>欢迎使用本系统！</span>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\n' +
        '\t\t\t\t\t<div class="result-wrap" id="inside">\n' +
        '\t\t\t\t\t\t<slot></slot>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<!--/main-->\n' +
        '\t\t</div>',
    methods: {
        to_page(path, params) {
            window.location.href = path
        },
        logout() {
            delCookie("jwt")
            delCookie("username")
            window.location.href = "../login.html"
        }
    },
    mounted: function () {
        let cookie = getCookie("username");
        if (cookie == null || typeof cookie === 'undefined') {
            window.location.href = "../login.html"
        }
        this.$data.username = cookie
    }

})

function getParam() {
    let js = document.getElementsByTagName("script");
    //得到当前引用a.js一行的script，并把src用'?'分隔成数组
    let arrayTemp = js[js.length - 1].src.split('?');
    let obj = {};
    //如果不带参数，则不执行下面的代码
    if (arrayTemp.length > 1) {
        let params = arrayTemp[1].split('&');
        for (let i = 0; i < params.length; i++) {
            let param = params[i].split("=");
            //将key和value定义给obj
            obj[param[0]] = param[1];
        }
    }
    return obj;
}

Vue.component("zuke-common", {
    data() {
        return {
            username: ''
        }
    },
    template: '<div>\n' +
        '\t\t\t<div class="topbar-wrap white">\n' +
        '\t\t\t\t<div class="topbar-inner clearfix">\n' +
        '\t\t\t\t\t<div class="topbar-logo-wrap clearfix">\n' +
        '\t\t\t\t\t\t<h1 class="topbar-logo none">\n' +
        '\t\t\t\t\t\t\t<a href="index.html" class="navbar-brand">后台管理</a>\n' +
        '\t\t\t\t\t\t</h1>\n' +
        '\t\t\t\t\t\t<ul class="navbar-list clearfix">\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="on sendRequest" href="index.html">\n' +
        '\t\t\t\t\t\t\t\t\t首页\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t<div class="top-info-wrap">\n' +
        '\t\t\t\t\t\t<ul class="top-info-list clearfix">\n' +
        '\t\t\t\t\t\t\t<li>欢迎您，{{username}}！</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a href="javascript:void(0)" @click="logout()">退出</a>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<div class="container clearfix">\n' +
        '\t\t\t\t<div class="sidebar-wrap">\n' +
        '\t\t\t\t\t<div class="sidebar-title">\n' +
        '\t\t\t\t\t\t<h1>菜单</h1>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t<div class="sidebar-content">\n' +
        '\t\t\t\t\t\t<ul class="sidebar-list">\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe003;</i>\n' +
        '\t\t\t\t\t\t\t\t\t房源信息\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="houselist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe008;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t房源列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t租赁信息\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="myzulist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t我的租赁\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="mycheckout.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe037;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t已退租列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t我的申请\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="myapply.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t看房申请列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="myapplyout.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe037;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t退租申请列表\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t租金信息\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="mytopaid.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t待缴租金\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="mypaid.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t已缴租金\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t报障模块\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="showaddwrong.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t我要报障\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="mywrong.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t未处理报障\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="mysolve.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t已处理报障\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t<a class="a">\n' +
        '\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe018;</i>\n' +
        '\t\t\t\t\t\t\t\t\t其他操作\n' +
        '\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t<div class="p">\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="sub-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="updateuserlist.html">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<i class="icon-font">&#xe017;</i>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t账户绑定\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t\t<!--/sidebar-->\n' +
        '\t\t\t\t<div class="main-wrap">\n' +
        '\t\t\t\t\t<div class="crumb-wrap">\n' +
        '\t\t\t\t\t\t<div class="crumb-list">\n' +
        '\t\t\t\t\t\t\t<i class="icon-font">&#xe06b;</i>\n' +
        '\t\t\t\t\t\t\t<span>欢迎使用本系统！</span>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</div>\n' +
        '\n' +
        '\t\t\t\t\t<div class="result-wrap" id="inside">\n' +
        '\t\t\t\t\t\t<slot></slot>\n' +
        '\t\t\t\t\t</div>\n' +
        '\t\t\t\t</div>\n' +
        '\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<!--/main-->\n' +
        '\t\t</div>',
    methods: {
        to_page(path, params) {
            window.location.href = path
        },
        logout() {
            delCookie("jwt")
            delCookie("username")
            window.location.href = "../login.html"
        }
    },
    mounted: function () {
        let cookie = getCookie("username");
        if (cookie == null || typeof cookie === 'undefined') {
            window.location.href = "../login.html"
        }
        this.$data.username = cookie
    }
})
const request = axios.create({
    timeout: 5000,
    baseURL: 'http://localhost/',
    withCredentials: true,
    crossDomain: true
})
request.interceptors.response.use(function (response) {
    if (response.data.status === 401) {
        Dreamer.error(response.data.msg, 2000)
        setTimeout(function () {
            window.location.href = "../login.html"
        }, 1000)
    } else if (response.data.status !== 200) {
        $("#mask").remove()
        Dreamer.destroyAll()
        Dreamer.error(response.data.msg, 2000)
        return null
    } else if (response.status === 500) {
        $("#mask").remove()
        Dreamer.destroyAll()
        Dreamer.error("服务器错误，请重试", 2000)
        return null;
    }else {
        return response.data
    }
})
let type = getParam().type;
if (type === 'login') {
    new Vue({
        el: '#wrapper',
        data: {
            username: null,
            password: null,
            type: "admin"
        },
        methods: {
            async login() {
                let mask = loadingMask("登录中...");
                let params = {
                    username: this.$data.username,
                    password: this.$data.password,
                    type: this.$data.type
                }
                let result = await request.post("/login", null, {
                    params: params
                })
                if (result != null) {
                    let type = result.data
                    if (type === "admin") {
                        window.location.href = "../page/admin/index.html"
                        closeMask(mask)
                    }else {
                        window.location.href = "../page/zuke/index.html"
                        closeMask(mask)
                    }
                }
            }
        }
    })
} else if (type === "ahouselist") {
    new Vue({
        el: '#ahouselist',
        data: {
            houseList: [],
            totalCount: 0,
            page: {
                pageNum: 1,
                num: 10
            }
        },
        methods: {
            async getHouses(e) {
                let page = {
                    pageNum: this.$data.page.pageNum,
                    num: this.$data.page.num
                }
                if (e) {
                    page.pageNum--
                } else {
                    page.pageNum++
                }
                this.$data.houseList = await request.get("/house/getHouses", {params: page})
                this.$data.page = page
            },
            async deleteHouse(e) {
                if (window.confirm("您确定删除？")) {
                    let result = await request.delete("/house/deleteHouse", {params: {id: e}})
                    Dreamer.info(result.msg, 1000)
                    this.$data.houseList.splice(this.$data.houseList.findIndex(item => item.id === parseInt(id)), 1)
                    this.$data.totalCount--
                }
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let houseList = await request.get("/house/getHouses", {params: this.$data.page})
            let totalCount = await request.get("/house/getHouseCount")
            this.$data.houseList = houseList.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        }
    })
} else if (type === 'updateHouse') {
    new Vue({
        el: "#updateHouse",
        data: {
            house: {
                status: '未租赁'
            }
        },
        mounted() {
            let id = getUrlParam("type")
            if (id == null || typeof id === 'undefined') {
                Dreamer.error("请求非法", 2000)
                setTimeout(function () {
                    window.history.go(-1)
                }, 1000)
            }
            let mask = loadingMask("加载中...");
            let that = this
            request.get("/house/getHouse", {params: {id: id}}).then(res => {
                that.$data.house = res.data
                closeMask(mask)
            })
        },
        methods: {
            async updateHouse() {
                let mask = loadingMask("更新中")
                let result = await request.get("/house/updateHouse", {params: this.$data.house})
                closeMask(mask)
                if (result.data === 1) {
                    Dreamer.success("更新成功", 1000)
                    window.history.go(
                        -1
                    )
                } else {
                    Dreamer.error("更新失败,请重试", 1000)
                }
            }
        }
    })
} else if (type === "addHouse") {
    new Vue({
        el: "#addHouse",
        data: {
            house: {
                houseId: null,
                address: null,
                area: null,
                price: null,
                status: '未租赁'
            }
        },
        methods: {
            async addHouse() {
                let mask = loadingMask("添加中...");
                let result = await request.put("/house/addHouse", null, {params: this.$data.house})
                closeMask(mask)
                if (result.data === 1) {
                    Dreamer.success("添加成功", 1000)
                    window.history.go(
                        -1
                    )
                } else {
                    Dreamer.error("添加失败,请重试", 1000)
                }
            }
        }
    })
} else if (type === "index") {
    new Vue({
        el: "#index"
    })
} else if (type === "zuList") {
    new Vue({
        el: '#zuList',
        data: {
            rentInfos: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0
        },
        methods: {
            async deleteHeTong(e) {
                if (window.confirm("您确定删除？")) {
                    let result = await request.delete("/rent/deleteContract", {params: {id: e}})
                    Dreamer.info(result.msg, 1000)
                    this.$data.rentInfos.splice(this.$data.rentInfos.findIndex(item => item.id === parseInt(id)), 1)
                }
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/rent/getRents", {params: this.$data.page})
            let totalCount = await request.get("/rent/getRentCount")
            this.$data.rentInfos = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        }
    })
} else if (type === "contract") {
    new Vue({
        el: "#contract",
        data: {
            contract: {}
        },
        methods: {
            updateContract(id) {
                window.location.href = 'updatehetong.html?id=' + id
            }
        },
        async mounted() {
            let id = parseInt(getUrlParam("id"))
            if (id == null || typeof id === "undefined") {
                Dreamer.error("请求非法", 2000)
                setTimeout(function () {
                    window.history.go(-1)
                }, 1000)
            }
            let mask = loadingMask("加载中...");
            let result = await request.get("/rent/getContract", {params: {id: id}})
            console.log(result)
            this.$data.contract = result.data
            closeMask(mask)
        }
    })
} else if (type === "checkout") {
    new Vue({
        el: "#checkout",
        data: {
            checkoutList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/rent/getCheckoutRents", {params: this.$data.page})
            let totalCount = await request.get("/rent/getCheckoutRentCount")
            this.$data.checkoutList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deleteCheckout(e) {
                if (window.confirm("您确定删除？")) {
                    let result = await request.delete("/rent/deleteCheckout", {params: {id: e}})
                    Dreamer.info(result.msg, 1000)
                    this.$data.checkoutList.splice(this.$data.checkoutList.findIndex(item => item.id === parseInt(e)), 1)
                }
            }
        }
    })
} else if (type === "applyList") {
    new Vue({
        el: "#applyList",
        data: {
            applyList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/apply/getAllApply", {params: this.$data.page})
            let totalCount = await request.get("/apply/getApplyCount")
            this.$data.applyList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async agreeApply(id, houseId) {
                if (window.confirm("确定同意？")) {
                    let mask = loadingMask("同意中...");
                    let result = await request.get("/apply/agreeApply", {params: {id: id, houseId: houseId}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyList.splice(this.$data.applyList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
            async refuseApply(id,houseId) {
                if (window.confirm("确定拒绝?")) {
                    let mask = loadingMask("拒绝中...");
                    let result = await request.get("/apply/refuseApply", {params: {id: id,houseId:houseId}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyList.splice(this.$data.applyList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },

        }
    })
} else if (type === "applyOut") {
    new Vue({
        el: "#applyOut",
        data: {
            applyOutList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,

        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/apply/getAllApplyOut", {params: this.$data.page})
            let totalCount = await request.get("/apply/getApplyOutCount")
            this.$data.applyOutList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async agreeApplyOut(id, houseId) {
                if (window.confirm("确定同意？")) {
                    let mask = loadingMask("同意中...");
                    let result = await request.get("/apply/agreeApplyOut", {params: {id: id, houseId: houseId}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyOutList[this.$data.applyOutList.findIndex(item => item.id === parseInt(id))].status = "已同意"
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }

                }
            },
            async refuseApplyOut(id) {
                if (window.confirm("确定拒绝？")) {
                    let mask = loadingMask("拒绝中...");
                    let result = await request.get("/apply/refuseApplyOut", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyOutList[this.$data.applyOutList.findIndex(item => item.id === parseInt(id))].status = "已拒绝"
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                        1
                    }
                }
            },
            async deleteApplyOut(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/apply/deleteApplyOut", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyOutList.splice(this.$data.applyOutList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            }
        }
    })
} else if (type === "wrong") {
    new Vue({
        el: "#wrong",
        data: {
            wrongList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        methods: {
            async agreeSolve(id) {
                if (window.confirm("确定已处理？")) {
                    let mask = loadingMask("处理中...");
                    let result = await request.get("/fault/agreeSolve", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.wrongList[this.$data.wrongList.findIndex(item => item.id === parseInt(id))].status = "已处理"
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }

                }
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/fault/getAllFault", {params: this.$data.page})
            let totalCount = await request.get("/fault/getFaultCount")
            this.$data.wrongList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
    })
} else if (type === "solve") {
    new Vue({
        el: "#solve",
        data: {
            solveList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
            search: {
                name: null,
                fromDate: null,
                toDate: null
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/fault/getSolves", {params: this.$data.page})
            let totalCount = await request.get("/fault/getSolveCount")
            this.$data.solveList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deleteSolve(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/fault/deleteSolve", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.solveList.splice(this.$data.solveList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
            async getData() {
                let mask = loadingMask("加载中...");
                let params = {...this.$data.page, ...this.$data.search}
                let result = await request.get("/fault/getSolves", {params: params})
                let totalCount = await request.get("/fault/getSolveCount", {params: this.$data.search})
                this.$data.solveList = result.data
                this.$data.totalCount = totalCount.data
                closeMask(mask)
            }
        }
    })
} else if (type === "addPaid") {
    new Vue({
        el: "#addPaid",
        data: {
            zuInfo: {}
        },
    })
} else if (type === "toPaid") {
    new Vue({
        el: "#toPaid",
        data: {
            toPaidList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/paid/getAllToPaid", {params: this.$data.page})
            let totalCount = await request.get("/paid/getAllToPaidCount")
            this.$data.toPaidList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
    })
} else if (type === "paid") {
    new Vue({
        el: "#paid",
        data: {
            paidList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
            search: {
                name: null,
                fromDate: null,
                toDate: null
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/paid/getAllPaid", {params: this.$data.page})
            let totalCount = await request.get("/paid/getAllPaidCount")
            this.$data.paidList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deletePaid(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/paid/deletePaid", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.paidList.splice(this.$data.paidList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
            async getData() {
                let mask = loadingMask("加载中...");
                let params = {...this.$data.page, ...this.$data.search}
                let result = await request.get("/paid/getAllPaid", {params: params})
                let totalCount = await request.get("/paid/getAllPaidCount", {params: this.$data.search})
                this.$data.solveList = result.data
                this.$data.totalCount = totalCount.data
                closeMask(mask)
            }
        }
    })
} else if (type === "schedule") {
    new Vue({
        el: "#schedule",
        data: {
            schedules: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/schedule/getSchedules", {params: this.$data.page})
            let totalCount = await request.get("/schedule/getScheduleCount")
            this.$data.schedules = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deleteSchedule(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/schedule/deleteSchedule", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.schedules.splice(this.$data.schedules.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
        }
    })
} else if (type === "updateSchedule") {
    new Vue({
        el: "#updateSchedule",
        data: {
            schedule: {}
        },
        mounted() {
            let id = getUrlParam("id")
            if (id == null || typeof id === 'undefined') {
                Dreamer.error("请求非法", 2000)
                setTimeout(function () {
                    window.history.go(-1)
                }, 1000)
            }
            let mask = loadingMask("加载中...");
            let that = this
            request.get("/schedule/getSchedule", {params: {id: id}}).then(res => {
                that.$data.schedule = res.data
                closeMask(mask)
            })
        },
        methods: {
            async updateSchedule() {
                let mask = loadingMask("更新中")
                let result = await request.get("/schedule/updateSchedule", {params: this.$data.schedule})
                closeMask(mask)
                if (result.data === 1) {
                    Dreamer.success("更新成功", 1000)
                    window.history.go(
                        -1
                    )
                } else {
                    Dreamer.error("更新失败,请重试", 1000)
                }
            }
        }
    })
} else if (type === "addSchedule") {
    new Vue({
        el: "#addSchedule",
        data: {
            schedule: {}
        },
        methods: {
            async addSchedule() {
                let mask = loadingMask("添加中")
                let result = await request.get("/schedule/addSchedule", {params: this.$data.schedule})
                closeMask(mask)
                if (result.data === 1) {
                    Dreamer.success("添加成功", 1000)
                    window.history.go(
                        -1
                    )
                } else {
                    Dreamer.error("添加失败,请重试", 1000)
                }
            }
        }
    })
} else if (type === "userList") {
    new Vue({
        el: "#userList",
        data: {
            users: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/user/getUsers", {params: this.$data.page})
            let totalCount = await request.get("/user/getUserCount")
            this.$data.users = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deleteSchedule(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/user/deleteUser", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.users.splice(this.$data.users.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
        }
    })
} else if (type === "updateContract") {
    new Vue({
        el: "#updateContract",
        data: {
            contract: {}
        },
        mounted() {
            let id = getUrlParam("id")
            if (id == null || typeof id === 'undefined') {
                Dreamer.error("请求非法", 2000)
                setTimeout(function () {
                    window.history.go(-1)
                }, 1000)
            }
            let mask = loadingMask("加载中...");
            let that = this
            request.get("/rent/getContract", {params: {id: id}}).then(res => {
                that.$data.contract = res.data
                closeMask(mask)
            })
        },
        methods: {
            async updateContract() {
                let mask = loadingMask("更新中")
                let result = await request.get("/rent/updateContract", {params: this.$data.contract})
                closeMask(mask)
                if (result.data === 1) {
                    Dreamer.success("更新成功", 1000)
                    window.history.go(
                        -1
                    )
                } else {
                    Dreamer.error("更新失败,请重试", 1000)
                }
            }
        }
    })
} else if (type === "zuke-index") {
    new Vue({
        el: "#zuke-index"
    })
} else if (type === "zuke-houseList"){
    new Vue({
        el:"#zuke-houseList",
        data: {
            houseList: [],
            totalCount: 0,
            page: {
                pageNum: 1,
                num: 10
            }
        },
        methods: {
            async getHouses(e) {
                let page = {
                    pageNum: this.$data.page.pageNum,
                    num: this.$data.page.num
                }
                if (e) {
                    page.pageNum--
                } else {
                    page.pageNum++
                }
                this.$data.houseList = await request.get("/house/getHouses", {params: page})
                this.$data.page = page
            },
            async applyHouse(e) {
                if (window.confirm("您确定申请？")) {
                    let result = await request.get("/house/applyHouse", {params: this.$data.houseList[e]})
                    Dreamer.info(result.msg, 1000)
                    this.$data.houseList[e].status = "已被申请"
                }
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let houseList = await request.get("/house/getHouses", {params: this.$data.page})
            let totalCount = await request.get("/house/getHouseCount")
            this.$data.houseList = houseList.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        }
    })
}else if (type === "zuke-zuList") {
    new Vue({
        el: '#zuke-zuList',
        data: {
            rentInfos: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0
        },
        methods: {
            async applyOut(e) {
                if (window.confirm("您确定退租吗？")) {
                    let result = await request.get("/rent/applyOut", {params: this.$data.rentInfos[e]})
                    Dreamer.info(result.msg, 1000)
                    this.$data.rentInfos.splice(this.$data.rentInfos.findIndex(item => item.id === parseInt(id)), 1)
                }
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/rent/getZuRents", {params: this.$data.page})
            let totalCount = await request.get("/rent/getZuRentCount")
            this.$data.rentInfos = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        }
    })
}else if (type === "myCheckout") {
    new Vue({
        el: "#myCheckout",
        data: {
            checkoutList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/rent/getZuCheckoutRents", {params: this.$data.page})
            let totalCount = await request.get("/rent/getZuCheckoutRentCount")
            this.$data.checkoutList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deleteCheckout(e) {
                if (window.confirm("您确定删除？")) {
                    let result = await request.delete("/rent/deleteCheckout", {params: {id: e}})
                    Dreamer.info(result.msg, 1000)
                    this.$data.checkoutList.splice(this.$data.checkoutList.findIndex(item => item.id === parseInt(e)), 1)
                }
            }
        }
    })
}else if (type === "myApply") {
    new Vue({
        el: "#myApply",
        data: {
            applyList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/apply/getZuAllApply", {params: this.$data.page})
            let totalCount = await request.get("/apply/getZuApplyCount")
            this.$data.applyList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
    })
} else if (type === "myApplyOut") {
    new Vue({
        el: "#myApplyOut",
        data: {
            applyOutList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,

        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/apply/getZuAllApplyOut", {params: this.$data.page})
            let totalCount = await request.get("/apply/getZuApplyOutCount")
            this.$data.applyOutList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async agreeApplyOut(id, houseId) {
                if (window.confirm("确定同意？")) {
                    let mask = loadingMask("同意中...");
                    let result = await request.get("/apply/agreeApplyOut", {params: {id: id, houseId: houseId}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyOutList[this.$data.applyOutList.findIndex(item => item.id === parseInt(id))].status = "已同意"
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }

                }
            },
            async refuseApplyOut(id) {
                if (window.confirm("确定拒绝？")) {
                    let mask = loadingMask("拒绝中...");
                    let result = await request.get("/apply/refuseApplyOut", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyOutList[this.$data.applyOutList.findIndex(item => item.id === parseInt(id))].status = "已拒绝"
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                        1
                    }
                }
            },
            async deleteApplyOut(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/apply/deleteApplyOut", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.applyOutList.splice(this.$data.applyOutList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            }
        }
    })
} else if (type === "myToPaid") {
    new Vue({
        el: "#myToPaid",
        data: {
            toPaidList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/paid/getAllToPaid", {params: this.$data.page})
            let totalCount = await request.get("/paid/getAllToPaidCount")
            this.$data.toPaidList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods:{
            pay(index){

            }
        }
    })
} else if (type === "myPaid") {
    new Vue({
        el: "#myPaid",
        data: {
            paidList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
            search: {
                name: null,
                fromDate: null,
                toDate: null
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/paid/getAllPaid", {params: this.$data.page})
            let totalCount = await request.get("/paid/getAllPaidCount")
            this.$data.paidList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deletePaid(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/paid/deletePaid", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.paidList.splice(this.$data.paidList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
            async getData() {
                let mask = loadingMask("加载中...");
                let params = {...this.$data.page, ...this.$data.search}
                let result = await request.get("/paid/getAllPaid", {params: params})
                let totalCount = await request.get("/paid/getAllPaidCount", {params: this.$data.search})
                this.$data.solveList = result.data
                this.$data.totalCount = totalCount.data
                closeMask(mask)
            }
        }
    })
}else if (type === "mySolve") {
    new Vue({
        el: "#mySolve",
        data: {
            solveList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
            search: {
                name: null,
                fromDate: null,
                toDate: null
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/fault/getZuSolves", {params: this.$data.page})
            let totalCount = await request.get("/fault/getZuSolveCount")
            this.$data.solveList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
        methods: {
            async deleteSolve(id) {
                if (window.confirm("确定删除？")) {
                    let mask = loadingMask("删除中...");
                    let result = await request.delete("/fault/deleteSolve", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 1000)
                        this.$data.solveList.splice(this.$data.solveList.findIndex(item => item.id === parseInt(id)), 1)
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }
                }
            },
            async getData() {
                let mask = loadingMask("加载中...");
                let params = {...this.$data.page, ...this.$data.search}
                let result = await request.get("/fault/getZuSolves", {params: params})
                let totalCount = await request.get("/fault/getZuSolveCount", {params: this.$data.search})
                this.$data.solveList = result.data
                this.$data.totalCount = totalCount.data
                closeMask(mask)
            }
        }
    })
}else if (type === "myWrong") {
    new Vue({
        el: "#myWrong",
        data: {
            wrongList: [],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        methods: {
            async agreeSolve(id) {
                if (window.confirm("确定已处理？")) {
                    let mask = loadingMask("处理中...");
                    let result = await request.get("/fault/agreeSolve", {params: {id: id}})
                    closeMask(mask)
                    if (result.data === 2) {
                        Dreamer.success("成功", 1000)
                        this.$data.wrongList[this.$data.wrongList.findIndex(item => item.id === parseInt(id))].status = "已处理"
                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }

                }
            }
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/fault/getAllFault", {params: this.$data.page})
            let totalCount = await request.get("/fault/getFaultCount")
            this.$data.wrongList = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        },
    })
}else if(type === "updateUserList"){
    new Vue({
        el:"#updateUserList",
        data:{
            userInfo:{

            }
        },
        methods:{
            async updateUser(){
                let mask = loadingMask("更新中..");
                let result = await request.get("/user/updateUserInfo",{params:this.$data.userInfo})
                if (result.data === 1){
                    closeMask(mask)
                    Dreamer.success("更新成功",2000)
                    setTimeout(function (){
                        window.history.go(-1)
                    },1000)
                }else {
                    closeMask(mask)
                    Dreamer.error("更新失败，请重试",2000)
                }
            }
        }
    })
}else if (type === "addWrong"){
    new Vue({
        el:"#addWrong",
        data:{
            wrong:{
                houseId:null,
                address:null,
                name:null,
                detail:null,
                date:null,
            },
        },
        methods:{
            async addWrong(){
                if (window.confirm("确定报障？")) {
                    let mask = loadingMask("处理中...");
                    let result = await request.get("/fault/addWrong", {params: this.$data.wrong})
                    closeMask(mask)
                    if (result.data === 1) {
                        Dreamer.success("成功", 2000)
                        setTimeout(function(){
                            window.history.go(-1)
                        },1000)

                    } else {
                        Dreamer.error("出错，请重试", 1000)
                    }

                }
            }
        },
        mounted(){
            let id = getUrlParam("id")
            if (id == null || typeof id === 'undefined') {
                Dreamer.error("请求非法", 2000)
                setTimeout(function () {
                    window.history.go(-1)
                }, 1000)
            }
            let mask = loadingMask("加载中...");
            let that = this
            request.get("/rent/getZuById", {params: {id: id}}).then(res => {
                that.$data.wrong = {...res.data}
                closeMask(mask)
            })
        }
    })
}else if(type === "showAddWrong"){
    new Vue({
        el:"#showAddWrong",
        data:{
            message:[],
            page: {
                pageNum: 1,
                num: 10
            },
            totalCount: 0,
        },
        async mounted() {
            let mask = loadingMask("加载中...");
            let result = await request.get("/rent/getZuRents", {params: this.$data.page})
            let totalCount = await request.get("/rent/getZuRentCount")
            this.$data.message = result.data
            this.$data.totalCount = totalCount.data
            closeMask(mask)
        }
    })
}


function loadingMask(msg) {
    $("body").append($("<div id='mask' style=\"\twidth: 100%;\n" +
        "\theight: 100%;\n" +
        "\tbackground-color: rgba(242,242,242, 0.5);\n" +
        "\tposition: fixed;\n" +
        "\tleft: 0;\n" +
        "\ttop: 0;\n" +
        "\ttext-align: center;\n" +
        "\tdisplay: -webkit-flex;\n" +
        "    display: flex;\n" +
        "    -webkit-align-items: center;\n" +
        "  \talign-items: center;\n" +
        "    -webkit-justify-content: center;\n" +
        "  \tjustify-content: center;\"></div>"))
    return Dreamer.loading(msg)
}

function closeMask(e) {
    e()
    $("#mask").remove()
}

function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

function delCookie(name) {
    let cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";Max-Age=0";
}

function getUrlParam(key) {
    // 获取参数
    let url = window.location.search;
    // 正则筛选地址栏
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    let result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
