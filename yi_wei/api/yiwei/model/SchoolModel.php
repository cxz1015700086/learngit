<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/20
 * Time: 19:29
 */
namespace api\yiwei\model;
use think\Model;
class SchoolModel extends Model{
    protected $table = 'cmf_yw_school';

    //BZS
    public function getSchool($school_id){
        $school=SchoolModel::get(['school_id'=>$school_id]);
        return $school;
    }
}
