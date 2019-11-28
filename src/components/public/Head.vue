<template>
  <div class="page_vessel headBod">
    <!-- logo-->
    <a href="/#/" class="headLogo">
      <img src="../../assets/images/icon/projectLogo_1.png">
    </a>
    <!-- nav-->
    <div class="headNav">
      <a href="javascript://" class="navHover">{{$t('message.HEAD_INDEX')}}</a>
      <a href="javascript://">{{$t('message.HEAD_TRADE')}}</a>
      <a href="javascript://">{{$t('message.HEAD_NEWS')}}</a>
      <a href="javascript://">{{$t('message.HEAD_NOTICE')}}</a>
      <a href="javascript://">{{$t('message.HEAD_APPLY')}}</a>
      <a href="javascript://">{{$t('message.HEAD_DOWN')}}</a>
    </div>
    <!-- 用户信息-->
    <div class="userList">
      <!-- 未登录 -->
      <div class="userHide" v-show='!token'>
        <a href="/#/login">{{$t('message.HEAD_LOGIN')}}</a>
        <a href="/#/register" class="bg_0">{{$t('message.HEAD_REGISTER')}}</a>
      </div>
      <!-- 已登录-->
      <div class="userShow" v-show='token'>
        <a href="javascript://" class="userName">{{$t('message.HEAD_ACCOUNT')}}<i class="el-icon-caret-bottom"></i></a>
        <!-- 用户信息弹出框-->
        <div class="userInfo">
          <div class="residual">
            <a href="javascript://" @click="setActive(1)" :class="{'redHover':isActive==1}">{{$t('message.HEAD_CHIZCANG')}}</a>
            <a href="javascript://" @click="setActive(2)" :class="{'redHover':isActive==2}">{{$t('message.HEAD_BZJ')}}</a>
            <p class="color_0" v-show='isActive==1'>
              <font>¥</font><label>0.00</label>
            </p>
            <p class="color_0" v-show='isActive==2'>
              <font>¥</font><label>3.33</label>
            </p>
          </div>
          <div class="recharge">
            <a href="javascript://" class="bg_0">{{$t('message.HEAD_RECHARGE')}}</a>
            <a href="javascript://" class="color_0">{{$t('message.HEAD_WITHDRAW')}}</a>
          </div>
          <div class="navEj">
            <ul>
              <li><a href="javascript://">{{$t('message.HEAD_ACCOUNT')}}</a></li>
              <li><a href="javascript://">{{$t('message.HEAD_TRADE_HISTORY')}}</a></li>
              <li><a href="javascript://">{{$t('message.HEAD_KAIHU')}}</a></li>
              <li><a href="javascript://">{{$t('message.HEAD_YAOQING')}}</a></li>
            </ul>
          </div>
          <div class="infoBtn">
            <a href="javascript://">{{$t('message.HEAD_SETTING')}}</a>
            <a href="javascript://">{{$t('message.HEAD_CODE')}}</a>
            <a href="javascript://" @click='goOut()'>{{$t('message.HEAD_OUT')}}</a>
          </div>
        </div>
      </div>
      <div class="down-wrap" @mouseover="showDownTp()" @mouseout="hideDownTp()">
        <a href="javascript://" class="userDown">{{$t('message.HEAD_DOWNWRAP')}}</a>
      </div>

      <!-- 下载二维码 -->
      <div class="downEwm" v-show="down" @mouseover="showDownBt()" @mouseout="hideDownBt()">
        <div>
          <img src="../../assets/images/img/ewm_img.png">
          <label>Android</label>
        </div>
        <div>
          <img src="../../assets/images/img/ewm_img.png">
          <label>IOS</label>
        </div>
      </div>
      <div class="down-wrap" @mouseover="showTranslateTp()" @mouseout="hideTranslateTp()">
        <a href="javascript://" class="userEn">
          {{language | languageStatus}}
          <i class="el-icon-caret-bottom"></i></a>
      </div>

      <!-- 国际化 -->
      <div class="enGjh" v-show="translate" @mouseover="showTranslateBt()" @mouseout="hideTranslateBt()">
        <label :class="{'active':language=='zh'}" @click="langChange('zh')">简体中文</label>
        <label :class="{'active':language=='en'}" @click="langChange('en')">English</label>
        <label :class="{'active':language=='jp'}" @click="langChange('jp')">日本語</label>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/eventBus'
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
        down: false,
        downTop: false,
        downBot: false,
        translate: false,
        translateTop: false,
        translateBot: false,
        language: localStorage.lang || 'zh',
        token: false,
        isActive: 1
      }
    },
    filters: {
      languageStatus(type) {
        if (type == 'zh') {
          return '简体中文'
        } else if (type == 'en') {
          return 'English'
        } else if (type == 'jp') {
          return '日本語'
        }
      }
    },
    methods: {
      //语言切换
      langChange(e) {
        localStorage.setItem('lang', e);
        this.language = e;
        this.$i18n.locale = e;
        bus.$emit('languages', e);
        //          window.location.reload()
      },
      showDownTp() {
        this.downTop = true;
        this.down = true;
      },
      showDownBt() {
        this.downBot = true;
        this.down = true;
      },
      hideDownTp() {
        this.downTop = false
        if (this.downBot == false) {
          this.down = false;
        }
      },
      hideDownBt() {
        this.downBot = false;
        if (this.downTop == false) {
          this.down = false;
        }
      },

      showTranslateTp() {
        this.translateTop = true;
        this.translate = true;
      },
      showTranslateBt() {
        this.translateBot = true;
        this.translate = true;
      },
      hideTranslateTp() {
        this.translateTop = false
        if (this.translateBot == false) {
          this.translate = false;
        }
      },
      hideTranslateBt() {
        this.translateBot = false;
        if (this.translateTop == false) {
          this.translate = false;
        }
      },
      login() {
        this.token = true;
      },
      goOut() {
        this.token = false;
      },
      setActive(i) {
        this.isActive = i;
      }

    }
  }
</script>
<style>
  @import '../../assets/css/Head_Footer.css';
</style>
