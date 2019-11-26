<template>
    <div class="page_vessel footerBod">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple">
                <!-- logo -->
                <div class="footerLogo">
                  <img src="../../assets/images/icon/projectLogo_2.png">
                </div>
                <!-- 公司名称-->
                <div class="companyTitle">
                  <label>创世代资产交易平台</label>
                </div>
                <!-- 微信、微博二维码-->
                <div class="social">
                  <a href="javascript://" class="wxIcon"></a>
                  <a href="javascript://" class="wbIcon"></a>
                </div>
                <!-- 备案号-->
                <div class="varchar">
                  <label>上海绝顶服务有限公司</label>
                  <label>沪ICP备17025462号</label>
                </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-row :gutter="20">
                <el-col :span="6" class="footerList">
                  <div class="grid-content bg-purple">
                    <h1>专业服务</h1>
                    <label><a href="javascript://">伊贺财经</a></label>
                    <label><a href="javascript://">12小时区</a></label>
                    <label><a href="javascript://">24小时区</a></label>
                    <label><a href="javascript://">客服服务</a></label>
                  </div>
                </el-col>
                <el-col :span="6" class="footerList">
                  <div class="grid-content bg-purple">
                    <h1>专业工具</h1>
                    <label><a href="javascript://">客户端下载</a></label>
                    <label><a href="javascript://">帮助中心</a></label>
                  </div>
                </el-col>
                <el-col :span="6" class="footerList">
                  <div class="grid-content bg-purple">
                    <h1>关于平台</h1>
                    <label><a href="javascript://">关于我们</a></label>
                    <label><a href="javascript://">意见反馈</a></label>
                    <label><a href="javascript://">上币申请</a></label>
                    <label><a href="javascript://">加入我们</a></label>
                  </div>
                </el-col>
                <el-col :span="6" class="footerList">
                  <div class="grid-content bg-purple">
                    <h1>条款说明</h1>
                    <label><a href="javascript://">用户协议</a></label>
                    <label><a href="javascript://">隐私条款</a></label>
                    <label><a href="javascript://">法律声明</a></label>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <!-- 24H电话-->
        <div class="phoneNum bg_0">
          <label>24H {{$t('message.FOOTER_PHONE')}}</label>
          <label>400-000-1752</label>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
