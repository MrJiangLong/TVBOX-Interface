// 导航站 https://www.chenluo.wang
var rule = {
    title: '尘落影视',
    host: 'https://www.chenluo.wang',
    hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"#good&&li:eq(0)&&a&&href");print(src);HOST=src',
    // url:'/whole/fyclass_______0_addtime_fypage.html',
    url: '/whole/fyclassfyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '_{{fl.area}}_{{fl.class}}__{{fl.year}}___0_{{fl.by or "id"}}__fypage',
    filter: {
        "1": [{ "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "更早", "v": "更早" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "美国", "v": "美国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "其他", "v": "其他" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "警匪片", "v": "警匪片" }, { "n": "恐怖片", "v": "恐怖片" }, { "n": "惊悚片", "v": "惊悚片" }, { "n": "悬疑片", "v": "悬疑片" }, { "n": "科幻片", "v": "科幻片" }, { "n": "战争片", "v": "战争片" }, { "n": "动作片", "v": "动作片" }, { "n": "喜剧片", "v": "喜剧片" }, { "n": "爱情片", "v": "爱情片" }, { "n": "微电影", "v": "微电影" }, { "n": "纪录片", "v": "纪录片" }, { "n": "剧情片", "v": "剧情片" }, { "n": "其他片", "v": "其他片" }] }, { "key": "by", "name": "排序", "value": [{ "n": "最新", "v": "id" }, { "n": "日榜", "v": "rhits" }, { "n": "周榜", "v": "zhits" }, { "n": "月榜", "v": "yhits" }, { "n": "总榜", "v": "hits" }] }],
        "2": [{ "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "更早", "v": "更早" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "美国", "v": "美国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "其他", "v": "其他" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "国产剧", "v": "国产剧" }, { "n": "日韩剧", "v": "日韩剧" }, { "n": "欧美剧", "v": "欧美剧" }, { "n": "海外剧", "v": "海外剧" }] }, { "key": "by", "name": "排序", "value": [{ "n": "最新", "v": "id" }, { "n": "日榜", "v": "rhits" }, { "n": "周榜", "v": "zhits" }, { "n": "月榜", "v": "yhits" }, { "n": "总榜", "v": "hits" }] }],
        "3": [{ "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "更早", "v": "更早" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "美国", "v": "美国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "其他", "v": "其他" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "国产动漫", "v": "国产动漫" }, { "n": "日韩动漫", "v": "日韩动漫" }, { "n": "欧美动漫", "v": "欧美动漫" }, { "n": "动画片", "v": "动画片" }, { "n": "动漫片", "v": "动漫片" }] }, { "key": "by", "name": "排序", "value": [{ "n": "最新", "v": "id" }, { "n": "日榜", "v": "rhits" }, { "n": "周榜", "v": "zhits" }, { "n": "月榜", "v": "yhits" }, { "n": "总榜", "v": "hits" }] }],
        "4": [{ "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "更早", "v": "更早" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "美国", "v": "美国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "其他", "v": "其他" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "大陆综艺", "v": "大陆综艺" }, { "n": "日韩综艺", "v": "日韩综艺" }, { "n": "欧美综艺", "v": "欧美综艺" }, { "n": "海外综艺", "v": "海外综艺" }] }, { "key": "by", "name": "排序", "value": [{ "n": "最新", "v": "id" }, { "n": "日榜", "v": "rhits" }, { "n": "周榜", "v": "zhits" }, { "n": "月榜", "v": "yhits" }, { "n": "总榜", "v": "hits" }] }]
    },
    searchUrl: '/?c=search&cl=**&sort=addtime&order=desc&page=fypage',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'PC_UA'
    },
    class_parse: '.navbar-nav&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    // lazy:'js:let purl=jsp.pdfh(request(input),"iframe&&src");input={jx:0,url:purl,parse:1}',
    lazy: `js:
		input = jsp.pdfh(request(input), "iframe&&src").split('url=')[1];
        if (/youku|iqiyi|v\\.qq\\.com|pptv|sohu|le\\.com|1905\\.com|mgtv|bilibili|ixigua/.test(input)) {
			let play_Url = /bilibili/.test(input) ? 'https://jx.xmflv.com/?url=' : 'https://jx.777jiexi.com/player/?url='; // type0的parse
			input = {
				jx: 0,
				url: input,
				playUrl: play_Url,
				parse: 1,
				header: JSON.stringify({
					'user-agent': 'Mozilla/5.0',
				}),
			}
		} else {
			input
		}
	`,
    limit: 6,
    推荐: '*',
    一级: '.movie-item-in;a&&title;img&&src;.qtag&&Text;a&&href',
    二级: {
        "title": "h1--span&&Text;tr:eq(2)&&a&&Text",
        "img": ".img-thumbnail&&src",
        "desc": "tr:eq(6)&&a&&Text;;;#casts&&Text;tr:eq(0)&&a&&Text",
        "content": "#txtjs&&Text",
        "tabs": "#tvTabs li",
        "lists": ".tv-js-list:eq(#id) a"
    },
    搜索: '*',
}