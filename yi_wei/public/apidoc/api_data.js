define({ "api": [
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
          }
        ]
      }
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
          }
        ]
      }
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
