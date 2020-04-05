/*
 * Copyright (C) 2012 - 2016  Bo Zhu  http://zhuzhu.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var unblock_youku = unblock_youku || {};

/*
 PLEASE READ THIS FIRST!

 This file contains several lists of URLs, which are used in different unblock modes:

 - The (non-proxy) lite mode of our Chrome extension will use:
   - header_urls, and
   - redirect_urls.
 - The (default) standard mode will use:
   - header_urls,
   - redirect_urls, and
   - chrome_proxy_urls.
 - The PAC service (for iOS/Android) will use all lists:
   - header_urls,
   - redirect_urls,
   - chrome_proxy_urls, and
   - pac_proxy_urls.
 */

/*
 * Note that the HTTPS URLs must NOT have any path portions.
 *
 * For example:
 * - Wrong: https://example.com/abc/*
 * - Right: https://example.com/*
 */


// Just changing headers of these URLs will be sufficient.
unblock_youku.header_urls = [
    'http://v.api.hunantv.com/*',
    'http://live.gslb.letv.com/*',
    'http://ac.qq.com/*',
    'http://*.ssports.com/*',
    'http://ssports.com/*',
    'http://ssports.smgbb.cn/*',
    'http://www.bilibili.com/*',
    'http://interface.bilibili.com/*',
    'http://bangumi.bilibili.com/*',
    'https://pstream.api.mgtv.com/*',
    'http://kandian.com/player/getEpgInfo*',
    'http://u.y.qq.com/cgi-bin/*',
    'https://u.y.qq.com/*'
];

