<?php
/**
 * Created by PhpStorm.
 * User: laijie
 * Date: 2018/2/26
 * Time: 下午11:04
 *                              _ooOoo_
 *                             o8888888o
 *                             88" . "88
 *                             (| -_- |)
 *                             O\  =  /O
 *                          ____/`---'\____
 *                        .'  \\|     |//  `.
 *                       /  \\|||  :  |||//  \
 *                      /  _||||| -:- |||||-  \
 *                      |   | \\\  -  /// |   |
 *                      | \_|  ''\---/''  |   |
 *                      \  .-\__  `-`  ___/-. /
 *                    ___`. .'  /--.--\  `. . __
 *                 ."" '<  `.___\_<|>_/___.'  >'"".
 *                | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *                \  \ `-.   \_ __\ /__ _/   .-` /  /
 *           ======`-.____`-.___\_____/___.-`____.-'======
 *                              `=---='
 *           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                      佛祖保佑        永无BUG
 *             佛曰:
 *                    写字楼里写字间，写字间里程序员；
 *                    程序人员写程序，又拿程序换酒钱。
 *                    酒醒只在网上坐，酒醉还来网下眠；
 *                    酒醉酒醒日复日，网上网下年复年。
 *                    但愿老死电脑间，不愿鞠躬老板前；
 *                    奔驰宝马贵者趣，公交自行程序员。
 *                    别人笑我忒疯癫，我笑自己命太贱；
 *                    不见满街漂亮妹，哪个归得程序员？
 */

namespace App\Admin\Controllers;

use App\User;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Grid;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\ModelForm;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrController extends Controller
{
    use ModelForm;

    /**
     * Index interface.
     *
     *
     */
    public function index()
    {
        return view('admin.qr');
//          Admin::grid(User::class, function(Grid $grid) {
//            $grid->picture()->image($qr,100,100);

//            $grid->name('生成签到码')->display(function ($name) {
//                return "<span class='label'>$name</span>";
//                return " QrCode::format('png')->generate('haha'), 'QrCode.png', 'image/png'); ";
//            });
//        });
//        return $grid = Admin::grid(User::class, function(Grid $grid){
//
//            $grid->name()->display(function ($name) {
//                return "<span class='label'>$name</span>";
//            });
//        });

    }
}


