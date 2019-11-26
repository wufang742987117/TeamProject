<template>
  <div class="page_vessel headBod">
    <!-- logo-->
    <a href="javascript://" class="headLogo">
      <img src="../../assets/images/icon/projectLogo_1.png">
    </a>
    <!-- nav-->
    <div class="headNav">
      <a href="javascript://" class="navHover">首页</a>
      <a href="javascript://">交易专区</a>
      <a href="javascript://">新闻资讯</a>
      <a href="javascript://">企业公告</a>
      <a href="javascript://">上币申请</a>
      <a href="javascript://">客户端下载</a>
    </div>
    <!-- 用户信息-->
    <div class="userList">
      <!-- 未登录 -->
      <div class="userHide" style="display: none;">
        <a href="javascript://">登录</a>
        <a href="javascript://" class="bg_0">注册</a>
      </div>
      <!-- 已登录-->
      <div class="userShow">
        <a href="javascript://" class="userName">我的账户<i class="el-icon-caret-bottom"></i></a>
        <!-- 用户信息弹出框-->
        <div class="userInfo">
          <div class="residual">
            <a href="javascript://" class="redHover">持仓</a>
            <a href="javascript://">保证金</a>
            <p class="color_0">
              <font>¥</font><label>0.00</label>
            </p>
          </div>
          <div class="recharge">
            <a href="javascript://" class="bg_0">充值</a>
            <a href="javascript://" class="color_0">提现</a>
          </div>
          <div class="navEj">
            <ul>
              <li><a href="javascript://">我的账户</a></li>
              <li><a href="javascript://">交易记录</a></li>
              <li><a href="javascript://">我要开户</a></li>
              <li><a href="javascript://">邀请记录</a></li>
            </ul>
          </div>
          <div class="infoBtn">
            <a href="javascript://">安全设置</a>
            <a href="javascript://">邀请码</a>
            <a href="javascript://">退出</a>
          </div>
        </div>
      </div>
      <a href="javascript://" class="userDown">下载</a>
      <!-- 下载二维码 -->
      <div class="downEwm" style="display:none ;">
        <div>
          <img src="../../assets/images/img/ewm_img.png">
          <label>Android</label>
        </div>
        <div>
          <img src="../../assets/images/img/ewm_img.png">
          <label>IOS</label>
        </div>
      </div>
      <a href="javascript://" class="userEn">简体中文<i class="el-icon-caret-bottom"></i></a>
      <!-- 国际化 -->
      <div class="enGjh" style="display:none ;">
        <label>简体中文</label>
        <label>English</label>
      </div>
    </div>
    <!-- <el-select @change="langChange" placeholder="请选择" v-model='value'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zh',
          label: '中文'
        }, {
          value: 'en',
          label: 'English'
        }],
        value: localStorage.lang || 'zh'
      }
    },
    methods: {
      //语言切换
      langChange(e) {
        localStorage.setItem('lang', e);
        this.value = e;
        this.$i18n.locale = e;
        //          window.location.reload()
      }
    }
  }
</script>
<style>
  @import '../../assets/css/public.css';
  @import '../../assets/css/Head_Footer.css';
</style>