// These URLs can work with the redirect functionality (mainly used in Flash players).
unblock_youku.redirect_urls = [
    'https://dmd-fifajs-h5-ikuweb.youku.com/*',
    'https://dmd-fifa-h5-ikuweb.youku.com/*',
    'http://acs.youku.com/*',
    'https://acs.youku.com/*',
    // 'http://v.youku.com/player/*',
    'http://pl-ali.youku.com/*',
    'http://list.youku.com/category/*',
    'http://api.youku.com/player/*',
    'http://play.youku.com/play/get.json*',
    'http://play-dxk.youku.com/play/get.json*',
    'http://play-ali.youku.com/play/get.json*',
    'http://list.youku.com/show/module?*',
    'http://list.youku.com/show/point?*',
    'http://list.youku.com/show/episode?*',
    'http://v.youku.com/page/playlist*',
    'http://ups.youku.com/ups/get.json*',
    'https://ups.youku.com/',
    'https://ac.qq.com/*',
    'http://player.aplus.pptv.com/*',
    'http://api.aixifan.com/plays/*',
    'http://www.acfun.cn/video/getVideo*',
    'https://www.acfun.cn/*',
    // 'https://v.youku.com/*',
    // 'http://v2.tudou.com/*',
    'http://video.tudou.com/v/*',
    'http://www.tudou.com/a/*',
    'http://www.tudou.com/v/*',
    'http://www.tudou.com/outplay/goto/*',
    'http://www.tudou.com/tvp/alist.action*',
    'http://s.plcloud.music.qq.com/fcgi-bin/p.fcg*',
    'http://i.y.qq.com/*/fcg-bin/*',
    'http://i.y.qq.com/*/fcgi-bin/*',
    'http://c.y.qq.com/*/fcg-bin/*',
    'http://c.y.qq.com/*/fcgi-bin/*',
    'https://c.y.qq.com/*',
    'http://api.unipay.qq.com/cgi-bin/get_pay_info.fcg?*',
    'https://api.unipay.qq.com/*',
    'http://hot.vrs.sohu.com/*',
    'https://hot.vrs.sohu.com/*',
    'http://live.tv.sohu.com/live/player*',
    'http://pad.tv.sohu.com/playinfo*',
    'http://my.tv.sohu.com/play/m3u8version.do*',
    'http://hot.vrs.letv.com/*',
    'http://api.le.com/mms/out/video/*',
    'http://player.pc.le.com/mms/out/video/*',
    'http://player-pc.le.com/mms/out/video/*',
    // 'http://g3.letv.cn/*',
    'http://data.video.qiyi.com/*',
    'http://data.video.iqiyi.com/*',
    'https://data.video.qiyi.com/*',
    'https://data.video.iqiyi.com/*',
    // 'http://nl.rcd.iqiyi.com/apis/urc/*',
    'http://cache.vip.qiyi.com/*',
    'http://cache.video.qiyi.com/*',
    'http://cache.vip.iqiyi.com/*',
    'http://cache.video.iqiyi.com/*',
    'https://cache.video.iqiyi.com/*',
    'http://iplocation.geo.qiyi.com/cityjson*',
    'http://iplocation.geo.iqiyi.com/cityjson*',
    'http://*.cupid.iqiyi.com/*',
    'http://v.api.hunantv.com/player/video*',
    'http://mobile.api.hunantv.com/v5/video/getSource*',
    'http://v.api.mgtv.com/player/video*',
    'https://v.api.mgtv.com/*',
    'http://pcweb.api.mgtv.com/player/video*',
    'https://pcweb.api.mgtv.com/*',
    'http://acc.music.qq.com/base/fcgi-bin/getsession*',
    'http://182.254.116.117/*',

    'http://api.appsdk.soku.com/*',

    'http://app.bilibili.com/bangumi/*',
    'http://bangumi.bilibili.com/*',

    'http://122.72.82.31/*',
    'http://211.151.158.155/*',

    // 'http://tt.video.qq.com/get*',
    // 'http://ice.video.qq.com/get*',
    // 'http://tjsa.video.qq.com/get*',
    // 'http://a10.video.qq.com/get*',
    // 'http://xyy.video.qq.com/get*',
    // 'http://vcq.video.qq.com/get*',
    // 'http://vsh.video.qq.com/get*',
    // 'http://vbj.video.qq.com/get*',
    // 'http://bobo.video.qq.com/get*',
    // 'http://flvs.video.qq.com/get*',
    // 'http://bkvv.video.qq.com/get*',
    // 'http://h5vv.video.qq.com/get*',
    'http://*.video.qq.com/get*',
    'http://*.video.qq.com/fcgi-bin/*',
    'https://*.video.qq.com/*',
    'http://info.zb.qq.com/?*',
    'https://info.zb.qq.com/*',
    'http://info.zb.video.qq.com/?*',
    'https://info.zb.video.qq.com/*',
    'http://qzs.qq.com/tencentvideo_v1/*',
    'https://qzs.qq.com/*',
    'http://vd.l.qq.com/*',
    'https://vd.l.qq.com/*',
    'http://vi.l.qq.com/*',
    'https://vi.l.qq.com/*',

    'http://dispatcher.video.sina.com.cn/*',
    'http://geo.js.kankan.com/*',
    'http://web-play.pptv.com/*',
    'http://v.pptv.com/show/*',
    'https://ppi.api.pptv.com/*',
    'http://web-play.pplive.cn/*',
    'http://tools.aplusapi.pptv.com/get_ppi?*',
    'http://live.pptv.com/api/subject_list?*',
    // 'http://c1.pptv.com/*',
    'http://dyn.ugc.pps.tv/*',
    'http://v.pps.tv/ugc/ajax/aj_html5_url.php*',
    'http://inner.kandian.com/*',
    'http://ipservice.163.com/*',
    'http://so.open.163.com/open/info.htm*',
    'http://zb.s.qq.com/*',
    'https://zb.s.qq.com/*',
    'http://ip.kankan.com/*',
    'http://vxml.56.com/json/*',

    'http://music.sina.com.cn/yueku/intro/*',
    //'http://ting.baidu.com/data/music/songlink*',
    //'http://ting.baidu.com/data/music/songinfo*',
    //'http://ting.baidu.com/song/*/download*',
    'http://music.sina.com.cn/radio/port/webFeatureRadioLimitList.php*',
    'http://play.baidu.com/data/music/songlink*',

    'http://v.iask.com/v_play.php*',
    'http://v.iask.com/v_play_ipad.cx.php*',
    'http://tv.weibo.com/player/*',
    'http://wtv.v.iask.com/*.m3u8*',
    'http://wtv.v.iask.com/mcdn.php',
    'http://video.sina.com.cn/interface/l/u/getFocusStatus.php*',
    'http://wtv.v.iask.com/player/ovs1_idc_list.php*',

    //'http://kandian.com/player/getEpgInfo*',  // !!!
    //'http://cdn.kandian.com/*',
    'http://www.yinyuetai.com/insite/*',
    'http://www.yinyuetai.com/main/get-*',
    'http://www.kugou.com/interface/geoip/*',
    'http://www.kuwo.cn/yy/PlayCheckIp?callback=checkIpCallback&_=*',
    'http://antiserver.kuwo.cn/anti.s?*',
    'http://ipcheck.kuwo.cn/ip_check.kuwo*',
    'http://*.dpool.sina.com.cn/iplookup*',
    'http://api.letv.com/streamblock*',
    'http://api.letv.com/mms/out/video/play*',
    'http://api.www.letv.com/mms/out/video/playJson?*',
    'http://*.letv.com/mms/out/video/play*',
    'http://api.letv.com/mms/out/common/geturl*',
    'http://api.letv.com/geturl*',
    'http://api.letv.com/api/geturl*',
    'http://st.live.letv.com/live/*',
    'http://live.gslb.letv.com/gslb?*',
    'http://live.g3proxy.lecloud.com/gslb?*',
    'http://api.live.letv.com/crossdomain.xml',
    'http://static.itv.letv.com/api*',
    'http://ip.apps.cntv.cn/js/player.do*',
    'http://vdn.apps.cntv.cn/api/get*',
    'http://vdn.live.cntv.cn/api2/*',
    'http://cctv1.vtime.cntv.cloudcdn.net/cache/*',
    'http://cctv5.vtime.cntv.cloudcdn.net/cache/*',
    'http://cctv5plus.vtime.cntv.cloudcdn.net/cache/*',
    'http://cctv13.vtime.cntv.cloudcdn.net/cache/*',
    'http://sports1pull.live.wscdns.com/live/aoyun2',
    'http://vip.sports.cntv.cn/check.do*',
    'http://vip.sports.cntv.cn/play.do*',
    'http://vip.sports.cntv.cn/servlets/encryptvideopath.do*',
    'http://211.151.157.15/*'
];


