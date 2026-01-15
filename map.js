const DEBUG = 1;
function log(...args) { if (DEBUG) console.log('[TravelMap]', ...args); }


const cityAssets = {   // key=城市名，value=数组（图片/视频均可）
    '北海市': ['北海/32d8202ba5508cbe-video-paired.MOV', '北海/78013dd121b969ef-video.MOV', '北海/fa22a0cf173e0af8-video.MOV', '北海/fa011f017e8b9211-photo.PNG', '北海/2b5c9012577e4414-photo.HEIC', '北海/28e5152f34074d07-video-paired.MOV', '北海/98dd53e7115b77a6-video.MOV', '北海/5bf6b6713c13569d-video.MOV', '北海/6115041bcd965468-photo.HEIC', '北海/774b2476dddd242b-video.MOV', '北海/4d22e09c95abfa53-video.MOV', '北海/3ca3befe37a6783e-video.MOV', '北海/4fccac8536bdbc73-video.mp4', '北海/4d11c9556412cb81-video.MOV', '北海/25cd65115d89cce0-video.MOV', '北海/1dca8ccd7d711889-video-paired.MOV', '北海/72e32503c4219a92-photo.JPG', '北海/6bf0f9e01dbe924b-video-paired.MOV', '北海/62a4da90cfde66a7-video-paired.MOV', '北海/a876aee90ba6d0e6-photo.JPG', '北海/2ed56ea78c93b169-photo.HEIC'],
    "南宁市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "西宁市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "兰州市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "温州市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "南京市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "张掖市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "酒泉市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "乌兰察布市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "呼和浩特市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "广州市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "北京市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "上海市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "郑州市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "开封市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "新乡市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "洛阳市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "深圳市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "杭州市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "珠海市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "汕尾市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "东莞市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "厦门市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "重庆市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "福州市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "南昌市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "景德镇市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "上饶市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "香港": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "澳门": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "武汉市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "长沙市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "佛山市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "肇庆市": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "成都市": [
        "https://pic4.zhimg.com/v2-99d9e9c0d7e8f9a0b1c2d3e4f5a6b7c8_1440w.jpg"
    ],
    "昆明市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "大理白族自治州": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "丽江市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "雅安市": [
        "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    "阿坝藏族羌族自治州": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "海西蒙古族藏族自治州": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "海北藏族自治州": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ],
    "迪庆藏族自治州": [
        "https://www.w3schools.com/html/movie.mp4",
        "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg"
    ]

    /* 继续补充即可 */
};


// 亚洲主要国家代码（ISO-3166 二位字母）
const countryCodes = {
    "中国": "CN",
    "日本": "JP",
    "韩国": "KR",
    "老挝": "LA",
    "泰国": "TH",
    "越南": "VN",
    "马来西亚": "MY",
    "新加坡": "SG",
    "印度尼西亚": "ID",
    "菲律宾": "PH",
    "印度": "IN",
    "巴基斯坦": "PK",
    "孟加拉国": "BD",
    "斯里兰卡": "LK",
    "哈萨克斯坦": "KZ",
    "乌兹别克斯坦": "UZ",
    "沙特阿拉伯": "SA",
    "土耳其": "TR",
    "伊朗": "IR",
    "伊拉克": "IQ",
    "阿联酋": "AE",
    "以色列": "IL",
    "约旦": "JO",
    "黎巴嫩": "LB",
    "叙利亚": "SY",
    "也门": "YE",
    "阿曼": "OM",
    "卡塔尔": "QA",
    "科威特": "KW",
    "巴林": "BH",
    "蒙古": "MN",
    "朝鲜": "KP",
    "阿富汗": "AF",
    "尼泊尔": "NP",
    "不丹": "BT",
    "马尔代夫": "MV",
    "吉尔吉斯斯坦": "KG",
    "塔吉克斯坦": "TJ",
    "土库曼斯坦": "TM",
    "阿塞拜疆": "AZ",
    "亚美尼亚": "AM",
    "格鲁吉亚": "GE",
    "塞浦路斯": "CY"
};

/* =================  新增：亚洲国家资源  ================= */
const asiaAssets = {
    "马来西亚": {          // 国家节点保留，但只当“入口”用
        "吉隆坡": [
            "IMG_2816.JPG",
            "IMG_2816.JPG"
        ],
        "槟城": [
            "IMG_2816.JPG"
        ]
    },
    "韩国": {          // 国家节点保留，但只当“入口”用
        "济州岛": [
            "IMG_2816.JPG",
            "IMG_2816.JPG"
        ]
    },
    "中国": {          // 国家节点保留，但只当“入口”用
        "北京": [
            "IMG_2816.JPG",
            "IMG_2816.JPG"
        ]
    }
    /* 继续补充其他国家 */
};


/* =================  工具：判断亚洲国家是否有图  ================= */
/* === 新增：判断亚洲国家下某城市是否有图 === */
function cityHasAsset(country, city) {
    const node = asiaAssets[country];
    if (!node) return false;
    // 如果是旧格式（数组）直接返回长度
    if (Array.isArray(node)) return node.length;
    // 新格式：对象，key=城市
    return node[city] && node[city].length;
}




/* --------------  视图级别常量  -------------- */
const LEVEL_ASIA = 'asia';
const LEVEL_CHINA = 'china';
let currentLevel = LEVEL_ASIA;   // 初始一定是亚洲

/* --------------  按钮文字映射  -------------- */
const BACK_TEXT = {
    [LEVEL_ASIA]: '',          // 亚洲视图不显示按钮
    [LEVEL_CHINA]: '返回亚洲地图',
    province: '返回中国地图'   // 省市统一用这一句话
};

/* =================  更新按钮  ================= */
function updateBackBtn() {
    const btn = document.getElementById('back-btn');
    const txt = BACK_TEXT[currentLevel];
    log('updateBackBtn -> currentLevel=', currentLevel, 'txt=', txt);
    if (!txt) {
        btn.style.display = 'none';
        log('按钮已隐藏');
    } else {
        btn.style.display = 'block';
        btn.textContent = txt;
        log('按钮已显示，文案=', txt);
    }
}











function loadAsiaMap() {
    fetch('asia.json')
        .then(r => r.json())
        .then(geo => {
            // ----- 关键修复：把英文 name 改成中文 -----
            const nameEn2Cn = {
                'China': '中国',
                'Japan': '日本',
                'South Korea': '韩国',
                'Thailand': '泰国',
                'Vietnam': '越南',
                'Malaysia': '马来西亚',
                'Singapore': '新加坡',
                'Indonesia': '印度尼西亚',
                'Philippines': '菲律宾',
                'India': '印度',
                'Pakistan': '巴基斯坦',
                'Bangladesh': '孟加拉国',
                'Sri Lanka': '斯里兰卡',
                'Kazakhstan': '哈萨克斯坦',
                'Uzbekistan': '乌兹别克斯坦',
                'Saudi Arabia': '沙特阿拉伯',
                'Turkey': '土耳其',
                'Iran': '伊朗',
                'Iraq': '伊拉克',
                'United Arab Emirates': '阿联酋',
                'Israel': '以色列',
                'Jordan': '约旦',
                'Lebanon': '黎巴嫩',
                'Syria': '叙利亚',
                'Yemen': '也门',
                'Oman': '阿曼',
                'Qatar': '卡塔尔',
                'Kuwait': '科威特',
                'Bahrain': '巴林',
                'Mongolia': '蒙古',
                'North Korea': '朝鲜',
                'Afghanistan': '阿富汗',
                'Nepal': '尼泊尔',
                'Bhutan': '不丹',
                'Maldives': '马尔代夫',
                'Kyrgyzstan': '吉尔吉斯斯坦',
                'Tajikistan': '塔吉克斯坦',
                'Turkmenistan': '土库曼斯坦',
                'Azerbaijan': '阿塞拜疆',
                'Armenia': '亚美尼亚',
                'Georgia': '格鲁吉亚',
                'Cyprus': '塞浦路斯',
                'Laos': '老挝',
                'Taiwan': '中国台湾',
                'Cambodia': '柬埔寨',
                'Myanmar': '缅甸'
            };

            geo.features.forEach(f => {
                const en = f.properties.name || f.properties.NAME;
                if (nameEn2Cn[en]) f.properties.name = nameEn2Cn[en];
            });

            echarts.registerMap('asia', geo);
            currentLevel = LEVEL_ASIA;
            updateBackBtn();
            renderAsiaChart([90, 30], 2.2);

        })
        .catch(err => { console.error(err); alert('亚洲地图加载失败'); });
}


function renderAsiaChart(center, zoom) {
    log('renderAsiaChart, center=', center, 'zoom=', zoom);
    const regions = Object.keys(countryCodes)

        .filter(name => {
            const node = asiaAssets[name];
            const ok = node && (Array.isArray(node) ? node.length : Object.keys(node).length);
            return ok;               // 其余国家看 asiaAssets
        })
        .map(name => ({
            name,
            itemStyle: { areaColor: '#003d82' },
            emphasis: { itemStyle: { areaColor: '#002750' } }
        }));

    const option = {
        title: { text: '亚洲地图（点击国家进入）', left: 'center', top: 20, textStyle: { color: '#000' } },
        tooltip: { trigger: 'item', formatter: '{b}' },
        geo: {
            map: 'asia',
            roam: true,
            center: center,
            zoom: zoom,
            scaleLimit: { min: 0.6, max: 20 },
            label: { show: true, color: '#000' },
            itemStyle: { areaColor: '#fff', borderColor: '#444', borderWidth: 1 },
            emphasis: { label: { color: '#000' }, itemStyle: { areaColor: '#ffe033' } },
            regions
        },
        series: []
    };
    chart.setOption(option, true);
    backBtn.style.display = 'none';   // 最顶级，不显示返回
    log('Asia chart rendered, backBtn hidden, regions=', regions);
}









/* 工具：判断有无资源 */
function hasAsset(name) {
    return cityAssets[name] && cityAssets[name].length;
}

/* === 新增：判断省份/城市是否有资源 === */
function provinceHasAsset(provName) {
    // 省内只要有一个城市有图就返回 true
    const mapping = {
        // 直辖市 (4个)
        "北京市": ["北京市"],
        "天津市": ["天津市"],
        "上海市": ["上海市"],
        "重庆市": ["重庆市"],

        // 河北省
        "河北省": ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"],

        // 山西省
        "山西省": ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"],

        // 内蒙古自治区
        "内蒙古自治区": ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市"],

        // 辽宁省
        "辽宁省": ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"],

        // 吉林省
        "吉林省": ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市"],

        // 黑龙江省
        "黑龙江省": ["哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市"],

        // 江苏省
        "江苏省": ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"],

        // 浙江省
        "浙江省": ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"],

        // 安徽省
        "安徽省": ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "六安市", "亳州市", "池州市", "宣城市"],

        // 福建省
        "福建省": ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"],

        // 江西省
        "江西省": ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"],

        // 山东省
        "山东省": ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市"],

        // 河南省
        "河南省": ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市"],

        // 湖北省
        "湖北省": ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市"],

        // 湖南省
        "湖南省": ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市"],

        // 广东省
        "广东省": ["广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"],

        // 广西壮族自治区
        "广西壮族自治区": ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"],

        // 海南省
        "海南省": ["海口市", "三亚市", "三沙市", "儋州市"],

        // 四川省
        "四川省": ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"],

        // 贵州省
        "贵州省": ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市"],

        // 云南省
        "云南省": ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市"],

        // 西藏自治区
        "西藏自治区": ["拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "那曲市"],

        // 陕西省
        "陕西省": ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"],

        // 甘肃省
        "甘肃省": ["兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市"],

        // 青海省
        "青海省": [
            "西宁市",
            "海东市",
            "海北藏族自治州",
            "黄南藏族自治州",
            "海南藏族自治州",
            "果洛藏族自治州",
            "玉树藏族自治州",
            "海西蒙古族藏族自治州"
        ],

        // 宁夏回族自治区
        "宁夏回族自治区": ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],

        // 新疆维吾尔自治区
        "新疆维吾尔自治区": ["乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市"],

        "台湾省": ["台北市", "新北市", "桃园市", "台中市", "台南市", "高雄市"],
        "香港特别行政区": ["香港"],
        "澳门特别行政区": ["澳门"]
    };
    return (mapping[provName] || []).some(c => cityAssets[c] && cityAssets[c].length);
}

