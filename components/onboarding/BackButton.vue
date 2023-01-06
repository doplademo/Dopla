<template>
	<button class="flex items-center" @click="goBack()">
		<arrow-left-icon :size="20" />
		<p v-if="text" class="text-xs font-semibold ml-2">
			{{ caps ? text.toUpperCase() : text }}
		</p>
	</button>
</template>
  
  <script>
import ArrowLeftIcon from '../Icons/ArrowLeftIcon.vue'
export default {
	components: { ArrowLeftIcon },
	props: {
		text: {
			type: String,
			default: '',
		},
		caps: Boolean,
	},
    methods: {
        goBack(){
            this.$router.back();
        }
    }
}
</script>
  
  <style>
</style>