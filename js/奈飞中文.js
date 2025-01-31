// 搜索安全验证
muban.mxone5.二级.title = 'h1&&Text;.video-info-aux&&Text';
muban.mxone5.二级.img = '.lazyload&&src';
muban.mxone5.二级.desc = '.video-info-items:eq(3)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
muban.mxone5.二级.tab_text = 'body--small&&Text';
var rule = {
    title: '奈飞中文',
    模板: 'mxone5',
    // host: 'https://www.naifei.io',
    host: 'https://www.naifei.art',
    homeUrl: '/vodshow/id/dyjs.html',
    // url: '/vodshow/id/fyclass/page/fypage.html',
    url: '/vodshow/id/fyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {
        "dy": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "dy" }, { "n": "动作片", "v": "dongzuopian" }, { "n": "喜剧片", "v": "xijupian" }, { "n": "爱情片", "v": "aiqingpian" }, { "n": "犯罪片", "v": "fanzuipian" }, { "n": "恐怖片", "v": "kongbupian" }, { "n": "科幻片", "v": "kehuanpian" }, { "n": "悬疑片", "v": "xuanyipian" }, { "n": "剧情片", "v": "juqingpian" }, { "n": "动画片", "v": "donghuapian" }, { "n": "战争片", "v": "zhanzhengpian" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "喜剧", "v": "/class/喜剧" }, { "n": "爱情", "v": "/class/爱情" }, { "n": "恐怖", "v": "/class/恐怖" }, { "n": "动作", "v": "/class/动作" }, { "n": "科幻", "v": "/class/科幻" }, { "n": "剧情", "v": "/class/剧情" }, { "n": "战争", "v": "/class/战争" }, { "n": "犯罪", "v": "/class/犯罪" }, { "n": "动画", "v": "/class/动画" }, { "n": "奇幻", "v": "/class/奇幻" }, { "n": "武侠", "v": "/class/武侠" }, { "n": "冒险", "v": "/class/冒险" }, { "n": "枪战", "v": "/class/枪战" }, { "n": "恐怖", "v": "/class/恐怖" }, { "n": "悬疑", "v": "/class/悬疑" }, { "n": "惊悚", "v": "/class/惊悚" }, { "n": "经典", "v": "/class/经典" }, { "n": "青春", "v": "/class/青春" }, { "n": "古装", "v": "/class/古装" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "中国", "v": "/area/中国" }, { "n": "香港", "v": "/area/香港" }, { "n": "台湾", "v": "/area/台湾" }, { "n": "美国", "v": "/area/美国" }, { "n": "韩国", "v": "/area/韩国" }, { "n": "法国", "v": "/area/法国" }, { "n": "英国", "v": "/area/英国" }, { "n": "日本", "v": "/area/日本" }, { "n": "德国", "v": "/area/德国" }, { "n": "泰国", "v": "/area/泰国" }, { "n": "印度", "v": "/area/印度" }, { "n": "意大利", "v": "/area/意大利" }, { "n": "西班牙", "v": "/area/西班牙" }, { "n": "加拿大", "v": "/area/加拿大" }, { "n": "其他", "v": "/area/其他" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "普通话", "v": "/lang/普通话" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "法语", "v": "/lang/法语" }, { "n": "德语", "v": "/lang/德语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "year", "name": "时间", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }, { "n": "2009", "v": "/year/2009" }, { "n": "2008", "v": "/year/2008" }] }, { "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "/letter/A" }, { "n": "B", "v": "/letter/B" }, { "n": "C", "v": "/letter/C" }, { "n": "D", "v": "/letter/D" }, { "n": "E", "v": "/letter/E" }, { "n": "F", "v": "/letter/F" }, { "n": "G", "v": "/letter/G" }, { "n": "H", "v": "/letter/H" }, { "n": "I", "v": "/letter/I" }, { "n": "J", "v": "/letter/J" }, { "n": "K", "v": "/letter/K" }, { "n": "L", "v": "/letter/L" }, { "n": "M", "v": "/letter/M" }, { "n": "N", "v": "/letter/N" }, { "n": "O", "v": "/letter/O" }, { "n": "P", "v": "/letter/P" }, { "n": "Q", "v": "/letter/Q" }, { "n": "R", "v": "/letter/R" }, { "n": "S", "v": "/letter/S" }, { "n": "T", "v": "/letter/T" }, { "n": "U", "v": "/letter/U" }, { "n": "V", "v": "/letter/V" }, { "n": "W", "v": "/letter/W" }, { "n": "X", "v": "/letter/X" }, { "n": "Y", "v": "/letter/Y" }, { "n": "Z", "v": "/letter/Z" }, { "n": "0-9", "v": "/letter/0-9" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "juji": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "juji" }, { "n": "国产剧", "v": "guochanju" }, { "n": "香港剧", "v": "xianggangju" }, { "n": "台湾剧", "v": "taiwanju" }, { "n": "欧美剧", "v": "oumeiju" }, { "n": "日本剧", "v": "ribenju" }, { "n": "韩国剧", "v": "hanguoju" }, { "n": "东南亚", "v": "dongnanya" }, { "n": "其他剧", "v": "qitaju" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "爱情", "v": "/class/爱情" }, { "n": "古装", "v": "/class/古装" }, { "n": "战争", "v": "/class/战争" }, { "n": "青春", "v": "/class/青春" }, { "n": "偶像", "v": "/class/偶像" }, { "n": "喜剧", "v": "/class/喜剧" }, { "n": "家庭", "v": "/class/家庭" }, { "n": "犯罪", "v": "/class/犯罪" }, { "n": "动作", "v": "/class/动作" }, { "n": "奇幻", "v": "/class/奇幻" }, { "n": "剧情", "v": "/class/剧情" }, { "n": "历史", "v": "/class/历史" }, { "n": "经典", "v": "/class/经典" }, { "n": "乡村", "v": "/class/乡村" }, { "n": "情景", "v": "/class/情景" }, { "n": "商战", "v": "/class/商战" }, { "n": "犯罪", "v": "/class/犯罪" }, { "n": "网剧", "v": "/class/网剧" }, { "n": "其他", "v": "/class/其他" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "中国", "v": "/area/中国" }, { "n": "韩国", "v": "/area/韩国" }, { "n": "香港", "v": "/area/香港" }, { "n": "台湾", "v": "/area/台湾" }, { "n": "日本", "v": "/area/日本" }, { "n": "美国", "v": "/area/美国" }, { "n": "泰国", "v": "/area/泰国" }, { "n": "英国", "v": "/area/英国" }, { "n": "新加坡", "v": "/area/新加坡" }, { "n": "其他", "v": "/area/其他" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "普通话", "v": "/lang/普通话" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "year", "name": "时间", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }, { "n": "2009", "v": "/year/2009" }, { "n": "2008", "v": "/year/2008" }] }, { "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "/letter/A" }, { "n": "B", "v": "/letter/B" }, { "n": "C", "v": "/letter/C" }, { "n": "D", "v": "/letter/D" }, { "n": "E", "v": "/letter/E" }, { "n": "F", "v": "/letter/F" }, { "n": "G", "v": "/letter/G" }, { "n": "H", "v": "/letter/H" }, { "n": "I", "v": "/letter/I" }, { "n": "J", "v": "/letter/J" }, { "n": "K", "v": "/letter/K" }, { "n": "L", "v": "/letter/L" }, { "n": "M", "v": "/letter/M" }, { "n": "N", "v": "/letter/N" }, { "n": "O", "v": "/letter/O" }, { "n": "P", "v": "/letter/P" }, { "n": "Q", "v": "/letter/Q" }, { "n": "R", "v": "/letter/R" }, { "n": "S", "v": "/letter/S" }, { "n": "T", "v": "/letter/T" }, { "n": "U", "v": "/letter/U" }, { "n": "V", "v": "/letter/V" }, { "n": "W", "v": "/letter/W" }, { "n": "X", "v": "/letter/X" }, { "n": "Y", "v": "/letter/Y" }, { "n": "Z", "v": "/letter/Z" }, { "n": "0-9", "v": "/letter/0-9" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "zongyi": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "zongyi" }, { "n": "大陆综艺", "v": "daluzongyi" }, { "n": "港台综艺", "v": "gangtaizongyi" }, { "n": "日韩综艺", "v": "rihanzongyi" }, { "n": "欧美综艺", "v": "oumeizongyi" }, { "n": "其他综艺", "v": "qitazongyi" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "选秀", "v": "/class/选秀" }, { "n": "情感", "v": "/class/情感" }, { "n": "访谈", "v": "/class/访谈" }, { "n": "播报", "v": "/class/播报" }, { "n": "旅游", "v": "/class/旅游" }, { "n": "音乐", "v": "/class/音乐" }, { "n": "美食", "v": "/class/美食" }, { "n": "纪实", "v": "/class/纪实" }, { "n": "曲艺", "v": "/class/曲艺" }, { "n": "生活", "v": "/class/生活" }, { "n": "游戏互动", "v": "/class/游戏互动" }, { "n": "财经", "v": "/class/财经" }, { "n": "求职", "v": "/class/求职" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "中国", "v": "/area/中国" }, { "n": "香港", "v": "/area/香港" }, { "n": "台湾", "v": "/area/台湾" }, { "n": "日本", "v": "/area/日本" }, { "n": "韩国", "v": "/area/韩国" }, { "n": "欧美", "v": "/area/欧美" }, { "n": "其他", "v": "/area/其他" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "普通话", "v": "/lang/普通话" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "year", "name": "时间", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }, { "n": "2009", "v": "/year/2009" }, { "n": "2008", "v": "/year/2008" }] }, { "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "/letter/A" }, { "n": "B", "v": "/letter/B" }, { "n": "C", "v": "/letter/C" }, { "n": "D", "v": "/letter/D" }, { "n": "E", "v": "/letter/E" }, { "n": "F", "v": "/letter/F" }, { "n": "G", "v": "/letter/G" }, { "n": "H", "v": "/letter/H" }, { "n": "I", "v": "/letter/I" }, { "n": "J", "v": "/letter/J" }, { "n": "K", "v": "/letter/K" }, { "n": "L", "v": "/letter/L" }, { "n": "M", "v": "/letter/M" }, { "n": "N", "v": "/letter/N" }, { "n": "O", "v": "/letter/O" }, { "n": "P", "v": "/letter/P" }, { "n": "Q", "v": "/letter/Q" }, { "n": "R", "v": "/letter/R" }, { "n": "S", "v": "/letter/S" }, { "n": "T", "v": "/letter/T" }, { "n": "U", "v": "/letter/U" }, { "n": "V", "v": "/letter/V" }, { "n": "W", "v": "/letter/W" }, { "n": "X", "v": "/letter/X" }, { "n": "Y", "v": "/letter/Y" }, { "n": "Z", "v": "/letter/Z" }, { "n": "0-9", "v": "/letter/0-9" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "dongman": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "dongman" }, { "n": "国产动漫", "v": "guochandongman" }, { "n": "日韩动漫", "v": "rihandongman" }, { "n": "欧美动漫", "v": "oumeidongman" }, { "n": "其他动漫", "v": "qitadongman" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "科幻", "v": "/class/科幻" }, { "n": "热血", "v": "/class/热血" }, { "n": "推理", "v": "/class/推理" }, { "n": "搞笑", "v": "/class/搞笑" }, { "n": "冒险", "v": "/class/冒险" }, { "n": "校园", "v": "/class/校园" }, { "n": "动作", "v": "/class/动作" }, { "n": "机战", "v": "/class/机战" }, { "n": "运动", "v": "/class/运动" }, { "n": "战争", "v": "/class/战争" }, { "n": "少年", "v": "/class/少年" }, { "n": "少女", "v": "/class/少女" }, { "n": "社会", "v": "/class/社会" }, { "n": "原创", "v": "/class/原创" }, { "n": "亲子", "v": "/class/亲子" }, { "n": "益智", "v": "/class/益智" }, { "n": "励志", "v": "/class/励志" }, { "n": "其他", "v": "/class/其他" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "中国", "v": "/area/中国" }, { "n": "韩国", "v": "/area/韩国" }, { "n": "日本", "v": "/area/日本" }, { "n": "美国", "v": "/area/美国" }, { "n": "法国", "v": "/area/法国" }, { "n": "德国", "v": "/area/德国" }, { "n": "其他", "v": "/area/其他" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "普通话", "v": "/lang/普通话" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "year", "name": "时间", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }, { "n": "2009", "v": "/year/2009" }, { "n": "2008", "v": "/year/2008" }] }, { "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "/letter/A" }, { "n": "B", "v": "/letter/B" }, { "n": "C", "v": "/letter/C" }, { "n": "D", "v": "/letter/D" }, { "n": "E", "v": "/letter/E" }, { "n": "F", "v": "/letter/F" }, { "n": "G", "v": "/letter/G" }, { "n": "H", "v": "/letter/H" }, { "n": "I", "v": "/letter/I" }, { "n": "J", "v": "/letter/J" }, { "n": "K", "v": "/letter/K" }, { "n": "L", "v": "/letter/L" }, { "n": "M", "v": "/letter/M" }, { "n": "N", "v": "/letter/N" }, { "n": "O", "v": "/letter/O" }, { "n": "P", "v": "/letter/P" }, { "n": "Q", "v": "/letter/Q" }, { "n": "R", "v": "/letter/R" }, { "n": "S", "v": "/letter/S" }, { "n": "T", "v": "/letter/T" }, { "n": "U", "v": "/letter/U" }, { "n": "V", "v": "/letter/V" }, { "n": "W", "v": "/letter/W" }, { "n": "X", "v": "/letter/X" }, { "n": "Y", "v": "/letter/Y" }, { "n": "Z", "v": "/letter/Z" }, { "n": "0-9", "v": "/letter/0-9" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "jilupian": [{ "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "人物", "v": "/class/人物" }, { "n": "军事", "v": "/class/军事" }, { "n": "历史", "v": "/class/历史" }, { "n": "文化", "v": "/class/文化" }, { "n": "探索", "v": "/class/探索" }, { "n": "科技", "v": "/class/科技" }, { "n": "自然", "v": "/class/自然" }, { "n": "解密", "v": "/class/解密" }, { "n": "其他", "v": "/class/其他" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "/area/内地" }, { "n": "香港", "v": "/area/香港" }, { "n": "台湾", "v": "/area/台湾" }, { "n": "美国", "v": "/area/美国" }, { "n": "韩国", "v": "/area/韩国" }, { "n": "法国", "v": "/area/法国" }, { "n": "英国", "v": "/area/英国" }, { "n": "日本", "v": "/area/日本" }, { "n": "德国", "v": "/area/德国" }, { "n": "泰国", "v": "/area/泰国" }, { "n": "印度", "v": "/area/印度" }, { "n": "意大利", "v": "/area/意大利" }, { "n": "西班牙", "v": "/area/西班牙" }, { "n": "加拿大", "v": "/area/加拿大" }, { "n": "其他", "v": "/area/其他" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "普通话", "v": "/lang/普通话" }, { "n": "英语", "v": "/lang/英语" }, { "n": "粤语", "v": "/lang/粤语" }, { "n": "闽南语", "v": "/lang/闽南语" }, { "n": "韩语", "v": "/lang/韩语" }, { "n": "日语", "v": "/lang/日语" }, { "n": "法语", "v": "/lang/法语" }, { "n": "德语", "v": "/lang/德语" }, { "n": "其它", "v": "/lang/其它" }] }, { "key": "year", "name": "时间", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "/year/2024" }, { "n": "2023", "v": "/year/2023" }, { "n": "2022", "v": "/year/2022" }, { "n": "2021", "v": "/year/2021" }, { "n": "2020", "v": "/year/2020" }, { "n": "2019", "v": "/year/2019" }, { "n": "2018", "v": "/year/2018" }, { "n": "2017", "v": "/year/2017" }, { "n": "2016", "v": "/year/2016" }, { "n": "2015", "v": "/year/2015" }, { "n": "2014", "v": "/year/2014" }, { "n": "2013", "v": "/year/2013" }, { "n": "2012", "v": "/year/2012" }, { "n": "2011", "v": "/year/2011" }, { "n": "2010", "v": "/year/2010" }, { "n": "2009", "v": "/year/2009" }, { "n": "2008", "v": "/year/2008" }] }, { "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "/letter/A" }, { "n": "B", "v": "/letter/B" }, { "n": "C", "v": "/letter/C" }, { "n": "D", "v": "/letter/D" }, { "n": "E", "v": "/letter/E" }, { "n": "F", "v": "/letter/F" }, { "n": "G", "v": "/letter/G" }, { "n": "H", "v": "/letter/H" }, { "n": "I", "v": "/letter/I" }, { "n": "J", "v": "/letter/J" }, { "n": "K", "v": "/letter/K" }, { "n": "L", "v": "/letter/L" }, { "n": "M", "v": "/letter/M" }, { "n": "N", "v": "/letter/N" }, { "n": "O", "v": "/letter/O" }, { "n": "P", "v": "/letter/P" }, { "n": "Q", "v": "/letter/Q" }, { "n": "R", "v": "/letter/R" }, { "n": "S", "v": "/letter/S" }, { "n": "T", "v": "/letter/T" }, { "n": "U", "v": "/letter/U" }, { "n": "V", "v": "/letter/V" }, { "n": "W", "v": "/letter/W" }, { "n": "X", "v": "/letter/X" }, { "n": "Y", "v": "/letter/Y" }, { "n": "Z", "v": "/letter/Z" }, { "n": "0-9", "v": "/letter/0-9" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }],
        "dyjs": [{ "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "/letter/A" }, { "n": "B", "v": "/letter/B" }, { "n": "C", "v": "/letter/C" }, { "n": "D", "v": "/letter/D" }, { "n": "E", "v": "/letter/E" }, { "n": "F", "v": "/letter/F" }, { "n": "G", "v": "/letter/G" }, { "n": "H", "v": "/letter/H" }, { "n": "I", "v": "/letter/I" }, { "n": "J", "v": "/letter/J" }, { "n": "K", "v": "/letter/K" }, { "n": "L", "v": "/letter/L" }, { "n": "M", "v": "/letter/M" }, { "n": "N", "v": "/letter/N" }, { "n": "O", "v": "/letter/O" }, { "n": "P", "v": "/letter/P" }, { "n": "Q", "v": "/letter/Q" }, { "n": "R", "v": "/letter/R" }, { "n": "S", "v": "/letter/S" }, { "n": "T", "v": "/letter/T" }, { "n": "U", "v": "/letter/U" }, { "n": "V", "v": "/letter/V" }, { "n": "W", "v": "/letter/W" }, { "n": "X", "v": "/letter/X" }, { "n": "Y", "v": "/letter/Y" }, { "n": "Z", "v": "/letter/Z" }, { "n": "0-9", "v": "/letter/0-9" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "/by/time" }, { "n": "人气", "v": "/by/hits" }, { "n": "评分", "v": "/by/score" }] }]
    },
    filter_def: {
        dy: { cateId: 'dy' },
        juji: { cateId: 'juji' },
        zongyi: { cateId: 'zongyi' },
        dongman: { cateId: 'dongman' },
        jilupian: { cateId: 'jilupian' },
        dyjs: { cateId: 'dyjs' }
    },
    class_parse: '.library-list:eq(0)&&a;a&&Text;a&&href;.*/(.*?).html',
    lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/\\.m3u8|\\.mp4/.test(url)) {
            input = {
                jx: 0,
                url: url,
                parse: 0
            }
        } else {
            input
        }
    `,
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl: '/voddetail/fyid.html', //非必填,二级详情拼接链接
    搜索: 'json:list;name;pic;;id',
}