const chart = echarts.init(document.getElementById('main'));
const backBtn = document.getElementById('back-btn');
const provinceCodes = {
    "北京市": "110000", "天津市": "120000", "河北省": "130000", "山西省": "140000",
    "内蒙古自治区": "150000", "辽宁省": "210000", "吉林省": "220000", "黑龙江省": "230000",
    "上海市": "310000", "江苏省": "320000", "浙江省": "330000", "安徽省": "340000",
    "福建省": "350000", "江西省": "360000", "山东省": "370000", "河南省": "410000",
    "湖北省": "420000", "湖南省": "430000", "广东省": "440000", "广西壮族自治区": "450000",
    "海南省": "460000", "重庆市": "500000", "四川省": "510000", "贵州省": "520000",
    "云南省": "530000", "西藏自治区": "540000", "陕西省": "610000", "甘肃省": "620000",
    "青海省": "630000", "宁夏回族自治区": "640000", "新疆维吾尔自治区": "650000",
    "台湾": "710000", "香港特别行政区": "810000", "澳门特别行政区": "820000"
};

loadAsiaMap();

function loadMap(adcode, mapName) {
    log('---- loadMap ---- adcode=', adcode, 'mapName=', mapName);
    fetch(`https://geo.datav.aliyun.com/areas_v3/bound/${adcode}_full.json`)
        .then(r => r.json())
        .then(geo => {
            const cleaned = turf.featureCollection(
                geo.features.filter(f => turf.area(f) / 1e6 > 0.1)
            );
            const box = turf.bbox(cleaned);
            const center = [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2];
            const w = turf.distance([box[0], center[1]], [box[2], center[1]]);
            const zoom = Math.floor(8 - Math.log2(w / 360 * Math.PI * 2));
            echarts.registerMap(mapName, cleaned);

            /* 判断进入的是中国还是省 */
            if (mapName === 'china') {
                currentLevel = LEVEL_CHINA;
            } else {
                currentLevel = 'province';
            }
            log('loadMap 设置 currentLevel =', currentLevel);
            updateBackBtn();
            updateStats(mapName);

            renderChart(mapName, center, zoom);
        })
        .catch(err => { console.error(err); alert('地图加载失败'); });
}
function renderChart(mapName, center, zoom) {
    log('renderChart, mapName=', mapName, 'center=', center, 'zoom=', zoom);
    const isCountry = mapName === 'china';
    const isProvince = provinceCodes[mapName];   // 省码存在 ⇒ 是省
    const isCity = !isCountry && !isProvince;      // 否则是市

    /* ---- 准备“区域覆盖”数组 ---- */
    let regions = [];
    if (isCountry) {              // ① 全国：只判断各省
        Object.keys(provinceCodes).forEach(pName => {
            if (provinceHasAsset(pName)) {
                regions.push({ name: pName, itemStyle: { areaColor: '#003d82' }, emphasis: { itemStyle: { areaColor: '#002750' } } });
            }
        });
    } else if (isProvince) {       // ② 省：判断下属城市
        const features = echarts.getMap(mapName).geoJson.features;
        regions = features.map(f => {
            const name = f.properties.name;
            return hasAsset(name)
                ? { name: name, itemStyle: { areaColor: '#003d82' }, emphasis: { itemStyle: { areaColor: '#002750' } } }
                : { name: name };   // 其余城市保持白色
        });
    } else {                     // ③ 市：只高亮有图的城市
        const features = echarts.getMap(mapName).geoJson.features;
        regions = features.map(f => {
            const name = f.properties.name;
            return hasAsset(name)
                ? { name: name, itemStyle: { areaColor: '#003d82' }, emphasis: { itemStyle: { areaColor: '#002750' } } }
                : { name: name };
        });
    }

    const option = {
        title: { text: mapName === 'china' ? '中国地图（点击下钻）' : mapName + '地图', left: 'center', top: 20, textStyle: { color: '#000' } },
        tooltip: { trigger: 'item', formatter: '{b}' },
        geo: {
            map: mapName, roam: true, center: center, zoom: zoom,
            scaleLimit: { min: 0.6, max: 20 },
            label: { show: true, color: '#000' },
            itemStyle: { areaColor: '#fff', borderColor: '#444', borderWidth: 1 }, // 清晰边界
            emphasis: { label: { color: '#000' }, itemStyle: { areaColor: '#ffe033' } }, // 悬停淡黄
            regions: regions
        },
        series: []
    };
    chart.setOption(option, true);
    // 省级地图才在这里显示按钮；中国/亚洲统一由 updateBackBtn 控制
    backBtn.style.display = isProvince ? 'block' : backBtn.style.display;
    log(' renderChart done, backBtn.display=', backBtn.style.display);
}