// These URLs have to go through a proxy (for our Chrome extension).
unblock_youku.chrome_proxy_urls = unblock_youku.redirect_urls.concat([
    'http://www.tudou.com/programs/view/*',
    'http://www.tudou.com/albumplay/*',
    'http://www.tudou.com/listplay/*',

    'http://www.youku.com/show_page/*',
    'http://v.youku.com/v_show/*',
    'http://www.soku.com/search_video/*',
    'http://search.api.3g.youku.com/*',
    'http://search.api.3g.tudou.com/*',
    "http://*.api.tv.itc.cn/*",
    "http://api.tv.sohu.com/*",
    'http://ac.qq.com/Comic*',
    'http://ac.qq.com/Jump*',
    "http://live.api.hunantv.com/pc/getSourceById*",
    "http://mobile.api.hunantv.com/*",
    'http://www.qie.tv/*',
    'http://www.bilibili.com/video/*',
    'https://www.bilibili.com/*',
    'http://api.bilibili.com/*',
    'https://api.bilibili.com/*',
    'http://interface.bilibili.com/*',
    'https://interface.bilibili.com/*',
    'http://bangumi.bilibili.com/api/*',
    'https://bangumi.bilibili.com/*',
    'http://live.bilibili.com/*',
    'https://live.bilibili.com/*',
    'http://api.live.bilibili.com/*',
    'https://api.live.bilibili.com/*',
    // 'http://live-play.acgvideo.com/live/*',
    'http://m10.music.126.net/*', //for the testing of netease music

    'http://douban.fm/*',
    'https://douban.fm/*',
    'http://www.xiami.com/*',
    'http://lixian.xunlei.com/*',
    'http://lixian.vip.xunlei.com/*',
    'http://dynamic.cloud.vip.xunlei.com/*',
    'http://cloud.vip.xunlei.com/*',
    // 'http://vod.lixian.xunlei.com/*',
    'http://www.iqiyi.com/dongman/',
    'https://www.iqiyi.com/',

    // LETV https://github.com/Unblocker/Unblock-Youku/issues/590
    "http://36.110.222.105/*",
    "http://36.110.222.119/*",
    "http://36.110.222.146/*",
    "http://36.110.222.156/*",
    "http://123.125.89.6/*",
    "http://123.125.89.101/*",
    "http://123.125.89.102/*",
    "http://123.125.89.103/*",
    "http://123.125.89.157/*",
    "http://123.125.89.159/*",
    "http://123.126.32.134/*",
    "http://123.59.122.75/*",
    "http://123.59.122.76/*",
    "http://123.59.122.77/*",
    "http://123.59.122.104/*",
    "http://111.206.208.36/*",
    "http://111.206.208.37/*",
    "http://111.206.208.38/*",
    "http://111.206.208.61/*",
    "http://111.206.208.62/*",
    "http://111.206.208.163/*",
    "http://111.206.208.164/*",
    "http://111.206.208.166/*",
    "http://111.206.211.145/*",
    "http://111.206.211.146/*",
    "http://111.206.211.147/*",
    "http://111.206.211.148/*",
    "http://111.206.211.129/*",
    "http://111.206.211.130/*",
    "http://111.206.211.131/*",
    "http://220.181.153.113/*",
    "http://14.152.77.32/*",
    "http://14.152.77.26/*",
    "http://14.152.77.25/*",
    "http://14.152.77.22/*",
    "http://183.232.229.22/*",
    "http://183.232.229.21/*",
    "http://183.232.229.25/*",
    "http://183.232.229.32/*",
    "http://115.182.200.51/*",
    "http://115.182.200.50/*",
    "http://115.182.200.54/*",
    "http://115.182.200.53/*",
    "http://115.182.200.52/*",
    "http://115.182.63.51/*",
    "http://115.182.63.93/*",
    "http://*.letv.cn/vod/v2/*",
    "http://ark.letv.com/s*",
    "http://search.lekan.letv.com/*",

    // 'http://live.video.sina.com.cn/room/*',
    // 'http://edge.v.iask.com/*',  // may be large files

    'http://pay.youku.com/buy/redirect.html*',
    'http://pay.tudou.com/buy/redirect.html*',
    'http://aid.video.qq.com/fcgi-bin/userip?*',
    'http://aidbak.video.qq.com/fcgi-bin/userip?*',
    'http://pay.video.qq.com/fcgi-bin/paylimit*',
    'http://paybak.video.qq.com/fcgi-bin/paylimit*',
    'http://chrome.2345.com/dianhua/index.php?m=call&f=check&*',

    'http://music.163.com/eapi/*',

    // 'http://play.baidu.com/*',
    // 'http://zhangmenshiting.baidu.com/*',
    // 'http://music.baidu.com/box*',
    // 'http://music.baidu.com/data/service/sum*',
    // 'http://music.baidu.com/data/music/songlink*',
    // 'http://music.baidu.com/data/music/songinfo*',
    // 'http://music.baidu.com/data/music/fmlink*',
    // 'http://music.baidu.com/song/*/download*',
    // 'http://fm.baidu.com/*',
    // 'http://www.kugou.com/*',
    // 'http://music.baidu.com/data/user/collect*',

    // 'http://d.dxy.cn/*',
    // 'http://ac.qq.com/*/v/cid/*',
    // 'http://v.pptv.com/show/*.html',
    // 'http://www.songtaste.com/*',
    // 'http://songtaste.com/*',
    // 'http://www.yyets.com/*',
    // 'http://mainv2.img.duomi.com/*',
    // 'http://imanhua.com/comic/*',
    // 'http://www.imanhua.com/comic/*',
    // 'http://imanhua.com/v2*',
    // 'http://www.imanhua.com/v2*'
]);


