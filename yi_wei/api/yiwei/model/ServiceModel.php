<?php
/**
 * Created by PhpStorm.
 * User: 52917
 * Date: 2019/3/20
 * Time: 21:07
 */
namespace api\yiwei\model;
use think\Model;
use think\Db;
class ServiceModel extends Model{
        protected $table = 'cmf_yw_service';
    public function add_service($title,$content,$image_url,$is_selected)
    {   $sModel=new ServiceModel;
        $sModel->title=$title;
        $sModel->content=$content;
        $sModel->image_url=$image_url;
        $sModel->is_selected=$is_selected;
        $sModel->save();
    }
    public function delete_service($service_id)
    {
        Db::name('yw_service')->delete($service_id);


    }
    public function update_service($service_id,$title,$content,$image_url,$is_selected)
    {
        $sModel=new ServiceModel;
        $sModel->save([
            'title' => $title,
            'content'    => $content,
            'image_url' =>$image_url,
            'is_selected' =>$is_selected
        ], ['service_id' => $service_id]);

    }
    public function all_service()
    {
       return ServiceModel::all();
    }

    public function query_service($service_id)
    {
       return  ServiceModel::get(['service_id' => $service_id]);

    }
    public function selected_service()
    {
        return  ServiceModel::get(['is_selected' =>1]);

    }
}