/* --------------  返回按钮点击  -------------- */
backBtn.onclick = () => {
    log('backBtn clicked, currentLevel=', currentLevel);
    if (currentLevel === 'province') {
        log('  省级 -> 回中国');
        loadMap('100000', 'china');
    } else if (currentLevel === LEVEL_CHINA) {
        log('  中国 -> 回亚洲');
        loadAsiaMap();
    } else {
        log('  当前亚洲级，按钮已隐藏，不应触发');
    }
};

chart.on('click', params => {
    const name = params.name;
    log('chart click name=', name, 'currentLevel=', currentLevel);
    /* -------- 亚洲级别单独处理 -------- */
    if (currentLevel === LEVEL_ASIA) {
        if (name === '中国') {
            loadMap('100000', 'china');
            return;
        }
        const country = asiaAssets[name];
        if (!country) {
            alert(`暂无“${name}”的媒体资源`);
            return;
        }
        // --- 新逻辑：有城市分组就走城市选择 ---
        if (!Array.isArray(country)) {          // 对象格式 => 有城市
            log(`[AsiaClick] ${name} 检测到城市分组，打开城市选择面板`);
            showAsiaCityPicker(name, country);   // 见下一步
            return;
        }
        // 老格式：直接打开抽屉
        log(`[AsiaClick] ${name} 为单国家数组，直接打开抽屉`);
        showDrawer(country);
    }
    const code = provinceCodes[name];
    if (code) {
        log('  点击省份 -> 进入省级地图');
        loadMap(code, name);
    } else if (hasAsset(name)) {
        log('  点击城市 -> 打开抽屉');
        showDrawer(cityAssets[name]);
    } else {
        alert(`暂无“${name}”的媒体资源`);
    }
});


