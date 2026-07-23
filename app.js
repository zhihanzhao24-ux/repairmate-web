const RM = {
  guides: {
    washer: {
      title: "洗衣机不排水",
      category: "家电",
      risk: "低危自查",
      image: "assets/guide-appliance.png",
      intro: "适合处理排水慢、脱水前停止、筒内残留积水等常见小故障。涉及拆机、漏电或烧焦味时应停止并呼叫持牌师傅。",
      symptoms: ["筒内有积水", "排水时有嗡嗡声", "脱水前停止", "屏幕出现排水类错误"],
      tools: ["毛巾", "浅盘", "小刷子", "手套"],
      steps: [
        { title: "断电与防滑", body: "先关闭电源并拔掉插头，确认地面干燥。若地面已有积水，先铺毛巾，避免触电和滑倒。", tip: "不要在潮湿地面赤脚操作。" },
        { title: "排出残水", body: "打开底部过滤器盖，用浅盘接住残水，缓慢旋开排水滤芯。水量较多时分几次接水。", tip: "旋开滤芯时动作要慢，避免一次性涌水。" },
        { title: "清理堵塞物", body: "检查滤芯和排水口，清理硬币、棉絮、发夹、头发等异物，再查看排水管是否弯折。", tip: "不要用尖锐金属硬捅排水管。" },
        { title: "复位测试", body: "装回滤芯并拧紧，运行漂洗或排水模式，观察 3 分钟。若仍无法排水，停止反复启动。", tip: "反复启动可能让电机过热。" }
      ],
      warnings: ["有焦味或漏电感", "过滤器无法复位", "排水泵持续异响", "机器底部持续漏水"],
      cta: "仍无法排水，建议提交师傅上门请求。"
    },
    aircon: {
      title: "空调滴水或制冷弱",
      category: "家电",
      risk: "中低危自查",
      image: "assets/guide-appliance.png",
      intro: "香港分体空调使用频繁，滴水常见于滤网堵塞、排水管不畅或室内机冷凝水盘积尘。",
      symptoms: ["室内机滴水", "风量明显变小", "制冷变慢", "滤网灰尘较厚"],
      tools: ["软刷", "喷壶", "干布", "梯凳"],
      steps: [
        { title: "关闭电源", body: "关闭空调与电源，等待风口完全停止转动。不要在运行时拆滤网或触碰风轮。", tip: "高处操作请使用稳定梯凳。" },
        { title: "清洗滤网", body: "取下滤网，用清水冲洗灰尘，阴干后再装回。滤网潮湿时不要直接运行制冷。", tip: "避免暴晒，滤网易变形。" },
        { title: "检查排水", body: "查看室内机排水口附近是否积水，观察排水管是否折弯、压扁或末端堵住。", tip: "不要自行高空处理外机排水。" },
        { title: "低负荷测试", body: "重新安装滤网后开启除湿模式，观察 10 分钟。若继续滴水，应安排清洗排水管。", tip: "滴水到插座附近要立即停机。" }
      ],
      warnings: ["需要外墙或高空作业", "室内机内部结冰", "电源位附近滴水", "清洗后仍大量滴水"],
      cta: "若需要清洗排水管或高空外机操作，请呼叫维修。"
    },
    faucet: {
      title: "水龙头漏水",
      category: "水务",
      risk: "低危自查",
      image: "assets/guide-plumbing.png",
      intro: "多数轻微漏水来自垫圈老化、起泡器松动或阀芯磨损。若墙内渗水，应立刻关闭总阀。",
      symptoms: ["接口渗水", "出水口滴水", "开关处漏水", "台面下方潮湿"],
      tools: ["活动扳手", "生料带", "备用垫圈", "干布"],
      steps: [
        { title: "关闭角阀", body: "关闭台盆下方角阀，并打开水龙头释放余水。若角阀锈死，不要强行拧动。", tip: "先确认冷水和热水两边都已关闭。" },
        { title: "定位漏点", body: "用干布擦干接口、阀芯和出水口，等待 30 秒观察最先变湿的位置。", tip: "先找漏点，再决定是否拆卸。" },
        { title: "处理接口", body: "若接口漏水，拆下后重新缠绕生料带并复位；若出水口滴水，多半是垫圈或阀芯老化。", tip: "生料带顺着螺纹方向缠绕。" },
        { title: "恢复水压", body: "重新开阀，先低水压测试 30 秒，再逐步恢复正常水压，观察台面和柜内是否再渗水。", tip: "测试后用纸巾擦一圈更容易发现细漏。" }
      ],
      warnings: ["墙体或柜体持续潮湿", "角阀锈蚀无法关闭", "热水管漏水", "漏水影响邻居单位"],
      cta: "持续漏水或管件腐蚀时，建议预约水务师傅。"
    },
    socket: {
      title: "插座无电",
      category: "电力",
      risk: "只做安全判断",
      image: "assets/guide-electric.png",
      intro: "电力问题只建议用户进行外部安全判断。任何拆盖、接线、烧焦味、跳闸反复出现，都应交由注册电工处理。",
      symptoms: ["单个插座无电", "插头松动", "面板发热", "配电箱跳掣"],
      tools: ["手电", "绝缘拖鞋", "手机拍照"],
      steps: [
        { title: "停止使用", body: "停止使用该插座，拔下所有电器。不要继续插拔测试，也不要自行拆开面板。", tip: "强电问题以转人工为主。" },
        { title: "外观判断", body: "查看面板是否发热、变色、松动或有焦味。若有任何异常，保持断电并远离。", tip: "焦味和发热是高风险信号。" },
        { title: "检查配电箱", body: "检查配电箱是否跳掣。只允许复位一次，若再次跳掣，不要重复尝试。", tip: "反复复位可能扩大故障。" },
        { title: "拍照提交", body: "拍摄插座与配电箱状态，提交给注册电工。照片能帮助师傅提前判断备件和风险。", tip: "拍照时不要触碰裸露金属。" }
      ],
      warnings: ["烧焦味或冒烟", "面板发热变色", "反复跳闸", "需要拆盖或接线"],
      cta: "涉及强电风险，优先呼叫持牌师傅。"
    }
  },

  getProfile() {
    return JSON.parse(localStorage.getItem("repairmate.profile") || "{}");
  },

  saveProfile(profile) {
    localStorage.setItem("repairmate.profile", JSON.stringify(profile));
  },

  getConfig() {
    return JSON.parse(localStorage.getItem("repairmate.config") || "{}");
  },

  saveConfig(config) {
    localStorage.setItem("repairmate.config", JSON.stringify({ ...RM.getConfig(), ...config }));
  },

  money(value) {
    return new Intl.NumberFormat("zh-HK", { style: "currency", currency: "HKD", maximumFractionDigits: 0 }).format(value);
  },

  qs(name) {
    return new URLSearchParams(location.search).get(name);
  }
};

