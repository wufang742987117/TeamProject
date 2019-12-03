<template>
  <div class="page_vessel">
    <!-- banner -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark newsBg">
          <div class="width_1200 newsTab">
            <a href="javascript://" class="nTabHover">新闻资讯</a>
            <a href="/#/notice">企业公告</a>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="width_1200 newsNotice">
      <el-row>
        <!-- 新闻列表 -->
        <el-col :span="17">
          <div class="grid-content bg-purple newsBod">
            <el-row :gutter="24" class="newsList">
              <el-col :span="8">
                <div class="grid-content bg-purple newsImg">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575288116882&di=da78b268b624af21a2ce570459e27974&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F130204%2F240459-130204130A567.jpg" />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple newsFonts">
                  <div class="nFheight">
                    <h1>法学教授：美国不需要加密货币 只需要升级系统</h1>
                    <p>今天，美国参议院银行、住房和城市事务委员会将就数字货币和区块链的监管话题举办听证会。加州大学欧文分校……</p>
                  </div>
                  <label class="nFtime">2019/10/21 14:23</label>
                  <label class="nFnum">1275</label>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="24" class="newsList">
              <el-col :span="8">
                <div class="grid-content bg-purple newsImg">

                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple newsFonts">
                  <div class="nFheight">
                    <h1>IMF阿德里安：稳定币应与央行储备挂钩 中国央行 很可能全球首发CBDC</h1>
                    <p>从诞生至今，加密货币（Crypto currency）价值的剧烈波动始终是其致命伤，而后诞生的挂钩美元或其他货币的稳定……</p>
                  </div>
                  <label class="nFtime">2019/10/21 14:23</label>
                  <label class="nFnum">1275</label>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="24" class="newsList">
              <el-col :span="8">
                <div class="grid-content bg-purple newsImg">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575288130128&di=8b0fba74155fd771e2749f69ac534e1b&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F130107%2F235111-13010gf53321.jpg" />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple newsFonts">
                  <div class="nFheight">
                    <h1>金色深度丨加密货币衍生品：市场的一个角落还是 市场本身？</h1>
                    <p>加密货币衍生品“大战”的序幕已经拉开了，就在洲际交易所旗下加密货币Bakkt推出的前一天，芝加哥商品交易所……</p>
                  </div>
                  <label class="nFtime">2019/10/21 14:23</label>
                  <label class="nFnum">1275</label>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="24" class="newsList">
              <el-col :span="8">
                <div class="grid-content bg-purple newsImg">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575285437514&di=6fc82ee336bb200dd4318954d3d05459&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F130107%2F235111-13010GK53311.jpg" />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple newsFonts">
                  <div class="nFheight">
                    <h1>国信证券金融业首席分析师王剑：央行数字货币会 如何改变我们的生活</h1>
                    <p>数字货币是货币演进过程中的最新形式，它的推广可能会对各方面产生影响，尤其对经营货币的商业银行会有重大……</p>
                  </div>
                  <label class="nFtime">2019/10/21 14:23</label>
                  <label class="nFnum">1275</label>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="24" class="newsList">
              <el-col :span="8">
                <div class="grid-content bg-purple newsImg">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575288159233&di=87fe55dfee6c8036f2093581eeeafac7&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F170220%2F330620-1F22005320630.jpg" />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple newsFonts">
                  <div class="nFheight">
                    <h1>金融时报：Facebook的Libra将使“热钱”更泛</h1>
                    <p>英国金融时报称，Facebook提出的加密货币Libra将使热钱更容易在全球范围内流动。热钱（Hot Money），又称游……</p>
                  </div>
                  <label class="nFtime">2019/10/21 14:23</label>
                  <label class="nFnum">1275</label>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 分页-->
          <div class="pageFy">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </el-col>

        <!-- 最新公告，只显示最新5条，时间是分钟/小时/天-->
        <el-col :span="7">
          <div class="grid-content bg-purple-light noticeCent">
            <div class="noticeTitle">
              <label>最新公告</label>
              <a href="javascript://" class="el-icon-arrow-right"></a>
            </div>
            <div class="noticeList">
              <ul>
                <li>
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">Polkadot诸王上线降至，部分交易所DOT期货价格出现暴跌</h1>
                  <label class="time">8 分钟前</label>
                </li>
                <li>
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">中币（ZB）午行情：BTC上涨至8500美元</h1>
                  <label class="time">2 天前</label>
                </li>
                <li>
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">MXC抹茶将于本周三开启“抹茶周三见”社区直播，解答社区疑问</h1>
                  <label class="time">3 天前</label>
                </li>
                <li>
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">区块链板块午后继续拉升，四方金创拉升封板</h1>
                  <label class="time">3 天前</label>
                </li>
                <li>
                  <div class="linellae"></div>
                  <span class="dot"></span>
                  <h1 class="title">TokenInsight数字资产量化大赛全国行将在上海、深圳、成都举行</h1>
                  <label class="time">5 天前</label>
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

</script>

<style scoped src='../../assets/css/NewsNotice.css'></style>