window.onresize = () => chart.resize();

/*************  抽屉 + 放大弹窗  *************/
/* 创建抽屉 DOM（仅首次调用时生成） */
function ensureDrawer() {
    if (document.querySelector('.city-drawer')) return;

    const drawer = document.createElement('div');
    drawer.className = 'city-drawer';
    drawer.innerHTML = `
    <div class="drawer-mask"></div>
    <div class="drawer-body">
      <div class="drawer-header">
        <span class="drawer-title">城市相册</span>
        <span class="drawer-close">&times;</span>
      </div>
      <div class="drawer-content"></div>
    </div>`;
    document.body.appendChild(drawer);

    // 关闭事件
    drawer.querySelector('.drawer-close').onclick = hideDrawer;
    drawer.querySelector('.drawer-mask').onclick = hideDrawer;
}

/* 展示抽屉 */
function showDrawer(list) {
    ensureDrawer();
    const drawer = document.querySelector('.city-drawer');
    const content = drawer.querySelector('.drawer-content');
    content.innerHTML = '';          // 清空旧内容

    list.forEach(url => {
        const isVid = /\.(mp4|mov|webm|ogg)$/i.test(url);
        const card = document.createElement('div');
        card.className = 'media-card';

        if (isVid) {
            card.innerHTML = `<video muted controls preload="metadata" style="width:100%;border-radius:6px;">
                          <source src="${url}" type="video/mp4">
                        </video>`;
        } else {
            card.innerHTML = `<img src="${url}" style="width:100%;border-radius:6px;cursor:zoom-in">`;
            card.querySelector('img').onclick = () => showImageZoom(url);
        }
        content.appendChild(card);
    });

    drawer.classList.add('show');
}

