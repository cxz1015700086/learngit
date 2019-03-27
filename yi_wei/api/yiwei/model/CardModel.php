<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/27
 * Time: 20:53
 */
namespace api\yiwei\model;
use think\Model;

class CardModel extends Model{
    protected $table = 'cmf_yw_card';

    public function allNum(){
        $number=CardModel::all(['card_status'=>0]);
        //$number=$number->toArry();
        //dump($number);
        return $number;
    }
    public function query_number($number){
        $sql="select * from cmf_yw_card where card_number like '%$number%'";
        $numbers=Db::query($sql);
        return $numbers;
    }
}