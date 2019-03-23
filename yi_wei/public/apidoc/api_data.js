define({ "api": [
  {
    "type": "GET",
    "url": "http://yiwei.com/api/yiwei/Showhome/schoolShow",
    "title": "校园展示介绍",
    "version": "1.0.0",
    "group": "ShowHome",
    "name": "schoolShow",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "school_id",
            "description": "<p>学校ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "s_name",
            "description": "<p>学校名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "s_introduction",
            "description": "<p>学校介绍</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/ShowhomeController.php",
    "groupTitle": "ShowHome"
  },
  {
    "type": "GET",
    "url": "http://yiwei.com/api/yiwei/index/index",
    "title": "添加用户需求",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "XX-Device-Type",
            "description": "<p>说明登录的设备.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "XX-Token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "group": "test",
    "name": "mytesttwo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "code",
            "description": "<p>返回码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reason",
            "description": "<p>中文解释</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "api/yiwei/controller/IndexController.php",
    "groupTitle": "test"
  }
] });