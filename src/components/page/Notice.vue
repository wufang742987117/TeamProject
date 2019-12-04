<template>
  <div class="page_vessel">
    <!-- banner -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark newsBg">
          <div class="width_1200 newsTab">
            <a href="/#/news">新闻资讯</a>
            <a href="javascript://" class="nTabHover">企业公告</a>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="width_1200 newsNotice">
      <el-row>
        <!-- 公告列表 -->
        <el-col :span="17">
          <div class="grid-content bg-purple newsBod">
            <div class="noticeList noticeList1">
              <ul>
                <li @click="gotoNoticeDetails">
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">波场TRON转账数突破1亿个</h1>
                  <p class="content">根据TRONSCAN波场区块链浏览器最新数据显示，波场TRON转账数达到101855068，突破1亿个。波场TRON各项数据一直稳中前进，波场生态逐渐强大的同时，也将迎来更多交易量，助力区块链技术真正实现价值落地
                    ……</p>
                  <label class="time">2019/12/03 15:34</label>
                </li>
                <li @click="gotoNoticeDetails">
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">加密货币分析师：等待比特币再跌10%的投资者“玩错了游戏”</h1>
                  <p class="content">据DailyHODL报道，加密货币分析师Rekt
                    Capital今日指出，比特币价格在经历了过去两轮减半后大幅飙升(3420%和4080%)。至于等待比特币再跌10%的投资者，Rekt表示，他们“玩错了游戏”，可能会错过在下一轮牛市到来之前积累比特币的机会
                    ……</p>
                  <label class="time">2019/12/01 10:21</label>
                </li>
                <li @click="gotoNoticeDetails">
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">BTC高点逐步下移 反复测试支撑破位在即</h1>
                  <p class="content">分析师K神表示，首先，周线阴线收低，币价连续下探录得两连阴，价格维持短期均线下方，周线依旧是空头趋势，连续两周受到5周均线8800-9000附近的压制，此位是空头防守点，10周均线与20周均线保持向下排列
                    ……</p>
                  <label class="time">2019/11/24 17:39</label>
                </li>
                <li @click="gotoNoticeDetails">
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">湖州市市长钱三雄：湖州将努力构建区块链应用发展的先发优势</h1>
                  <p class="content">11月17日，2019国际区块链大会在浙江德清举办。湖州市委副书记、市长钱三雄表示，湖州将结合自身基础的优势，全力推进区块链与互联网、云计算、大数据、人工智能等信息技术的融合，推动区块链技术应用于新能源汽车
                    ……</p>
                  <label class="time">2019/11/21 08:47</label>
                </li>
                <li @click="gotoNoticeDetails">
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">多数主流币前底颈线支撑位测试有效 但市场仍缺乏上破量能</h1>
                  <p class="content">根据OKEx现货显示，截至欧盘开始，BTC暂报价8447.6美元（-0.91%）。
                    总结上周主流币市场走势，前底颈线位置的支撑强度已获得市场验证，OKEx分析师Neo认为，币价多次获得支撑也意味着大量多头在该位置有很强的承接能力，但需要注意的是承接力较强只是相对市场稳定时的状态
                    ……</p>
                  <label class="time">2019/11/20 11:21</label>
                </li>
                <li @click="gotoNoticeDetails">
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">区块链板块收涨1.18% 数字货币板块收涨2.01%</h1>
                  <p class="content">A股收盘，上证指数收涨0.62%，区块链板块收涨1.18%，数字货币板块收涨2.01%。区块链板块中195只概念股中，139只上涨，46只为跌，10只平盘，其中天夏智慧等6个股票涨停，无跌停个股。数字货币板块31只概念股中，25只上涨，6只下跌
                    ……</p>
                  <label class="time">2019/11/20 11:21</label>
                </li>
              </ul>
            </div>
          </div>
          <!-- 分页-->
          <div class="pageFy">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </el-col>

        <!-- 热门资讯，显示10条，按浏览量排序-->
        <el-col :span="7">
          <div class="grid-content bg-purple-light noticeCent">
            <div class="noticeTitle">
              <label>热门资讯</label>
              <a href="/#/news" class="el-icon-arrow-right"></a>
            </div>
            <div class="hotNews">
              <ul>
                <li>
                  <span>1</span>
                  <a href="/#/newsDetails">法学教授：美国不需要加密货币 只需要升级系统</a>
                </li>
                <li>
                  <span>2</span>
                  <a href="/#/newsDetails">如果比特币是一家上市公司 福布斯排行</a>
                </li>
                <li>
                  <span>3</span>
                  <a href="/#/newsDetails">IMF阿德里安：稳定币应与央行储备挂钩 中国央行很可能全球首发CBDC</a>
                </li>
                <li>
                  <span>4</span>
                  <a href="/#/newsDetails">金色深度丨加密货币衍生品：市场的一个角落还是 市场本身？</a>
                </li>
                <li>
                  <span>5</span>
                  <a href="/#/newsDetails">国信证券金融业首席分析师王剑：央行数字货币会 如何改变我们的生活</a>
                </li>
                <li>
                  <span>6</span>
                  <a href="/#/newsDetails">区块链进入真实房地产 为你带来哪些生活改变？</a>
                </li>
                <li>
                  <span>7</span>
                  <a href="/#/newsDetails">中国网球协会发布国内首张“区块链+物联网”网球运动技术等级评定员</a>
                </li>
                <li>
                  <span>8</span>
                  <a href="/#/newsDetails">嘉楠CEO张楠赓：未来全球芯片中心在中国</a>
                </li>
                <li>
                  <span>9</span>
                  <a href="/#/newsDetails">BiKi创始人Winter：一封致BiKi用户和行业伙伴的公开信</a>
                </li>
                <li>
                  <span>10</span>
                  <a href="/#/newsDetails">2019金色电音节上海站圆满收官</a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
  export default {
    methods: {
      // 跳转公告详情
      gotoNoticeDetails() {
        this.$router.replace('/noticeDetails')
      }
    },

  }
</script>

<style scoped src='../../assets/css/NewsNotice.css'></style>
