Date.prototype.Format = function(fmt) {//author: meizz
    var o = {
        "M+" : this.getMonth() + 1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
String.prototype.startWith = function(str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
};

;(function(App) {
    var hywApp = {};
    var pWin = {};
    var ajax_ip = "";
    var down_ip = "";
    var msg_ip = "";
    var url_suffix = "";
    var extraInfo = {
        extraInfo : {
            opaque : "true",
            bgColor : "rgba(255,255,255,0)",
            hardware : "1"
        },
        animationInfo : {
            bounciness : 0.1,
            speed : 0.1
        }
    };
    var extraInfop = {
        opaque : "true",
        bgColor : "rgba(255,255,255,0)",
        delayTime : "200",
        hardware : "1"
    }

    var qqAppId = "1105312071";
    var iOSqqAppId = "1105312071";
    var sinaAppKey = "2018306363";
    var sinaAppSecret = "23ae4c9a5b4f749c0b134c7b3d93a168";
    var sinaRegisterUrl = "https://api.weibo.com/oauth2/default.html";
    var weixinAppKey = "wx54d082e5147a62fd";
    var weixinSecret = "ba326a55924b62925d3a8c10c27f3a39";
    var headUri = "";
    var dynamicPicUri = "";
    var resumeUri = "";
    var dynamicShareUri = "http://hywang.i-css.cn/html5/dynamic?id=";
    var groupShareUri = "http://hywang.i-css.cn/groupShare.php?groupId=";
    var appDownLoadUrl = "http://hywang.i-css.cn/download";
    var userRegHtmlUrl = "http://hywang.i-css.cn/html5/reg?u=";
    var userRecruitUrl = "http://hywang.i-css.cn/html5/recruit?id=";
    var userResuemeUrl = "http://hywang.i-css.cn/html5/resueme?id=";
    switch (devMode) {
    case 0:
        ajax_ip = "http://hywang.i-css.cn/";
        down_ip = "http://img.i-css.com:88/hywang/";
        headUri = "http://img.i-css.com:88/hywang/user_Logo/";
        resumeUri = "http://img.i-css.com:88/hywang/resume_Logo/";
        dynamicPicUri = "http://img.i-css.com:88/hywang/user_Image/dynamic/";
        dynamicShareUri = "http://hywang.i-css.cn/html5/dynamic?id=";
        break;
    case 1:
        ajax_ip = "http://hywang.4006865980.com:82/";
        down_ip = "http://ufohjl.gicp.net:66/hywang/";
        headUri = "http://ufohjl.gicp.net:66/hywang/user_Logo/";
        resumeUri = "http://ufohjl.gicp.net:66/hywang/resume_Logo/";
        dynamicPicUri = "http://ufohjl.gicp.net:66/hywang/user_Image/dynamic/";
        dynamicShareUri = "http://hywang.4006865980.com:82/html5/dynamic?id=";
        userRegHtmlUrl = "http://hywang.4006865980.com:82/html5/reg?u=";
        userRecruitUrl = "http://hywang.4006865980.com:82/html5/recruit?id=";
        userResuemeUrl = "http://hywang.4006865980.com:82/html5/resueme?id=";
        break;
    case 2:
        ajax_ip = "http://192.168.1.118:8080/hywang/";
        down_ip = "http://img.i-css.com:88/hywang/";
        headUri = "http://img.i-css.com:88/hywang/user_Logo/";
        resumeUri = "http://img.i-css.com:88/hywang/resume_Logo/";
        dynamicPicUri = "http://img.i-css.com:88/hywang/user_Image/dynamic/";
        dynamicShareUri = "http://192.168.1.118:8080/hywang/html5/dynamic?id=";
        userRegHtmlUrl = "http://192.168.1.118:8080/hywang/html5/reg?u=";
        userRecruitUrl = "http://192.168.1.118:8080/hywang/html5/recruit?id=";
        userResuemeUrl = "http://192.168.1.118:8080/hywang/html5/resueme?id=";
        break;
    case 3:
        ajax_ip = "http://phone.4006865980.com:8080/hywang/";
        down_ip = "http://img.4006865980.com:66/hywang/";
        headUri = "http://img.4006865980.com:66/hywang/user_Logo/";
        resumeUri = "http://img.4006865980.com:66/hywang/resume_Logo/";
        dynamicPicUri = "http://img.4006865980.com:66/hywang/user_Image/dynamic/";
        dynamicShareUri = "http://phone.4006865980.com:8080/html5/dynamic?id=";
        userRegHtmlUrl = "http://phone.4006865980.com:8080/html5/reg?u=";
        userRecruitUrl = "http://phone.4006865980.com:8080/html5/recruit?id=";
        userResuemeUrl = "http://phone.4006865980.com:8080/html5/resueme?id=";
        break;
    default:
        ajax_ip = "http://192.168.1.118:8080/hywang/";
        down_ip = "http://img.4006865980.com:66/hywang/";
        headUri = "http://img.4006865980.com:66/hywang/user_Logo/";
        resumeUri = "http://img.4006865980.comt:66/hywang/resume_Logo/";
        dynamicPicUri = "http://img.4006865980.com:66/hywang/user_Image/dynamic/";
        dynamicShareUri = "http://192.168.1.118:8080/hywang/html5/dynamic?id=";
        userRegHtmlUrl = "http://192.168.1.118:8080/hywang/html5/reg?u=";
        userRecruitUrl = "http://192.168.1.118:8080/hywang/html5/recruit?id=";
        userResuemeUrl = "http://192.168.1.118:8080/hywang/html5/resueme?id=";
        break;
    }

    var apiInfo = {
        url : ajax_ip,
        appKey : 'hywang',
        appSecret : '92C628F6B2C8F86A8AE6302FAC634BBC',
        timestamp : (new Date()).Format("yyyy-MM-dd hh:mm:ss"),
        format : 'json',
        sign_method : 'md5',
        v : '1.0'
    };

    //是否是函数
    var isFunction = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    };
    //是否是字符串
    var isString = function(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    };
    //是否是object对象
    var isObject = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };
    //是否是数组
    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    //是否是window对象
    var isWindow = function(obj) {
        return obj != null && obj == obj.window;
    };
    //是否是纯对象
    var isPlainObject = function(obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    };
    //扩展对象
    var extend = function(target, source, deep) {
        var key = null;
        for (key in source) {
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                    target[key] = {};
                }
                if (isArray(source[key]) && !isArray(target[key])) {
                    target[key] = [];
                }
                extend(target[key], source[key], deep);
            } else if (source[key] !== undefined) {
                target[key] = source[key];
            }
        }
        return target;
    };

    var errorInfo = {
        moduleName : '模块的名字必须为字符串并且不能为空！',
        moduleFactory : '模块构造对象必须是函数！'
    };

    hywApp.extend = function(name, factory) {
        if (arguments.length > 1 && isPlainObject(name)) {
            return extend.apply(hywApp, arguments);
        }
        if (isFunction(name) || isPlainObject(name)) {
            factory = name;
            name = '';
        }
        name = name ? name : this;
        var extendTo = appcan.require(name);
        extendTo = extendTo ? extendTo : this;
        var mod = {
            exports : {}
        };
        var res = null;
        var exports = mod.exports;
        if (isFunction(factory)) {
            res = factory.call(this, extendTo, exports, mod);
            res = res || mod.exports;
            extend(extendTo, res);
        }
        if (isPlainObject(factory)) {
            extend(extendTo, factory);
        }
        return extendTo;
    };

    function listSortBy(arr, field, order) {
        var refer = [],
            result = [],
            order = order == 'asc' ? 'asc' : 'desc',
            index;
        for ( i = 0; i < arr.length; i++) {
            refer[i] = arr[i][field] + ':' + i;
        }
        refer.sort();
        if (order == 'desc')
            refer.reverse();
        for ( i = 0; i < refer.length; i++) {
            index = refer[i].split(':')[1];
            result[i] = arr[index];
        }
        return result;
    }

    /**
     * private const double EARTH_RADIUS = 6378.137;
     */
    function rad(d) {
        return d * Math.PI / 180.0;
    }

    /**
     *谷歌坐标转换百度坐标
     */
    function google_to_baidu(gg_lat, gg_lon) {
        var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
        var x = gg_lon;
        var y = gg_lat;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
        var bd_lon = z * Math.cos(theta) + 0.0065;
        var bd_lat = z * Math.sin(theta) + 0.006;

        var point = {
            lng : bd_lon.toFixed(6),
            lat : bd_lat.toFixed(6)
        }
        return point;
    }

    /**
     * 计算两点之间距离，返回距离(单位：米)
     * @param lng 经度
     * @param lat 纬度
     */
    function getDisance(lng1, lat1, lng2, lat2, type) {
        // 经典计算方式
        if ((Math.abs(lat1) > 90  ) || (Math.abs(lat2) > 90 )) {
            return "纬度错误";
        }
        if ((Math.abs(lng1) > 180  ) || (Math.abs(lng2) > 180 )) {
            return "经度错误";
        }
        var radLat1 = rad(lat1);
        var radLat2 = rad(lat2);
        var a = radLat1 - radLat2;
        var b = rad(lng1) - rad(lng2);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;
        s = Math.round(s * 10000) / 10000;
        var result = parseInt(s * 1000);
        return result;
    }

    function toJsonStr(json) {
        return JSON.stringify(json);
    }

    function toJson(jsonstr) {
        return JSON.parse(jsonstr);
    }

    function jsonLength(jsonData) {
        if (!isPlainObject(jsonData)) {
            return 0;
        }
        var length = 0;
        for (var key in jsonData) {
            length++;
        }
        return length;
    }

    function getJsonData(jsonData, index) {
        if (!isPlainObject(jsonData)) {
            return null;
        }
        var length = 0;
        for (var key in jsonData) {
            length++;
            if (length == index) {
                return jsonData[key];
            }
        }
        return null;
    }

    function Logs(str) {
        if (isLogEnable) {
            var dateStr = (new Date().Format("yyyy-MM-dd hh:mm:ss"));
            str = dateStr + " " + uexWidgetOne.platformName + "-->" + str;
            if (uexLog) {
                appcan.logs(str);
            } else {
                console.log(str);
            }
        }
    }

    function isNull(val) {
        if (val == null || val == undefined || val == "" || val == "undefined" || val == "null")
            return true
        else
            return false;
    }

    function isMobile(s) {
        var regu = /^[1][0-9][0-9]{9}$/;
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        } else {
            return false;
        }
    }

    function isEmail(val) {
        var sReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
        return sReg.test(val);
    }

    function isUserName(val) {
        var usern = /^[a-zA-Z0-9_]{1,}$/;
        return usern.test(val);
    }

    function isUrl(val) {
        var strRegex = /^http|https:\/\/.+/
        var re = new RegExp(strRegex);
        if (re.test(val)) {
            return true;
        } else {
            return false;
        }

    }

    function getAppPlat() {//取当前系统类型
        if (uexWidgetOne.platformName.toLowerCase() == 'android') {
            return 1;
        }
        if (uexWidgetOne.platformName.toLowerCase() == 'ios') {
            return 0;
        }
        return 0;
    }

    function removeVal(key) {
        appcan.locStorage.remove(key);
    }

    function getValue(key) {
        return appcan.locStorage.val(key);
    }

    function setValue(key, value) {
        appcan.locStorage.setVal(key, value);
    }

    function getJson(key) {
        var jsonValue = [];
        if (appcan.locStorage.val(key) && appcan.locStorage.val(key) != 'undefined') {
            jsonValue = JSON.parse(appcan.locStorage.val(key));
        };
        if (jsonValue.length == 0)
            return null;
        else
            return jsonValue;
    }

    function genSessionId() {
        var dt = new Date();
        return appcan.crypto.md5(appcan.getUID(32).toUpperCase() + dt.getTime());
    }

    function toast(content, pos, dur) {
        if (isNull(dur)) {
            dur = 2000;
        }
        if (!isdebug && getAppPlat()) {
            if (isNull(pos)) {
                pos = 2;
            }
            uexTosatMsg.open(content, pos, dur);
        } else {
            if (isNull(pos)) {
                pos = 5;
            }
            appcan.window.openToast(content, dur, pos, 0);
        }
    }

    function delHtmlTag(str) {
        return str.replace(/<[^>]+>/g, "");
        //去掉所有的html标记
    }

    /**
     *获取用户信息
     */
    function getUserInfo() {
        var loginSession = getJson('loginSession');
        if (isNull(loginSession)) {
            return null;
        }
        return loginSession.userinfo;
    }

    /**
     *更新用户信息
     */
    function updateUserInfo(user) {
        var loginSession = getJson('loginSession');
        //console.log("前",loginSession.userinfo)
        if (!isNull(loginSession)) {
            loginSession.userinfo = user;
            setValue('loginSession', loginSession);
        }
        //console.log("后",loginSession.userinfo)
        return loginSession.userinfo;
    }

    function openFrame(id, url, top, height, index, change) {
        if (getAppPlat()) {
            if (uexWidgetOne.platformVersion < '4.4') {
                extraInfop.hardware = 0;
            }
            if (uexWidgetOne.platformVersion >= '5.0' && uexWidgetOne.platformVersion < '6.0') {
                extraInfop.hardware = 0;
            }
        }
        if (isNull(change)) {
            change = function() {
            };
        }
        if (isNull(index)) {
            index = 0;
        }
        appcan.frame.open(id, url, top, height, "", index, change, toJsonStr(extraInfop));
    }

    function openPopover(opts) {
        var name = opts.name;
        var url = opts.url;
        var left = opts.left;
        var top = opts.top;
        var width = opts.width;
        var height = opts.height;
        var flag = opts.flag;
        var bottom = opts.bottom;
        if (isNull(bottom)) {
            bottom = 0;
        }
        if (isNull(flag)) {
            flag = 0;
        }
        if (isNull(left)) {
            left = 0;
        }
        if (isNull(top)) {
            top = 0;
        }
        if (isNull(width)) {
            width = "";
        }
        if (isNull(height)) {
            height = "";
        }
        if (getAppPlat()) {
            if (uexWidgetOne.platformVersion < '4.4') {
                extraInfop.hardware = 0;
            }
            if (uexWidgetOne.platformVersion >= '5.0' && uexWidgetOne.platformVersion < '6.0') {
                extraInfop.hardware = 0;
            }
        }
        uexWindow.openPopover(name, 0, url, "", left, top, width, height, "", flag, bottom, JSON.stringify(extraInfop));
    }

    function openWin(opts) {
        var winName,
            winUrl,
            type,
            aniId,
            animDuration,
            backName;
        backName = opts.backName;
        winName = opts.name;
        winUrl = opts.url;
        type = opts.type;
        aniId = opts.aniId;
        animDuration = opts.animDuration;
        winId = opts.winId;
        if (isNull(winId)) {
            winId = "";
        }
        if (isNull(aniId)) {
            aniId = 0;
        }
        if (isNull(animDuration)) {
            animDuration = 300;
        }
        if (!getAppPlat() && aniId != 0) {
            type = 4;
        }
        if (getAppPlat()) {
            if (uexWidgetOne.platformVersion < '4.4') {
                extraInfo.extraInfo.hardware = 0;
            }
            if (uexWidgetOne.platformVersion >= '5.0' && uexWidgetOne.platformVersion < '6.0') {
                extraInfo.extraInfo.hardware = 0;
            }
        }
        winName = winName + winId;
        uexWindow.open(winName, 0, winUrl, aniId, 0, 0, 0, animDuration, toJsonStr(extraInfo));
        pWin = getJson('pWin');
        if (isNull(pWin)) {
            pWin = {};
        }
        //console.log("openWIn:" + winName, pWin[winName])
        if (isNull(pWin[winName])) {
            var obj = {
                backName : backName,
                winName : winName,
                winId : winId
            }
            pWin[winName] = obj;
        }
        setValue("currWinName", winName);
        setValue('pWin', pWin);
        //Logs("openWin:" + toJsonStr(pWin));
    }

    function getPwin() {
        return getJson('pWin');
    }

    function getCurrWinName() {
        return getValue("currWinName");
    }

    function getCurrWin() {
        var currWinName = getValue("currWinName");
        pWin = getJson('pWin');
        var win;
        if (!isNull(pWin)) {
            win = pWin[currWinName];
        }
        return win;
    }

    function getWin(name) {
        pWin = getJson('pWin');
        var win;
        if (!isNull(pWin)) {
            win = pWin[name];
        }
        return win;
    }

    /**
     *关闭窗口，type为空则重置当前窗口为被打开窗口的前一个
     */
    function closeWin(winName, type) {
        pWin = getJson('pWin');
        Logs("closeWin-->" + winName + "," + type);
        if (isNull(type)) {
            type = -1;
        }
        if (!isNull(pWin)) {
            var obj = pWin[winName];
            // console.log("closeWin-->" + winName + "," + type, obj)
            if (!isNull(obj)) {
                if (obj.backName == "root") {
                    if (obj.winName == "indexMain") {
                        setValue("currWinName", "indexNew");
                    } else {
                        setValue("currWinName", "indexMain");
                    }

                } else {
                    setValue("currWinName", obj.backName);
                }
                delete pWin[winName];
                setValue('pWin', pWin);
            }
        }
    }

    function closeAllWin() {
        pWin = getJson('pWin');
        if (!isNull(pWin)) {
            for (var key in pWin) {
                //console.log("closeAllWin:" + key)
                if (key != "indexMain" && key != "root") {
                    evalJs({
                        winName : key,
                        type : 1,
                        js : 'closeWin(0)'
                    });
                }
            }
        }
    }

    function setPageBounce(downcb, upcb, upPara, downPara) {
        var t = ['0', '0'];
        uexWindow.onBounceStateChange = function(type, status) {
            if (downcb && type == 0 && status == 2) {
                downcb(type);
            }
            if (upcb && type == 1 && status == 2) {
                upcb(type);
            }
        }
        uexWindow.setBounce(1);
        var inJson = {
            "imagePath" : "res://loading.png",
            "textColor" : "#530606",
            "pullToReloadText" : "拖动刷新数据",
            "releaseToReloadText" : "释放刷新数据",
            "loadingText" : "数据刷新中..."
        };
        if (isNull(upPara)) {
            upPara = inJson;
        }
        if (isNull(downPara)) {
            downPara = inJson;
        }
        if (downcb) {
            t[0] = '1';
            uexWindow.setBounceParams(0, JSON.stringify(downPara));
            uexWindow.notifyBounceEvent("0", "1");
            uexWindow.showBounceView(0, "#FFF", t[0]);
        }
        if (upcb) {
            t[1] = '1';
            uexWindow.setBounceParams(1, JSON.stringify(upPara));
            uexWindow.notifyBounceEvent("1", "1");
            uexWindow.showBounceView(1, "#FFF", t[1]);
        }
    }

    /**
     * 页面底部弹动
     * @param string upcb
     */
    function setPageDownBounce(upcb) {
        var t = '0';
        uexWindow.onBounceStateChange = function(type, status) {
            if (upcb && type == 1 && status == 2) {
                upcb(1);
            }
        }
        uexWindow.setBounce("1");
        uexWindow.hiddenBounceView("0");
        var inJson = {
            "imagePath" : "res://loading.png",
            "textColor" : "#530606",
            "pullToReloadText" : "拖动加载更多",
            "releaseToReloadText" : "释放加载数据",
            "loadingText" : "数据加载中..."
        };
        if (upcb) {
            t = '1';
            uexWindow.setBounceParams(1, JSON.stringify(inJson));
            uexWindow.notifyBounceEvent("1", "1");
        }
        uexWindow.showBounceView("1", "#FFF", t);
    }

    /**
     * 页面顶部弹动
     * @param string downcb
     */
    function setPageUpBounce(downcb) {
        var t = '0';
        uexWindow.onBounceStateChange = function(type, status) {
            if (downcb && type == 0 && status == 2) {
                downcb(0);
            }
        }
        uexWindow.setBounce("1");
        uexWindow.hiddenBounceView("1");
        var inJson = {
            "imagePath" : "res://loading.png",
            "textColor" : "#530606",
            "pullToReloadText" : "拖动加载更多",
            "releaseToReloadText" : "释放加载数据",
            "loadingText" : "数据加载中..."
        };
        if (downcb) {
            t = '1';
            uexWindow.setBounceParams(0, JSON.stringify(inJson));
            uexWindow.notifyBounceEvent("0", "1");
        }
        uexWindow.showBounceView("0", "#FFF", t);
    }

    function alertEx(msg, cb) {
        appcan.window.alert({
            title : '温馨提示',
            content : msg,
            buttons : '确认',
            callback : function(err, data, dataType, optId) {
                if (cb) {
                    cb();
                }
            }
        });
    }

    function checkRepkey(array, key) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].key == key) {
                return true;
            };
        };
        return false;
    }

    function getData(options) {
        // console.log(options)
        var cacheId = options.url;
        if (!isNull(options.expires)) {
            appcan.ajax({
                type : options.type,
                timeout : 30000,
                url : options.url,
                data : options.data,
                dataType : options.dataType,
                cacheId : cacheId,
                offline : true,
                offlineDataPath : 'wgt://cacheData/',
                expires : options.expires,
                crypto : false,
                password : 'Love!~3071390',
                success : function(data, status, requestCode, response, xhr) {
                    Logs("data:" + status + "," + requestCode + "," + options.url);
                    options.success(data);
                },
                complete : function(xhr, status) {
                    if (status == "error" || status == "timeout") {
                        Logs("getData:" + status + "," + JSON.stringify(options));
                        var obj = {
                            code : 404,
                            message : "请求出错,可能服务器不可用或网络环境太差",
                            items : {}
                        }
                        options.success(obj);
                    }
                },
                error : function() {

                }
            });
        } else {
            //Logs("111111111111111111111:"+toJsonStr(options))
            appcan.ajax({
                type : options.type,
                timeout : 30000,
                url : options.url,
                data : options.data,
                cacheId : cacheId,
                dataType : options.dataType,
                offline : undefined,
                crypto : false,
                success : function(data, status, requestCode, response, xhr) {
                    Logs("data:" + status + "," + requestCode + "," + options.url);
                    options.success(data);
                },
                complete : function(xhr, status) {
                    if (status == "error" || status == "timeout") {
                        Logs("getData:" + status + "," + JSON.stringify(options));
                        var obj = {
                            code : 404,
                            message : "请求出错,可能服务器不可用或网络环境太差",
                            items : {}
                        }
                        options.success(obj);
                    }
                },
                error : function(xhr, errorType, error, msg) {
                    Logs("sssss" + errorType + "," + options.url + "," + toJsonStr(msg));
                    var obj = {
                        code : 404,
                        message : "请求出错,可能服务器不可用或网络环境太差",
                        items : {}
                    }
                    options.success(obj);
                }
            });

        }
    }

    /**
     * api数据请求功能
     * url为controller/aciton
     * @param {Object} args 请求参数
     * @param {Object} callBack 回调函数
     * @param {Object} reqType 请求类型，GET，POST
     * @param {Object} dataType 请求数据类型，json，jsonp
     * @param {Object} expires 缓存数据时间，如果有设置 ，那么会缓存本地。
     */
    function authApi(opts) {
        //Logs("authApi:"+toJsonStr(opts))
        try {
            var url,
                reqType,
                dataType,
                expires,
                args,
                callBack;
            url = opts.url;
            reqType = opts.reqType;
            dataType = opts.dataType;
            expires = opts.expires;
            args = opts.data;
            callBack = opts.callBack;
            if (!isFunction(callBack)) {
                alertEx("回调函数不是一个有效的回调函数！");
                return;
            }
            if (isNull(url)) {
                alertEx("请求地址不正确！");
                return;
            }

            if (isNull(reqType)) {
                reqType = "POST";
            }
            if (isNull(dataType)) {
                dataType = "json";
            }
            //console.log(args.params)
            if (!isNull(args) && !isNull(args.params)) {
                args.params = toJsonStr(args.params)
            }
            url = url + url_suffix;
            var dt = new Date();
            apiInfo.timestamp = dt.getTime();
            var data = [];
            data.push({
                key : 'appkey',
                value : apiInfo.appKey
            });
            data.push({
                key : 'timestamp',
                value : apiInfo.timestamp
            });
            data.push({
                key : 'format',
                value : apiInfo.format
            });
            data.push({
                key : 'sign_method',
                value : apiInfo.sign_method
            });
            data.push({
                key : 'v',
                value : apiInfo.v
            });
            //把自定义参数加入数组
            for (var key in args) {
                if (args[key] !== "")
                    data.push({
                        key : key,
                        value : args[key]
                    });
            };
            var session = getJson("loginSession");
            if (session !== null && session != 'undefined' && !isNull(session.token)) {
                data.push({
                    key : "usertoken",
                    value : session.token
                });
            }
            var sessionid = getValue('sessionid');
            if (!isNull(sessionid) && !checkRepkey(data, "sessionid")) {
                data.push({
                    key : "sessionid",
                    value : sessionid
                });
            }
            data.sort(function(a, b) {
                return a.key.toLowerCase() > b.key.toLowerCase() ? 1 : -1
            });
            var sign = '';
            for (var i = 0; i < data.length; i++) {
                sign += data[i].key + encodeURIComponent(data[i].value);
            };
            sign = apiInfo.appSecret + sign + apiInfo.appSecret;
            // Logs("sign:"+sign)
            data.push({
                key : 'sign',
                value : hex_md5(sign)
            });
            var postData = {};
            for (var i = 0; i < data.length; i++) {
                //postData += data[i].key + '=' + encodeURIComponent(data[i].value) + '&';
                postData[data[i].key] = encodeURIComponent(data[i].value);
            };
            var postUrl = apiInfo.url + url;
            //Logs("postUrl:"+postUrl)
            getData({
                url : postUrl,
                data : postData,
                expires : expires,
                dataType : dataType,
                type : reqType,
                success : callBack
            });
        } catch(err) {
            Logs(err.message);
        }
    }

    function openLoading(opts) {
        var title,
            msg,
            canCancel;
        title = opts.title;
        msg = opts.msg;
        canCancel = opts.canCancel;
        if (isNull(canCancel)) {
            canCancel = 0;
        }
        if (!isdebug) {
            uexWindow.createProgressDialog(title, msg, canCancel);
        } else {
            ajaxLoading(1, true);
        }

    }

    function closeLoading() {
        if (!isdebug) {
            uexWindow.destroyProgressDialog();
        } else {
            ajaxLoading(0);
        }

    }

    function clearCache() {
        removeVal('uType');
        removeVal('titHeight');
        removeVal('chatHeight');
        removeVal('regTimeStmap');
        removeVal('rpwTimeStmap');
        removeVal("cpTimeStmap");
        removeVal("cpTimeStmap1");
        removeVal('pWin');
        removeVal('loginParms');
        removeVal('chatpic');
        removeVal('userLabel');
        removeVal('chatId');
        removeVal('conIndex');
        removeVal('chatname');
        removeVal('viewMode');
        removeVal('shareData');
        removeVal('userLabel');
        removeVal('bussiData');
        removeVal('userrole');
        removeVal('userType');
        removeVal('sIndex');
        removeVal('pIndex');
        removeVal('pName');
        removeVal('hasChange');
        removeVal('groupNumber');
        removeVal('groupHeadUri');
        removeVal('groupInfo');
        removeVal("currWinName");
    }

    /**
     * 执行Js方法，type:1执行主窗口，2执行多页面浮动窗口，默认执行浮动窗口
     * name:窗口名,jsContent：js方法,frameName：浮动窗口名,popName：多浮动窗口inPageName
     * @param {Object} opts
     */
    function evalJs(opts) {
        var type,
            winName,
            jsContent,
            frameName,
            popName;
        type = opts.type;
        winName = opts.winName || '';
        jsContent = opts.js;
        frameName = opts.frameName;
        popName = opts.popName;
        if (isNull(frameName)) {
            frameName = "content";
        }
        if (type == 1) {
            uexWindow.evaluateScript(winName, 0, jsContent);
        } else if (type == 2 && !isdebug) {
            uexWindow.evaluateMultiPopoverScript(winName, frameName, popName, jsContent);
        } else {
            uexWindow.evaluatePopoverScript(winName, frameName, jsContent);
        }
    }

    /**
     *注册极光推送
     */
    function regPushInfo(userId) {
        if (!isdebug) {
            if (!isNull(userId)) {
                var params = {
                    alias : userId + ""
                };
                var data = JSON.stringify(params);
                uexJPush.setAlias(data);
                Logs("regPushInfo-->" + data);
            }
        }
    }

    /**
     *登陆聊天服务器
     */
    function loginEasemob(userId, passWord) {
        if (!isdebug) {
            var params = {
                username : userId + "",
                password : passWord
            }
            uexEasemob.login(JSON.stringify(params));
            Logs("loginEasemob-->" + userId + "," + passWord);
        }
    }

    /**
     *退出聊天服务器
     */
    function logoutEasemob() {
        if (!isdebug) {
            removeVal('easemobLogin');
            uexEasemob.logout();
            Logs("logoutEasemob");
        }
    }

    /**
     *用户退出函数
     */
    function userLogout(opts, callBack) {
        var userId,
            parentId,
            loginType;
        userId = opts.userId;
        loginType = opts.loginType;
        parentId = opts.parentId;
        if (isNull(userId)) {
            return;
        }
        authApi({
            url : 'user/userLogout',
            data : {
                params : {
                    userId : userId,
                    loginType : loginType,
                    parentId : parentId
                }
            },
            callBack : function(data) {
                if (data.code == 0) {
                    removeVal('loginSession');
                    logoutEasemob();
                    regPushInfo("xxxyyyzzz9999");
                }
                if (callBack) {
                    callBack(data);
                }
            }
        });
    }

    /**
     * 检测用户是否登陆了
     */
    function isLogin(callBack) {
        var session = getJson("loginSession");
        var sessionid = getValue('sessionid');
        var userinfo = getJson('userinfo');
        var islogon = getValue('easemobLogin');
        var r = true;
        if (isNull(session) || isNull(session.userinfo)) {
            r = false;
            logoutEasemob();
            if (callBack) {
                callBack(r);
            }
            return r;
        }
        if (r) {
            var timesitemap = session.expiretime;
            var nowtime = (new Date()).getTime();
            if (parseInt((nowtime - parseInt(timesitemap)) / (1000 * 60)) <= 120) {
                if (callBack) {
                    if (isNull(islogon)) {
                        loginEasemob(userinfo.userid, userinfo.pass);
                    }
                    callBack(r);
                }
                return r;
            }
            authApi({
                url : "user/userLoginCheck",
                data : {
                    params : {
                        userId : session.userinfo.userid,
                        sessionId : sessionid,
                        loginType : 'APP'
                    }
                },
                callBack : function(data) {
                    Logs(toJsonStr(data));
                    if (data.code == 0) {
                        r = true;
                        setValue('loginSession', data.items);
                        if (callBack) {
                            if (isNull(islogon)) {
                                loginEasemob(userinfo.userid, userinfo.pass);
                            }
                            callBack(r);
                            // Logs("islogin3");
                        }
                    } else {
                        r = false;
                        logoutEasemob();
                        removeVal('loginSession');
                        if (data.code == 405) {
                            removeVal('userinfo');
                        }
                        if (callBack) {
                            callBack(r);
                        }
                        // Logs("islogin4");
                    }
                }
            });
        }
        return r;
    }

    function loginSuccess(data) {
        Logs("正常登陆");
        //正常登陆，保存登陆用户名
        var userinfo = {};
        userinfo.userid = data.items.userinfo.userid
        if (!isNull(data.items.userinfo.parentid)) {
            setValue('loginName', data.items.userinfo.username + "#" + data.items.userinfo.parentid);
        } else {
            setValue('loginName', data.items.userinfo.mobile);
        }
        userinfo.pass = data.items.userinfo.userpass;
        setValue('userinfo', userinfo);
        setValue('loginSession', data.items);
        //登陆聊天服务器
        loginEasemob(userinfo.userid, userinfo.pass);
        //推送注册
        regPushInfo(userinfo.userid);
    }

    /**
     * 用户登陆函数
     * @param {Object} opts
     * @param {Object} callBack,错误回调函数
     */
    function userLogin(opts, callBack) {
        var userName = opts.userName;
        var userPass = opts.userPass;
        var loginType = opts.loginType;
        var params = JSON.stringify(opts.params);
        var pass = "";
        if (!isNull(userName)) {
            pass = hex_md5(userPass);
            if (isNull(userPass) || userPass.length == 32) {
                pass = userPass;
            }
        } else {
            userid = "";
            pass = "";
        }
        var lat = getValue('curLat');
        var lng = getValue('curLng');
        if (isNull(lat)) {
            lat = "";
        }
        if (isNull(lng)) {
            lng = "";
        }
        authApi({
            url : 'user/userLogin',
            data : {
                params : {
                    userName : userName,
                    userPass : pass,
                    loginType : loginType,
                    lat : lat,
                    lng : lng,
                    params : params
                }
            },
            callBack : function(data) {
                closeLoading();
                if (data.code == 0) {
                    loginSuccess(data);
                    openWin({
                        backName : 'userLogin',
                        name : 'indexNew',
                        url : '../indexNew.html',
                        type : 4,
                        aniId : 0,
                        animDuration : 200
                    });
                } else if (data.code == 1) {
                    Logs("第三方登陆，未绑定账号，打开绑定窗口");
                    openWin({
                        backName : 'userLogin',
                        name : 'unionLogin',
                        url : '../unionLogin/unionLogin.html',
                        type : 4,
                        aniId : 2,
                        animDuration : 200
                    });
                } else {
                    Logs("登陆错误-->" + data.message);
                    toast(data.message);
                }
            }
        });
    }

    /**
     * 上传临时图片,
     * @param {Object} dirPath 本地路径
     * @param {Object} zipLevel 压缩等级
     * @param {Object} maxWidth 图片最大宽度
     * @param {Object} callback 回调
     */
    function uploadTMPFile(dirPath, zipLevel, maxWidth, callback) {
        var opId = Math.floor(Math.random() * (1000 + 1));
        var ip = ajax_ip;
        var zip = isNull(zipLevel) ? 0 : parseInt(zipLevel);
        uexUploaderMgr.onStatus = function(opId, fileSize, percent, serverPath, status) {
            switch (status) {
            case 0:
                if (callback) {
                    var obj = {
                        percent : percent
                    }
                    callback(status, obj);
                }
                break;
            case 1:
                uexUploaderMgr.closeUploader(opId, ip + "hyw/uploadTMPFile");
                if (callback) {
                    var data = JSON.parse(serverPath);
                    var obj = {
                        serverPath : data.items[0],
                        fileSize : fileSize
                    }
                    callback(status, obj);
                }
                break;
            case 2:
                uexUploaderMgr.closeUploader(opId, ip + "hyw/uploadTMPFile");
                if (callback) {
                    callback(status, 0);
                }
                break;
            }
        }
        uexUploaderMgr.cbCreateUploader = function(opId, dataType, data) {
            if (parseInt(data) != 0) {
                Logs("附件上传对象创建失败");
                return;
            } else {
                uexUploaderMgr.uploadFile(opId, dirPath, "filename", zip, maxWidth);
            }
        };
        uexUploaderMgr.createUploader(opId, ip + "hyw/uploadTMPFile");
    }

    /**
     * 打开自定义输入窗口
     * @param {Object} opts
     */
    function openInputWin(opts) {
        setValue('inputOpts', opts);
        openWin({
            backName : opts.winName,
            name : 'inputText',
            url : '../common/inputText.html',
            type : 4,
            aniId : 2,
            animDuration : 200
        })
    }

    function ajaxLoading(n, t) {
        if (n === 1) {
            if (!$("#Loading").length) {
                $("body").append("<div id='Loading'></div>");
            }
            if (t == true && !$("#LoadingMark").length) {
                $("body").append("<div id='LoadingMark'></div>");
            }
        } else {
            $("#Loading").remove();
            $("#LoadingMark").remove();
        }
    }

    function interceptionKeys() {
        //var count = 0;
        uexWindow.onKeyPressed = function(keyCode) {
            if (keyCode == 0) {
                uexWidget.moveToBack();
            }
        }
        uexWindow.setReportKey(0, 1);
    }

    /**
     * 检测升级程序
     * @param {Object} callBack
     */
    function checkUpdate(callBack) {
        uexWidgetOne.cbGetCurrentWidgetInfo = function(opId, dataType, data) {
            var obj = eval('(' + data + ')');
            authApi({
                url : "update/checkUpdate",
                data : {
                    params : {
                        device : "android",
                        version : obj.version
                    }
                },
                callBack : function(data) {
                    var jsdata = data;
                    if (data.code == 0) {
                        appcan.window.alert({
                            title : '升级提示',
                            content : '发现新版本:\n' + data.items.explan + '\n是否是立即升级到 ' + data.items.version + '？',
                            buttons : ['暂不升级', '立即升级'],
                            callback : function(err, data, dataType, optId) {
                                if (err) {
                                    alertEx("出现错误，请重试");
                                    return;
                                }
                                switch (parseInt(data)) {
                                case 0:
                                    callBack(jsdata, 0);
                                    //暂不升级
                                    break;
                                case 1:
                                    callBack(jsdata, 1);
                                    //升级
                                    break;
                                }
                            }
                        })
                    } else {
                        callBack(jsdata);
                    }
                }
            })
        }
        uexWidgetOne.getCurrentWidgetInfo();
    }

    /**
     * app升级程序
     * @param {Object} data
     * @param {Object} connectStatus
     */
    function appUpdate(data, connectStatus) {
        var did = Math.floor(Math.random() * (1000 + 1));
        var rdid = "al" + did;
        var surl = data.items.downpath;
        var durl = 'wgt://data/down/hyw' + data.items.version + '.apk';
        var version = data.items.version;
        var osType = data.items.type;
        uexDownloaderMgr.cbCreateDownloader = function(opId, dataType, data) {
            if (parseInt(data) == 0) {
                toast("开始后台下载...,请勿关闭应用");
                uexDownloaderMgr.onStatus = function(opId, fileSize, percent, status) {
                    switch (status) {
                    case 0:
                        break;
                    case 1:
                        uexDownloaderMgr.closeDownloader(did);
                        authApi({
                            url : "update/updateDownCount",
                            data : {
                                params : {
                                    version : version,
                                    type : osType
                                }
                            },
                            callBack : function(data) {
                            }
                        });
                        setTimeout(function() {
                            uexWidget.installApp(durl);
                        }, 500);
                        break;
                    case 2:
                        uexDownloaderMgr.closeDownloader(did);
                        alertEx("下载失败");
                        break;
                    }
                }
                setTimeout(function() {
                    uexDownloaderMgr.download(did, surl, durl, 0);
                }, 500);
            } else {
                alertEx("创建下载连接失败");
            }
        };
        uexFileMgr.cbIsFileExistByPath = function(opId, dataType, data) {
            if (parseInt(data) == 1) {
                uexFileMgr.deleteFileByPath(durl);
                setTimeout(function() {
                    uexDownloaderMgr.createDownloader(did);
                }, 500);
            } else {
                uexDownloaderMgr.createDownloader(did);
            }
        }
        uexFileMgr.isFileExistByPath(durl);
    }

    /**
     * 添加本地通知
     * @param {Object} title
     * @param {Object} content
     * @param {Object} extras
     */
    function addLocalNotification(title, content, extras) {
        if (isNull(content)) {
            return;
        }
        if (isNull(title)) {
            title = "海员港";
        }
        if (isNull(extras)) {
            extras = {
                type : "local"
            }
        }
        var notificationId = Math.floor(Math.random() * (1000000 + 1));
        var notification = {
            title : title,
            content : content,
            notificationId : notificationId,
            broadCastTime : 10,
            extras : extras
        };
        if (getAppPlat()) {
            notification.builderId = "0";
        }
        Logs("addLocalNotification:" + JSON.stringify(notification));
        if (!isdebug) {
            uexJPush.addLocalNotification(JSON.stringify(notification));
        }
    }

    /**
     *位置变化则更新
     */
    function updateUserLocation(lat, lng) {
        var userinfo = getUserInfo();
        if (isNull(userinfo)) {
            return;
        }
        authApi({
            url : "user/updateLocation",
            data : {
                params : {
                    userId : userinfo.userid,
                    lat : lat,
                    lng : lng
                }
            },
            callBack : function(data) {
                //Logs(toJsonStr(data))
            }
        });
    }

    function removeLastMsgId(from) {
        Logs("removeLastMsgId:" + from);
        var lastMsgId = getJson('lastMsgId');
        if (!isNull(lastMsgId)) {
            var obj = lastMsgId[from];
            if (!isNull(obj)) {
                delete lastMsgId[from];
            }
        }
        setValue('lastMsgId', lastMsgId);
    }

    /**
     *取最后一条聊天记录
     * @param {Object} from
     */
    function getLastMsgId(from) {
        var lastMsgId = getJson('lastMsgId');
        if (!isNull(lastMsgId)) {
            return lastMsgId[from];
        }
        return null;
    }

    /**
     *设置最后一条消息
     * @param {Object} from
     * @param {Object} msgId
     */
    function addLastMsgId(from, msgId, type) {
        var lastMsgId = getJson('lastMsgId');
        if (isNull(lastMsgId)) {
            lastMsgId = {};
            lastMsgId[from] = 0;
        }
        // Logs("addLastMsgId1:"+toJsonStr(lastMsgId));
        if (isNull(lastMsgId[from]) || msgId > lastMsgId[from] || !isNull(type)) {
            lastMsgId[from] = msgId;
        }
        setValue('lastMsgId', lastMsgId);
        //Logs("addLastMsgId2:"+toJsonStr(lastMsgId));
    }

    function getLocalTime(nowTime, format) {
        if (isNull(format)) {
            format = "yyyy-MM-dd hh:mm:ss";
        }
        nowTime = new Date(nowTime);
        return nowTime.Format(format);
    }

    function hasFoucs(foucsName) {
        var userinfo = getUserInfo();
        if (!isNull(userinfo.foucslist)) {
            for (var i = 0; i < userinfo.foucslist.length; i++) {
                if (userinfo.foucslist[i] == foucsName) {
                    return true;
                };
            };
        }
        return false;
    }

    function updateFoucsBYList(type, foucsList) {
        var userinfo = getUserInfo();
        if (!isNull(userinfo.foucslist)) {
            if (type == 0) {
                for (var i = 0; i < foucsList.length; i++) {
                    for (var j = 0; i < userinfo.foucslist; j++) {
                        if (userinfo.foucslist[j] == foucsList[i]) {
                            userinfo.foucslist.splice(j, 1);
                            break;
                        }
                    };
                };
            } else {
                for (var i = 0; i < foucsList.length; i++) {
                    var esixt = false;
                    for (var j = 0; i < userinfo.foucslist; j++) {
                        if (userinfo.foucslist[j] == foucsList[i]) {
                            esixt = true;
                            break;
                        }
                    };
                    if (!esixt) {
                        userinfo.foucslist.push(foucsList[i]);
                    }
                };
            }
        } else {
            userinfo.foucslist = foucsList;
        }
        updateUserInfo(userinfo);
    }

    function updateFoucs(type, foucsName) {
        var userinfo = getUserInfo();
        if (!isNull(userinfo.foucslist)) {
            var foucslist = userinfo.foucslist
            if (type == 0) {
                for (var i = 0; i < foucslist.length; i++) {
                    if (foucslist[i] == foucsName) {
                        userinfo.foucslist.splice(i, 1);
                        break;
                    }
                };
            } else {
                var esixt = false;
                for (var i = 0; i < foucslist.length; i++) {
                    if (foucslist[i] == foucsName) {
                        esixt = true;
                        break;
                    }
                }
                if (!esixt) {
                    userinfo.foucslist.push(foucsName);
                }
            }
        } else {
            userinfo.foucslist = [];
            userinfo.foucslist.push(foucsName)
        }
        updateUserInfo(userinfo);
    }

    function replaceSpecChar(str) {
        // console.log(str)
        //str = str.replace(/\b/g,"\\\b")
        // str = str.replace(new RegExp('(["\\"])', 'g'), "\\\\");
        // var reg = /\[([^\]]+)\]/g;
        //str = str.replace(reg, function($1) {
        //           return  $1;
        //        });
        str = str.toString().replace(new RegExp('(["\"])', 'g'), "\\\"");
        return str;
    }

    function containSpecial(s) {
        var special = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
        return (special.test(s));
    }

    function getUserType() {
        var obj = getUserInfo();
        if (isNull(obj)) {
            return null;
        }
        if (obj.usertype == "个人") {
            return 0;
        } else if (obj.usertype == "企业") {
            return 1;
        }
        return 2;
    }

    //身份证号合法性验证
    //支持15位和18位身份证号
    //支持地址编码、出生日期、校验位验证
    function IdentityCodeValid(code) {
        var city = {
            11 : "北京",
            12 : "天津",
            13 : "河北",
            14 : "山西",
            15 : "内蒙古",
            21 : "辽宁",
            22 : "吉林",
            23 : "黑龙江 ",
            31 : "上海",
            32 : "江苏",
            33 : "浙江",
            34 : "安徽",
            35 : "福建",
            36 : "江西",
            37 : "山东",
            41 : "河南",
            42 : "湖北 ",
            43 : "湖南",
            44 : "广东",
            45 : "广西",
            46 : "海南",
            50 : "重庆",
            51 : "四川",
            52 : "贵州",
            53 : "云南",
            54 : "西藏 ",
            61 : "陕西",
            62 : "甘肃",
            63 : "青海",
            64 : "宁夏",
            65 : "新疆",
            71 : "台湾",
            81 : "香港",
            82 : "澳门",
            91 : "国外 "
        };
        var tip = "";
        var pass = true;

        if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
            tip = "身份证号格式错误";
            pass = false;
        } else if (!city[code.substr(0, 2)]) {
            tip = "地址编码错误";
            pass = false;
        } else {
            //18位身份证需要验证最后一位校验位
            if (code.length == 18) {
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++) {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if (parity[sum % 11] != code[17].toUpperCase()) {
                    tip = "校验位错误";
                    pass = false;
                }
            }
        }
        if (!pass)
            alert(tip);
        return pass;
    }

    function getIdCardInfo(UUserCard, type) {
        if (isNull(UUserCard)) {
            return "";
        }
        switch(type) {
        case 1:
            //获取生日
            var birth = UUserCard.substring(6, 10) + "-" + UUserCard.substring(10, 12) + "-" + UUserCard.substring(12, 14);
            return birth;
            break;
        case 2:
            //获取性别
            if (parseInt(UUserCard.substr(16, 1)) % 2 == 1) {
                return "男";
            } else {
                return "女";
            }
            break;
        case 3:
            //年龄
            var myDate = new Date();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
            if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
                age++;
            }
            return age;
            break;
        }
    }

    function setMsgTime(messageTime, type) {
        var now = new Date().getTime();
        var a = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var days = (Math.abs((now - messageTime)) / (1000 * 60 * 60 * 24)).toFixed(0);
        var result = "";

        if (days == 0) {
            result = getLocalTime(messageTime, "hh:mm");
        } else if (days == 1) {
            result = "昨天" + (isNull(type) ? "" : " " + getLocalTime(messageTime, "hh:mm"));
        } else if (days > 1 && days <= 7) {
            var week = new Date(messageTime).getDay();
            result = a[week] + (isNull(type) ? "" : " " + getLocalTime(messageTime, "hh:mm"));
        } else {
            result = getLocalTime(messageTime, "yy-MM-dd");
        }
        return result;
    }

    function isFriend(userId, toId, callBack) {
        authApi({
            url : "friend/isFriend",
            data : {
                params : {
                    userId : userId,
                    toId : toId
                }
            },
            callBack : function(data) {
                if (data.code == 0) {
                    if (callBack) {
                        callBack(data.items.isfriend)
                    }
                } else {
                    callBack(404);
                }
            }
        })
    }

    function getUserStatus(status) {
        var str = "";
        switch(status) {
        case 0:
            str = "未认证";
            break;
        case 1:
            str = "审核中"
            break;
        case 2:
            str = "已认证"
            break;
        case 3:
            str = "审核不通过"
            break;
        default:
            str = "未认证";
            break;
        }
        return str;
    }

    function aliPay(orderId, callBack) {
        uexAliPay.onStatus = function(status, des) {
            if (callBack) {
                callBack(status, des);
            }
        }
        authApi({
            url : 'pay/reqAliPay',
            data : {
                params : {
                    orderId : orderId
                }
            },
            callBack : function(data) {
                closeLoading();
                if (data.code == 0) {
                    var ali_notifyUrl = ajax_ip + data.items.Ali_notifyUrl;
                    Logs(ali_notifyUrl)
                    uexAliPay.setPayInfo(data.items.Ali_partner, data.items.Ali_seller, data.items.Ali_rsaPrivate, data.items.Ali_rsaPublic, ali_notifyUrl);
                    var pay_fee = parseFloat(data.items.pay_fee).toFixed(2);
                    uexAliPay.pay(data.items.pay_num, data.items.pay_subject, data.items.pay_body, pay_fee);
                } else {
                    if (callBack) {
                        callBack(5, data.message);
                    }
                }
            }
        });

    }

    function getOrderStatus(status) {
        var str = ''
        switch(parseInt(status)) {
        case -2:
            str = "拒绝请求";
            break;
        case -1:
            str = "已删除";
            break;
        case 0:
            str = "邀请请求待确认";
            break;
        case 1:
            str = "接受请求待支付";
            break;
        case 2:
            break;
        case 3:
            str = "已支付待上船";
            break;
        case 4:
            str = "已上船";
            break;
        case 5:
            str = "退款中";
            break;
        case 6:
            str = "已完成";
            break;
        case 7:
            str = "超时取消";
            break;
        }
        return str;
    }

    function getDate(strDate) {
        var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/, function(a) {
            return parseInt(a, 10) - 1;
        }).match(/\d+/g) + ')');
        return date;
    }


    hywApp.extend({
        dateStrToDate : getDate,
        ajax_ip : ajax_ip,
        userResuemeUrl : userResuemeUrl,
        userRecruitUrl : userRecruitUrl,
        userRegHtmlUrl : userRegHtmlUrl,
        groupShareUri : groupShareUri,
        appDownLoadUrl : appDownLoadUrl,
        dynamicShareUri : dynamicShareUri,
        dynamicPicUri : dynamicPicUri,
        headUri : headUri,
        resumeUri : resumeUri,
        downIp : down_ip,
        qqAppId : qqAppId,
        iOSqqAppId : iOSqqAppId,
        sinaAppKey : sinaAppKey,
        sinaAppSecret : sinaAppSecret,
        sinaRegisterUrl : sinaRegisterUrl,
        weixinAppKey : weixinAppKey,
        weixinSecret : weixinSecret,
        addLocalNotification : addLocalNotification,
        interceptionKeys : interceptionKeys,
        setPageUpBounce : setPageUpBounce,
        setPageDownBounce : setPageDownBounce,
        ajaxLoading : ajaxLoading,
        openInputWin : openInputWin,
        uploadTMPFile : uploadTMPFile,
        userLogin : userLogin,
        userLogout : userLogout,
        openLoading : openLoading,
        closeLoading : closeLoading,
        isPlainObject : isPlainObject,
        isFunction : isFunction,
        isString : isString,
        isArray : isArray,
        toJsonStr : toJsonStr,
        toJson : toJson,
        jsonLength : jsonLength,
        getJsonData : getJsonData,
        toast : toast,
        getAppPlat : getAppPlat,
        Logs : Logs,
        openWin : openWin,
        closeWin : closeWin,
        openPopover : openPopover,
        openFrame : openFrame,
        getPwin : getPwin,
        getCurrWinName : getCurrWinName,
        getUserInfo : getUserInfo,
        updateUserInfo : updateUserInfo,
        delHtmlTag : delHtmlTag,
        isNull : isNull,
        isMobile : isMobile,
        isEmail : isEmail,
        isUrl : isUrl,
        isUserName : isUserName,
        genSessionId : genSessionId,
        removeVal : removeVal,
        getVal : getValue,
        setVal : setValue,
        getJson : getJson,
        alertEx : alertEx,
        authApi : authApi,
        clearCache : clearCache,
        evalJs : evalJs,
        isLogin : isLogin,
        checkUpdate : checkUpdate,
        appUpdate : appUpdate,
        getDisance : getDisance,
        updateUserLocation : updateUserLocation,
        google2baidu : google_to_baidu,
        loginSuccess : loginSuccess,
        regPushInfo : regPushInfo,
        loginEasemob : loginEasemob,
        getLastMsgId : getLastMsgId,
        addLastMsgId : addLastMsgId,
        removeLastMsgId : removeLastMsgId,
        getLocalTime : getLocalTime,
        setPageBounce : setPageBounce,
        hasFoucs : hasFoucs,
        updateFoucs : updateFoucs,
        updateFoucsBYList : updateFoucsBYList,
        getWin : getWin,
        closeAllWin : closeAllWin,
        replaceSpecChar : replaceSpecChar,
        containSpecial : containSpecial,
        getCurrWin : getCurrWin,
        listSortBy : listSortBy,
        getUserType : getUserType,
        isCardNo : IdentityCodeValid,
        getIdCardInfo : getIdCardInfo,
        setMsgTime : setMsgTime,
        isFriend : isFriend,
        getUserStatus : getUserStatus,
        aliPay : aliPay,
        getOrderStatus : getOrderStatus
    });
    App.App = hywApp;
})(this);

