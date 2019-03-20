<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2017 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: pl125 <xskjs888@163.com>
// +----------------------------------------------------------------------

namespace api\yiwei\controller;

use cmf\controller\RestBaseController;

class IndexController extends RestBaseController
{
    /**
     * @api {GET} http://yiwei.com/api/yiwei/index/index 添加用户需求
     * @apiVersion 1.0.0
     * @apiHeader {String} XX-Device-Type 说明登录的设备.
     * @apiHeader {String} XX-Token token
     * @apiGroup test
     * @apiName  mytesttwo
     *
     * @apiSuccess {Object} code 返回码
     * @apiSuccess {Object} reason  中文解释
     * @apiSuccess {String[]} data  返回数据
     *
     */
    public function index()
    {
        $this->success('请求成功!', ['test'=>'test']);
    }
}