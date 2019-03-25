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
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/showhome/schoolshow 校园展示介绍
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
        $school_id=$p['school_id'];
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

    /**
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/showhome/schoolall 所有校园列表
     * @apiVersion 1.0.0
     * @apiGroup ShowHome
     * @apiName  schoolAll
     *
     * @apiSuccess {int} school_id  学校ID
     * @apiSuccess {String} s_name  学校名
     *
     */
    public function schoolAll(){
        $sModel=new SchoolModel();
        $school=$sModel->getAllSchool();
        $this->success('请求成功!', ['school'=>$school]);
    }
}