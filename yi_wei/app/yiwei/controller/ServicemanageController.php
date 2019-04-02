<?php
/**
 * Created by PhpStorm.
 * User: 52917
 * Date: 2019/4/2
 * Time: 19:00
 */

namespace app\yiwei\controller;
use cmf\controller\HomeBaseController;
use api\yiwei\model\ServiceModel;
class ServicemanageController extends HomeBaseController
{
    public function index(){}
    public function serviceQuery(){

        $model = new ServiceModel();
        $services = $model->all_service();
        $this->assign('services',$services);
        return  view();
    }
}