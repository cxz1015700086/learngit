<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/28
 * Time: 21:08
 */
namespace api\yiwei\controller;

use cmf\controller\RestBaseController;
use api\yiwei\model\CardModel;
use api\yiwei\model\PersonalModel;
use api\yiwei\model\WhiteorderModel;
use api\yiwei\model\SchoolorderModel;
class OrdercreationController extends RestBaseController{
    /**
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/ordercreation/placeOrder  号卡下单
     * @apiVersion 1.0.0
     * @apiGroup Ordercreation
     * @apiName  placeOrder
     *
     * @apiParam {String} p_tel 联系电话
     * @apiParam {String} p_name 姓名
     * @apiParam {String} p_school 学校
     * @apiParam {String} p_idnum 身份证号码
     * @apiParam {String} so_name 校园卡订单_姓名
     * @apiParam {String} so_tel 校园卡订单_联系电话
     * @apiParam {String} so_school 校园卡订单_学校
     * @apiParam {String} so_address 校园卡订单_宿舍地址
     * @apiParam {String} wo_name 小白卡订单_收件人姓名
     * @apiParam {String} wo_tel 小白卡卡订单_收件人联系电话
     * @apiParam {String} wo_address 小白卡订单_收件地址
     * @apiParam {String} card_id  号卡ID
     * @apiParam  {String} active  卡类别
     *
     */
    public function placeOrder(){
        $data=$this->request->param();
        $dataOne=$data['data1'];
        $dataTwo=$data['data2'];
        $cardM=new CardModel();
        $myCard=$cardM->getCardStatus($dataTwo['card_id']);
        $status=$myCard->toArray();
        if($status['card_status']=='0'){
            $myCard->card_status = '1';
            $myCard->save();
            $person=new PersonalModel();
            $id=rand(1,1000);
            $person->data([
                'personal_id'=>$id,
                'p_name'=>$dataOne['p_name'],
                'p_tel'=>$dataOne['p_tel'],
                'p_school'=>$dataOne['p_school'],
                'p_idnum'=>$dataOne['p_idnum']
                // ''=>$dataOne[''],
            ]);
            $person->save();
            $white=new WhiteorderModel();
            $school=new SchoolorderModel();
            if($dataOne['active']=='0'){
                $this->save_white_order($dataTwo,$id);
            }else{
                $this->save_school_order($dataTwo,$id);
            }

        }else{
            $this->error('下单失败');
        }

    }
    public function save_white_order($data,$personal_id){
        $sModel=new WhiteorderModel();
        $sModel->wo_id=date('Ymd') . str_pad(mt_rand(1, 99999), 5, '0', STR_PAD_LEFT);
        $sModel->wo_name=$data['wo_name'];
        $sModel->wo_tel=$data['wo_tel'];
        $sModel->wo_address=$data['wo_address'];
        $sModel->card_id=$data['card_id'];
        $sModel->personal_id=$personal_id;
        $sModel->wo_time=date("Y-m-d H:i:s");
        $sModel->save();
    }
    public function save_school_order($data,$personal_id){
        $sModel=new SchoolorderModel();
        $sModel->so_id=date('Ymd') . str_pad(mt_rand(1, 99999), 5, '0', STR_PAD_LEFT);
        $sModel->so_name=$data['so_name'];
        $sModel->so_tel=$data['so_tel'];
        $sModel->so_school=$data['so_school'];
        $sModel->so_address=$data['so_address'];
        $sModel->card_id=$data['card_id'];
        $sModel->personal_id=$personal_id;
        $sModel->so_time=date("Y-m-d H:i:s");
        $sModel->save();
    }
}