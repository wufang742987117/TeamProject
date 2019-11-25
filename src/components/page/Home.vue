<template>
  <div class="page_vessel">
    <!-- banner -->
    <el-row>
      <el-col :span="24">
        <div class="home_banner">
          <!-- banner切换内容区域-->
           <div class="hBanner_1">
              
           </div>
        </div>
      </el-col>
    </el-row>

    <!-- 公告 -->
    <el-row class="notice_bg">
      <el-row class="notice_list">
        <el-col :span="21" class="notice_href">
          <a href="javascript://">关于系统升级维护以及CNY兑换的公告兑换的公告兑换的公告</a>
          <a href="javascript://">关于系统升级维护以及CNY兑换的公告</a>
          <a href="javascript://">关于系统升级维护以及CNY兑换的公告</a>
          <a href="javascript://">关于系统升级维护以及CNY兑换的</a>
        </el-col>
        <el-col :span="3" class="notice_more">
          <a href="javascript://">更多公告>></a>
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
            <a href="javascript://">大宗专区</a>
          </el-col>
          <!-- 表头 -->
          <el-col :span="24" class="tListTitle">
            <el-col :span="5" class="title_el"><a href="javascript://">交易对</a></el-col>
            <el-col :span="3" class="title_el"><a href="javascript://">最新价</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">24H最高价</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">24H最低价</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">涨跌幅</a></el-col>
            <el-col :span="4" class="title_el"><a href="javascript://">24H成交量</a></el-col>
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
            <a href="javascript://">查看更多>></a>
          </el-col>
        </el-col>
      </el-row>
    </el-row>

    <!-- 平台特色-->
    <el-row class="feature">
      <el-row class="width_1200">
        <h1 class="featureT1">全球领先的区块链交易平台</h1>
        <h3 class="featureT2">AI CHINA是由国际资本联合全球区块链顶尖技术团队共同打造</h3>
        <el-row class="width_1200 feature_bod">
          <el-col :span="6" class="featureLi">
            <h2>安全可靠</h2>
            <label>银行级用户数据加密、动态身份验证，多级风险识别控制，保障交易安全</label>
          </el-col>
          <el-col :span="6" class="featureLi">
            <h2>简单快捷</h2>
            <label>无冗长助记词，轻松记住密码 注册下载一站通，整个流程为业内最快</label>
          </el-col>
          <el-col :span="6" class="featureLi">
            <h2>高效方便</h2>
            <label>资讯全面，掌握第一手资讯 真区块智能币币兑换功能全球首创</label>
          </el-col>
          <el-col :span="6" class="featureLi">
            <h2>实时服务</h2>
            <label>7×24小时在线客服服务，为用户提供实时、快捷、高效的服务，使用户的交易畅通无阻</label>
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
            “交易所是一个技术比较前沿，系统也非常复杂的市场。</br>
            这对系统的稳定性、安全性要求极高，需要庞大的技术团队做长期的支持。</br>
            这一点ChainUP给了我们很多帮助，成为我们的强大后盾，</br>
            团队专业、敬业、高效，是值得信赖的伙伴！”</div>
          <div class="speName">
            <label>王志多</label>
            <span>AICHINA CEO</span>
          </div>
        </div>
        <a href="javascript://" class="next"></a>
      </el-row>
    </el-row>

    <!-- 新闻资讯 -->
    <el-row class="news">
      <el-row class="width_1200">
        <h1 class="newsTitle">新闻资讯</h1>
        <ul class="newsList">
          <li>
            <div class="newsImg"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574423620314&di=48b6e7c6a26c5e0c315edcae018e75ac&imgtype=0&src=http%3A%2F%2Fwww.gov.cn%2Fxinwen%2F2016-09%2F26%2F5112310%2Fimages%2Fc457090f1708468fb295b079e4f11ab7.jpg"></div>
            <div class="newsTit">法学教授：美国不需要加密货币 只需要升级系统</div>
            <div class="newsFont">今天，美国参议院银行、住房和城市事务委员会将就数字货币和区块链的监管话题举办听证会。加州大学欧文分校法学院的法学教授Mehrsa Baradaran将在本</div>
            <div class="newsTime">[2019-07-30 12:14]</div>
          </li>
          <li>
            <div class="newsImg"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574423643479&di=7a7e68c27ca3c014c2918f398c792121&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F574ddb5egw1eqosahw1m6j20pa0g00w3.jpg"></div>
            <div class="newsTit">如果比特币是一家上市公司 福布斯排行榜它能排</div>
            <div class="newsFont">按市值计算，最大的加密货币比特币无法跻身全球十大最有价值公司之列。比特币很大，但是有 49 家公司比它更大根据 Coinmarketcap 数据，截至 7 月 30 日</div>
            <div class="newsTime">[2019-07-30 12:14]</div>
          </li>
          <li>
            <div class="newsImg"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574423699499&di=96fe38c9739ddbf1cf733b5fc1008b31&imgtype=0&src=http%3A%2F%2Fhimg2.huanqiu.com%2Fattachment2010%2F2016%2F1225%2F18%2F31%2F20161225063103280.jpg"></div>
            <div class="newsTit">金融时报：Facebook的Libra将使“热钱”更泛 …</div>
            <div class="newsFont">英国金融时报称，Facebook提出的加密货币Libra将使热钱更容易在全球范围内流动。热钱（Hot Money），又称游资或投机性短期资金，热钱的目的在于用尽量</div>
            <div class="newsTime">[2019-07-30 12:14]</div>
          </li>
        </ul>
        <div class="newsMore">
          <el-button type="primary" class="newsMoreBtn">更多资讯</el-button>
        </div>
      </el-row>
    </el-row>

    <!-- 下载APP-->
    <el-row class="downloadApp">
      <el-row class="width_1200">
        <h1 class="dwnTit">随时随地，指尖下载</h1>
        <label class="dwnFont">下载APP，随时随地查看行情，轻松交易快人一步</label>
        <div class="dwnBtn">
          <div class="btnDown"><i></i><span>Android 下载</span></div>
          <div class="btnDown"><i></i><span>IOS 下载</span></div>
        </div>
        </el-row>
    </el-row>

    <!-- 注册-->
    <el-row class="register">
      <el-row class="width_1200">
        <el-row class="regTit">
          注册AICHINA全球站账号 开启数字货币之旅
        </el-row>
        <el-row class="regPhone">
          <input type="text" placeholder="输入你的邮箱或者手机号" />
          <el-button type="primary" class="regBtn">注册</el-button>
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
</style>
