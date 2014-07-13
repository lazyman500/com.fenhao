package com.fenhao.core.account.share;

import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.http.client.utils.URLEncodedUtils;
import org.eclipse.jetty.util.UrlEncoded;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.Connection.Method;
import org.jsoup.helper.DataUtil;
import org.jsoup.nodes.Document;

public class Chromesimulator {
    
    
    

    public static void main(String[] args) throws Exception {
        String youku ="http://i.youku.com/u/profile/";
        String vod ="http://vod.xunlei.com/list.html";
        
        Map cookeisData = getCookies(toupiaoCookies);
        Map formData = getCookies(toupiaoStrForm);
        formData.put("card", "350626197403123207");
        
        Connection connectionTest = Jsoup.connect(youku).
                userAgent("User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36")
                .cookies(cookeisData).data(formData).method(Method.POST);
        Document doc = Jsoup.parse(new String(connectionTest.execute().bodyAsBytes(),"GBK"));
        System.out.println(doc.toString());
        
            
        
     //   System.out.println(doc.select(".username").first().text()); // title
    }

    static String toupiaoStrForm  = "checkbox07=07&name=07&name1=%C0%EE%B8%D5%B8%D5&sex=%C4%D0&tele=4915145775708&comp=%C2%E5%D1%F4%CA%D0%CB%AE%C0%FB%BE%D6&card=410381198707200557&verifycode=6162&B1=%CC%E1%BD%BB";
    static String toupiaoCookies  = "ASPSESSIONIDCAAAARAC=NPCKCFBCDJCEEFCKEBKMCEAJ; Hm_lvt_3d143f0a07b6487f65609d8411e5464f=1387036600,1387084073,1387637063; Hm_lpvt_3d143f0a07b6487f65609d8411e5464f=1387639187";

    
    static String  vodStr ="" 
              + "Hm_lvt_cb40dd55b713d4ff8da1d8e032c83cd4=1384931589; Hm_lpvt_cb40dd55b713d4ff8da1d8e032c83cd4=1384931589; VERIFY_KEY=15750FDF46C3F10276CFA159BB1B1972; check_result=0:!kQF; active=1; blogresult=0; downbyte=1044230363319; downfile=8774;"
              + " isspwd=0; isvip=1; jumpkey=B2961DE3FFD177CE54DD96DBBC82CACDF271F309321FE1E6C5F92FA74E4395DD2A2E90F8C8DA1C4D84E3CB5633AB6C9258CA29A4BFEE88B47B232C95F704BCA1FD36529F0E9C04BEE0756A5CEE845687;"
              + " logintype=0; lsessionid=E2F8B8CB2508F7D4DFFB6333FF8C03051F777CEF255FB5F6A6AD9B07140148ADB8056EF042152EDC87F451C6822648BAA78708B59387E35D1DF428E28E82BE996C06B46EC6948D1347D209A5C16EC145; luserid=16364638; nickname=potti;"
              + " onlinetime=24186115; order=595068; safe=0; score=45599; sessionid=7DAC4CB3CC53E7195EE7D138C045ECEB8D970C254DCC57CD21521AC49F82AE5DB89F91C69E626A846A0C71054CFF1D2858B65EDC377F7D86073295F6D74DBC36; sex=m; upgrade=0; userid=16364638; usernewno=0;"
              + " usernick=potti; usertype=0; usrname=a789asdasda"
            ;
    
    
    static String  youkuCookiesStr ="a=jo9kV0Fqta10; Hm_lvt_3d143f0a07b6487f65609d8411e5464f=1394032174,1394330448,1394335540,1394638540; mlUserID=oh9mSXdKn8Ye; __tft=1396524360744; _ga=GA1.2.385286110.1400593970; __vtft=1403891083974; __ali=14039664455176o1; ykss=9dfeb7533eaee87927bedeea; advideo87469_1=2; advideo87472_1=2; advideo87472_2=1; advideo87475_1=2; P_L_M=2; qh=%E8%A1%A3%E8%A1%A3%E9%80%9F%E6%94%BB%E7%BB%84; _my_page_size_=20; xreferrer=http://v.youku.com/v_show/id_XNjg3MDU4ODQ0.html; P_F=1; __ysuid=1384946630375s3t; P_T=1404799775; logCookieKey=invalid; advideo87191_5=2; advideo87469_2=1; __utmarea=; u=lazyman500; _l_lgi=63863724; yktk=1%7C1404802137%7C15%7CaWQ6NjM4NjM3MjQsbm46bGF6eW1hbjUwMCx2aXA6ZmFsc2UseXRpZDowLHRpZDow%7Ce5bad15b9511c63be2360e33af24046c%7C3d96d19fb84133975361967281adac7f0aaf14a4%7C1; __hpage_style=0"; 
    
     static     String youStr = 
            "FOLLOW_TIP=1; "
    
/*          + "_ga=GA1.2.881218558.1384044076;" + " __tft=1384058092037;" +
      " Hm_lvt_3d143f0a07b6487f65609d8411e5464f=1383572348,1383572763,1383572769,1384271629;" +
      " __vtft=1384518358879;" + " a=sineV0zjra10;" + " ykss=4b2a8c52dba4a9f6558ace5c;" + " advideo88186_1=1;" +
      " _l_lgi=63863724; "
     
    
    + "advideo86850_3=1; " + "advideo87191_5=1; " + "advideo87469_2=1; " + "advideo87472_1=2; " +
     "advideo87472_2=1; "
     
     + "advideo87474_2=1; __utmarea=; "*/
            + "u=lazyman500;"
            + " yktk=1%7C1384920356%7C15%7CaWQ6NjM4NjM3MjQsbm46bGF6eW1hbjUwMCx2aXA6ZmFsc2UseXRpZDowLHRpZDow%7C7ecce1033865b7d737e334129e4ef424%7C2f77dda565327e50bde680a421b91a1c975c98b8%7C1;"
    //        + " ucup=nn;"
         //   + " __ysuid=1378914454056xb1"
            
              ;
    private static Map getCookies(String cookiesStr) {
          Map param = new HashMap<String, String>();
          String pArray[] = StringUtils.split(cookiesStr, ";");
          String[] temp1 = { "" };
          String allStr ="?";
          for (int i = 0; i < pArray.length; i++) {
              String tempArray[] = StringUtils.split(pArray[i], "=");
              if (tempArray.length < 2) {
                  tempArray = (String[]) ArrayUtils.addAll(tempArray, temp1);
              }
              System.out.printf("length:%s key:%s value: %n", tempArray.length, tempArray[0]);
              allStr+=String.format("%s=%s&",tempArray[0].trim(),tempArray[1].trim());
              param.put(tempArray[0], tempArray[1]);
          }
          System.out.println(allStr);
          return param;
    }

    static void getMafengwoCookies() throws IOException {
        Document doc = Jsoup.connect("http://www.mafengwo.cn/app/hun.php").userAgent("dfdf")
                .cookie("PHPSESSID", "d83n9r5qfi8bpnlc9li6lb8ok6").get();
        System.out.println(doc.title());
        System.out.println(doc.select("div#login_already dl.clearfix p").first().text()); // title
    }

}
