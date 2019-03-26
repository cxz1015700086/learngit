<?php
/**
 * Created by PhpStorm.
 * User: 52917
 * Date: 2019/3/20
 * Time: 20:58
 */
namespace api\yiwei\controller;

use api\yiwei\model\ServiceModel;
use cmf\controller\RestBaseController;

class ServiceController extends RestBaseController
{
    /**
     * zwl
     * @api  {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/service/add_service  增加业务
     * @apiVersion 1.0.0
     * @apiGroup Service
     * @apiName  add_service
     * @apiParam {String} title 业务标题
     *@apiParam {String}  content 业务内容
     * @apiParam {String}  image_url 照片地址
     * @apiParam {int}  is_selected 是否精选套餐
     */
    public function add_service()
    {
        $p=$this->request->param();
        $model = new ServiceModel();
        $title = $p['title'];
        $content = $p['content'];
        $image_url = $p['image_url'];
        $is_selected = $p['is_selected'];
        $data = $model->add_service($title, $content, $image_url,$is_selected);
       $this->success('增加业务成功');


    }

    /**
     * zwl
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/service/delete_service 删除业务
     * @apiVersion 1.0.0
     * @apiGroup Service
     * @apiName  delete_service
     * @apiParam {int}  service_id 所删业务id

     */
    public function delete_service()
    {
        $model = new ServiceModel();
        $p=$this->request->param();
        $service_id = $p['service_id'];
        $data = $model->delete_service($service_id);
        $this->success('删除业务成功');

    }

    /**
     * zwl
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/service/update_service 更新业务
     * @apiVersion 1.0.0
     * @apiGroup Service
     * @apiName  update_service
     * @apiParam {int} service_id 业务id
     * @apiParam {String} title 业务标题
     *@apiParam {String}  content 业务内容
     * @apiParam {String}  image_url 照片地址
     * @apiParam {int}  is_selected 是否精选套餐
     *
     */
    public function update_service()
    {
        $model = new ServiceModel();
        $p=$this->request->param();
        $service_id = $p['service_id'];
        $title = $p['title'];
        $content = $p['content'];
        $image_url = $p['image_url'];
        $is_selected=$p['is_selected'];
        $data = $model->update_service($service_id, $title, $content, $image_url,$is_selected);
        $this->success('更改业务成功');

    }

    /**
     * zwl
     * @api  {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/service/all_service 获取所有业务
     * @apiVersion 1.0.0
     * @apiGroup Service
     * @apiName  all_service
     *
     * @apiSuccess {int} service_id 业务ID
     * @apiSuccess {String} title  标题
     * @apiSuccess {String} content  业务介绍
     * @apiSuccess {String} image_url  图片地址
     * @apiSuccess {int} is_selected  是否精选套餐
     */
    public function all_service()
    {
        $model = new ServiceModel();
        $services = $model->all_service();
        $this->success('请求成功!', ['services' => $services]);
    }

    /**
     * zwl
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/service/query_service 获取所需业务
     * @apiVersion 1.0.0
     * @apiGroup Service
     * @apiName  query_service
     * @apiParam {int}  service 所查找业务ID
     * @apiSuccess {int} service_id 业务ID
     * @apiSuccess {String} title  标题
     * @apiSuccess {String} content  业务介绍
     * @apiSuccess {String} image_url  图片地址
     * @apiSuccess {int} is_selected  是否精选套餐
     */
    public function query_service()
    {
        $model = new ServiceModel();
        $p=$this->request->param();
        $service_id = $p['service_id'];
        $services = $model->query_service($service_id);
        $this->success('请求成功!', ['services' => $services]);
    }

    /**
     * zwl
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/service/selected_service 获取精选套餐
     * @apiVersion 1.0.0
     * @apiGroup Service
     * @apiName  selected_service
     * @apiSuccess {int} service_id 业务ID
     * @apiSuccess {String} title  标题
     * @apiSuccess {String} content  业务介绍
     * @apiSuccess {String} image_url  图片地址
     * @apiSuccess {int} is_selected  是否精选套餐
     */
    public function selected_service()
    {
        $model = new ServiceModel();
        $services = $model->selected_service();
        $this->success('请求成功!', ['services' => $services]);
    }
}