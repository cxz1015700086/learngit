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
     * @apiParam {String} school_id 学校ID
     *
     * @apiSuccess {Object[]} school 学校
     * @apiSuccess {int} school.school_id 学校ID
     * @apiSuccess {String} school.s_name  学校名
     * @apiSuccess {String} school.s_introduction  学校介绍
     * @apiSuccessExample {json} Success-School:
     *     "data":{
     *       "school":{
     *              "school_id":1,
     *              "s_name":"集美大学",
     *              "s_introduction":"集美极美"
     *                }
     *             }
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
     * @apiSuccess {Object[]} school 学校
     * @apiSuccess {int} school.school_id 学校ID
     * @apiSuccess {String} school.s_name  学校名
     * @apiSuccessExample {json} Success-School:
     *     "data":{
     *        "school":[
     *             {"school_id":1,"s_name":"集美大学"},
     *             {"school_id":2,"s_name":"厦门大学"}]
     *           }
     */
    public function schoolAll(){
        $sModel=new SchoolModel();
        $school=$sModel->getAllSchool();
        $this->success('请求成功!', ['school'=>$school]);
    }

    /**
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/showhome/schoolBySearch 查询学校
     * @apiVersion 1.0.0
     * @apiGroup ShowHome
     * @apiName  schoolBySearch
     *
     * @apiParam {String} search 搜索内容
     *
     * @apiSuccess {Object[]} school 学校
     * @apiSuccess {int} school.school_id 学校ID
     * @apiSuccess {String} school.s_name  学校名
     * @apiSuccessExample {json} Success-School:
     *     "data":{
     *        "school":[
     *             {"school_id":1,"s_name":"集美大学"},
     *             {"school_id":2,"s_name":"厦门大学"}]
     *           }
     */
    public function schoolBySearch(){
        $p=$this->request->param();
        $input=$p['search'];
        $sModel=new SchoolModel();
        $school=$sModel->getSchoolBySearch($input);
        $this->success('请求成功!', ['school'=>$school]);
    }
}