// These URLs will not go through proxy servers (for our Chrome extension).
unblock_youku.chrome_proxy_bypass_urls = [
    'http://bangumi.bilibili.com/index/ding-count.json',
];


// These URLs are for other software, such as iOS/Android Apps and TV boxes.
unblock_youku.pac_proxy_urls = unblock_youku.chrome_proxy_urls.concat(unblock_youku.header_urls, [
    'http://a.play.api.3g.youku.com/common/v3/play?*',
    'http://i.play.api.3g.youku.com/common/v3/play?*',
    'http://i.play.api.3g.youku.com/common/v3/hasadv/play?*',
    'http://api.3g.youku.com/layout*',
    'http://api.3g.youku.com/v3/play/address*',
    'http://api.3g.youku.com/openapi-wireless/videos/*/download*',
    'http://api.3g.youku.com/videos/*/download*',
    'http://api.3g.youku.com/common/v3/play*',
    'http://tv.api.3g.youku.com/openapi-wireless/v3/play/address*',
    'http://tv.api.3g.youku.com/common/v3/hasadv/play*',
    'http://tv.api.3g.youku.com/common/v3/play*',
    'http://play.api.3g.youku.com/common/v3/hasadv/play*',
    'http://play.api.3g.youku.com/common/v3/play*',
    'http://play.api.3g.youku.com/v3/play/address*',
    'http://i-play.mobile.youku.com/*',
    'http://play.api.3g.tudou.com/v*',
    'http://tv.api.3g.tudou.com/tv/play?*',
    'http://api.3g.tudou.com/*',
    'http://api.tv.sohu.com/mobile_user/device/clientconf.json?*',
    'http://access.tv.sohu.com/*',
    'http://iface.iqiyi.com/api/searchIface?*',
    'http://iface.iqiyi.com/api/ip2area?*',
    'http://iface2.iqiyi.com/php/xyz/iface/*',
    'http://iface2.iqiyi.com/php/xyz/entry/galaxy.php?*',
    'http://iface2.iqiyi.com/php/xyz/entry/nebula.php?*',
    'http://cache.m.iqiyi.com/jp/tmts/*',
    'http://dynamic.app.m.letv.com/*/dynamic.php?*ctl=videofile*',
    'http://dynamic.meizi.app.m.letv.com/*/dynamic.php?*ctl=videofile*',
    'http://dynamic.search.app.m.letv.com/*/dynamic.php?*ctl=videofile*',
    'http://dynamic.live.app.m.letv.com/*/dynamic.php?*act=canplay*',
    'http://listso.m.areainfo.ppstream.com/ip/q.php*',
    'http://epg.api.pptv.com/detail.api?*',
    'http://play.api.pptv.com/boxplay.api?*',
    'http://api.letv.com/getipgeo',
    'http://m.letv.com/api/geturl?*',
    'http://api.mob.app.letv.com/play*',
    'http://static.api.sports.letv.com/*vod?*',
    'http://api.itv.letv.com/iptv/api/new/video/play/get.json?*', //for letv TV boxes
    'http://vdn.apps.cntv.cn/api/getLiveUrlCommonApi.do?pa://cctv_p2p_hdcctv5*',
    'http://vdn.apps.cntv.cn/api/getLiveUrlCommonApi.do?pa://cctv_p2p_hdcctv6*',
    'http://vdn.apps.cntv.cn/api/getLiveUrlCommonApi.do?pa://cctv_p2p_hdcctv8*',
    'http://vdn.apps.cntv.cn/api/getLiveUrlCommonApi.do?pa://cctv_p2p_hdbtv6*',
    // 'http://vdn.live.cntv.cn/api2/live.do?channel=pa://cctv_p2p_hdcctv5*',
    // 'http://vdn.live.cntv.cn/api2/live.do?channel=pa://cctv_p2p_hdcctv6*',
    // 'http://vdn.live.cntv.cn/api2/live.do?channel=pa://cctv_p2p_hdcctv8*',
    // 'http://vdn.live.cntv.cn/api2/live.do?channel=pa://cctv_p2p_hdbtv6*',
    'http://vdn.live.cntv.cn/*',
    'http://app.bilibili.com/*',
    'https://app.bilibili.com/*',
    'http://bangumi.bilibili.com/api/*',


    // Music apps
    'http://3g.music.qq.com/*',
    'http://mqqplayer.3g.qq.com/*',
    'http://proxy.music.qq.com/*',
    'http://proxymc.qq.com/*',
    //Disable follow url because its hijackable.
    // 'http://*/base/fcgi-bin/getsession*',  //for ios qq music v5.8, issue #536
    'http://220.249.243.70/base/fcgi-bin/getsession*',
    'http://117.185.116.152/base/fcgi-bin/getsession*',
    'http://101.227.139.217/base/fcgi-bin/getsession*',
    'http://59.37.96.220/base/fcgi-bin/getsession*',
    'http://140.207.69.99/base/fcgi-bin/getsession*',
    'http://103.7.31.186/base/fcgi-bin/getsession*',
    'http://103.7.30.89/base/fcgi-bin/getsession*',
    'http://182.254.34.151/base/fcgi-bin/getsession*', //temperary solutions for issue #536
    'http://223.167.82.139/base/fcgi-bin/getsession*',
    'http://101.227.169.200/base/fcgi-bin/getsession*',
    'http://182.254.11.174/base/fcgi-bin/getsession*',
    'http://183.192.192.139/base/fcgi-bin/getsession*',
    'http://163.177.90.61/base/fcgi-bin/getsession*',
    'http://14.18.245.250/base/fcgi-bin/getsession*',
    'http://183.232.126.23/base/fcgi-bin/getsession*',
    'http://183.232.119.198/base/fcgi-bin/getsession*',
    'http://182.254.4.234/base/fcgi-bin/getsession*', //another fix for QQ music in #731
    'http://203.205.151.23/base/fcgi-bin/getsession*',
    'http://ip2.kugou.com/check/isCn/*',
    'http://ip.kugou.com/check/iscn*',
    'http://client.api.ttpod.com/global*',
    'http://mobi.kuwo.cn/*',
    'http://nmobi.kuwo.cn/*',
    'http://mobilefeedback.kugou.com/*',
    'http://tingapi.ting.baidu.com/v1/restserver/ting?*method=baidu.ting.song*',
    'http://music.baidu.com/data/music/links?*',
    'http://serviceinfo.sdk.duomi.com/api/serviceinfo/getserverlist*',
    'http://music.163.com/api/copyright/restrict/?*',
    'http://music.163.com/api/batch',
    'http://www.xiami.com/web/spark*',
    'http://www.xiami.com/web/*?*xiamitoken=*',
    'http://spark.api.xiami.com/api?*method=AuthIp*',
    'http://spark.api.xiami.com/api?*method=Start.init*',
    'http://spark.api.xiami.com/api?*method=Songs.getTrackDetail*',
    'http://spark.api.xiami.com/api?*method=Songs.detail*',
    // for PC Clients only
    'http://iplocation.geo.qiyi.com/cityjson',
    'http://sns.video.qq.com/tunnel/fcgi-bin/tunnel*',
    'http://v5.pc.duomi.com/single-ajaxsingle-isban*',

    // the access control for https are per domain name
    'https://openapi.youku.com/*',  // see issue #118
    'https://61.135.196.99/*', //n-openapi.youku.com
    'https://220.181.185.150/*', //zw-openapi.youku.com
    'https://111.13.127.46/*',//bj-m-openapi.youku.com
    'https://211.151.50.10/*',//b-openapi.youku.com
    'https://123.126.99.57/*',//openapi.youku.com
    'https://123.126.99.39/*',//zw-n-openapi.youku.com
    'https://220.181.154.137/*',//zw-t-openapi.youku.com

    // for MiBox iCNTV Authentication
    'http://tms.is.ysten.com:8080/yst-tms/login.action?*',
    'http://chrome.2345.com/dianhua/mobileApi/check.php',
    'http://internal.check.duokanbox.com/check.json*',
    // for 3rd party's DNS for Apple TV (see pull request #78)
    'http://180.153.225.136/*',
    'http://118.244.244.124/*',
    'http://210.129.145.150/*',
    'http://182.16.230.98/*', // Updated on Jan. 3, for new DNS of apple tv.

    // for NeteaseMusic on iOS
    'http://103.65.41.126/eapi/*',
    'http://103.65.41.125/eapi/*'
]);


