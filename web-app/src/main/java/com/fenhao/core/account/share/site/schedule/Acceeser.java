package com.fenhao.core.account.share.site.schedule;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.jsoup.Connection;
import org.jsoup.Connection.Method;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import com.fenhao.core.account.share.site.Site;

public class Acceeser {

    static String sites[][] = {
            {
                    "youku",
                    "http://i.youku.com/u/profile/",
                    "u=nb87365365;yktk=1%7C1404804148%7C15%7CaWQ6Mzc1ODE5NTM0LG5uOm5iODczNjUzNjUsdmlwOnRydWUseXRpZDozNzU4MTk1MzQsdGlkOjA%3D%7Cee607f8980274b7389c3e6382bc155ed%7C27ecee19e95ca8729ca74664a3ad6ea200817456%7C1" },
            {
                    "sohu",
                    "http://tv.sohu.com/",
                    "vjuids=-2175ead34.1472b3aba6e.0.cbbfc6d8; fuid=13849416306134240996; IPLOC=CN1100; req_code=G3xjpEZnR8g4IRFFxr-t1tR3-wC7apss; JSESSIONID=1oo1bk7amssaybhbwujokf59v; ppinf=2|1405179904|1406389504|bG9naW5pZDowOnx1c2VyaWQ6MjQ6MTgzMjQ2MTU3NUBzaW5hLnNvaHUuY29tfHNlcnZpY2V1c2U6MzA6MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwfGNydDowOnxlbXQ6MTowfGFwcGlkOjQ6MTA3NHx0cnVzdDoxOjF8cGFydG5lcmlkOjE6MHxyZWxhdGlvbjowOnx1dWlkOjE2OjBmMWY3NjRjN2NjYTQ1OXh8dWlkOjE2OjBmMWY3NjRjN2NjYTQ1OXh8dW5pcW5hbWU6OTp0ZXN0MjMxMzF8cmVmdXNlcmlkOjEwOjE4MzI0NjE1NzV8cmVmbmljazo3Oui0neWjs-mHjOeahOWwj-S6uuS5pnw; pprdig=nPgxlTAy6J2Wxq-I6ZLC9mzA2WtzMLkNiPhCoYzUmeHcm5T_uFXMdoKLFTvEBaGwv2jqmUInhHHJSSro7oowElGNYCBPcYYkTrQWuDlZ3KX4-AGNKm59vp-QREGMn5kB6FZG_4FZ5LyxKVdsHYdPaopnGO9lsmOmaNsoKRlKCMI;  crossdomain=86400; ppmdig=14051799040000000d358f6f04771e8961cca5c642d10b71; vjlast=1405179575.1405179575.30; SUV=1311201800128407" }

    };

    public void keepLogin() {
        for (int i = 0; i < sites.length; i++) {
            Site site = new Site(sites[i][0], sites[i][1], sites[i][2]);
            checklogin(site);
        }

    }

    public void checklogin(Site site) {
        Map cookeisData = getCookies(site.getCookiesStr());
        Map formData = new HashMap();
        formData.put("card", "350626197403123207");
        Connection connectionTest = Jsoup
                .connect(site.getCheckUrl())
                .userAgent(
                        "User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36")
                .cookies(cookeisData).data(formData).method(Method.GET);
        Document doc = null;
        try {
            doc = Jsoup.parse(new String(connectionTest.execute().bodyAsBytes(), "UTF-8"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    Map getCookies(String cookiesStr) {
        Map param = new HashMap<String, String>();
        String pArray[] = StringUtils.split(cookiesStr, ";");
        String[] temp1 = { "" };
        String allStr = "?";
        for (int i = 0; i < pArray.length; i++) {
            String tempArray[] = StringUtils.split(pArray[i], "=");
            if (tempArray.length < 2) {
                tempArray = (String[]) ArrayUtils.addAll(tempArray, temp1);
            }
            // System.out.printf("length:%s key:%s value: %n", tempArray.length, tempArray[0]);
            allStr += String.format("%s=%s&", tempArray[0].trim(), tempArray[1].trim());
            param.put(tempArray[0], tempArray[1]);
        }
        return param;
    }

    String getLoginUrl(Map<String, String> param, String checkUrl) {
        StringBuffer url = new StringBuffer(checkUrl + "?");
        for (Entry<String, String> e : param.entrySet()) {
            url.append(e.getKey().trim()).append("=").append(e.getValue().trim()).append("&");
        }
        return StringUtils.substring(url.toString(), 0, url.length() - 1);
    }

    public static void main(String[] args) {
        new Acceeser().keepLogin();
    }

}