/* 关闭抽屉 */
function hideDrawer() {
    document.querySelector('.city-drawer').classList.remove('show');
    document.querySelectorAll('.drawer-content video').forEach(v => v.pause());
}
/*************  点击图片放大 + 右侧信息面板  *************/
/* 假数据表：key = 图片原 URL，value = 人工写入的三字段 */
const imgMeta = {
    "https://pic1.zhimg.com/v2-3bdba23e0d7d8dad5c2e7c0c2f4b0b49_1440w.jpg": {
        location: "广西北海 · 银滩",
        time: "2025-05-01 18:30",
        desc: "落日余晖洒在细白的石英砂上，远处渔船点点。"
    },
    "https://pic3.zhimg.com/v2-88c8d8bfc6e3c7e0d9e1f2a3b4c5d6e7_1440w.jpg": {
        location: "内蒙古呼和浩特 · 大青山",
        time: "2025-06-20 07:15",
        desc: "晨雾缠绕山腰，草原的风带着青草的清香。"
    },
    "https://pic4.zhimg.com/v2-99d9e9c0d7e8f9a0b1c2d3e4f5a6b7c8_1440w.jpg": {
        location: "四川成都 · 九眼桥",
        time: "2025-07-10 21:00",
        desc: "夜色下的府南河，灯光与古桥倒映水面。"
    }
    /* 后续继续补充即可 */
};