const RM_LANGUAGE = {
  zh: {
    htmlLang: "zh-Hant",
    titleMap: {
      "RepairMate 家庭维修工作台": "RepairMate 家庭維修工作台",
      "RepairMate 图文解答": "RepairMate 圖文解答",
      "RepairMate AI 实景解答": "RepairMate AI 實景解答",
      "RepairMate 实时呼叫维修": "RepairMate 即時呼叫維修",
      "RepairMate 用户资料": "RepairMate 用戶資料",
      "RepairMate 支付入口": "RepairMate 支付入口"
    },
    staticText: {
      "主导航": "主導航",
      "首页": "首頁",
      "图文解答": "圖文解答",
      "AI 实景": "AI 實景",
      "实时呼叫": "即時呼叫",
      "用户资料": "用戶資料",
      "支付": "支付",
      "HKMU MetroChallenge 2026 / 香港家庭维修": "HKMU MetroChallenge 2026 / 香港家庭維修",
      "面向香港家庭的 AI + AR 自助维修与 O2O 师傅撮合工具。小故障即时自查，复杂问题透明报价、合规上门。": "面向香港家庭的 AI + AR 自助維修與 O2O 師傅撮合工具。小故障即時自查，複雜問題透明報價、合規上門。",
      "文": "文",
      "AI 实景解答": "AI 實景解答",
      "高频家电、水务、电力问题的安全排查页。": "高頻家電、水務、電力問題的安全排查頁。",
      "上传照片或打开摄像头，并调用可配置 Agent。": "上傳照片或開啟鏡頭，並呼叫可配置 Agent。",
      "呼": "呼",
      "实时呼叫维修": "即時呼叫維修",
      "前端模拟附近师傅、报价与服务队列。": "前端模擬附近師傅、報價與服務隊列。",
      "香港家庭市场": "香港家庭市場",
      "老旧住宅需求": "舊樓住宅需求",
      "自助模式降本目标": "自助模式降本目標",
      "月度会员价格": "月度會員價格",
      "当前状态": "目前狀態",
      "开始诊断": "開始診斷",
      "完善资料": "完善資料",
      "核心服务": "核心服務",
      "小故障自助，复杂故障交给合规师傅": "小故障自助，複雜故障交給合規師傅",
      "查看会员": "查看會員",
      "家电高频故障": "家電高頻故障",
      "洗衣机、空调、冰箱等基础排查，避免不必要上门费。": "洗衣機、冷氣機、雪櫃等基礎排查，避免不必要上門費。",
      "水务轻维修": "水務輕維修",
      "水龙头漏水、排水慢、接口松动等低风险场景。": "水龍頭漏水、排水慢、接口鬆動等低風險場景。",
      "电力安全判断": "電力安全判斷",
      "强电不鼓励自修，只做安全识别与注册电工转介。": "強電不鼓勵自修，只做安全識別與註冊電工轉介。",
      "RepairMate 原型网页，根据项目企划书制作。AI 指引仅作信息参考，危险维修请联系持牌专业人员。": "RepairMate 原型網頁，根據項目企劃書製作。AI 指引僅作資訊參考，危險維修請聯絡持牌專業人員。",
      "选择一个常见问题": "選擇一個常見問題",
      "用 AI 看现场": "用 AI 查看現場",
      "洗衣机不排水": "洗衣機不排水",
      "用锤子钉钉子": "用錘子釘釘子",
      "空调滴水": "冷氣機滴水",
      "水龙头漏水": "水龍頭漏水",
      "插座无电": "插座無電",
      "房屋风水": "房屋風水",
      "故障分类": "故障分類",
      "所有维修建议均以安全为先。注册电工、水务认证等合规要求可在正式版接入审核资料。": "所有維修建議均以安全為先。註冊電工、水務認證等合規要求可在正式版接入審核資料。",
      "AI + AR 实景解答": "AI + AR 實景解答",
      "拍下现场，让 Agent 给出安全排查建议": "拍下現場，讓 Agent 給出安全排查建議",
      "改为呼叫维修": "改為呼叫維修",
      "维修场景": "維修場景",
      "家电故障": "家電故障",
      "水务漏水": "水務漏水",
      "电力安全": "電力安全",
      "其他家庭维修": "其他家庭維修",
      "问题描述": "問題描述",
      "现场照片": "現場照片",
      "尚未上传照片。": "尚未上傳照片。",
      "打开摄像头": "開啟鏡頭",
      "调用 Agent": "呼叫 Agent",
      "上传照片或打开摄像头后显示实景画面": "上傳照片或開啟鏡頭後顯示實景畫面",
      "现场预览": "現場預覽",
      "AR 标注层：正式版可接 ARKit / ARCore 或 WebAR 标注维修点": "AR 標註層：正式版可接 ARKit / ARCore 或 WebAR 標註維修點",
      "Agent 回答": "Agent 回答",
      "等待调用。当前为演示模式，后期接入 Agent 后会返回实时分析结果。": "等待呼叫。目前為演示模式，後期接入 Agent 後會返回即時分析結果。",
      "提交问题，模拟匹配附近持牌师傅": "提交問題，模擬匹配附近持牌師傅",
      "先开通会员": "先開通會員",
      "维修问题": "維修問題",
      "所在地区": "所在地區",
      "九龙城": "九龍城",
      "观塘": "觀塘",
      "沙田": "沙田",
      "荃湾": "荃灣",
      "中西区": "中西區",
      "紧急程度": "緊急程度",
      "今天内处理": "今天內處理",
      "2 小时内": "2 小時內",
      "预约明天": "預約明天",
      "只想先报价": "只想先報價",
      "补充说明": "補充說明",
      "生成维修请求": "生成維修請求",
      "模拟地图": "模擬地圖",
      "香港维修服务地图": "香港維修服務地圖",
      "附近师傅": "附近師傅",
      "陈志明师傅": "陳志明師傅",
      "注册电工 / 约 18 分钟 / 评分 4.9": "註冊電工 / 約 18 分鐘 / 評分 4.9",
      "黄伟强师傅": "黃偉強師傅",
      "水务维修 / 约 25 分钟 / 评分 4.8": "水務維修 / 約 25 分鐘 / 評分 4.8",
      "李家豪师傅": "李家豪師傅",
      "家电维修 / 约 32 分钟 / 评分 4.7": "家電維修 / 約 32 分鐘 / 評分 4.7",
      "透明报价": "透明報價",
      "用户确认报价后才派单，平台抽成可按企划书设为 15%-20%。": "用戶確認報價後才派單，平台抽成可按企劃書設為 15%-20%。",
      "资质准入": "資質准入",
      "正式版可上传 EMSD 注册电工、水务认证与维修保险资料。": "正式版可上傳 EMSD 註冊電工、水務認證與維修保險資料。",
      "售后担保": "售後擔保",
      "完成后可开启评价、维修记录和担保期追踪。": "完成後可開啟評價、維修記錄和擔保期追蹤。",
      "用户资料云端储存": "用戶資料雲端儲存",
      "保存住址、偏好与会员资料": "保存住址、偏好與會員資料",
      "管理支付": "管理支付",
      "姓名": "姓名",
      "电话": "電話",
      "地区": "地區",
      "住宅类型": "住宅類型",
      "请选择": "請選擇",
      "私人住宅": "私人住宅",
      "居屋": "居屋",
      "公屋": "公屋",
      "唐楼": "唐樓",
      "地址": "地址",
      "会员状态": "會員狀態",
      "免费基础版": "免費基礎版",
      "VIP 月费 28HKD": "VIP 月費 28HKD",
      "VIP 年费 268HKD": "VIP 年費 268HKD",
      "保存资料": "保存資料",
      "支付入口": "支付入口",
      "会员订阅与维修订单支付": "會員訂閱與維修訂單支付",
      "返回资料": "返回資料",
      "基础版": "基礎版",
      "免费排查": "免費排查",
      "基础图文指引、维修安全判断、师傅呼叫入口。": "基礎圖文指引、維修安全判斷、師傅呼叫入口。",
      "启用基础版": "啟用基礎版",
      "VIP 月费": "VIP 月費",
      "完整 AI + AR": "完整 AI + AR",
      "解锁更多 Agent 次数、AR 实景标注和维修记录云端同步。": "解鎖更多 Agent 次數、AR 實景標註和維修記錄雲端同步。",
      "支付月费": "支付月費",
      "VIP 年费": "VIP 年費",
      "家庭常备": "家庭常備",
      "适合老旧住宅或多设备家庭，含年度维修档案与优先匹配。": "適合舊樓住宅或多設備家庭，含年度維修檔案與優先匹配。",
      "支付年费": "支付年費",
      "维修订单支付": "維修訂單支付",
      "师傅上门订单可在确认报价后进入支付。正式版应记录报价单、平台佣金、发票与售后担保。": "師傅上門訂單可在確認報價後進入支付。正式版應記錄報價單、平台佣金、發票與售後擔保。",
      "模拟支付 HK$480": "模擬支付 HK$480",
      "可接支付方式": "可接支付方式",
      "支付方式展示": "支付方式展示",
      "FPS 转数快": "FPS 轉數快",
      "收款码": "收款碼",
      "小": "小",
      "小程序支付": "小程序支付"
    },
    placeholders: {
      "例如：洗衣机不排水，底部有积水，想知道是否能自己处理。": "例如：洗衣機不排水，底部有積水，想知道是否能自己處理。",
      "例如：厨房水龙头漏水": "例如：廚房水龍頭漏水",
      "描述现场情况、是否已断电/关水阀、是否方便上门。": "描述現場情況、是否已斷電/關水閥、是否方便上門。",
      "例如：Chan Tai Man": "例如：Chan Tai Man",
      "+852 9123 4567": "+852 9123 4567",
      "例如：沙田": "例如：沙田",
      "只在正式云端环境中保存详细地址。": "只在正式雲端環境中保存詳細地址。"
    },
    ui: {
      ok: "知道了",
      noProfile: "尚未建立用戶資料。建立後可保存住址、維修偏好和會員狀態。",
      profileReady: (name, district) => `${name}，你的預設地區為 ${district || "未填寫"}。可直接發起自助診斷或呼叫維修。`,
      suggestedTools: "建議工具",
      repairDiagram: "維修圖解",
      commonSymptoms: "常見現象",
      visualFocus: "圖示重點",
      visualFocusBody: "正式版可在這裡放每個故障點的實拍圖、局部放大圖和短視頻。",
      callHuman: "需要轉人工",
      nextStep: "下一步",
      openAgent: "打開 AI 實景解答",
      callRepair: "呼叫維修",
      agentPrompt: (title) => `我遇到的問題是：${title}。請根據實景照片給我安全的排查步驟。`,
      reading: (name) => `正在讀取：${name}`,
      uploaded: (name) => `已上傳：${name}`,
      uploadReady: "照片已上傳。請補充問題描述後點擊「呼叫 Agent」取得維修建議。",
      imageUnsupported: "圖片格式無法預覽，請換用 JPG、PNG 或 WebP。",
      imageUnsupportedAnswer: "這張圖片瀏覽器無法預覽。若是 iPhone 的 HEIC 照片，請轉換為 JPG/PNG 後再上傳。",
      cameraOn: "鏡頭預覽已開啟。",
      cameraReady: "鏡頭預覽已開啟。請補充問題描述後點擊「呼叫 Agent」取得維修建議。",
      cameraFailTitle: "無法開啟鏡頭",
      cameraFailBody: "瀏覽器沒有授權鏡頭，或目前環境不支援鏡頭預覽。可以改用上傳現場照片。",
      analyzing: "正在分析現場情況...",
      demoAnswer: (scene) => `演示 Agent 回答：\n1. 先關閉相關電源或水閥，確認現場安全。\n2. 根據你選擇的「${scene}」場景，優先檢查外部可見部件，不拆蓋、不接線。\n3. 若出現燒焦味、持續漏水、跳掣或需要高空作業，請停止自修並呼叫持牌師傅。\n\n後期接入 Agent 後，這裡會顯示即時圖文分析和維修步驟。`,
      agentFail: (message) => `Agent 呼叫失敗：${message}\n請檢查 URL、CORS 設定和 Agent 服務是否在線。`,
      requestTitle: "維修請求已生成",
      requestBody: (id) => `編號 ${id} 已進入前端模擬隊列。正式版會推送給附近持牌師傅並返回報價。`,
      viewQueue: "查看隊列",
      profileSavedStatus: "資料已保存在本機演示快取。",
      profileSavedTitle: "資料已保存",
      profileSavedBody: "目前原型已將資料保存在瀏覽器本機。正式上線後會同步到雲端帳戶。",
      syncing: "正在同步到雲端...",
      syncSuccess: "雲端同步成功。",
      syncReturned: (status) => `雲端同步返回 ${status}。`,
      syncFail: (message) => `雲端同步失敗：${message}`,
      payTitle: "支付入口演示",
      payBody: (plan, amount) => `${plan} 方案金額為 ${amount}。正式版可接 Stripe、PayMe、FPS 或小程序支付。`,
      done: "完成",
      payCalled: "支付接口已呼叫",
      payCalledBody: (status) => `接口返回狀態 ${status}。如需跳轉，請讓接口返回 checkoutUrl。`,
      payFail: "支付呼叫失敗"
    }
  },
  en: {
    htmlLang: "en",
    titleMap: {
      "RepairMate 家庭维修工作台": "RepairMate Home Repair Dashboard",
      "RepairMate 图文解答": "RepairMate Step-by-Step Guides",
      "RepairMate AI 实景解答": "RepairMate AI Scene Help",
      "RepairMate 实时呼叫维修": "RepairMate Live Repair Call",
      "RepairMate 用户资料": "RepairMate User Profile",
      "RepairMate 支付入口": "RepairMate Payments"
    },
    staticText: {
      "主导航": "Main navigation",
      "首页": "Home",
      "图文解答": "Guides",
      "AI 实景": "AI Scene",
      "实时呼叫": "Live Call",
      "用户资料": "Profile",
      "支付": "Payment",
      "HKMU MetroChallenge 2026 / 香港家庭维修": "HKMU MetroChallenge 2026 / Hong Kong Home Repair",
      "面向香港家庭的 AI + AR 自助维修与 O2O 师傅撮合工具。小故障即时自查，复杂问题透明报价、合规上门。": "An AI + AR self-repair and O2O technician matching tool for Hong Kong households. Diagnose small faults instantly, and request transparent, compliant on-site service for complex cases.",
      "文": "G",
      "AI 实景解答": "AI Scene Help",
      "高频家电、水务、电力问题的安全排查页。": "Guided checks for common appliance, plumbing, and electrical issues.",
      "上传照片或打开摄像头，并调用可配置 Agent。": "Upload a photo or open the camera for Agent-assisted help.",
      "呼": "Call",
      "实时呼叫维修": "Live Repair Call",
      "前端模拟附近师傅、报价与服务队列。": "Front-end mockup for nearby technicians, quotes, and service queue.",
      "香港家庭市场": "Hong Kong households",
      "老旧住宅需求": "Older housing demand",
      "自助模式降本目标": "Self-help cost target",
      "月度会员价格": "Monthly VIP price",
      "当前状态": "Current Status",
      "开始诊断": "Start Diagnosis",
      "完善资料": "Complete Profile",
      "核心服务": "Core Services",
      "小故障自助，复杂故障交给合规师傅": "Self-help for small faults, compliant technicians for complex repairs",
      "查看会员": "View Plans",
      "家电高频故障": "Common Appliance Faults",
      "洗衣机、空调、冰箱等基础排查，避免不必要上门费。": "Basic checks for washers, air conditioners, refrigerators, and more.",
      "水务轻维修": "Light Plumbing Repair",
      "水龙头漏水、排水慢、接口松动等低风险场景。": "Low-risk checks for leaking taps, slow drains, and loose joints.",
      "电力安全判断": "Electrical Safety Check",
      "强电不鼓励自修，只做安全识别与注册电工转介。": "No DIY wiring. The product only helps identify risks and route users to registered electricians.",
      "RepairMate 原型网页，根据项目企划书制作。AI 指引仅作信息参考，危险维修请联系持牌专业人员。": "RepairMate prototype website based on the project proposal. AI guidance is for reference only; hazardous repairs should be handled by licensed professionals.",
      "选择一个常见问题": "Choose a Common Issue",
      "用 AI 看现场": "Use AI on Scene",
      "洗衣机不排水": "Washer Not Draining",
      "用锤子钉钉子": "Hammering a Nail",
      "空调滴水": "AC Water Dripping",
      "水龙头漏水": "Leaking Tap",
      "插座无电": "Socket Has No Power",
      "房屋风水": "Home Feng Shui",
      "故障分类": "Issue categories",
      "所有维修建议均以安全为先。注册电工、水务认证等合规要求可在正式版接入审核资料。": "All repair guidance puts safety first. Registered electrician, plumbing certification, and other compliance checks can be added in the production version.",
      "AI + AR 实景解答": "AI + AR Scene Help",
      "拍下现场，让 Agent 给出安全排查建议": "Capture the scene and let the Agent suggest safe checks",
      "改为呼叫维修": "Call Repair Instead",
      "维修场景": "Repair Scenario",
      "家电故障": "Appliance fault",
      "水务漏水": "Plumbing leak",
      "电力安全": "Electrical safety",
      "其他家庭维修": "Other home repair",
      "问题描述": "Issue Description",
      "现场照片": "Scene Photo",
      "尚未上传照片。": "No photo uploaded yet.",
      "打开摄像头": "Open Camera",
      "调用 Agent": "Call Agent",
      "上传照片或打开摄像头后显示实景画面": "Upload a photo or open the camera to preview the scene",
      "现场预览": "Scene preview",
      "AR 标注层：正式版可接 ARKit / ARCore 或 WebAR 标注维修点": "AR overlay: production can connect ARKit / ARCore or WebAR to mark repair points",
      "Agent 回答": "Agent Answer",
      "等待调用。当前为演示模式，后期接入 Agent 后会返回实时分析结果。": "Waiting for input. This is demo mode; a connected Agent will return real-time analysis.",
      "提交问题，模拟匹配附近持牌师傅": "Submit an issue and simulate matching nearby licensed technicians",
      "先开通会员": "Activate VIP First",
      "维修问题": "Repair Issue",
      "所在地区": "District",
      "九龙城": "Kowloon City",
      "观塘": "Kwun Tong",
      "沙田": "Sha Tin",
      "荃湾": "Tsuen Wan",
      "中西区": "Central and Western",
      "紧急程度": "Urgency",
      "今天内处理": "Today",
      "2 小时内": "Within 2 hours",
      "预约明天": "Book tomorrow",
      "只想先报价": "Quote only",
      "补充说明": "Additional Notes",
      "生成维修请求": "Create Repair Request",
      "模拟地图": "Map mockup",
      "香港维修服务地图": "Hong Kong repair service map",
      "附近师傅": "Nearby Technicians",
      "陈志明师傅": "Technician Chan Chi Ming",
      "注册电工 / 约 18 分钟 / 评分 4.9": "Registered electrician / about 18 min / rating 4.9",
      "黄伟强师傅": "Technician Wong Wai Keung",
      "水务维修 / 约 25 分钟 / 评分 4.8": "Plumbing repair / about 25 min / rating 4.8",
      "李家豪师傅": "Technician Lee Ka Ho",
      "家电维修 / 约 32 分钟 / 评分 4.7": "Appliance repair / about 32 min / rating 4.7",
      "透明报价": "Transparent Quote",
      "用户确认报价后才派单，平台抽成可按企划书设为 15%-20%。": "Dispatch happens only after the user confirms the quote. Platform commission can follow the proposed 15%-20%.",
      "资质准入": "Credential Entry",
      "正式版可上传 EMSD 注册电工、水务认证与维修保险资料。": "Production can support EMSD electrician registration, plumbing certification, and repair insurance documents.",
      "售后担保": "After-sales Guarantee",
      "完成后可开启评价、维修记录和担保期追踪。": "After completion, users can rate service, keep repair records, and track warranty periods.",
      "用户资料云端储存": "Cloud Profile Storage",
      "保存住址、偏好与会员资料": "Save address, preferences, and membership details",
      "管理支付": "Manage Payment",
      "姓名": "Name",
      "电话": "Phone",
      "地区": "District",
      "住宅类型": "Home Type",
      "请选择": "Select",
      "私人住宅": "Private housing",
      "居屋": "HOS flat",
      "公屋": "Public housing",
      "唐楼": "Tong lau",
      "地址": "Address",
      "会员状态": "Membership",
      "免费基础版": "Free basic plan",
      "VIP 月费 28HKD": "VIP monthly HKD 28",
      "VIP 年费 268HKD": "VIP yearly HKD 268",
      "保存资料": "Save Profile",
      "支付入口": "Payment Entry",
      "会员订阅与维修订单支付": "Membership subscription and repair order payment",
      "返回资料": "Back to Profile",
      "基础版": "Basic",
      "免费排查": "Free Check",
      "基础图文指引、维修安全判断、师傅呼叫入口。": "Basic visual guides, repair safety checks, and technician call entry.",
      "启用基础版": "Use Basic",
      "VIP 月费": "VIP Monthly",
      "完整 AI + AR": "Full AI + AR",
      "解锁更多 Agent 次数、AR 实景标注和维修记录云端同步。": "Unlock more Agent usage, AR scene markers, and cloud repair records.",
      "支付月费": "Pay Monthly",
      "VIP 年费": "VIP Yearly",
      "家庭常备": "Home Essential",
      "适合老旧住宅或多设备家庭，含年度维修档案与优先匹配。": "Best for older flats or multi-device homes, with annual records and priority matching.",
      "支付年费": "Pay Yearly",
      "维修订单支付": "Repair Order Payment",
      "师傅上门订单可在确认报价后进入支付。正式版应记录报价单、平台佣金、发票与售后担保。": "On-site repair orders can proceed to payment after quote confirmation. Production should record quotes, commission, invoices, and guarantees.",
      "模拟支付 HK$480": "Demo Pay HK$480",
      "可接支付方式": "Supported Payment Methods",
      "支付方式展示": "Payment method display",
      "FPS 转数快": "FPS",
      "收款码": "QR Payment",
      "小": "Mini",
      "小程序支付": "Mini Program Pay"
    },
    placeholders: {
      "例如：洗衣机不排水，底部有积水，想知道是否能自己处理。": "Example: The washer is not draining and water remains at the bottom. Can I handle this myself?",
      "例如：厨房水龙头漏水": "Example: Kitchen tap is leaking",
      "描述现场情况、是否已断电/关水阀、是否方便上门。": "Describe the scene, whether power/water is off, and when a visit is convenient.",
      "例如：Chan Tai Man": "Example: Chan Tai Man",
      "+852 9123 4567": "+852 9123 4567",
      "例如：沙田": "Example: Sha Tin",
      "只在正式云端环境中保存详细地址。": "Detailed addresses should only be stored in the production cloud environment."
    },
    ui: {
      ok: "OK",
      noProfile: "No user profile yet. Create one to save address, repair preferences, and membership status.",
      profileReady: (name, district) => `${name}, your default district is ${district || "not set"}. You can start diagnosis or call repair now.`,
      suggestedTools: "Suggested Tools",
      repairDiagram: "Repair Diagram",
      commonSymptoms: "Common Symptoms",
      visualFocus: "Visual Focus",
      visualFocusBody: "Production can add real photos, close-ups, and short videos for each fault point here.",
      callHuman: "When to Call a Technician",
      nextStep: "Next Step",
      openAgent: "Open AI Scene Help",
      callRepair: "Call Repair",
      agentPrompt: (title) => `My issue is: ${title}. Please suggest safe checking steps based on the scene photo.`,
      reading: (name) => `Reading: ${name}`,
      uploaded: (name) => `Uploaded: ${name}`,
      uploadReady: "Photo uploaded. Add issue details and click \"Call Agent\" for repair suggestions.",
      imageUnsupported: "This image format cannot be previewed. Please use JPG, PNG, or WebP.",
      imageUnsupportedAnswer: "This image cannot be previewed by the browser. If it is an iPhone HEIC photo, convert it to JPG/PNG and upload again.",
      cameraOn: "Camera preview is on.",
      cameraReady: "Camera preview is on. Add issue details and click \"Call Agent\" for repair suggestions.",
      cameraFailTitle: "Unable to Open Camera",
      cameraFailBody: "The browser has not granted camera permission, or this environment does not support camera preview. You can upload a photo instead.",
      analyzing: "Analyzing the scene...",
      demoAnswer: (scene) => `Demo Agent answer:\n1. Turn off the relevant power or water valve first and confirm the area is safe.\n2. For the selected \"${scene}\" scenario, check visible external parts first. Do not open covers or handle wiring.\n3. If there is a burning smell, ongoing leakage, repeated tripping, or work at height, stop DIY repair and call a licensed technician.\n\nAfter an Agent is connected, this area will show real-time visual analysis and repair steps.`,
      agentFail: (message) => `Agent call failed: ${message}\nPlease check the URL, CORS settings, and Agent service status.`,
      requestTitle: "Repair Request Created",
      requestBody: (id) => `Request ${id} has entered the front-end demo queue. In production, it will be pushed to nearby licensed technicians with quotes returned.`,
      viewQueue: "View Queue",
      profileSavedStatus: "Profile saved in local demo cache.",
      profileSavedTitle: "Profile Saved",
      profileSavedBody: "This prototype saves the profile locally in the browser. Production will sync it to a cloud account.",
      syncing: "Syncing to cloud...",
      syncSuccess: "Cloud sync successful.",
      syncReturned: (status) => `Cloud sync returned ${status}.`,
      syncFail: (message) => `Cloud sync failed: ${message}`,
      payTitle: "Payment Demo",
      payBody: (plan, amount) => `${plan} amount is ${amount}. Production can connect Stripe, PayMe, FPS, or mini program payment.`,
      done: "Done",
      payCalled: "Payment API Called",
      payCalledBody: (status) => `API returned status ${status}. To redirect, return checkoutUrl from the API.`,
      payFail: "Payment Failed"
    }
  }
};

