<template>
	<div>
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
	            {{$t('message.HOME_SPEC_TITLE_1')}}<br>
	            {{$t('message.HOME_SPEC_TITLE_2')}}<br>
	            {{$t('message.HOME_SPEC_TITLE_3')}}<br>
	            {{$t('message.HOME_SPEC_TITLE_4')}}</div>
	          <div class="speName">
	            <label>XXX</label>
	            <span>AICHINA CEO</span>
	          </div>
	        </div>
	        <a href="javascript://" class="next"></a>
	      </el-row>
	    </el-row>
	</div>
</template>

<script>
</script>

<style scoped src='../../assets/css/speciaList.css'></style>
