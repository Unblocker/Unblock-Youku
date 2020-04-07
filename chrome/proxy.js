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

/*jshint devel:true, globalstrict: true */
/*global chrome: false, unblock_youku: false, new_sogou_proxy_addr: false, urls2pac: false, get_mode_name: false */
/*global ga_report_timeout: false, ga_report_error: false, ga_report_event: false, localStorage: false */
"use strict";

function setup_proxy() {
    function setup_pac_data(proxy_prot_1, proxy_addr_1,
                            proxy_prot_2, proxy_addr_2) {
        var pac_data = urls2pac(
            unblock_youku.chrome_proxy_bypass_urls,
            unblock_youku.chrome_proxy_urls,
            proxy_addr_1, proxy_prot_1,
            proxy_addr_2, proxy_prot_2);
        // console.log(pac_data);
        var proxy_config = {
            mode: 'pac_script',
            pacScript: {
                data: pac_data
            }
        };
        chrome.proxy.settings.set(
            {
                value: proxy_config,
                scope: 'regular'
            },
            function() {}
        );
    }


    console.group('to set up proxy');

    var proxy_server_proc = unblock_youku.default_proxy_server_proc;
    var proxy_server_addr = unblock_youku.default_proxy_server_addr;
    var backup_proxy_server_proc = unblock_youku.backup_proxy_server_proc;
    var backup_proxy_server_addr = unblock_youku.backup_proxy_server_addr;

    if (typeof localStorage.custom_proxy_server_proc !== 'undefined' &&
            typeof localStorage.custom_proxy_server_addr !== 'undefined') {
        proxy_server_proc = localStorage.custom_proxy_server_proc;
        proxy_server_addr = localStorage.custom_proxy_server_addr;
        backup_proxy_server_proc = localStorage.custom_proxy_server_proc;
        backup_proxy_server_addr = localStorage.custom_proxy_server_addr;
    }

    /* DEBUG -- BEGIN */
    // proxy_server_proc = 'SOCKS5';
    // proxy_server_addr = '127.0.0.1:1080';
    /* DEBUG -- END */

    setup_pac_data(proxy_server_proc, proxy_server_addr,
                   backup_proxy_server_proc, backup_proxy_server_addr);
    console.log('using the proxy server: ' + proxy_server_proc + ' ' + proxy_server_addr);
    ga_report_event('Proxy Server Selection', proxy_server_proc + ' ' + proxy_server_addr, 0.1);

    console.groupEnd();
}
