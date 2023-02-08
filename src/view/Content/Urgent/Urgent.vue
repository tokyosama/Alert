<script lang="ts" setup>
import { provide } from 'vue'
import { Urgent } from './Urgent'
import CreatVue from './Components/Creat.vue'

const instance = new Urgent()
provide('instance', instance)
const {
    mapDom,
    tools,
    addAlert

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Urgent">
        <div class="map" ref="mapDom"></div>
        <div class="Tools">
            <div class="item" v-for="i in tools" :key="i.id" @click="instance.x()">
                <img :src="i.icon" alt="">
            </div>
        </div>
        <div class="Create">
            <el-button @click="addAlert = true">
                click
            </el-button>
        </div>
        <el-dialog v-model="addAlert" title="Tips" width="600px">
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="addAlert = false">Cancel</el-button>
                    <el-button type="primary" @click="addAlert = false">
                        Confirm
                    </el-button>
                </div>

            </template>
        </el-dialog>




    </div>
</template>

<style lang="scss" scoped>
@import "./Urgent.scss"
</style>