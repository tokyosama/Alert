import { ref, onMounted, onUnmounted } from 'vue'
import { Actor } from "@/libs/Actor"
import { Urgent } from '../Urgent'

class Creat extends Actor {
    constructor(parent: Urgent | null = null) {
        super()
        this.parent = parent
    }

    private parent: Urgent | null = null

    public isShow=ref(false)

    public InitStates() {
        return {
            isShow:this.isShow

        }
    }

    public InitHooks() {

    }

    public Run() {
        onMounted(() => {

        })

        onUnmounted(() => {
            this.Destroy()
        })
    }

    public Destroy() {

    }

    public add(){
        this.isShow.value=true
    }
}

export { Creat }