<template>
    <div class="flex flex-col">
        <p class="p-x-small">valitse verkkopankkisi</p>
        <div class="grid grid-cols-4 grid-flow-row gap-2 mt-2">
            <div class="bg-white text-center text- h-8 rounded border border-greenBold ">1</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">2</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">3</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">4</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">5</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">6</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">7</div>
            <div class="bg-white text-center text- h-8 rounded border border-redLightest ">8</div>
        </div>
        <p class="p-small text-blackLight mt-4 ">Seuraavaksi siirryt yhteistyökumpaniemme maksuportaaliin
            viimeistelemään
            verkkomaksun.</p>

        <input type="submit"
            class="p-2.5 mt-4 ml-auto text-blackBold bg-greenBold text-center text-[15px] font-semibold rounded-md"
            value="SEURAAVA" />
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({

})
</script>
