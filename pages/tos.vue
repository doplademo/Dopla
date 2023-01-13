<template>
    <main class="flex flex-col gap-4 pt-24 pb-8 px-4">
        <h2 class="heading-two">Tietosuojaseloste</h2>
        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>

        <img src="~/assets/images/common/image 5.png" />
        <p class="p-x-small text-blackLight italic self-end -mt-3">image description h6</p>
        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>

        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>

        <p class="p-normal font-semibold">Nullam quis imperdiet augue. </p>

        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>

        <h2 class="heading-two text-center">1 500 000</h2>

        <p class="p-normal font-semibold">Nullam quis imperdiet augue. </p>

        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>

        <h2 class="heading-two text-center">2 %</h2>

        <p class="p-normal font-semibold">Nullam quis imperdiet augue. </p>

        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>

        <accordion title="Haitarielementti 1" :icon-color="Colors.blackBold">
        </accordion>
        <accordion title="Haitarielementti 2" :icon-color="Colors.blackBold">
        </accordion>
        <accordion title="Haitarielementti 3" :icon-color="Colors.blackBold">
        </accordion>

        <p class="p-normal font-semibold">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
            interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</p>

        <p class="p-normal">Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget
            tempus orci facilisis id.</p>




    </main>
</template>

<script>
import { defineComponent } from 'vue';
import Accordion from '~/components/Accordion.vue';
import { Colors } from '~/utils/Colors';

export default defineComponent({
    components: { Accordion },
    props: {},
    data() {
        return {
            Colors
        }
    }
})
</script>

<style>

</style>