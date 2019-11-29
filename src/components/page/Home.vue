<template>
  <div class="page_vessel">
    <!-- banner -->
    <el-row>
      <el-col :span="24">
        <div class="home_banner">
          <el-carousel :interval="500000" height="100%">
            <el-carousel-item v-for="v in bannerData" :key="v.id" :style=" {backgroundImage:'url('+v.img_url+')'}"
              class="wh50">

            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>

    <!-- 公告 -->
    <el-row class="notice_bg">
      <el-row class="notice_list width_1200">
        <el-col :span="21" class="notice_href">
          <a href="javascript://">{{$t('message.HOME_NOTICE_1')}}</a>
          <a href="javascript://">{{$t('message.HOME_NOTICE_1')}}</a>
          <a href="javascript://">{{$t('message.HOME_NOTICE_1')}}</a>
          <a href="javascript://">{{$t('message.HOME_NOTICE_1')}}</a>
        </el-col>
        <el-col :span="3" class="notice_more">
          <a href="javascript://">{{$t('message.HOME_MORE')}}>></a>
        </el-col>
      </el-row>
    </el-row>

    <!-- 交易对 -->
    <trade-view></trade-view>

    <!-- 平台特色-->
    <el-row class="feature">
      <el-row class="width_1200">
        <h1 class="featureT1">{{$t('message.HOME_FETURE_TITLE')}}</h1>
        <h3 class="featureT2">{{$t('message.HOME_FETURE_TIP')}}</h3>
        <el-row class="width_1200 feature_bod">
          <el-col :span="6" class="featureLi">
            <h2>{{$t('message.HOME_FETURE_1')}}</h2>
            <label>{{$t('message.HOME_FETURE_1_tip')}}</label>
          </el-col>
          <el-col :span="6" class="featureLi">
            <h2>{{$t('message.HOME_FETURE_2')}}</h2>
            <label>{{$t('message.HOME_FETURE_2_tip')}}</label>
          </el-col>
          <el-col :span="6" class="featureLi">
            <h2>{{$t('message.HOME_FETURE_3')}}</h2>
            <label>{{$t('message.HOME_FETURE_3_tip')}}</label>
          </el-col>
          <el-col :span="6" class="featureLi">
            <h2>{{$t('message.HOME_FETURE_4')}}</h2>
            <label>{{$t('message.HOME_FETURE_4_tip')}}</label>
          </el-col>
        </el-row>
      </el-row>
    </el-row>

    <!-- 专家介绍-->
    <specia-list></specia-list>

    <!-- 新闻资讯 -->
    <el-row class="news">
      <el-row class="width_1200">
        <h1 class="newsTitle">{{$t('message.HEAD_NEWS')}}</h1>
        <ul class="newsList">
          <li>
            <div class="newsImg"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574423620314&di=48b6e7c6a26c5e0c315edcae018e75ac&imgtype=0&src=http%3A%2F%2Fwww.gov.cn%2Fxinwen%2F2016-09%2F26%2F5112310%2Fimages%2Fc457090f1708468fb295b079e4f11ab7.jpg"></div>
            <div class="newsTit">{{$t('message.HOME_NEWS_1')}}</div>
            <div class="newsFont">{{$t('message.HOME_NEWS_1_TIP')}}</div>
            <div class="newsTime">[2019-07-30 12:14]</div>
          </li>
          <li>
            <div class="newsImg"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574423643479&di=7a7e68c27ca3c014c2918f398c792121&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F574ddb5egw1eqosahw1m6j20pa0g00w3.jpg"></div>
            <div class="newsTit">{{$t('message.HOME_NEWS_2')}}</div>
            <div class="newsFont">{{$t('message.HOME_NEWS_2_TIP')}}</div>
            <div class="newsTime">[2019-07-30 12:14]</div>
          </li>
          <li>
            <div class="newsImg"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574423699499&di=96fe38c9739ddbf1cf733b5fc1008b31&imgtype=0&src=http%3A%2F%2Fhimg2.huanqiu.com%2Fattachment2010%2F2016%2F1225%2F18%2F31%2F20161225063103280.jpg"></div>
            <div class="newsTit">{{$t('message.HOME_NEWS_3')}}</div>
            <div class="newsFont">{{$t('message.HOME_NEWS_3_TIP')}}</div>
            <div class="newsTime">[2019-07-30 12:14]</div>
          </li>
        </ul>
        <div class="newsMore">
          <el-button type="primary" class="newsMoreBtn">{{$t('message.HOME_NEWS_MORE')}}</el-button>
        </div>
      </el-row>
    </el-row>

    <!-- 下载APP-->
    <el-row class="downloadApp">
      <el-row class="width_1200">
        <h1 class="dwnTit">{{$t('message.HOME_DOWN_TITLE')}}</h1>
        <label class="dwnFont">{{$t('message.HOME_DOWN_TIP')}}</label>
        <div class="dwnBtn">
          <div class="btnDown"><i></i><span>Android {{$t('message.HEAD_DOWNWRAP')}}</span></div>
          <div class="btnDown"><i></i><span>IOS {{$t('message.HEAD_DOWNWRAP')}}</span></div>
        </div>
      </el-row>
    </el-row>

    <!-- 注册-->
    <el-row class="register">
      <el-row class="width_1200">
        <el-row class="regTit">
          {{$t('message.HOME_RE_TITLE')}}
        </el-row>
        <el-row class="regPhone">
          <input type="text" :placeholder="$t('message.HOME_RE_TIP')" />
          <el-button type="primary" class="regBtn">{{$t('message.HEAD_REGISTER')}}</el-button>
        </el-row>
      </el-row>
    </el-row>

  </div>
</template>

<script>
  /* 交易显示区域*/
  import TradeView from '@/components/home/tradeView'
  import SpeciaList from '@/components/home/speciaList'
  import {
    REST
  } from 'api'
  import bus from '../../assets/eventBus'
  export default {
    components: {
      TradeView,
      SpeciaList
    },
    data() {
      return {
        bannerData: [],
        language: localStorage.lang || 'zh',
      }
    },
    methods: {
      getBanner: function(l) {
        let _this = this;
        REST.getCarouselList(l).then(function(res) {
          _this.bannerData = res.data.result.data;
          _this.bannerData.forEach(function(item, index) {
            console.log(item);
          });
        })
      }
    },
    created: function() {
      this.getBanner(this.language);
    },
    mounted: function() {
      let _this = this;
      bus.$on("languages", function(msg) {
        _this.language = msg;
        _this.getBanner(_this.language);
      })


    }
  }
</script>

<style scoped src="../../assets/css/home.css">
  /*@import '../../assets/css/home.css';*/
</style>