// These URLs will not go through proxy servers (for our PAC service).
unblock_youku.pac_proxy_bypass_urls = unblock_youku.chrome_proxy_bypass_urls.concat([
    // 'http://*/ipad?file=/*'  // Not useful anymore for iOS
]);


(function() {
    // Remove all path info from unblock_youku.pac_proxy_urls due to the latest iOS update
    // See https://bbs.uku.im/t/43
    "use strict";

    var new_list = [];
    var regex_to_extract_domain = /^https?:\/\/[^\/]*/i;

    for (var i = 0; i < unblock_youku.pac_proxy_urls.length; i++) {
        new_list.push(unblock_youku.pac_proxy_urls[i].match(regex_to_extract_domain)[0] + '/*');
    }

    unblock_youku.pac_proxy_urls = new_list;
}());


function urls2regexs(url_list) {
    "use strict";

    var regex_list = [];

    for (var i = 0; i < url_list.length; i++) {
        var re_str = url_list[i];

        // Escape all possibly problematic symbols
        // http://stackoverflow.com/a/6969486/1766096
        re_str = re_str.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, '\\$&');
        re_str = re_str.replace(/\*/g, '.*');

        // make the first * matches only domain names or ip addresses
        // just as http://developer.chrome.com/extensions/match_patterns.html
        re_str = re_str.replace(/^http:\\\/\\\/\.\*/i, 'http:\\/\\/[^\/]*');
        re_str = re_str.replace(/^https:\\\/\\\/\.\*/i, 'https:\\/\\/[^\/]*');

        regex_list.push(new RegExp('^' + re_str + '$', 'i'));
    }

    // console.log(regex_list);
    return regex_list;
}


