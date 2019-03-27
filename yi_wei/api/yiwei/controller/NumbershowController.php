<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/27
 * Time: 20:47
 */
namespace api\yiwei\controller;
use cmf\controller\RestBaseController;
use api\yiwei\model\CardModel;
class NumbershowController extends RestBaseController{

    /**
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/numbershow/randomShow 随机号码
     * @apiVersion 1.0.0
     * @apiGroup Numbershow
     * @apiName  randomShow
     * @apiSuccess  {Objectp[]} randomNum 随机号码
     * @apiSuccess {int} randomNum.card_id 卡ID
     * @apiSuccess {String} randomNum.card_number  卡号码
     * @apiSuccess {int} randomNum.card_status 卡状态
     * @apiSuccessExample {json} Success-RandomNum:
     * "data":{
     *       "randomNum":[
     *            {"card_id":1,"card_number":"17326611259","card_status":0},
     *            {"card_id":3,"card_number":"13023399881","card_status":0}
     *         }
     */
    public function randomShow(){
        $card=new CardModel();
        $numberData=$card->allNum();
        //$randomNum=$card->allNum();
        $number=$numberData->toArray();
        $rand=array_rand ($number,10);
        $randomNum=array();
        foreach ($rand as $n) {
            $num =$number[$n];
            array_push($randomNum, $num);
        }
        $this->success('请求成功!', ['randomNum'=>$randomNum]);
    }

    /**
     * zwl
     * @api {GET} http://47.106.132.24/yi_wei/public/api.php/yiwei/numbershow/query_number 筛选号码
     * @apiVersion 1.0.0
     * @apiGroup Numbershow
     * @apiName  query_service
     * @apiParam {int}  number 所查找的数字
     * @apiSuccess {int} card_id 卡ID
     * @apiSuccess {String} card_number  卡号码
     * @apiSuccess {int} card_status 卡状态
     */
    public function query_number()
    {
        $model = new CardModel();
        $p=$this->request->param();
        $number= $p['number'];
        $numbers = $model->query_number($number);
        $this->success('请求成功!', ['numbers' => $numbers]);
    }

}