<template>
	<div class="px-16 mt-24">
		<pharmacist-task-nav />
        <main class="w-full flex gap-4 h-[770px] mt-4">
            <pharmacist-tasks />

            <pharmacist-tasks-body />
        </main>
	</div>

</template>

<script>
import { defineComponent } from 'vue'
import PharmacistTaskNav from '~/components/PharmacistTaskNav.vue'
import PharmacistTasks from '~/components/PharmacistTasks.vue'
import PharmacistTasksBody from '~/components/PharmacistTasksBody.vue'

export default defineComponent({
	components: { PharmacistTaskNav, PharmacistTasks, PharmacistTasksBody },
	props: {},
})
</script>

<style>
</style>