<template>
  <div class="page_vessel" style="background: #000;">
    <!-- 币种列表-->
    <div class="currency">
      <div class="tradeTitle curTit">春残化蝶</div>
      <!-- 表头-->
      <div class="currencyBod">
        <div class="curHead">
          <ul class="curTable">
            <li>
              <label class="curBz">币种</label>
              <label class="curZxj">最新价<span></span></label>
              <label class="curZdf">涨跌<span></span></label>
            </li>
          </ul>
        </div>
        <!-- 列表-->
        <div class="curList">
          <ul class="curTable">
            <!-- 默认选中第一个币种，点击给li添加class=“curAction” -->
            <li class="curAction">
              <a href="javascript://" class="curIconAction">
                <!-- 三种状态，默认icon,class='curIcon';点亮icon,class='curIconAction';未上架icon,class='curIconNo'-->
              </a>
              <label class="curBz">春蚕化蝶</label>
              <label class="curZxj">0.02587423</label>
              <label class="curZdf color_red">0.93%</label>
            </li>
            <li>
              <a href="javascript://" class="curIcon"></a>
              <label class="curBz">府上有龙</label>
              <label class="curZxj">27.2218</label>
              <label class="curZdf color_red">0.49%</label>
            </li>
            <li>
              <a href="javascript://" class="curIcon"></a>
              <label class="curBz">玄冥神掌</label>
              <label class="curZxj">8.6646</label>
              <label class="curZdf color_green">-2.37%</label>
            </li>
            <li>
              <a href="javascript://" class="curIcon"></a>
              <label class="curBz">双喜临门</label>
              <label class="curZxj">4853.01203367</label>
              <label class="curZdf color_red">8.37%</label>
            </li>
            <li>
              <a href="javascript://" class="curIcon"></a>
              <label class="curBz">千龙八部</label>
              <label class="curZxj">430.169</label>
              <label class="curZdf color_green">-2.39%</label>
            </li>
            <li>
              <a href="javascript://" class="curIcon"></a>
              <label class="curBz">一米阳光</label>
              <label class="curZxj">0.365742</label>
              <label class="curZdf color_green">-1.37%</label>
            </li>
            <li>
              <a href="javascript://" class="curIconNo"></a>
              <label class="curBz">一丘之貉</label>
              <label class="curZxj">75.3607</label>
              <label class="curZdf color_red">1.75%</label>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- K线图 -->
    <div class="kCurve">
      <div class="tradeTitle kCurveTit">
        <ul class="kCurveList">
          <li>
            <label class="color_red">175.37</label>
            <label class="kCtlabel_0">≈￥149.34</label>
          </li>
          <li>
            <label class="kCtlabel_1">涨停价</label>
            <label class="color_red">6.45</label>
          </li>
          <li>
            <label class="kCtlabel_1">跌停价</label>
            <label class="color_green">6.45</label>
          </li>
          <li>
            <label class="kCtlabel_1">24H涨跌</label>
            <label class="color_red">2.86%</label>
          </li>
          <li>
            <label class="kCtlabel_1">24H振幅</label>
            <label class="kCtlabel_2">6.44%</label>
          </li>
          <li>
            <label class="kCtlabel_1">24H成交量</label>
            <label class="kCtlabel_2">90572</label>
          </li>
          <li>
            <label class="kCtlabel_1">24H最高价</label>
            <label class="kCtlabel_2">6</label>
          </li>
          <li>
            <label class="kCtlabel_1">24H最低价</label>
            <label class="kCtlabel_2">5.64</label>
          </li>
        </ul>
        <div class="kCurveIcon">
          <el-tooltip class="item kCurAction" effect="dark" content="K线图" placement="bottom">
            <el-button></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="深度图" placement="bottom">
            <el-button></el-button>
          </el-tooltip>
        </div>
      </div>
      <div class="kCurveBod">

      </div>
    </div>


    <!-- 实时交易 -->
    <div class="realTime" >
      <div class="tradeTitle">实时交易</div>
      <div class="realTimeBod">
        <div class="realTimeHead">
          <label>价格</label>
          <label>数量</label>
          <label>时间</label>
        </div>
        <div class="realTimeList">
          <ul>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_red">3.7452</label>
              <label>9.0368</label>
              <label>15:43:02</label>
            </li>
            <li>
              <label class="color_green">3.1296</label>
              <label>57.3652</label>
              <label>15:42:54</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_red">3.7452</label>
              <label>9.0368</label>
              <label>15:43:02</label>
            </li>
            <li>
              <label class="color_green">3.1296</label>
              <label>57.3652</label>
              <label>15:42:54</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_red">3.7452</label>
              <label>9.0368</label>
              <label>15:43:02</label>
            </li>
            <li>
              <label class="color_green">3.1296</label>
              <label>57.3652</label>
              <label>15:42:54</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_red">3.7452</label>
              <label>9.0368</label>
              <label>15:43:02</label>
            </li>
            <li>
              <label class="color_green">3.1296</label>
              <label>57.3652</label>
              <label>15:42:54</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
            <li>
              <label class="color_green">3.2158</label>
              <label>127.3254</label>
              <label>15:44:30</label>
            </li>
            <li>
              <label class="color_red">3.6894</label>
              <label>12.3650</label>
              <label>15:43:47</label>
            </li>
            <li>
              <label class="color_red">3.0258</label>
              <label>123.3690</label>
              <label>15:42:43</label>
            </li>
            <li>
              <label class="color_red">3.1236</label>
              <label>44.1592</label>
              <label>15:43:12</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.9826</label>
              <label>54.4316</label>
              <label>15:44:51</label>
            </li>
            <li>
              <label class="color_green">3.8452</label>
              <label>96.5421</label>
              <label>15:44:49</label>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 盘口 -->
    <div class="handicap">
      <div class="tradeTitle">
        <div class="hcTit">盘口</div>
        <div class="hcTit">
          <a href='javascript://' class="hcTitAction"  onclick="con(1)">盘口</a>
          <a href='javascript://' onclick="con(2)">实时交易</a>
        </div>
      </div>
      <div class="handicapBod">
        <!-- 买 -->
        <!-- 如果是全屏列表显示状态，给下面div添加class=‘bsAllp’的同时，隐藏“卖”列表-->
        <div class="handicapTable buyList ">
          <div class="hcTableTit">
            <label class="color_red">买入</label>
          </div>
          <!-- 默认显示14条数据,全列表显示31条数据-->
          <ul class="hcTableList">
            <li>
              <label class="color_red">4.0035</label>
              <label>747.6521</label>
            </li>
            <li>
              <label class="color_red">4.0036</label>
              <label>1124.3650</label>
            </li>
            <li>
              <label class="color_red">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_red">3.9995</label>
              <label>3.0256</label>
            </li>
            <li>
              <label class="color_red">3.9987</label>
              <label>41.1258</label>
            </li>
            <li>
              <label class="color_red">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_red">4.0035</label>
              <label>747.6521</label>
            </li>
            <li>
              <label class="color_red">4.0036</label>
              <label>1124.3650</label>
            </li>
            <li>
              <label class="color_red">4.0035</label>
              <label>747.6521</label>
            </li>
            <li>
              <label class="color_red">4.0036</label>
              <label>1124.3650</label>
            </li>
            <li>
              <label class="color_red">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_red">3.9995</label>
              <label>3.0256</label>
            </li>
            <li>
              <label class="color_red">3.9987</label>
              <label>41.1258</label>
            </li>
            <li>
              <label class="color_red">4.0021</label>
              <label>82.6842</label>
            </li>
          </ul>
        </div>
        <!-- 表头 -->
        <div class="handicapHead">
          <label>价格</label>
          <label>数量</label>
        </div>
        <!-- 卖 -->
        <!-- 如果是全屏列表显示状态，给下面div添加class=‘bsAllp’的同时，隐藏“买”列表-->
        <div class="handicapTable sellList">
          <!-- 默认显示14条数据,全列表显示31条数据-->
          <ul class="hcTableList">
            <li>
              <label class="color_green">4.0035</label>
              <label>747.6521</label>
            </li>
            <li>
              <label class="color_green">4.0036</label>
              <label>1124.3650</label>
            </li>
            <li>
              <label class="color_green">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_green">3.9995</label>
              <label>3.0256</label>
            </li>
            <li>
              <label class="color_green">4.0035</label>
              <label>747.6521</label>
            </li>
            <li>
              <label class="color_green">4.0036</label>
              <label>1124.3650</label>
            </li>
            <li>
              <label class="color_green">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_green">3.9995</label>
              <label>3.0256</label>
            </li>
            <li>
              <label class="color_green">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_green">3.9987</label>
              <label>41.1258</label>
            </li>
            <li>
              <label class="color_green">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_green">3.9987</label>
              <label>41.1258</label>
            </li>
            <li>
              <label class="color_green">4.0021</label>
              <label>82.6842</label>
            </li>
            <li>
              <label class="color_green">4.0021</label>
              <label>82.6842</label>
            </li>
          </ul>
          <div class="hcTableTit">
            <label class="color_green">卖出</label>
          </div>
        </div>
        <!-- 操作栏 -->
        <div class="handicapCaoz">
          <!-- 上下均分买卖列表-->
          <el-tooltip class="czBtn_1 czBtnAction" effect="dark" content="买卖" placement="bottom">
            <el-button></el-button>
          </el-tooltip>
          <!-- 全部显示买入列表-->
          <el-tooltip class="czBtn_2" effect="dark" content="全买" placement="bottom">
            <el-button></el-button>
          </el-tooltip>
          <!-- 全部显示卖出列表-->
          <el-tooltip class="czBtn_3" effect="dark" content="全卖" placement="bottom">
            <el-button></el-button>
          </el-tooltip>
        </div>
      </div>
    </div>


    <!-- 交易 -->
    <div class="deal">
      <div class="tradeTitle">交易</div>
      <div class="dealBod">
        <!-- 买入-->
        <div class="dealForm">
          <h1 class="dFormTit color_red">买入</h1>
          <ul class="dFormList">
            <li>
              <label class="dFname">价格</label>
              <input type="text" placeholder="0" class="dFinp" />
            </li>
            <li>
              <label class="dFname">数量</label>
              <input type="text" placeholder="0" class="dFinp" />
            </li>
            <li>
              <button class="dFbfb">25%</button>
              <button class="dFbfb bfbAction">50%</button>
              <button class="dFbfb">75%</button>
              <button class="dFbfb">100%</button>
            </li>
            <li>
              <div class="dFnum">
                <label class="dFname">总计</label>
                <label class="color_red">0.0000</label>
                <label class="dFname">可用交易</label>
                <label class="dFky">0.0000</label>
              </div>
            </li>
            <li>
              <button class="dFbtn bg_red">买入</button>
            </li>
          </ul>
        </div>
        <!-- 卖出-->
        <div class="dealForm">
          <h1 class="dFormTit color_green">卖出</h1>
          <ul class="dFormList">
            <li>
              <label class="dFname">价格</label>
              <input type="text" placeholder="0" class="dFinp" />
            </li>
            <li>
              <label class="dFname">数量</label>
              <input type="text" placeholder="0" class="dFinp" />
            </li>
            <li>
              <button class="dFbfb bfbAction">25%</button>
              <button class="dFbfb">50%</button>
              <button class="dFbfb">75%</button>
              <button class="dFbfb">100%</button>
            </li>
            <li>
              <div class="dFnum">
                <label class="dFname">总计</label>
                <label class="color_green">0.0000</label>
                <label class="dFname">可用交易</label>
                <label class="dFky">0.0000</label>
              </div>
            </li>
            <li>
              <button class="dFbtn bg_green">卖出</button>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 委托 -->
    <div class="entrust ">
      <div class="tradeTitle">委托</div>
      <div class="entrustBod">

      </div>
    </div>


  </div>
</template>

<script>

  flag = 'p1';
  function con(i){
    /* document.getElementById(flag).style.display = "none";
       document.getElementById("p" + i).style.display = "inline"; */
       alert(i);
       flag = "p" + i;
  }
</script>

<style scoped src='../../assets/css/trade.css'></style>