function produce_squid_regex_list(for_pac_server) {
    'use strict';

    var squid_url_list = unblock_youku.chrome_proxy_urls;
    if (for_pac_server === true) {
        squid_url_list = unblock_youku.pac_proxy_urls;
    }

    var squid_regex_list = urls2regexs(squid_url_list);
    var i, single_str;

    var regex_to_extract_https_domain = /^\^https:\\\/\\\/([^:]+)\\\//i;

    var ret_list = [];
    for (i = 0; i < squid_regex_list.length; i++) {
        single_str = squid_regex_list[i].toString();
        single_str = single_str.substring(1, single_str.length - 2);

        if (single_str.match(regex_to_extract_https_domain)) {
            single_str = '^' + single_str.match(regex_to_extract_https_domain)[1] + ':443';
        }

        ret_list.push(single_str);
    }

    return ret_list;
}


// Also export as a node.js module
var exports = exports || {};
// Exported for the redirect server
exports.regex_crx_urls = urls2regexs(unblock_youku.chrome_proxy_urls);
exports.regex_crx_bypass_urls = urls2regexs(unblock_youku.chrome_proxy_bypass_urls);
// Exported for generating the PAC file
exports.pac_urls = unblock_youku.pac_proxy_urls;
exports.pac_bypass_urls = unblock_youku.pac_proxy_bypass_urls;

exports.produce_squid_regex_list = produce_squid_regex_list;


(function () {
    'use strict';

    // http://stackoverflow.com/a/5197219
    // http://stackoverflow.com/a/6398335
    if (typeof module !== 'undefined' && module.exports && require.main === module) {
        var squid_regex_list;
        if (typeof process !== 'undefined' && process.argv[2] === 'PAC') {
            squid_regex_list = produce_squid_regex_list(true /* for PAC service */);
        } else {
            squid_regex_list = produce_squid_regex_list(false /* for Chrome proxy */);
        }

        for (var i = 0; i < squid_regex_list.length; i++) {
            console.log(squid_regex_list[i]);
        }
    }
}());
