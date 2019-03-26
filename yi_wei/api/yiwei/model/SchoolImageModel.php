<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/26
 * Time: 20:12
 */
namespace api\yiwei\model;
use think\Model;
use think\Db;
class SchoolImageModel extends Model{
    protected $table = 'cmf_yw_school_image';

    //BZS
    public function getSchoolImageById($school_id){
        $imageList=SchoolImageModel::where('school_id',$school_id)->column('image_url');
        return $imageList;
    }
}