define({ "api": [
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/numbershow/query_number",
    "title": "筛选号码",
    "version": "1.0.0",
    "group": "Numbershow",
    "name": "query_service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "number",
            "description": "<p>所查找的数字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "card_id",
            "description": "<p>卡ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "card_number",
            "description": "<p>卡号码</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "card_status",
            "description": "<p>卡状态</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/NumbershowController.php",
    "groupTitle": "Numbershow"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/numbershow/randomShow",
    "title": "随机号码",
    "version": "1.0.0",
    "group": "Numbershow",
    "name": "randomShow",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objectp[]",
            "optional": false,
            "field": "randomNum",
            "description": "<p>随机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "randomNum.card_id",
            "description": "<p>卡ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "randomNum.card_number",
            "description": "<p>卡号码</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "randomNum.card_status",
            "description": "<p>卡状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-RandomNum:",
          "content": "\"data\":{\n      \"randomNum\":[\n           {\"card_id\":1,\"card_number\":\"17326611259\",\"card_status\":0},\n           {\"card_id\":3,\"card_number\":\"13023399881\",\"card_status\":0}\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "api/yiwei/controller/NumbershowController.php",
    "groupTitle": "Numbershow"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/ordercreation/placeOrder",
    "title": "号卡下单",
    "version": "1.0.0",
    "group": "Ordercreation",
    "name": "placeOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_tel",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "p_idnum",
            "description": "<p>身份证号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_name",
            "description": "<p>校园卡订单_姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_tel",
            "description": "<p>校园卡订单_联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_school",
            "description": "<p>校园卡订单_学校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_address",
            "description": "<p>校园卡订单_宿舍地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wo_name",
            "description": "<p>小白卡订单_收件人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wo_tel",
            "description": "<p>小白卡卡订单_收件人联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wo_address",
            "description": "<p>小白卡订单_收件地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_id",
            "description": "<p>号卡ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>卡类别</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/OrdercreationController.php",
    "groupTitle": "Ordercreation"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/service/add_service",
    "title": "增加业务",
    "version": "1.0.0",
    "group": "Service",
    "name": "add_service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>业务标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>业务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>照片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_selected",
            "description": "<p>是否精选套餐</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ServiceController.php",
    "groupTitle": "Service"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/service/all_service",
    "title": "获取所有业务",
    "version": "1.0.0",
    "group": "Service",
    "name": "all_service",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "services",
            "description": "<p>业务</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "service_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>业务介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "is_selected",
            "description": "<p>是否精选套餐</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ServiceController.php",
    "groupTitle": "Service"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/service/delete_service",
    "title": "删除业务",
    "version": "1.0.0",
    "group": "Service",
    "name": "delete_service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "service_id",
            "description": "<p>所删业务id</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ServiceController.php",
    "groupTitle": "Service"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/service/query_service",
    "title": "获取所需业务",
    "version": "1.0.0",
    "group": "Service",
    "name": "query_service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "service",
            "description": "<p>所查找业务ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "service_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>业务介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "is_selected",
            "description": "<p>是否精选套餐</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ServiceController.php",
    "groupTitle": "Service"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/service/selected_service",
    "title": "获取精选套餐",
    "version": "1.0.0",
    "group": "Service",
    "name": "selected_service",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "services",
            "description": "<p>业务</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "service_id",
            "description": "<p>业务ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>业务介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "is_selected",
            "description": "<p>是否精选套餐</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ServiceController.php",
    "groupTitle": "Service"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/service/update_service",
    "title": "更新业务",
    "version": "1.0.0",
    "group": "Service",
    "name": "update_service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "service_id",
            "description": "<p>业务id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>业务标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>业务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>照片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_selected",
            "description": "<p>是否精选套餐</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ServiceController.php",
    "groupTitle": "Service"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/showhome/schoolall",
    "title": "所有校园列表",
    "version": "1.0.0",
    "group": "ShowHome",
    "name": "schoolAll",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "school.school_id",
            "description": "<p>学校ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school.s_name",
            "description": "<p>学校名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-School:",
          "content": "\"data\":{\n   \"school\":[\n        {\"school_id\":1,\"s_name\":\"集美大学\"},\n        {\"school_id\":2,\"s_name\":\"厦门大学\"}]\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "api/yiwei/controller/ShowhomeController.php",
    "groupTitle": "ShowHome"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/showhome/schoolBySearch",
    "title": "查询学校",
    "version": "1.0.0",
    "group": "ShowHome",
    "name": "schoolBySearch",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>搜索内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "school.school_id",
            "description": "<p>学校ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school.s_name",
            "description": "<p>学校名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-School:",
          "content": "\"data\":{\n   \"school\":[\n        {\"school_id\":1,\"s_name\":\"集美大学\"},\n        {\"school_id\":2,\"s_name\":\"厦门大学\"}]\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "api/yiwei/controller/ShowhomeController.php",
    "groupTitle": "ShowHome"
  },
  {
    "type": "GET",
    "url": "http://47.106.132.24/yi_wei/public/api.php/yiwei/showhome/schoolshow",
    "title": "校园展示介绍",
    "version": "1.0.0",
    "group": "ShowHome",
    "name": "schoolShow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>学校ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "school.school_id",
            "description": "<p>学校ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school.s_name",
            "description": "<p>学校名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "school.s_introduction",
            "description": "<p>学校介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schoolImage",
            "description": "<p>学校图片</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-School:",
          "content": "\"data\":{\n  \"school\":{\n         \"school_id\":1,\n         \"s_name\":\"集美大学\",\n         \"s_introduction\":\"集美极美\"\n           }，\n   \"schoolImage\":\n         [\"http:\\/\\/img.ccutu.com\\/upload\\/2017-02-22\\/1f8aff81-4033-404b-bb3e-eab726a58b67.jpg\",\n          \"http:\\/\\/img.mp.itc.cn\\/upload\\/20160319\\/e9100b6761504994800015bb8b9c2d99_th.jpg\"]\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "api/yiwei/controller/ShowhomeController.php",
    "groupTitle": "ShowHome"
  }
] });