RM_LANGUAGE.zh.guides = {
  part1: {
    title: "用錘子釘釘子",
    category: "",
    risk: "基礎入門",
    image: "assets/word-part1/part1-01.jpg",
    heroImage: "assets/word-part1/part1-01.jpg",
    intro: "實現獨立維修的第一步。無論是在牆上掛鐘、相框、擱板、衣架，還是固定搖晃的椅子腿，都可能用到錘子和釘子。不同牆面和承重要求需要不同固定件；本節先講木材釘釘子的基本方法，再完整介紹混凝土牆與石膏板牆的安全固定方式。",
    symptoms: ["想掛相框、時鐘或衣架", "木件或椅子腿鬆動", "需要固定小型擱板", "想先學會最基礎的手作維修"],
    tools: ["錘子", "釘子", "手套", "老虎鉗", "混凝土作業另備：錘鑽、鑽頭、膨脹管、螺絲刀"],
    steps: [
      { title: "先戴手套", body: "為安全起見，作業前先戴好手套。新手容易因為釘子滑動或錘擊偏移而碰傷手。", tip: "如果不放心，可用老虎鉗夾住釘身。" },
      { title: "固定釘子位置", body: "用沒有握錘子的另一隻手抓住釘身，把釘子放在要固定的位置。先輕敲幾下，讓釘尖進入木材。", tip: "一開始不要用太大力。" },
      { title: "握住錘柄下半部", body: "握住手柄尾部力量更大，但容易脫手。新手建議握住手柄下半部分，更容易控制方向。", tip: "錘面要盡量垂直打在釘頭上。" },
      { title: "控制節奏敲入", body: "抓住錘柄，放鬆肩膀，按強弱強弱的節奏敲打。若用力過猛，可能讓木頭裂開、釘子打歪或傷到手。", tip: "薄木板可先用鑽子鑽小孔再釘。" }
    ],
    warnings: ["木板太薄容易裂開", "釘子打歪或反覆彎曲", "要固定重物或承重擱板", "需要在混凝土牆或石膏板牆上固定"],
    cta: "如果要固定承重物件或不確定牆面材質，建議先呼叫維修或請專業師傅判斷。",
    sourceSections: [
      {
        title: "準備資訊",
        type: "facts",
        items: ["木材作業：錘子、釘子、手套，可加老虎鉗", "混凝土牆作業：膨脹管、錘鑽、混凝土鑽頭、螺絲釘、螺絲刀", "木材釘釘子難度：1 級；混凝土牆固定難度：2 級", "原文參考材料費：木材約 1000 韓元、混凝土牆約 1500 韓元", "核心原則：不是越用力越好，重點是控制力量、方向和牆面適配", "混凝土牆的正確順序：先鑽孔，再放膨脹管，最後擰入螺絲"]
      },
      {
        title: "Step 1：安全與定位",
        image: "assets/word-part1/part1-02.jpg",
        body: "作業前先戴好手套。用沒有握錘子的手抓住釘身，把釘尖放在準確位置；若擔心錘子打偏，可以改用老虎鉗夾住釘身，讓手指離開錘擊範圍。",
        tip: "先確認固定位置後方沒有電線、水管，也不要在不確定材質的牆面直接下釘。"
      },
      {
        title: "Step 2：開始錘擊",
        image: "assets/word-part1/part1-03.jpg",
        body: "新手握住錘柄下半部，比握住尾端更容易控制。先輕敲幾下讓釘尖進入木材並站穩，再逐步增加力量；放鬆肩膀，以強弱交替的節奏敲擊，並讓錘面盡量垂直落在釘頭中央。",
        tip: "薄木板容易裂開，可先鑽一個小導孔；釘子一旦明顯彎曲，應拔出更換，不要勉強敲正。"
      },
      {
        title: "活學活用：釘子與螺絲釘",
        image: "assets/word-part1/part1-04.jpg",
        body: "釘子通常與錘子配合使用，釘身沒有螺紋，適合快速固定；螺絲釘的釘身有旋槽，需要用螺絲刀或電鑽旋入，拆卸與重新安裝更方便，通常也能提供更穩定的固定力。"
      },
      {
        title: "螺絲釘類型",
        image: "assets/word-part1/part1-05.jpg",
        body: "螺絲釘可按圓頭、扁頭以及木材用、金屬用等用途區分。普通家庭維修中，新手不必一開始就分得太細，但螺絲直徑、長度和膨脹管必須互相匹配；承重物件應按產品標示選擇固定件。"
      },
      {
        title: "在混凝土牆上固定",
        image: "assets/word-part1/part1-06.jpg",
        body: "磚牆或混凝土牆十分堅硬，不建議直接用普通錘子和釘子硬敲。正確方法是用具有錘擊功能的錘鑽先打孔，把塑料膨脹管放入孔內，再擰入螺絲釘；膨脹管會在孔內提供抓力，使螺絲固定得更牢。",
        tip: "鑽牆前應避開暗藏電線和水管；不確定牆體結構或需要固定重物時，應交由專業人員處理。"
      },
      {
        title: "鑽頭與牆面",
        image: "assets/word-part1/part1-08.jpg",
        body: "鑽頭主要分為木材用、混凝土用和鋼材用。木材鑽頭頭部較尖，混凝土鑽頭的頭部較鈍且堅硬，鋼材鑽頭則有不同切削形狀。混凝土牆必須配合混凝土鑽頭，鑽頭直徑應略小於膨脹管外徑。"
      },
      {
        title: "Step 1：安裝鑽頭",
        image: "assets/word-part1/part1-09.jpg",
        body: "用來夾住鑽頭的部分叫作夾頭。把夾頭鑰匙插進鑰匙孔，讓齒輪互相咬合；逆時針旋轉可打開夾頭並取出舊鑽頭，放入合適的新鑽頭後再順時針鎖緊。"
      },
      {
        title: "鎖緊鑽頭",
        image: "assets/word-part1/part1-10.jpg",
        body: "確認鑽頭位於夾頭中央並被三面均勻夾緊。鎖緊後先在斷電狀態下輕輕拉動鑽頭，確認不會鬆脫；短暫低速試轉時，鑽頭不應出現明顯歪斜或晃動。"
      },
      {
        title: "選擇錘擊模式",
        image: "assets/word-part1/part1-11.jpg",
        body: "在混凝土牆打孔時，把電鑽調到錘子圖標的錘擊模式，讓鑽頭一邊旋轉一邊向前錘擊；一般木材鑽孔或旋入螺絲時，則使用普通旋轉或螺絲刀模式。切換模式前先停止電鑽。"
      },
      {
        title: "Step 2：垂直打孔",
        image: "assets/word-part1/part1-12.jpg",
        body: "雙手握住電鑽，站穩後讓鑽頭與牆面保持垂直，再從肩部穩定向前施力。不要左右搖晃鑽頭擴孔；混凝土鑽孔聲音較大且會掉落粉塵，可在孔位下方貼一張折起的便利貼接住粉末。",
        tip: "佩戴護目鏡和口罩，長髮、寬鬆衣物要遠離旋轉部件。"
      },
      {
        title: "標記打孔深度",
        image: "assets/word-part1/part1-13.jpg",
        body: "孔的深度應與膨脹管長度大致一致。開始前把膨脹管並排放在鑽頭旁，用膠帶在鑽頭上標記所需深度；鑽到膠帶位置便停止，可避免孔太淺或無止境地向牆內鑽。"
      },
      {
        title: "Step 3：放入膨脹管",
        image: "assets/word-part1/part1-14.jpg",
        body: "清理孔口粉塵後，把塑料膨脹管直直插入鑽好的孔，再用錘子輕敲至與牆面齊平。膨脹管應貼合孔壁而不是鬆動旋轉；若長度稍長，可按原文方法剪去露在牆外的多餘部分。",
        tip: "膨脹管若能輕易掉出，通常表示孔徑過大，應更換合適尺寸，不能只靠填塞雜物承重。"
      },
      {
        title: "Step 4：擰入螺絲",
        image: "assets/word-part1/part1-15.jpg",
        body: "用螺絲刀或電動螺絲刀把匹配尺寸的螺絲擰進膨脹管。若用來掛相框，可按掛件需要保留少量螺絲頭；若用來固定擱板或支架，則應依安裝孔位擰緊，但不要過度鎖緊令膨脹管或牆面損壞。"
      },
      {
        title: "石膏板牆：使用專用膨脹管",
        image: "assets/word-part1/part1-16.jpg",
        body: "石膏板牆敲起來會有較空洞的聲音，硬度遠低於混凝土。普通釘子或螺絲直接打進板材後很容易脫落，因此應使用石膏板專用膨脹管。用螺絲刀慢慢把膨脹管旋入牆面即可，避免電鑽力道過大令板材破裂。"
      },
      {
        title: "擰入石膏板螺絲",
        image: "assets/word-part1/part1-17.jpg",
        body: "把螺絲擰進專用膨脹管。掛相框時可留出適當長度，固定擱板時需按支架要求擰緊；螺絲完全到位後不要繼續空轉，否則膨脹管會跟著旋轉並把石膏板孔位磨鬆。"
      },
      {
        title: "更牢固的飛機型膨脹管",
        image: "assets/word-part1/part1-18.jpg",
        body: "飛機型膨脹管的尾端較尖，可像釘子一樣用錘子敲進石膏板，也可預先鑽一個小導孔方便定位。它在板材背面張開後，受力面積比普通膨脹管更大，因此固定效果通常更好。"
      },
      {
        title: "先取出內部螺絲",
        image: "assets/word-part1/part1-19.jpg",
        body: "膨脹管敲入牆面後，用螺絲刀或電鑽以逆時針方向旋轉，先把內部螺絲完整取出。安裝支架或掛件時，讓螺絲穿過物件的安裝孔，再重新對準牆內的膨脹管。"
      },
      {
        title: "收緊並固定",
        image: "assets/word-part1/part1-20.jpg",
        body: "重新擰緊螺絲時，飛機型膨脹管會在石膏板背面自動彎曲並張開，夾住板材形成更牢固的支撐。感覺到阻力後應逐步收緊，不要持續高速旋轉；重物仍應固定在牆內龍骨或交由師傅安裝。"
      }
    ]
  },
  fengshui: {
    title: "房屋風水入門",
    category: "家居文化",
    risk: "傳統文化參考",
    image: "assets/fengshui-bagua.png",
    heroImage: "assets/fengshui-bagua.png",
    intro: "本頁根據《實用風水現用現查手冊》的住宅、方位、玄關與客廳內容整理。風水屬於傳統文化與民俗觀念，缺乏一致的科學驗證；可把其中重視採光、通風、整潔、動線和居住舒適度的部分，作為家居布置靈感。",
    symptoms: ["想了解住宅八方位", "準備調整玄關與客廳", "希望改善採光、通風和動線", "需要一份不過度迷信的入門指南"],
    tools: ["房屋平面圖", "手機指南針", "八卦方位圖", "紙筆或標記貼"],
    steps: [
      { title: "找出正北方向", body: "站在住宅較中央的位置，用手機指南針找出北方；遠離大型金屬、電器和磁性物品，並以戶型圖交叉確認。", tip: "指南針容易受環境干擾，結果只適合做大致方位參考。" },
      { title: "把住宅分成八方", body: "以中心向外分成東、東南、南、西南、西、西北、北、東北八個方向，再對照方位圖標記房間與入口。", tip: "東為震、東南為巽、南為離、西南為坤、西為兌、西北為乾、北為坎、東北為艮。" },
      { title: "查看入口與公共空間", body: "先觀察大門、玄關、客廳等日常使用頻率高的位置，重點檢查是否明亮、整潔、通風，主要通道是否順暢。", tip: "任何布置都不能阻擋逃生門、消防設備或日常通行。" },
      { title: "先改善實際居住品質", body: "優先處理潮濕、漏水、眩光、噪音、霉菌、插座過載和家具不穩等實際問題，再考慮色彩、飾物與傳統方位偏好。", tip: "結構、電力、燃氣和滲水問題應交由合資格專業人員處理。" }
    ],
    warnings: ["用風水替代結構或電力安全檢查", "為遷就方位而堵塞門窗或逃生通道", "在潮濕、漏水或發霉時只擺放飾物", "因吉凶說法產生過度焦慮或高額消費"],
    cta: "先用方位圖了解空間，再以採光、通風、整潔、舒適和安全作為實際調整標準。",
    sourceSections: [
      {
        title: "八方位與八卦對照",
        image: "assets/fengshui-bagua.png",
        body: "書中採用後天八卦方位：乾對應西北、兌對應正西、離對應正南、震對應正東、巽對應東南、坎對應正北、艮對應東北、坤對應西南。傳統上會把房屋坐向與大門朝向相對理解，例如大門向西，住宅便稱為坐東向西。",
        tip: "這套對照屬傳統術數框架，不等同於建築、測量或工程標準。"
      },
      {
        title: "選擇住宅：先看環境品質",
        type: "text",
        body: "原書把住宅選擇與風勢、陽光、地勢及周邊環境連在一起。轉化為現代家居檢查時，可重點觀察自然採光是否充足、空氣能否流通、房屋是否過度潮濕、噪音和車流是否影響休息，以及出入口是否安全。強風直灌與完全不通風都可能降低舒適度。",
        tip: "購屋或租屋仍應以樓宇檢驗、產權資料、消防要求、結構狀況和實際預算為準。"
      },
      {
        title: "玄關：通透、適中、明亮、整潔",
        type: "text",
        body: "書中把玄關整理成四項原則：間隔宜通透、尺度宜適中、光線宜明亮、環境宜整潔。實際布置可採用淺色或透光材質，避免過高櫃體造成壓迫；鞋物與雜物集中收納，保持大門開啟順暢，無自然光時加入柔和照明。",
        tip: "鞋櫃和裝飾物不可縮窄主要通道，也不要遮擋電箱、消防裝置或門鎖。"
      },
      {
        title: "客廳：沙發、屏風與動線",
        type: "text",
        body: "原書建議沙發背後有穩定依靠，並避免與大門形成直接衝線。從空間設計角度看，靠牆或有矮櫃支撐通常更有安全感；入口直望休息區時，可用尺寸適中的屏風或矮櫃增加私密性，但不宜讓狹小客廳變得更擠迫。",
        tip: "屏風應穩固、防傾倒並保留足夠通行寬度；有幼童或長者的家庭尤其要避免尖角和絆倒風險。"
      },
      {
        title: "採光與色彩",
        type: "text",
        body: "傳統說法重視「廳明室暗」，強調客廳明亮、臥室柔和。實際應用時，可讓客廳獲得均勻照明，避免單一強光造成眩光；空間偏暗時使用較淺的牆面與家具色彩，南向或西曬房間則配合遮陽、通風與較清爽的色調。",
        tip: "照明首先要滿足閱讀、行走和用電安全，不必拘泥於特定燈具形狀或數字。"
      },
      {
        title: "使用這份指南的方式",
        type: "facts",
        items: ["把風水視為傳統文化與空間整理參考", "先解決漏水、發霉、電力、燃氣和結構問題", "以採光、通風、動線、私密性和舒適度評估布置", "重大裝修先諮詢設計、工程或合資格維修人員", "不要因絕對吉凶說法產生恐慌或不必要消費"]
      }
    ]
  },
  washer: {
    title: "洗衣機不排水",
    category: "家電",
    risk: "低危自查",
    image: "assets/guide-appliance.png",
    intro: "適合處理排水慢、脫水前停止、筒內殘留積水等常見小故障。涉及拆機、漏電或燒焦味時應停止並呼叫持牌師傅。",
    symptoms: ["筒內有積水", "排水時有嗡嗡聲", "脫水前停止", "屏幕出現排水類錯誤"],
    tools: ["毛巾", "淺盤", "小刷子", "手套"],
    steps: [
      { title: "斷電與防滑", body: "先關閉電源並拔掉插頭，確認地面乾燥。若地面已有積水，先鋪毛巾，避免觸電和滑倒。", tip: "不要在潮濕地面赤腳操作。" },
      { title: "排出殘水", body: "打開底部過濾器蓋，用淺盤接住殘水，慢慢旋開排水濾芯。水量較多時分幾次接水。", tip: "旋開濾芯時動作要慢，避免一次性湧水。" },
      { title: "清理堵塞物", body: "檢查濾芯和排水口，清理硬幣、棉絮、髮夾、頭髮等異物，再查看排水管是否彎折。", tip: "不要用尖銳金屬硬捅排水管。" },
      { title: "復位測試", body: "裝回濾芯並扭緊，運行漂洗或排水模式，觀察 3 分鐘。若仍無法排水，停止反覆啟動。", tip: "反覆啟動可能讓電機過熱。" }
    ],
    warnings: ["有焦味或漏電感", "過濾器無法復位", "排水泵持續異響", "機器底部持續漏水"],
    cta: "仍無法排水，建議提交師傅上門請求。"
  },
  aircon: {
    title: "冷氣機滴水或制冷弱",
    category: "家電",
    risk: "中低危自查",
    image: "assets/guide-appliance.png",
    intro: "香港分體冷氣使用頻繁，滴水常見於濾網堵塞、排水管不暢或室內機冷凝水盤積塵。",
    symptoms: ["室內機滴水", "風量明顯變小", "制冷變慢", "濾網灰塵較厚"],
    tools: ["軟刷", "噴壺", "乾布", "梯凳"],
    steps: [
      { title: "關閉電源", body: "關閉冷氣與電源，等待風口完全停止轉動。不要在運行時拆濾網或觸碰風輪。", tip: "高處操作請使用穩定梯凳。" },
      { title: "清洗濾網", body: "取下濾網，用清水沖洗灰塵，陰乾後再裝回。濾網潮濕時不要直接運行制冷。", tip: "避免暴曬，濾網易變形。" },
      { title: "檢查排水", body: "查看室內機排水口附近是否積水，觀察排水管是否折彎、壓扁或末端堵住。", tip: "不要自行高空處理外機排水。" },
      { title: "低負荷測試", body: "重新安裝濾網後開啟除濕模式，觀察 10 分鐘。若繼續滴水，應安排清洗排水管。", tip: "滴水到插座附近要立即停機。" }
    ],
    warnings: ["需要外牆或高空作業", "室內機內部結冰", "電源位附近滴水", "清洗後仍大量滴水"],
    cta: "若需要清洗排水管或高空外機操作，請呼叫維修。"
  },
  faucet: {
    title: "水龍頭漏水",
    category: "水務",
    risk: "低危自查",
    image: "assets/guide-plumbing.png",
    intro: "多數輕微漏水來自墊圈老化、起泡器鬆動或閥芯磨損。若牆內滲水，應立刻關閉總閥。",
    symptoms: ["接口滲水", "出水口滴水", "開關處漏水", "檯面下方潮濕"],
    tools: ["活動扳手", "生料帶", "備用墊圈", "乾布"],
    steps: [
      { title: "關閉角閥", body: "關閉台盆下方角閥，並打開水龍頭釋放餘水。若角閥鏽死，不要強行扭動。", tip: "先確認冷水和熱水兩邊都已關閉。" },
      { title: "定位漏點", body: "用乾布擦乾接口、閥芯和出水口，等待 30 秒觀察最先變濕的位置。", tip: "先找漏點，再決定是否拆卸。" },
      { title: "處理接口", body: "若接口漏水，拆下後重新纏繞生料帶並復位；若出水口滴水，多半是墊圈或閥芯老化。", tip: "生料帶順著螺紋方向纏繞。" },
      { title: "恢復水壓", body: "重新開閥，先低水壓測試 30 秒，再逐步恢復正常水壓，觀察檯面和櫃內是否再滲水。", tip: "測試後用紙巾擦一圈更容易發現細漏。" }
    ],
    warnings: ["牆體或櫃體持續潮濕", "角閥鏽蝕無法關閉", "熱水管漏水", "漏水影響鄰居單位"],
    cta: "持續漏水或管件腐蝕時，建議預約水務師傅。"
  },
  socket: {
    title: "插座無電",
    category: "電力",
    risk: "只做安全判斷",
    image: "assets/guide-electric.png",
    intro: "電力問題只建議用戶進行外部安全判斷。任何拆蓋、接線、燒焦味、跳掣反覆出現，都應交由註冊電工處理。",
    symptoms: ["單個插座無電", "插頭鬆動", "面板發熱", "配電箱跳掣"],
    tools: ["手電筒", "絕緣拖鞋", "手機拍照"],
    steps: [
      { title: "停止使用", body: "停止使用該插座，拔下所有電器。不要繼續插拔測試，也不要自行拆開面板。", tip: "強電問題以轉人工為主。" },
      { title: "外觀判斷", body: "查看面板是否發熱、變色、鬆動或有焦味。若有任何異常，保持斷電並遠離。", tip: "焦味和發熱是高風險信號。" },
      { title: "檢查配電箱", body: "檢查配電箱是否跳掣。只允許復位一次，若再次跳掣，不要重複嘗試。", tip: "反覆復位可能擴大故障。" },
      { title: "拍照提交", body: "拍攝插座與配電箱狀態，提交給註冊電工。照片能幫助師傅提前判斷備件和風險。", tip: "拍照時不要觸碰裸露金屬。" }
    ],
    warnings: ["燒焦味或冒煙", "面板發熱變色", "反覆跳掣", "需要拆蓋或接線"],
    cta: "涉及強電風險，優先呼叫持牌師傅。"
  }
};

