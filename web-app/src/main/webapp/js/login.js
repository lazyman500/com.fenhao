	function set_cookeis_str(cookies_str){
		var arrCookie = cookies_str.split(";");
		for  (arr in   arrCookie){
			document.cookie =arrCookie[arr]+";path=/"	;
		} 
	}
	
	host = window.location.host;
	
	var flag = false;
	if(host.indexOf('sohu') > 0){
		var cookies_str =  "vjuids=-2175ead34.1472b3aba6e.0.cbbfc6d8; fuid=13849416306134240996; IPLOC=CN1100; req_code=G3xjpEZnR8g4IRFFxr-t1tR3-wC7apss; JSESSIONID=1oo1bk7amssaybhbwujokf59v; ppinf=2|1405179904|1406389504|bG9naW5pZDowOnx1c2VyaWQ6MjQ6MTgzMjQ2MTU3NUBzaW5hLnNvaHUuY29tfHNlcnZpY2V1c2U6MzA6MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwfGNydDowOnxlbXQ6MTowfGFwcGlkOjQ6MTA3NHx0cnVzdDoxOjF8cGFydG5lcmlkOjE6MHxyZWxhdGlvbjowOnx1dWlkOjE2OjBmMWY3NjRjN2NjYTQ1OXh8dWlkOjE2OjBmMWY3NjRjN2NjYTQ1OXh8dW5pcW5hbWU6OTp0ZXN0MjMxMzF8cmVmdXNlcmlkOjEwOjE4MzI0NjE1NzV8cmVmbmljazo3Oui0neWjs-mHjOeahOWwj-S6uuS5pnw; pprdig=nPgxlTAy6J2Wxq-I6ZLC9mzA2WtzMLkNiPhCoYzUmeHcm5T_uFXMdoKLFTvEBaGwv2jqmUInhHHJSSro7oowElGNYCBPcYYkTrQWuDlZ3KX4-AGNKm59vp-QREGMn5kB6FZG_4FZ5LyxKVdsHYdPaopnGO9lsmOmaNsoKRlKCMI;  crossdomain=86400; ppmdig=14051799040000000d358f6f04771e8961cca5c642d10b71; vjlast=1405179575.1405179575.30; SUV=1311201800128407";
		flag = true;
	}else if(host.indexOf('youku') > 0){
		var cookies_str =  "u=nb87365365;yktk=1%7C1404804148%7C15%7CaWQ6Mzc1ODE5NTM0LG5uOm5iODczNjUzNjUsdmlwOnRydWUseXRpZDozNzU4MTk1MzQsdGlkOjA%3D%7Cee607f8980274b7389c3e6382bc155ed%7C27ecee19e95ca8729ca74664a3ad6ea200817456%7C1";
		flag = true;
	}
	if(flag){
		set_cookeis_str(cookies_str);
		alert("登录成功啦！可以开始你的影视之旅喽！");
		location.reload();
	}
	else {
		alert("暂不支持本网站");
	}

	