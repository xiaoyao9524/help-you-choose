<script setup lang="ts"></script>

<template>
  <div class="rendom-select">
    <el-row>
     <el-button>新增</el-button>
    </el-row>
    <el-space wrap>
      <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" type="text">Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </el-card>
    </el-space>
  </div>
</template>

<style></style>