RM_LANGUAGE.en.guides = {
  part1: {
    title: "Hammering a Nail",
    category: "",
    risk: "Beginner basics",
    image: "assets/word-part1/part1-01.jpg",
    heroImage: "assets/word-part1/part1-01.jpg",
    intro: "The first step toward independent home repair. Whether you want to hang a clock, frame, shelf, coat hook, or tighten a shaky chair leg, learning how to use a hammer and nail is a useful foundation.",
    symptoms: ["Hang a frame, clock, or hook", "Fix loose wooden parts", "Secure a small shelf", "Learn basic hands-on repair"],
    tools: ["Hammer", "Nails", "Gloves", "Pliers"],
    steps: [
      { title: "Wear gloves first", body: "Put on gloves before starting. Beginners can easily hurt their hands if the nail slips or the hammer lands off target.", tip: "Use pliers to hold the nail if needed." },
      { title: "Set the nail position", body: "Hold the nail with the hand not holding the hammer. Place it at the target point and tap lightly until the tip enters the wood.", tip: "Do not start with full force." },
      { title: "Grip the lower handle", body: "Holding the end of the handle gives more force but is harder to control. Beginners should grip the lower half for better direction.", tip: "Keep the hammer face square to the nail head." },
      { title: "Hammer with rhythm", body: "Relax your shoulder and strike with a controlled strong-light rhythm. Too much force can split the wood, bend the nail, or hurt your hand.", tip: "For thin boards, drill a small pilot hole first." }
    ],
    warnings: ["Thin boards may crack", "The nail bends or goes off angle", "The item is heavy or load-bearing", "Concrete or gypsum board wall fixing is needed"],
    cta: "If the item is load-bearing or you are unsure about the wall material, call a technician first.",
    sourceSections: [
      { title: "Preparation", type: "facts", items: ["Tools: hammer, nails, gloves, optional pliers", "Difficulty: Level 1", "Reference material cost: about KRW 1,000", "Note: force control matters more than hitting harder"] },
      { title: "Step 1: Safety and positioning", image: "assets/word-part1/part1-02.jpg", body: "Wear gloves and place the nail at the target point. If you are worried about hitting your hand, hold the nail with pliers." },
      { title: "Step 2: Start hammering", image: "assets/word-part1/part1-03.jpg", body: "Tap lightly first so the nail stands firm, then add force gradually. Keep the hammer face aligned with the nail head." },
      { title: "Nails and screws", image: "assets/word-part1/part1-04.jpg", body: "Nails are used with hammers and have smooth shanks. Screws are driven with screwdrivers or drills and have threads for stronger fixing." },
      { title: "Screw types", image: "assets/word-part1/part1-05.jpg", body: "Screws vary by head shape and material use. For ordinary home repair, beginners can start with common sizes." },
      { title: "Fixing into concrete walls", image: "assets/word-part1/part1-06.jpg", body: "Do not force nails directly into concrete. Drill a hole first, insert a plastic anchor, then drive in a screw." },
      { title: "Drill bits and wall material", image: "assets/word-part1/part1-08.jpg", body: "Drill bits differ for wood, concrete, and steel. For concrete walls, use a concrete bit slightly smaller than the wall anchor." },
      { title: "Step 1: Fit the drill bit", image: "assets/word-part1/part1-09.jpg", body: "Open the chuck counterclockwise with the chuck key, insert the correct bit, then tighten it clockwise." },
      { title: "Secure the drill bit", image: "assets/word-part1/part1-10.jpg", body: "Center the bit in the chuck and lock it firmly. Check that it is straight and does not wobble." },
      { title: "Select hammer mode", image: "assets/word-part1/part1-11.jpg", body: "Use the hammer-icon mode for concrete drilling and the regular driver mode when driving screws." },
      { title: "Step 2: Drill perpendicular to the wall", image: "assets/word-part1/part1-12.jpg", body: "Hold the drill with both hands and keep the bit perpendicular to the wall. Place a sticky note below the hole to catch dust." },
      { title: "Mark the drilling depth", image: "assets/word-part1/part1-13.jpg", body: "The hole depth should match the anchor length. Mark the bit with tape so you know when to stop." },
      { title: "Step 3: Insert the wall anchor", image: "assets/word-part1/part1-14.jpg", body: "Insert the plastic anchor into the hole and tap it gently until it sits flush with the wall." },
      { title: "Step 4: Drive the screw", image: "assets/word-part1/part1-15.jpg", body: "Drive the screw into the anchor. Leave the head slightly proud for hanging items, or tighten fully for a shelf." },
      { title: "Gypsum board: use a dedicated anchor", image: "assets/word-part1/part1-16.jpg", body: "Ordinary nails pull out of gypsum board easily. Turn a dedicated anchor in by hand to avoid cracking the board with excessive drill force." },
      { title: "Drive the gypsum-board screw", image: "assets/word-part1/part1-17.jpg", body: "Drive the screw into the anchor and stop once it is seated; continued spinning can loosen the anchor." },
      { title: "Stronger toggle-style anchor", image: "assets/word-part1/part1-18.jpg", body: "Tap the pointed toggle-style anchor into the gypsum board. A small pilot hole can make positioning easier." },
      { title: "Remove the inner screw", image: "assets/word-part1/part1-19.jpg", body: "Once the anchor is in the wall, turn counterclockwise to remove its inner screw." },
      { title: "Tighten and secure", image: "assets/word-part1/part1-20.jpg", body: "As the screw is tightened again, the anchor bends open behind the board to create a stronger hold." }
    ]
  },
  fengshui: {
    title: "Home Feng Shui Basics",
    category: "Home Culture",
    risk: "Traditional reference",
    image: "assets/fengshui-bagua.png",
    heroImage: "assets/fengshui-bagua.png",
    intro: "This page adapts the book's sections on homes, directions, entryways, and living rooms. Feng shui is a traditional cultural practice without consistent scientific validation. Its emphasis on light, airflow, tidiness, circulation, and comfort can still be used as interior-layout inspiration.",
    symptoms: ["Learn the eight home directions", "Rearrange the entryway or living room", "Improve light, airflow, and circulation", "Use a balanced, non-superstitious guide"],
    tools: ["Floor plan", "Phone compass", "Bagua direction chart", "Notes or markers"],
    steps: [
      { title: "Find north", body: "Stand near the center of the home and use a phone compass to identify north. Move away from large metal objects and electrical appliances.", tip: "Compass readings can be distorted indoors, so treat them as approximate." },
      { title: "Map the eight directions", body: "Divide the plan into east, southeast, south, southwest, west, northwest, north, and northeast, then mark rooms and entrances.", tip: "East is Zhen, southeast Xun, south Li, southwest Kun, west Dui, northwest Qian, north Kan, and northeast Gen." },
      { title: "Review entrances and shared spaces", body: "Start with the front door, entryway, and living room. Check brightness, tidiness, ventilation, privacy, and whether main walking routes remain clear.", tip: "Never block exits, fire equipment, doors, or daily circulation for a directional preference." },
      { title: "Improve real living conditions first", body: "Resolve dampness, leaks, glare, noise, mold, overloaded sockets, and unstable furniture before considering colors, ornaments, or traditional directional preferences.", tip: "Structural, electrical, gas, and water-ingress issues require qualified professionals." }
    ],
    warnings: ["Using feng shui instead of structural or electrical checks", "Blocking windows, doors, or escape routes", "Using ornaments while ignoring dampness, leaks, or mold", "Anxiety or excessive spending caused by absolute fortune claims"],
    cta: "Use the direction chart to understand the space, then prioritize light, airflow, tidiness, comfort, and safety.",
    sourceSections: [
      { title: "Eight directions and bagua", image: "assets/fengshui-bagua.png", body: "The book uses the later-heaven bagua: Qian northwest, Dui west, Li south, Zhen east, Xun southeast, Kan north, Gen northeast, and Kun southwest. Traditional practice describes a home's facing direction as opposite its sitting direction.", tip: "This is a traditional symbolic system, not an architectural, surveying, or engineering standard." },
      { title: "Choosing a home: start with environmental quality", type: "text", body: "The source connects housing choices with wind, sunlight, terrain, and surroundings. In practical terms, check daylight, airflow, dampness, traffic noise, privacy, and entrance safety. Both strong drafts and stagnant air can reduce comfort.", tip: "Purchase or rental decisions should still rely on inspections, legal records, fire requirements, structural condition, and budget." },
      { title: "Entryway: open, proportionate, bright, and tidy", type: "text", body: "The book summarizes entryway design with four ideas: visual openness, suitable scale, good lighting, and tidiness. Use light or translucent materials, avoid oppressive full-height barriers, organize shoes and clutter, and add soft lighting when daylight is limited.", tip: "Do not narrow the main route or cover the electrical panel, fire equipment, locks, or door hardware." },
      { title: "Living room: sofa, screen, and circulation", type: "text", body: "The book favors a stable backing behind the sofa and avoiding a direct line with the entrance. In spatial-design terms, a wall or low cabinet can provide security, while a modest screen can improve privacy without crowding a small room.", tip: "Screens must be stable and leave sufficient passage width; avoid sharp corners and trip hazards." },
      { title: "Light and color", type: "text", body: "Traditional guidance favors a brighter living room and softer bedroom light. In practice, use even task lighting, reduce glare, apply lighter colors in dark rooms, and manage solar heat in south- or west-facing rooms with shade and ventilation.", tip: "Lighting should first meet reading, movement, and electrical-safety needs; specific shapes or lucky numbers are optional cultural preferences." },
      { title: "How to use this guide", type: "facts", items: ["Treat feng shui as cultural and space-planning reference", "Fix leaks, mold, electrical, gas, and structural issues first", "Judge layouts by light, airflow, circulation, privacy, and comfort", "Consult designers, engineers, or qualified technicians for major work", "Avoid fear or unnecessary spending based on absolute fortune claims"] }
    ]
  },
  washer: {
    title: "Washer Not Draining",
    category: "Appliance",
    risk: "Low-risk self-check",
    image: "assets/guide-appliance.png",
    intro: "For slow drainage, stopping before spin, or water left in the drum. Stop and call a licensed technician if disassembly, leakage, or burning smell is involved.",
    symptoms: ["Water remains in the drum", "Buzzing during drain", "Stops before spin", "Drain-related error on display"],
    tools: ["Towel", "Shallow tray", "Small brush", "Gloves"],
    steps: [
      { title: "Power off and prevent slipping", body: "Turn off power and unplug the washer. Make sure the floor is dry. If water is already on the floor, place towels first.", tip: "Do not work barefoot on a wet floor." },
      { title: "Drain residual water", body: "Open the bottom filter cover, place a shallow tray underneath, and slowly loosen the drain filter. Drain in batches if there is a lot of water.", tip: "Turn the filter slowly to avoid a sudden rush of water." },
      { title: "Remove blockage", body: "Check the filter and drain opening. Remove coins, lint, hairpins, hair, and check whether the drain hose is bent.", tip: "Do not poke the hose with sharp metal tools." },
      { title: "Reset and test", body: "Reinstall and tighten the filter, then run rinse or drain mode for 3 minutes. Stop repeated starts if drainage still fails.", tip: "Repeated starts may overheat the motor." }
    ],
    warnings: ["Burning smell or electric shock sensation", "Filter cannot be refitted", "Drain pump keeps making noise", "Water keeps leaking from the bottom"],
    cta: "If it still cannot drain, submit an on-site repair request."
  },
  aircon: {
    title: "AC Dripping or Weak Cooling",
    category: "Appliance",
    risk: "Low-to-medium self-check",
    image: "assets/guide-appliance.png",
    intro: "Split air conditioners are used frequently in Hong Kong. Dripping often comes from clogged filters, blocked drain pipes, or dust in the indoor drain tray.",
    symptoms: ["Indoor unit drips", "Airflow is weaker", "Cooling becomes slow", "Filter is dusty"],
    tools: ["Soft brush", "Spray bottle", "Dry cloth", "Stable step stool"],
    steps: [
      { title: "Turn off power", body: "Turn off the air conditioner and power. Wait until the vent stops moving before touching filters or parts.", tip: "Use a stable step stool for high areas." },
      { title: "Clean the filter", body: "Remove the filter, rinse dust with water, and let it dry in shade before reinstalling. Do not run cooling with a wet filter.", tip: "Avoid direct sunlight; filters may deform." },
      { title: "Check drainage", body: "Look for water near the indoor drain outlet. Check whether the drain hose is bent, pressed, or blocked at the end.", tip: "Do not handle outdoor drainage at height by yourself." },
      { title: "Low-load test", body: "Reinstall the filter and run dehumidify mode for 10 minutes. If dripping continues, arrange drain pipe cleaning.", tip: "Stop immediately if water drips near sockets." }
    ],
    warnings: ["Exterior wall or work at height is needed", "Indoor unit icing", "Water near power points", "Heavy dripping after cleaning"],
    cta: "Call repair if drain pipe cleaning or outdoor unit work is needed."
  },
  faucet: {
    title: "Leaking Tap",
    category: "Plumbing",
    risk: "Low-risk self-check",
    image: "assets/guide-plumbing.png",
    intro: "Most light leaks come from worn washers, loose aerators, or worn cartridges. If water seeps inside a wall, shut off the main valve immediately.",
    symptoms: ["Joint seepage", "Dripping outlet", "Leak near handle", "Cabinet or counter is damp"],
    tools: ["Adjustable wrench", "PTFE tape", "Spare washer", "Dry cloth"],
    steps: [
      { title: "Close angle valves", body: "Close the angle valves under the basin and open the tap to release remaining water. Do not force a rusted valve.", tip: "Confirm both hot and cold sides are closed." },
      { title: "Locate the leak", body: "Dry the joints, cartridge area, and outlet with a cloth. Wait 30 seconds and observe where it becomes wet first.", tip: "Find the leak before disassembling anything." },
      { title: "Fix the joint", body: "If the joint leaks, remove it, rewrap PTFE tape, and reinstall. If the outlet drips, the washer or cartridge may be worn.", tip: "Wrap PTFE tape along the thread direction." },
      { title: "Restore pressure", body: "Open the valve at low pressure for 30 seconds first, then gradually return to normal pressure. Check counter and cabinet again.", tip: "A tissue wipe helps reveal small leaks." }
    ],
    warnings: ["Wall or cabinet remains damp", "Angle valve is rusted and cannot close", "Hot water pipe leaks", "Leak affects neighboring units"],
    cta: "Book a plumbing technician if leakage continues or fittings are corroded."
  },
  socket: {
    title: "Socket Has No Power",
    category: "Electrical",
    risk: "Safety judgment only",
    image: "assets/guide-electric.png",
    intro: "Electrical issues should only be externally checked by users. Any cover removal, wiring, burning smell, or repeated tripping should be handled by a registered electrician.",
    symptoms: ["One socket has no power", "Plug feels loose", "Panel is hot", "Breaker trips"],
    tools: ["Flashlight", "Insulated slippers", "Phone camera"],
    steps: [
      { title: "Stop using it", body: "Stop using the socket and unplug all devices. Do not keep plugging devices in to test, and do not open the panel.", tip: "Strong electrical issues should be routed to a technician." },
      { title: "Visual check", body: "Check whether the panel is hot, discolored, loose, or has a burning smell. If anything is abnormal, keep power off and stay away.", tip: "Burning smell and heat are high-risk signals." },
      { title: "Check breaker box", body: "Check whether a breaker has tripped. Reset only once. If it trips again, do not repeat attempts.", tip: "Repeated resets may worsen the fault." },
      { title: "Take photos", body: "Photograph the socket and breaker box for a registered electrician. Photos help the technician assess parts and risks before arrival.", tip: "Do not touch exposed metal while taking photos." }
    ],
    warnings: ["Burning smell or smoke", "Panel is hot or discolored", "Repeated tripping", "Cover removal or wiring is needed"],
    cta: "For electrical risks, call a licensed technician first."
  }
};

