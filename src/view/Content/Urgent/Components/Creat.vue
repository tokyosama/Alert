<script lang="ts" setup>
import { inject } from 'vue'
import { Urgent } from '../Urgent'
const instance = inject('instance') as Urgent
const { } = instance.InitStates()

const {
    isShow

} = instance.Creat.InitStates()
instance.Creat.InitHooks()
instance.Creat.Run()
</script>

<template>
    <div class="Create1">
        <el-button @click="instance.Creat.add()">添加</el-button>
        <el-dialog v-model="isShow">
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="isShow = false">Cancel</el-button>
                    <el-button type="primary" @click="isShow = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
@import "./Creat.scss"
</style>