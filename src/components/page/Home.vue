<template>
  <div class="page_vessel">
    <!-- banner -->
    <el-row>
      <el-col :span="24">
        <div class="home_banner">
          <!-- banner切换内容区域-->
           <!--<div class="hBanner_1">
							
           </div>-->
           <el-carousel :interval="5000" height="100%">
				      <el-carousel-item v-for="item in 4" :key="item">
				        <h3 class="small">{{ item }}</h3>
				      </el-carousel-item>
				    </el-carousel>
        </div>
      </el-col>
    </el-row>

    <!-- 公告 -->
    <el-row class="notice_bg">
      <el-row class="notice_list">
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
    <el-row class="trading_content">
      <el-row class="width_1200">
        <!-- 涨跌幅 -->
        <el-col :span="24" class="priceLimit">
          <ul>
            <li>
              <h2><b>BTC</b>/<b>USDT</b></h2>
              <span class="color_red">9277.890000</span>
              <span>Vol:225845235</span>
              <label class="bg_red">0.74%</label>
            </li>
            <li>
              <h2><b>EOS</b>/<b>CNT</b></h2>
              <span class="color_red">9277.890000</span>
              <span>Vol:225845235</span>
              <label class="bg_red">0.74%</label>
            </li>
            <li>
              <h2><b>VOLLAR</b>/<b>CNT</b></h2>
              <span class="color_green">9277.890000</span>
              <span>Vol:225845235</span>
              <label class="bg_green">- 0.74%</label>
            </li>
            <li>
              <h2><b>ZT</b>/<b>CNT</b></h2>
              <span class="color_red">9277.890000</span>
              <span>Vol:225845235</span>
              <label class="bg_red">0.74%</label>
            </li>
            <li>
              <h2><b>BTC</b>/<b>CNT</b></h2>
              <span class="color_green">9277.890000</span>
              <span>Vol:225845235</span>
              <label class="bg_green">- 0.74%</label>
            </li>
          </ul>
        </el-col>
        <!-- 列表-->
        <el-col :span="24" class="tradingList">
          <!-- TAB -->
          <el-col :span="24" class="tListTab">
            <a href="javascript://">EHE</a>
            <a href="javascript://" class="bg_0">DAA</a>
            <a href="javascript://">PRE-STO</a>
          </el-col>
          <!-- 表头 -->
          <el-col :span="24" class="tListTitle">
            <el-col :span="5" class="title_el"><a href="javascript://">{{$t('message.HOME_TRADE_AREA_1')}}</a></el-col>
            <el-col :span="3" class="title_el"><a href="javascript://">{{$t('message.HOME_TRADE_AREA_2')}}</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">{{$t('message.HOME_TRADE_AREA_3')}}</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">{{$t('message.HOME_TRADE_AREA_4')}}</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">{{$t('message.HOME_TRADE_AREA_5')}}</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">{{$t('message.HOME_TRADE_AREA_6')}}</a></el-col>
          </el-col>
          <!-- 数据 -->
          <el-col :span="24">
            <el-col :span="24" class="tListNum">
              <el-col :span="5" class="num_el">
                <a href="javascript://"></a>
                <h2><b>BTC</b><b>CNT</b></h2>
              </el-col>
              <el-col :span="3" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span class="color_green">-2.60%</span>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>1852045241</span>
              </el-col>
            </el-col>
            <el-col :span="24" class="tListNum">
              <el-col :span="5" class="num_el">
                <a href="javascript://"></a>
                <h2><b>BTC</b><b>CNT</b></h2>
              </el-col>
              <el-col :span="3" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span class="color_green">-2.60%</span>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>1852045241</span>
              </el-col>
            </el-col>
            <el-col :span="24" class="tListNum">
              <el-col :span="5" class="num_el">
                <a href="javascript://"></a>
                <h2><b>BTC</b><b>CNT</b></h2>
              </el-col>
              <el-col :span="3" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span class="color_red">+3.78%</span>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>1852045241</span>
              </el-col>
            </el-col>
            <el-col :span="24" class="tListNum">
              <el-col :span="5" class="num_el">
                <a href="javascript://"></a>
                <h2><b>BTC</b><b>CNT</b></h2>
              </el-col>
              <el-col :span="3" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span class="color_red">+3.78%</span>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>1852045241</span>
              </el-col>
            </el-col>
            <el-col :span="24" class="tListNum">
              <el-col :span="5" class="num_el">
                <a href="javascript://"></a>
                <h2><b>BTC</b><b>CNT</b></h2>
              </el-col>
              <el-col :span="3" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>0.003182</span>
                <label>≈ ¥0.0032</label>
              </el-col>
              <el-col :span="4" class="num_el">
                <span class="color_green">-0.94%</span>
              </el-col>
              <el-col :span="4" class="num_el">
                <span>1852045241</span>
              </el-col>
            </el-col>
          </el-col>
          <!-- 查看更多 -->
          <el-col :span="24" class="numMore">
            <a href="javascript://">{{$t('message.HOME_TRADE_AREA_BOT')}}>></a>
          </el-col>
        </el-col>
      </el-row>
    </el-row>

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
    <el-row class="specialist">
      <!-- 进度条 -->
      <el-row class="progressBar">
        <div class="bg_0"></div>
      </el-row>
      <!-- 介绍 -->
      <el-row class="specialistJs">
        <a href="javascript://" class="prev"></a>
        <div class="specialistBod">
          <div class="speFonts">
            {{$t('message.HOME_SPEC_TITLE_1')}}</br>
            {{$t('message.HOME_SPEC_TITLE_2')}}</br>
            {{$t('message.HOME_SPEC_TITLE_3')}}</br>
            {{$t('message.HOME_SPEC_TITLE_4')}}</div>
          <div class="speName">
            <label>XXX</label>
            <span>AICHINA CEO</span>
          </div>
        </div>
        <a href="javascript://" class="next"></a>
      </el-row>
    </el-row>

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
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
  @import '../../assets/css/home.css';
  .el-carousel__item h3 {
    color: #475669;
    font-size: 30px;
    opacity: 0.75;
    line-height: 650px;
    margin: 0;
    text-align: center;
  }
  .el-carousel__arrow {

  }
</style>