function currentLang() {
  return localStorage.getItem("repairmate.lang") || "zh";
}

function langPack() {
  return RM_LANGUAGE[currentLang()] || RM_LANGUAGE.zh;
}

function ui(key, ...args) {
  const value = langPack().ui[key] || RM_LANGUAGE.zh.ui[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function applyLocalizedGuides() {
  RM.guides = langPack().guides;
}

function replaceExactText(value) {
  if (!value) return value;
  const pack = langPack();
  return pack.staticText[value] || pack.placeholders[value] || value;
}

function applyStaticLanguage() {
  const pack = langPack();
  document.documentElement.lang = pack.htmlLang;
  document.title = pack.titleMap[document.title] || document.title;
  document.querySelectorAll("[aria-label]").forEach((el) => {
    el.setAttribute("aria-label", replaceExactText(el.getAttribute("aria-label")));
  });
  document.querySelectorAll("[title]").forEach((el) => {
    el.setAttribute("title", replaceExactText(el.getAttribute("title")));
  });
  document.querySelectorAll("[placeholder]").forEach((el) => {
    el.setAttribute("placeholder", replaceExactText(el.getAttribute("placeholder")));
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".notranslate, [translate='no']")) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const original = node.nodeValue;
    const trimmed = original.trim();
    const translated = pack.staticText[trimmed];
    if (translated) node.nodeValue = original.replace(trimmed, translated);
  });
}

