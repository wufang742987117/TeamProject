<template>
  <div class="page_vessel logReg_bg">
    <!-- 上边框 -->
    <div class="borderTop"></div>
    <!-- 表单-->
    <div class="logReg_bod">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark lR_title">注册</div>
        </el-col>
      </el-row>
      <!-- TAB -->
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark lR_tab">
            <a href="javasript://" class="lrTab_hover">手机注册<label></label></a>
            <a href="javasript://">邮箱注册<label></label></a>
          </div>
        </el-col>
      </el-row>
      <!-- 推荐人-->
      <el-row class="lRlist">
        <el-col :span="24" class="listInput">
          <label class="placeholder">推荐人ID或手机号</label>
          <el-input v-model="referrer" clearable></el-input>
        </el-col>
      </el-row>
      <!-- 手机号 -->
      <el-row class="lRlist phoneList">
        <el-col :span="8" class="phL_left">
          <div class="grid-content bg-purple">
            <el-select v-model="Phcode" placeholder="+86">
              <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                <label style="width: 260px; display: inline-block;">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </label>
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="16" class="listInput">
          <div class="grid-content bg-purple">
            <label class="placeholder">手机号</label>
            <el-input v-model="phone" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <!-- 验证码 -->
      <el-row class="lRlist">
        <el-col :span="16" class="listInput">
          <div class="grid-content bg-purple">
            <label class="placeholder">6位验证码</label>
            <el-input v-model="verification" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="8" class="vifRight">
          <div class="grid-content bg-purple codeStatus">
            <el-button type="primary">发送验证码</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- 密码 -->
      <el-row class="lRlist">
        <el-col :span="24" class="listInput">
          <label class="placeholder">输入密码</label>
          <!-- 密码强度提示-->
          <div class="pwdLv"><span class="lvHover"></span><span></span><span></span></div>
          <el-input v-model="pwd1" show-password></el-input>
        </el-col>
      </el-row>
      <!-- 确认密码 -->
      <el-row class="lRlist">
        <el-col :span="24" class="listInput">
          <label class="placeholder">确认密码</label>
          <el-input v-model="pwd2" show-password></el-input>
        </el-col>
      </el-row>
      <!-- 服务条款-->
      <el-row class="lRlist">
        <el-col :span="24" class="listCheck">
          <span>点击“立即注册”表示同意并理解</span>
          <a href="javascript://" class="color_0" style="font-size: 14px">《服务及隐私条款》</a>
        </el-col>
      </el-row>
      <!-- 注册、错误提示-->
      <el-row class="lRbtn">
        <!-- 错误提示-->
        <div class="fromErr" style="display: none;">错误提示</div>
        <!-- 注册-->
        <el-button type="primary" class="regBtn">立即注册</el-button>
      </el-row>
      <!-- 去登录-->
      <el-row class="lRlogin">
        <a href="/#/login" class="color_0">已有账号，去登录</a>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        referrer: '',
        phone: '',
        verification: '',
        pwd1: '',
        pwd2: '',
        checked: true,
        cities: [{
          value: '+86',
          label: '中国'
        }, {
          value: '+037',
          label: '美国'
        }, {
          value: '+19',
          label: '日本'
        }, {
          value: '+37',
          label: '英国'
        }, {
          value: '+021',
          label: '德国'
        }],
        Phcode: ''
      }
    }
  }
</script>

<style src="../../assets/css/Login_Register.css">
  /*@import '../../assets/css/Login_Register.css';*/
</style>
