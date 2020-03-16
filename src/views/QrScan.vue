<template>
    <div class="home">
        <p> Welcome to the QR page</p>

        <button @click="openCamera">{{ !isShowingCamera ? 'Scan a QR code' :'Exit QR'}}</button>
        <h3> some random qr coded</h3>
        <qrcode-vue :value="'hello from qr code'" :size="100" :background-color="'#076aff'" :foreground="'#5d40d3'"></qrcode-vue>

        <qrcode-stream v-if="isShowingCamera" @init="onInit" @decode="onDecode"></qrcode-stream>
        
    </div>
</template> 



<script lang="ts">

import * as firebase from "firebase/app";
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import QrcodeVue from  'qrcode.vue';

@Component({
    components: {
        HelloWorld,
        QrcodeVue
    }
})

export default class Home extends Vue{

    public isShowingCamera:boolean = false;

    public openCamera():void{
        this.isShowingCamera =  !this.isShowingCamera
    }

    //Function running when the QR code is scanned
    public onDecode(decodeString:string){
        console.log(decodeString)
    }

    public async onInit (promise:any): Promise<any> {
        //show loading indicator

        try{
            await promise,
            console.log('init', promise);
        }
        catch(error){
            console.log(error);
            if (error.name === 'NotAllowedError'){
                //User denied camera access by machine
            }
            else if (error.name === 'NotfoundError'){
                //no suitable camera device installed
            }
            else if (error.name === 'NotSupportedError'){
                // page is not served over HTTPS  (or location)
            }
            else if (error.name === 'OverconstrainedError'){
                // Did you request the front camera when there was none
            }
            else if (error.name === 'StreamApiNotSupportedError'){
                //Browser seems to not support string features
            }
        } finally {
            //hide loading indicator
        }
     }
    }
    
    

</script>



<style lang='scss' scoped>
p{
    color: #333;
}
</style>

