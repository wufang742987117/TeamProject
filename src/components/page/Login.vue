<template>
  <div class="page_vessel logReg_bg">
    <!-- 上边框 -->
    <div class="borderTop"></div>
    <!-- 表单-->
    <div class="logReg_bod">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark lR_title">登录</div>
        </el-col>
      </el-row>
      <!-- 用户名-->
      <el-row class="lRlist">
        <el-col :span="24" class="listInput">
          <label class="placeholder">用户名</label>
          <el-input v-model="userName" clearable></el-input>
        </el-col>
      </el-row>
      <!-- 密码 -->
      <el-row class="lRlist">
        <el-col :span="24" class="listInput">
          <label class="placeholder">密码</label>
          <el-input v-model="pwd" show-password></el-input>
        </el-col>
      </el-row>
      <!-- 服务条款-->
      <el-row class="lRlist">
        <el-col :span="24" class="pwdNo">
          <a href="javascript://" class="color_0">忘记密码？</a>
        </el-col>
      </el-row>
      <!-- 登录、错误提示-->
      <el-row class="lRbtn">
        <!-- 错误提示-->
        <div class="fromErr" style="display: none;">错误提示</div>
        <!-- 登录-->
        <el-button type="primary" class="regBtn">登 录</el-button>
      </el-row>
      <!-- 去登录-->
      <el-row class="lRlogin">
        <a href="/register" class="color_0">没有账号，去注册</a>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        pwd: ''
      }
    }
  }
</script>

<style>
  @import '../../assets/css/Login_Register.css';
</style>
