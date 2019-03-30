<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/20
 * Time: 19:29
 */
namespace api\yiwei\model;
use think\Model;
use think\Db;

class SchoolModel extends Model{
    protected $table = 'cmf_yw_school';

    //BZS
    public function getSchool($school_id){
        $school=SchoolModel::get(['school_id'=>$school_id]);
        return $school;
    }

    public function getAllSchool(){
        $result = Db::query('select school_id,s_name from cmf_yw_school');
        //$school=SchoolModel::select('school_id','s_name');
        return $result;
    }
     public function getSchoolBySearch($input){
        $sql="select school_id,s_name from cmf_yw_school where s_name like '%$input%'";
        $result=Db::query($sql);
        return $result;
     }
}
