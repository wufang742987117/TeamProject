<template>
	<div>
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
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tradingPairsGroupName:[]
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

    }
  }
</script>

<style>
	@import '../../assets/css/tradeView.css';
</style>