/* 创建放大+信息面板 DOM（仅首次） */
function ensureZoomPanel() {
    if (document.querySelector(".img-zoom-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "img-zoom-wrap";
    wrap.innerHTML = `
<div class="zoom-mask"></div>
<div class="zoom-box">
  <img class="zoom-img">   <!-- 就是这里缺了 -->
  <span class="zoom-close">&times;</span>
</div>
<div class="info-panel">
  <div class="info-header">
    <span>图片详情</span>
    <span class="info-close">&times;</span>
  </div>
  <div class="info-body">
    <div class="info-item">
      <div class="info-label">具体位置</div>
      <div class="info-val" id="info-location">-</div>
    </div>
    <div class="info-item">
      <div class="info-label">拍摄时间</div>
      <div class="info-val" id="info-time">-</div>
    </div>
    <div class="info-item">
      <div class="info-label">详细描述</div>
      <div class="info-val" id="info-desc">-</div>
    </div>
  </div>
</div>`;
    document.body.appendChild(wrap);

    /* 关闭事件 */
    const close = () => wrap.classList.remove("show");
    wrap.querySelector(".zoom-mask").onclick = close;
    wrap.querySelector(".zoom-close").onclick = close;
    wrap.querySelector(".info-close").onclick = close;
}

/* 显示放大+信息面板 */
function showImageZoom(src) {
    ensureZoomPanel();
    const wrap = document.querySelector(".img-zoom-wrap");
    const img = wrap.querySelector(".zoom-img");
    img.src = src;

    /* 写入假数据 */
    const meta = imgMeta[src] || {
        location: "暂无数据",
        time: "暂无数据",
        desc: "暂无数据"
    };
    document.getElementById("info-location").textContent = meta.location;
    document.getElementById("info-time").textContent = meta.time;
    document.getElementById("info-desc").textContent = meta.desc;

    /* 动画展开 */
    wrap.classList.add("show");
}


/* === 亚洲国家-城市选择面板 === */
function showAsiaCityPicker(countryName, countryObj) {
    ensureDrawer();                       // 复用抽屉DOM
    const drawer = document.querySelector('.city-drawer');
    const content = drawer.querySelector('.drawer-content');
    const header = drawer.querySelector('.drawer-title');
    header.textContent = `${countryName} · 选择城市`;
    content.innerHTML = '';

    Object.keys(countryObj).forEach(city => {
        const list = countryObj[city];
        if (!list || !list.length) return;
        const card = document.createElement('div');
        card.className = 'media-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `<div style="padding:12px;font-size:15px;">📍 ${city}（${list.length} 张）</div>`;
        card.onclick = () => {
            log(`[AsiaCityPicker] 选择城市：${city}，打开相册抽屉`);
            hideDrawer();              // 关闭城市选择
            showDrawer(list);          // 打开该城市相册
        };
        content.appendChild(card);
    });

    drawer.classList.add('show');
}
