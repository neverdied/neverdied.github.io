    	function search(sender) {
			
     		var o = document.getElementById("kw");
			
	     	switch(sender.id){
					//常用
	     		case 'douban':
	     			window.open('http://www.douban.com/search?q=' + o.value);
	     		break;
	     		case 'baidu':
	     			window.open('http://www.baidu.com/s?wd=' + o.value);
	     		break;
				case 'jinritoutiao':
					window.open('https://www.toutiao.com/search/?keyword='+o.value);
				break;
					//传统浏览
				case 'gobaidugle':
					window.open('https://www.gobaidugle.com/search.php?keyword='+ o.value+'&one=baidu&two=google&three=sogou&four=so&num=10&sou=1');
				break;
				case 'biyingsousuo':
					window.open('http://cn.bing.com/search?q='+o.value+'&sp=-1&pq='+o.value+'&sc=8-3&sk=&cvid=8F2BC1D07BC34E9CA23D1A67F59AB86B');
				break;
				case 'chongbuluo':
					window.open('http://search.chongbuluo.com/');
				break;
				
					//新闻
				case 'baiduxinwen':
					window.open('http://news.baidu.com/ns?word='+o.value+'&tn=news&from=news&cl=2&rn=20&ct=1');
				break;
				case 'fenghuangxinwen':
					window.open('http://search.ifeng.com/sofeng/search.action?q='+o.value+'&c=1');
				break;
				case 'yangshiwang':
					window.open('http://search.cctv.com/search.php?qtext='+o.value+'&type=video&sid=0003&pid=0000');
				break;
					//图片
				case 'baidutupian':
					window.open('https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word='+o.value+'&oq='+o.value+'&rsp=-1');
					break;
				case 'duitangwang':
					window.open('https://www.duitang.com/search/?kw='+o.value+'&type=feed');
					break;
				case 'yingwentupiansousuo':
					window.open('https://www.pexels.com/search/'+o.value+'/');
					break;
				case 'sougoutupian':
					window.open('http://pic.sogou.com/pics?query='+o.value+'&di=2&_asf=pic.sogou.com&w=05009900&sut=4023&sst0=1512905181465');
					break;
					//影视
				case 'neets':
					window.open('http://neets.cc/search?key='+o.value);
					break;
				case 'kankanwu':
					window.open('http://www.kankanwu.com/index.php?s=vod-search-wd-'+o.value+'.html');
					break;
				case 'cilimao':
					window.open('http://www.cilimao.me/search?word='+o.value+'&page=1');
					break;
				case 'baiduyingshi':
					window.open('http://v.baidu.com/v?word='+o.value+'&ct=301989888&rn=27&pn=0&db=0&s=0&fbl=800&ie=utf-8');
					break;
					//购物
				case 'taobao':
					window.open('http://ai.taobao.com/search/index.htm?pid=mm_10011550_0_0&unid=&source_id=search&key='+o.value+'&b=sousuo_ssk&clk1=&prepvid=200_172.29.81.7_35112_1512894025703&spm=a231o.7076277.1998559105.1');
					break;
				case 'jindong':
					window.open('https://search.jd.com/Search?keyword='+o.value+'&enc=utf-8&wq='+o.value+'&pvid=e3af8b32d8d648f09477165187ffaf61');
					break;
				case 'biyibijia':
					window.open('http://b1bj.com/s.aspx?key='+o.value);
					break;
				case 'xitie':
					window.open('http://www.xitie.com/');
					break;
					//百科
				case 'baidubaike':
					window.open('https://baike.baidu.com/search/none?word='+o.value+'&pn=0&rn=10&enc=utf8');
					break;
				case 'hudongbaike':
					window.open('http://www.baike.com/wiki/'+o.value+'&prd=button_doc_entry');
					break;
				case 'weixinsousuo':
					window.open('http://weixin.sogou.com/weixin?type=2&query='+o.value+'&s_from=input&_sug_=n&_sug_type_=1&w=01015002&oq=&ri=0&sourceid=sugg&sut=0&sst0=1512974256801&lkt=0%2C0%2C0&p=40040108');
					break;
				case 'baiduwenku':
					window.open('https://wenku.baidu.com/search?word='+o.value+'&lm=0&od=0&fr=top_home&ie=gbk');
				break;
				    //读书
				case 'baojian':
					window.open('http://zhannei.baidu.com/cse/search?s=7965856832468911224&entry=1&q='+o.value);
					break;
				case 'doubanyuedu':
					window.open('https://read.douban.com/search?q='+o.value);
					break;
				case 'doubandushu':
					window.open('https://book.douban.com/subject_search?search_text='+o.value+'&cat=1001');
					break;
				case 'jioumosousuo':
					window.open('https://www.jiumodiary.com/');
					break;
					//音乐
				case 'kugouyinyue':		       			 window.open('http://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord='+o.value);
					break;
				case 'laoDyinyue':
					window.open('http://music.laod.cn/');
					break;
				case 'wangyiyunyinyue':
					window.open('http://music.163.com/#/search/m/?s='+o.value);
					break;
				case 'wusunyinyue':
					window.open('http://www.51ape.com/artist/');
					break;
					//软件
				case 'lvmeng':
					window.open('http://www.xdowns.com/index.php?ac=search&keyword='+o.value);
					break;
					//漫画
				case 'kumanwang':
					window.open('http://www.kuman.com/search/?q='+o.value);
					break;
				case 'zhiyinmanke':
					window.open('http://www.zymk.cn/sort/all.html#'+o.value);
					break;
				case 'daimarushi':
					window.open('http://code.giffox.com/');
					break;
				case 'cainiaogongju':
					window.open('https://c.runoob.com/');
					break;
					//湘科院
					case 'xiangkeyuan':
					window.open('http://ns.huse.cn/');
					break;
					case 'xiaoyuanxinwen':
					window.open('http://wzq.huse.cn/search/result?SiteID=127&Query='+o.value);
					break;
					case 'doubanpingfen':
					window.open('https://www.douban.com/search?cat=1001&q='+o.value);
					break;
					case 'keyuanguanwang':
					window.open('http://wzq.huse.cn/search/result?SiteID=122&Query='+o.value);
					break;
					//教育
					case 'wangyiyunketang':
					window.open('http://study.163.com/courses-search?keyword='+o.value);
					break;
					case 'eryaketang':
					window.open('http://ss.chaoxing.com/search?sw='+o.value);
					break;
					case 'zhongguodaxueMOOC':
					window.open('http://www.icourse163.org/search.htm?search='+o.value);
					break;
					case 'mukewang':
					window.open('https://www.imooc.com/search/?words='+o.value);
					break;
					case 'cainiaojiaocheng':
					window.open('http://www.runoob.com/?s='+o.value);
					break;
					
					//社交
					case 'QQ':
					window.open('http://w.qq.com/');
					break;
					case 'weixin':
					window.open('http://wx.qq.com/');
					break;
					case 'zhifubao':
					window.open('https://auth.alipay.com/login/index.htm?goto=https%3A%2F%2Fzht.alipay.com%2Fasset%2FbankList.htm');
					
					break;
					case 'tieba':
					window.open('https://tieba.baidu.com/index.html');
					break;
					//其他
					case 'huabanwang':
					window.open('http://huaban.com/search/?q='+o.value);
					break;
					case 'biyaoshangcheng':
					window.open('http://www.biyao.com/classify/search.html?query='+o.value);
					break;
					case 'zhongguancundaogou':
					window.open('http://detail.zol.com.cn/index.php?c=SearchList&kword='+o.value);
					
					break;
					case 'xingmengyinyue':
					window.open('http://yidin.top/mp3/index.php');
					break;
					$(function() {
    config = {
        timeText:  '2018/7/25 00:00:00', //倒计时时间，格式：年/月/日 时:分:秒
        timeZone:'8' , //时区，GMT号码
        style: "flip", //显示的样式，可选值有flip,slide,metal,crystal(翻动、滑动、金属、水晶)
        color: "white", //显示的颜色，可选值white,black(黑色、白色)
        width: 0, //倒计时宽度，无限制，默认为0
        textGroupSpace: 15, //天、时、分、秒之间间距
        textSpace: 0, //数字之间间距
        reflection: !0, //是否显示倒影
        reflectionOpacity: 10, //倒影透明度
        reflectionBlur: 0, //倒影模糊程度
        dayTextNumber: 3, //倒计时天数数字个数
        displayDay: !0, //是否显示天数
        displayHour: !0, //是否显示小时数
        displayMinute: !0, //是否显示分钟数
        displaySecond: !0, //是否显示秒数
        displayLabel: !0, //是否显示倒计时底部label
        onFinish: function() {}//完成事件，您可以在时间结束时执行一些脚本，在创建倒计时时只需传递一个函数即可。
    };
    $(".countdown").jCountdown(config);
});
	     	}		
 		}