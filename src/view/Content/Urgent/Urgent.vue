<script lang="ts" setup>
import { provide } from 'vue'
import { Urgent } from './Urgent'
import CreatVue from './Components/Creat.vue'

const instance = new Urgent()
provide('instance', instance)
const {
    mapDom,
    tools

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Urgent">
        <div class="map" ref="mapDom"></div>
        <div class="Tools">
            <div class="item" v-for="i in tools" :key="i.id">
                <img :src="i.icon" alt="">
            </div>
        </div>
        <div class="Create">
            <CreatVue v-show="true"></CreatVue>
        </div>





    </div>
</template>

<style lang="scss" scoped>
@import "./Urgent.scss"
</style>