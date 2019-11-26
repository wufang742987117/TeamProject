<template>
    <div class="page_vessel footerBod">
        <el-row :gutter="20">
          <el-col :span="8" style="border: 1px solid red;">
            <div class="grid-content bg-purple">
                <!-- logo -->
                <div class="footerLogo">
                  <img src="../../assets/images/icon/projectLogo_1.png">
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
          <el-col :span="16" style="border: 1px solid red;"><div class="grid-content bg-purple">2</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>
