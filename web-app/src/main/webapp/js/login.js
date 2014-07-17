function set_cookeis_str(cookies_str) {
	var arrCookie = cookies_str.split(";");
	for (arr in arrCookie) {
		//alert(arrCookie[arr]);
		//alert(arrCookie[arr].trim());
		var str = arrCookie[arr] + "path=/";
		//alert(str)
		document.cookie = str;
	}
}

host = window.location.host;

	var flag = false;
	if (host.indexOf('sohu') > 0) {
		var cookies_str = "fuid=13849416306134240996; IPLOC=CN1100; vjuids=4849d6514.1472d3d1c89.0.8b3b91f6; networkmp_del=check:1; vjlast=1405179575.1405433029.11; SUV=1311201800128407; req_code=dv9BSfzKTi5Z3SVBsY9xtZQnJ_bYrTT4; ppinf=2|1405433069|1406642669|bG9naW5pZDowOnx1c2VyaWQ6MjE6amlhcGFpMTcxOTUwQHNvaHUuY29tfHNlcnZpY2V1c2U6MzA6MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwfGNydDoxMDoyMDEzLTA3LTMwfGVtdDoxOjB8YXBwaWQ6NDoxMDc0fHRydXN0OjE6MXxwYXJ0bmVyaWQ6MTowfHJlbGF0aW9uOjA6fHV1aWQ6MTY6ODQ2NTkyYTUwODU5NDhkc3x1aWQ6MTY6ODQ2NTkyYTUwODU5NDhkc3x1bmlxbmFtZTo0NTolRTYlOTAlOUMlRTclOEIlOTAlRTclQkQlOTElRTUlOEYlOEIxMDYyMTI3NTB8; pprdig=Z9s92qlSRrRlxz9-4KfcPPn1izvOHuctKlW-pLDDNd85t7U4YJyw1vlOakN3umTKWB2U3ON2T0LVSAcAiBMlGPqEIxj7aD6_omazwF64hqbbUdiGoNKgIOP5zytbiGwHLLTzkUtx38RpG2w6gLz0-yRRJ-zUtmnAkQFllLgTjCI; lastdomain=1406642669|amlhcGFpMTcxOTUwQHNvaHUuY29tfA|sohu.com; pp_login_time=https|jiapai171950@sohu.com|1074|7|1|1100; fee_status=jiapai171950@sohu.com; fee_channel=880; ppmdig=1405433070000000c1ca9c744c689f08ff4420cf86f29557";
		flag = true;
	} else if (host.indexOf('youku') > 0) {
		//var cookies_str = "u=nb87365365;yktk=1%7C1404804148%7C15%7CaWQ6Mzc1ODE5NTM0LG5uOm5iODczNjUzNjUsdmlwOnRydWUseXRpZDozNzU4MTk1MzQsdGlkOjA%3D%7Cee607f8980274b7389c3e6382bc155ed%7C27ecee19e95ca8729ca74664a3ad6ea200817456%7C1";
		var cookies_str = "a=jo9kV0Fqta10; Hm_lvt_3d143f0a07b6487f65609d8411e5464f=1394032174,1394330448,1394335540,1394638540; mlUserID=oh9mSXdKn8Ye; __tft=1396524360744; _ga=GA1.2.385286110.1400593970; __vtft=1403891083974; P_L_M=2; _my_page_size_=20; pgv_pvi=4700990464; __ali=14052169341540Rb; ucenter_looked_setbat=1; ykss=880ac553b0b8126c1ed2fc45; advideo87191_5=2; advideo87472_2=1; advideo87474_2=2; advideo87475_1=1; advideo86850_3=1; __hpage_style=0; xreferrer=http://v.youku.com/v_show/id_XNzMzNzE2NDA0.html; P_F=1; P_T=1405434947; __ysuid=1384946630375s3t; view=1; u=nb87365365; _l_lgi=375819534; yktk=1%7C1405427768%7C15%7CaWQ6Mzc1ODE5NTM0LG5uOm5iODczNjUzNjUsdmlwOnRydWUseXRpZDozNzU4MTk1MzQsdGlkOjA%3D%7Cc82bfe9b78a6626152613b6ed435f128%7C05d46ca03d797e6e2764a149e87bcf6d6ea6a6db%7C1"; 
		flag = true;
	} else if (host.indexOf('iqiyi') > 0) {
		var cookies_str = "Hm_lvt_b6d78e3277279aef5780211cdbce4e28=1405430831,1405435328,1405435427,1405488247; Hm_lpvt_b6d78e3277279aef5780211cdbce4e28=1405488424; QC008=1405488189.1405488189.1405488189.2; P00004=1697098862.1405488189.9a09a3b0a2; QC005=cc73216a816e837632a204c667dc0a48; QC001=1; QC009=a988b1d4503873af; QC025=2036182216-20140716; Hm_lvt_53b7374a63c37483e5dd97d78d9bb36e=1405435264,1405435424,1405486193,1405488239; Hm_lpvt_53b7374a63c37483e5dd97d78d9bb36e=1405488239; T00404=8a7e6c793882c42bdbad504c74164c39; QC110=2; Icon-first-2036182216-cid4=1; QILINPUSH=aca56ec7d4f9b128; QC102=bid%3A605604811uid%3A2036182216%3D0; QC105=2; P111111=1405488421; P00001=BF1RCEuzVom3loPuNJ70bR5m3DKKLgZPVVCSZeIam3Wm31oOTEl7W3eRQ5gFcm1lUbbEF9JZvUB0SDNwBm1Qs7xtA6A817gNCMu40hQMfRXiZSVdqrVHCNzqm1AUg; P00003=2036182216; P00010=2036182216; P01010=1405526400; P00002=%7B%22uid%22%3A%222036182216%22%2C%22user_name%22%3A%222036182216%40baidu%22%2C%22email%22%3A%22%22%2C%22nickname%22%3A%2250093830dx6%22%2C%22type%22%3A1%7D; QC007=DIRECT; QC006=lu135x16dqikf7n3dbufjlc3; QC010=181420260";
		var cookies_str = "Hm_lvt_53b7374a63c37483e5dd97d78d9bb36e=1405435264,1405435424,1405486193,1405488239path=/; Hm_lpvt_53b7374a63c37483e5dd97d78d9bb36e=1405488813; QC007=http%253A%252F%252Fserv.vip.iqiyi.com%252Forder%252Fpreview.action%253Fpid%253Da0226bd958843452%2526fc%253Da988b1d4503873af; QC006=y042ykmxdsj4tezdms22qms5; QC008=1405488812.1405488812.1405488812.1; T00404=4bd0a9b26daa140099f85021cb187077; QC110=0; Icon-first-cid4=1; QILINPUSH=aca56ec7d4f9b128; QC005=cc73216a816e837632a204c667dc0a48; QC010=265151948; QC105=1; P00004=1697098862.1405488827.1579b0c492; P00001=CwlRCkjhCtvloPuNJ70bR5zDI6LlaP9TDSheIam3Wm31oOTEl7WHeaQ50JeG9QY7EF9JZvUB0SDNwBm1Qs7xtA6A8B5g9CMu40hQMedHHILHM27TjXY1PGCHT1Q3r5Y0gij7cdXfEpJbDHge9fTLUMkENY0yHaawc4; P00003=1086448458; P00010=1086448458; P01010=1405526400; P00002=%7B%22uid%22%3A%221086448458%22%2C%22user_name%22%3A%22123412341212%40qq.com%22%2C%22email%22%3A%22123412341212%40qq.com%22%2C%22nickname%22%3A%22123412341212_1627%22%2C%22type%22%3A10%7D; P000email=123412341212%40qq.com; QC116=123412341212%40qq.com";
		flag = true;
	} else if (host.indexOf('letv') > 0) {
		var cookies_str = "vjuids=-8f5510068.14381653626.0.940e59a7; narrow=1; ALLYESID4=8PJeQ1rUJNl34Wcc; _ga=GA1.2.1957602513.1403101461; tj_uuid=14053469586658231146; tj_env=1; le_time=0; newVideo=%7B%221%22%3A1%2C%222%22%3A55%2C%223%22%3A94%2C%224%22%3A660%2C%225%22%3A11%2C%229%22%3A7%2C%2211%22%3A112%2C%2214%22%3A4%2C%2216%22%3A2%2C%2217%22%3A0%2C%2219%22%3A0%2C%2220%22%3A1%2C%2222%22%3A4%2C%2223%22%3A0%2C%2234%22%3A0%7D; tj_lc=991cb5c481dfdaeecca4387fb386217a; vjlast=1389445330.1405346961.11; statCookie=1; m=ansq7400; sso_tk=102401caab3JefTZR3bcL7MHrXXPlAs38NcfjKzCPIO4lnZOGm1rVESZU28Nl5ZVuE4wn6M; sso_nickname=ansq7400; casflag=1; ssouid=48099746; loginname=ansq7400; loginnamecookie=ansq7400; sso_picture=http%3A%2F%2Fi0.letvimg.com%2Fimg%2F201207%2F30%2Ftx70.png; sso_icon=http%3A%2F%2Fi1.letvimg.com%2Fimg%2F201207%2F30%2Ftx298.png%2Chttp%3A%2F%2Fi0.letvimg.com%2Fimg%2F201207%2F30%2Ftx200.png%2Chttp%3A%2F%2Fi0.letvimg.com%2Fimg%2F201207%2F30%2Ftx70.png%2Chttp%3A%2F%2Fi3.letvimg.com%2Fimg%2F201207%2F30%2Ftx50.png; utype=102; lfrom=www; u=eyJ1aWQiOiI0ODA5OTc0NiIsIm5pY2tuYW1lIjoiYW5zcTc0MDAiLCJlbWFpbCI6IiIsIm5hbWUiOiJhbnNxNzQwMCIsInNzb3VpZCI6IjQ4MDk5NzQ2In0%3D; ui=abd9P9KQxqk3eald%2FsQE%2Fu21TfL32b6p5GqKreyas2c3mvaGgKfrt8DbziteUH1yR6UMVOAnfyAOrSZr4fpDICZMWUP54yDI9ZzaLiUP%2BL51imBvTfGZAkJI1ILbqQhYvKerhqiMEbaoHktO9hXUNEUtXvEZiQ; MixCook=tk_checked-1; stat_num=0; tj_v2c=-1612714_11; his_vid=1612714-2163799-1886614-20107403-20104605-20113878-20155305-20139159-20056629-20056641; PLAY_RECORD=1612714";
		flag = true;
	}
	else if (host.indexOf('pptv') > 0) {
		var cookies_str = "PUID=b10ae2b725d4419babbfde44ef201d69; pgv_pvi=7405056000; pgv_si=s1054586880; BlogBind={}; PWD=3706e13955e724cc; sctx=; pp_jumpad_200108=2; pp_ad_200108=1405348582007; pp_navapi2_get_50093830dx=1405348582795; pp_flash_200116=2; Hm_lvt_7adaa440f53512a144c13de93f4c22db=1405347812; Hm_lpvt_7adaa440f53512a144c13de93f4c22db=1405348618; pp_navapi2_get_50093830dx1=1405348759922; ppToken=qlGMKxRrfMRiOrC5VYts9HcWmRMFzLyqKzryfd%2BgLIpKVex4RA2mg1XNmF0xyhauahaYA%2B2GOL7q%0ALrEADSe5%2BNrS09VTEThu1xnHsYVLO44C0mw5t3wCunSX8w8WxsEG2jV%2Fcf7FL%2BBPpNCkcMQol%2B5a%0A%2BskayyhmQb1TEjEkvW8%3D; blogBind={}; PPKey=bsZ9DsQdMocjWcFVvx13XKnVM0tsZyM7RftbKEppm8QBDk47vGTBHI1fkzkmppew7jI7npAS2XwcB7D5GGmgcKzAehaXboXvUD30uAG%2BRiHd2xJcet1yEgR%2BUC%2BdrrZo%2BTIcEfplnnyQGLfeJuGb4ut8cM%2Fq8Pbw; PPName=50093830dx1$A304998220D040B0BAE82B9E643622CE; UDI=0$15$15$PP%E6%B8%B8%E6%B0%91$PP%E5%AE%9E%E4%B9%A0%E7%94%9F$186$%E6%9C%AA%E7%9F%A5$0$0$ppface.jpg$$0%E5%88%86%E9%92%9F$$$$$$1$Wed+Oct+15+22%3A39%3A22+CST+2014$false$$false$$false$$false$; loginTab=0";
		flag = true;
	}

if (flag) {
	set_cookeis_str(cookies_str);
	alert("登录成功啦！可以开始你的影视之旅喽！");
	location.reload();
} else {
	alert("暂不支持本网站");
}

// 182.92.98.30
// javascript:(function(){CLIP_HOST='http://182.92.98.30';try{var
// x=document.createElement('SCRIPT');x.type='text/javascript';x.src=CLIP_HOST+'/js/login.js?'+(new
// Date().getTime()/100000);x.charset='utf-8';document.getElementsByTagName('head')[0].appendChild(x);}catch(e){alert(e);}})();
