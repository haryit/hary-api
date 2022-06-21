u=document.getElementById('findipurl');
h='Free users please don\'t remove our link. Get <a href=\'https://www.find-ip.net/ip-script\' target=\'_blank\'>the code</a> again.';
if(u&&(a=u.querySelector('a'))&&(r=a.href)&&-1!=r.indexOf('haryonokudadiri.pw')){	
	h='<style>#findipinfo div{display:inline-block;margin: 0 6px 0 0}#findipinfo img{box-shadow: 1px 1px 3px #666;border:0;display:inline}a#findipinfo{display:block;width: 178px;text-align:center;color: #444;text-decoration:none;background:#fcfcfc;padding:10px;border: 1px solid #e5e5e5;overflow:hidden;line-height:170%;box-sizing:content-box;}a#findipinfo:hover{background:#fafafa;color:#111;}.findiplink,.findiptitle{padding:2px 8px;text-align:right;width: 182px;font-size:11px;border: 1px solid #e5e5e5;overflow: hidden;line-height:150%;color:#555;background:#fff;box-sizing:content-box;}.findiplink{border-top:0;}.findiptitle{border-bottom:0;text-align:center;}.findiplink a{text-decoration:none;}</style><a id="findipinfo" href="http://www.find-ip.net/" target="_blank"><div>IP Anda : <b>114.79.56.232</b></div><div> Negara : <b>Indonesia</b> <img src="//api.find-ip.net/flags/id.png" alt="(ID)" width="16" height="11" /></div><div> Wilayah : <b>North Sumatra</b></div><div> Kota : <b>Medan</b></div><div> Bahasa : <b>id</b></div><div> Browser : <b>Chrome</b></div><div> Sistem : <b>Windows 10</b></div></a>';
}
if(!u){u=document.currentScript;}
w=document.getElementById('findipwidget');
if(!w){w=document.createElement('div');u.parentNode.insertBefore(w, u);}
w.innerHTML=h;