function initLanguageSwitcher() {
  const lang = currentLang();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const target = button.getAttribute("data-lang");
    button.classList.toggle("active", target === lang);
    button.addEventListener("click", () => {
      if (target === currentLang()) return;
      localStorage.setItem("repairmate.lang", target);
      location.reload();
    });
  });
}

function setActiveNav() {
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === file || (file === "" && href === "index.html"));
  });
}

function showModal(title, body, actionText = ui("ok")) {
  let modal = document.querySelector("#modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-panel">
        <h3 data-modal-title></h3>
        <p class="muted" data-modal-body></p>
        <div class="button-row">
          <button class="btn" data-modal-close></button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.matches("[data-modal-close]")) modal.classList.remove("open");
    });
  }
  modal.querySelector("[data-modal-title]").textContent = title;
  modal.querySelector("[data-modal-body]").textContent = body;
  modal.querySelector("[data-modal-close]").textContent = actionText;
  modal.classList.add("open");
}

function initHome() {
  const status = document.querySelector("[data-home-status]");
  if (!status) return;
  const profile = RM.getProfile();
  status.textContent = profile.name
    ? ui("profileReady", profile.name, profile.district)
    : ui("noProfile");
}

function initGuides() {
  const guideRoot = document.querySelector("[data-guide-root]");
  if (!guideRoot) return;
  const topic = RM.qs("topic") || "part1";
  const guide = RM.guides[topic] || RM.guides.washer;

  document.querySelectorAll("[data-topic-tab]").forEach((tab) => {
    const key = tab.getAttribute("data-topic-tab");
    tab.classList.toggle("active", key === topic);
    tab.addEventListener("click", () => {
      location.href = `guide.html?topic=${key}`;
    });
  });

  guideRoot.innerHTML = `
    <div class="grid-2 guide-top-grid">
      <article class="card">
        <p class="eyebrow">${[guide.category, guide.risk].filter(Boolean).join(" / ")}</p>
        <h1>${guide.title}</h1>
        <p class="lead">${guide.intro}</p>
        <h3 style="margin-top:18px">${ui("suggestedTools")}</h3>
        <p class="muted">${guide.tools.join(currentLang() === "en" ? ", " : "、")}</p>
      </article>
      <article class="card guide-visual-card">
        <h3>${ui("repairDiagram")}</h3>
        ${guide.heroImage ? `<img class="guide-photo" src="${guide.heroImage}" alt="${guide.title}">` : `<div class="repair-illustration ${topic}">
          <span class="repair-device"></span>
          <span class="repair-marker m1">1</span>
          <span class="repair-marker m2">2</span>
          <span class="repair-marker m3">3</span>
          <span class="repair-callout c1">${guide.steps[0].title}</span>
          <span class="repair-callout c2">${guide.steps[1].title}</span>
          <span class="repair-callout c3">${guide.steps[2].title}</span>
        </div>`}
        <div class="visual-caption">
          <strong>${guide.steps[0].title}</strong>
          <p class="muted">${guide.steps[0].body}</p>
        </div>
      </article>
    </div>
    <div class="guide-steps">
      ${guide.steps.map((step) => `<div class="guide-step"><div><h3>${step.title}</h3><p>${step.body}</p><span>${step.tip}</span></div></div>`).join("")}
    </div>
    ${guide.sourceSections ? `<div class="source-guide">
      ${guide.sourceSections.map((section) => section.type === "facts"
        ? `<article class="card source-section source-facts"><h3>${section.title}</h3><ul class="clean-list">${section.items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`
        : section.type === "text"
          ? `<article class="card source-section source-text"><div><h3>${section.title}</h3><p class="muted">${section.body}</p>${section.tip ? `<p class="source-tip"><strong>TIP：</strong>${section.tip}</p>` : ""}</div></article>`
          : `<article class="card source-section"><img src="${section.image}" alt="${section.title}"><div><h3>${section.title}</h3><p class="muted">${section.body}</p>${section.tip ? `<p class="source-tip"><strong>TIP：</strong>${section.tip}</p>` : ""}</div></article>`).join("")}
    </div>` : ""}
    <div class="grid-3 detail-grid">
      <article class="card">
        <h3>${ui("commonSymptoms")}</h3>
        <ul class="clean-list">${guide.symptoms.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h3>${ui("visualFocus")}</h3>
        <div class="mini-diagram">
          <span class="diagram-main"></span>
          <span class="diagram-point p1"></span>
          <span class="diagram-point p2"></span>
          <span class="diagram-line"></span>
        </div>
        <p class="muted">${ui("visualFocusBody")}</p>
      </article>
      <article class="card warning-card">
        <h3>${ui("openAgent")}</h3>
        <ul class="clean-list">${guide.warnings.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    </div>
    <div class="card">
      <h3>${ui("nextStep")}</h3>
      <p class="muted">${guide.cta}</p>
      <div class="button-row">
        <a class="btn brick" href="call.html?topic=${topic}">${ui("callRepair")}</a>
        <a class="btn secondary" href="agent.html?topic=${topic}">${ui("callHuman")}</a>
      </div>
    </div>
  `;
}

