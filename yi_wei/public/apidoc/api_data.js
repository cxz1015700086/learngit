define({ "api": [
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
