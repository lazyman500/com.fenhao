package com.fenhao.core.account.share.site;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.Connection.Method;
import org.jsoup.nodes.Document;

public class Site {

    public Site() {
    }

    String name = "";
    String cookiesStr = "";
    String checkUrl = "";

    public Site(String name, String checkUrl, String cookiesStr) {
        super();
        this.name = name;
        this.cookiesStr = cookiesStr;
        this.checkUrl = checkUrl;
    }

    public String getCookiesStr() {
        return cookiesStr;
    }

    public void setCookiesStr(String cookiesStr) {
        this.cookiesStr = cookiesStr;
    }

    public String getCheckUrl() {
        return checkUrl;
    }

    public void setCheckUrl(String checkUrl) {
        this.checkUrl = checkUrl;
    }

}