function initAgent() {
  const form = document.querySelector("[data-agent-form]");
  if (!form) return;
  const config = RM.getConfig();
  const endpointInput = document.querySelector("#agentEndpoint");
  const savedEndpoint = config.agentEndpoint || "";
  const answer = document.querySelector("[data-agent-answer]");
  const stage = document.querySelector(".agent-stage");
  const video = document.querySelector("#cameraPreview");
  const image = document.querySelector("#imagePreview");
  const overlay = document.querySelector(".ar-overlay");
  const emptyStage = stage.querySelector("[data-empty-stage]");
  const uploadStatus = document.querySelector("[data-upload-status]");
  let imageObjectUrl = "";
  if (endpointInput) endpointInput.value = savedEndpoint;

  const topic = RM.qs("topic");
  if (topic && RM.guides[topic]) {
    document.querySelector("#faultText").value = ui("agentPrompt", RM.guides[topic].title);
  }

  document.querySelector("#imageUpload").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (imageObjectUrl) URL.revokeObjectURL(imageObjectUrl);
    imageObjectUrl = URL.createObjectURL(file);
    if (uploadStatus) uploadStatus.textContent = ui("reading", file.name);

    image.onload = () => {
      image.style.display = "block";
      video.style.display = "none";
      emptyStage.style.display = "none";
      overlay.style.display = "block";
      if (uploadStatus) uploadStatus.textContent = ui("imageUnsupported");
      answer.textContent = ui("uploadReady");
    };

    image.onerror = () => {
      image.style.display = "none";
      video.style.display = "none";
      emptyStage.style.display = "block";
      emptyStage.textContent = ui("imageUnsupported");
      overlay.style.display = "none";
      if (uploadStatus) uploadStatus.textContent = ui("uploaded", file.name);
      answer.textContent = ui("imageUnsupportedAnswer");
      URL.revokeObjectURL(imageObjectUrl);
      imageObjectUrl = "";
    };

    image.src = imageObjectUrl;
    video.style.display = "none";
  });

  document.querySelector("[data-start-camera]").addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
      video.srcObject = stream;
      video.style.display = "block";
      image.style.display = "none";
      emptyStage.style.display = "none";
      overlay.style.display = "block";
      if (uploadStatus) uploadStatus.textContent = ui("cameraOn");
      answer.textContent = ui("cameraReady");
    } catch (error) {
      showModal(ui("cameraFailTitle"), ui("cameraFailBody"));
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const endpoint = endpointInput ? endpointInput.value.trim() : savedEndpoint;
    const payload = {
      text: document.querySelector("#faultText").value.trim(),
      scene: document.querySelector("#sceneType").value,
      profile: RM.getProfile(),
      requestedAt: new Date().toISOString()
    };
    RM.saveConfig({ agentEndpoint: endpoint });
    answer.textContent = ui("analyzing");

    if (!endpoint) {
      window.setTimeout(() => {
        answer.textContent = ui("demoAnswer", payload.scene);
      }, 550);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({ text: "" }));
      answer.textContent = data.answer || data.text || JSON.stringify(data, null, 2);
    } catch (error) {
      answer.textContent = ui("agentFail", error.message);
    }
  });
}

