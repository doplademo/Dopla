<template>
    <div class="w-full">
        <input ref="slider" class="number-slider" type="range" :min="min" :max="max" v-model="value" />
        <div class="flex mt-2">
            <paragraph-normal class-name="flex-1 text-center" v-for="number in numberOptions" :key="number">{{
            number}}</paragraph-normal>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";
import { Colors } from "~/utils/Colors";

export default defineComponent({
    components: { ParagraphNormal },
    props: {
        min: { type: Number, required: true },
        max: { type: Number, required: true },
        default: { type: Number, required: true },
    },
    emits: ['on-slide'],
    setup(props, { emit }) {
        const value = ref(props.default);
        const slider = ref<HTMLElement | null>(null);
        const numberOptions = ref<number[]>([])

        for (let i = props.min!; i <= props.max!; i++) {
            numberOptions.value.push(i);
        }

        function setSliderProgress(nextValue: number) {
            if (slider.value) {
                // Sets the background for the progress of the selector
                slider.value.style.background = `linear-gradient(to right, ${Colors.greenBold} 0%, ${Colors.greenBold} ${(nextValue - props.min) / (props.max - props.min) * 100}%, ${Colors.greenHover} ${(nextValue - props.min) / (props.max - props.min) * 100}%, ${Colors.greenHover} 100%)`
            }
        }

        watch(value, (nextValue) => {
            emit('on-slide', nextValue);
            setSliderProgress(nextValue!);
        })

        onMounted(() => {
            setSliderProgress(value.value!);
        })

        return {
            value,
            slider,
            numberOptions,
        }
    }
})
</script>

<style>
.number-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 2.25rem;
    outline: none;
    background: #EBF4EE;
    border: 1px solid #C4C4C4;
    border-radius: .25rem;
}

/* Chromium */
.number-slider::-webkit-slider-runnable-track {
    height: 2.25rem;
    -webkit-appearance: none;
    color: #00CA3F;
}

.number-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: white;
    border: 1px solid #C4C4C4;
    width: 35px;
    height: 50px;
    cursor: pointer;
    border-radius: .25rem;
    margin-top: -6px;
}

/* Firefox */
.number-slider::-moz-range-thumb {
    background: white;
    border: 1px solid #C4C4C4;
    width: 35px;
    height: 50px;
    cursor: pointer;
    border-radius: .25rem;
}

.number-slider::-moz-range-progress {
    background-color: #00CA3F;
    height: 2.25rem;
}
</style>