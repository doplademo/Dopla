<template>
	<h4 :class="`text-xs leading-[13px] tracking-normal` + className">
		<slot />
	</h4>
</template>

<script >
export default {
	props: {
		className: {
			type: String,
			default: '',
		},
	},
}
</script>