function initCall() {
  const form = document.querySelector("[data-call-form]");
  if (!form) return;
  const topic = RM.qs("topic");
  if (topic && RM.guides[topic]) document.querySelector("#repairIssue").value = RM.guides[topic].title;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const request = Object.fromEntries(new FormData(form).entries());
    request.id = `RM-${Date.now().toString().slice(-6)}`;
    request.status = "front-end-demo";
    localStorage.setItem("repairmate.lastCall", JSON.stringify(request));
    showModal(ui("requestTitle"), ui("requestBody", request.id), ui("viewQueue"));
  });
}

function initProfile() {
  const form = document.querySelector("[data-profile-form]");
  if (!form) return;
  const cloudStatus = document.querySelector("[data-cloud-status]");
  const endpointInput = document.querySelector("#cloudEndpoint");
  const config = RM.getConfig();
  const profile = RM.getProfile();
  const savedEndpoint = config.cloudEndpoint || "";
  if (endpointInput) endpointInput.value = savedEndpoint;

  ["name", "phone", "district", "address", "homeType", "memberPlan"].forEach((key) => {
    const input = form.elements[key];
    if (input) input.value = profile[key] || "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    RM.saveProfile(data);
    if (cloudStatus) cloudStatus.textContent = ui("profileSavedStatus");
  });

  const syncButton = document.querySelector("[data-sync-cloud]");
  if (!syncButton) return;

  syncButton.addEventListener("click", async () => {
    const endpoint = endpointInput ? endpointInput.value.trim() : savedEndpoint;
    const data = Object.fromEntries(new FormData(form).entries());
    RM.saveProfile(data);
    RM.saveConfig({ cloudEndpoint: endpoint });

    if (!endpoint) {
      showModal(ui("profileSavedTitle"), ui("profileSavedBody"));
      return;
    }

    if (cloudStatus) cloudStatus.textContent = ui("syncing");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: data, updatedAt: new Date().toISOString() })
      });
      if (cloudStatus) cloudStatus.textContent = res.ok ? ui("syncSuccess") : ui("syncReturned", res.status);
    } catch (error) {
      if (cloudStatus) cloudStatus.textContent = ui("syncFail", error.message);
    }
  });
}

function initPayment() {
  const config = RM.getConfig();
  const endpointInput = document.querySelector("#paymentEndpoint");
  const savedEndpoint = config.paymentEndpoint || "";
  if (endpointInput) endpointInput.value = savedEndpoint;

  document.querySelectorAll("[data-pay-plan]").forEach((button) => {
    button.addEventListener("click", async () => {
      const endpoint = endpointInput ? endpointInput.value.trim() : savedEndpoint;
      RM.saveConfig({ paymentEndpoint: endpoint });
      const payload = {
        plan: button.getAttribute("data-pay-plan"),
        planLabel: button.closest(".card")?.querySelector("h3")?.textContent.trim() || button.getAttribute("data-pay-plan"),
        amount: Number(button.getAttribute("data-amount")),
        currency: "HKD",
        profile: RM.getProfile()
      };

      if (!endpoint) {
        showModal(ui("payTitle"), ui("payBody", payload.planLabel, RM.money(payload.amount)), ui("done"));
        return;
      }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (data.checkoutUrl) {
          location.href = data.checkoutUrl;
        } else {
          showModal(ui("payCalled"), ui("payCalledBody", res.status));
        }
      } catch (error) {
        showModal(ui("payFail"), error.message);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLocalizedGuides();
  applyStaticLanguage();
  initLanguageSwitcher();
  setActiveNav();
  initHome();
  initGuides();
  initAgent();
  initCall();
  initProfile();
  initPayment();
});
