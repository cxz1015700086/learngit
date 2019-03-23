<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/19
 * Time: 21:50
 */
namespace api\yiwei\controller;

use cmf\controller\RestBaseController;
use api\yiwei\model\SchoolModel;

class ShowhomeController extends RestBaseController
{
    /**
     * @api {GET} http://yiwei.com/api/yiwei/Showhome/schoolShow 校园展示介绍
     * @apiVersion 1.0.0
     * @apiGroup ShowHome
     * @apiName  schoolShow
     *
     * @apiSuccess {int} school_id 学校ID
     * @apiSuccess {String} s_name  学校名
     * @apiSuccess {String} s_introduction  学校介绍
     *
     */
    public function schoolShow()
    {
        $p=$this->request->param();
        $school_id=$p['account'];
        //$school_id=$_POST['account'];
        $school=SchoolModel::get(['school_id'=>$school_id]);
        $sModel=new SchoolModel();
        $school=$sModel->getSchool($school_id);
        if($school!=null)
        {
            $school=$school->toArray();
            $this->success('请求成功!', ['school'=>$school]);
        }else $this->error('请求失败');

    }
}