<template>
	<a
		:href="localePath(href)"
		:class="
			`text-[16px] leading-[17.4px] tracking-normal text-greenStrong underline ` +
			className
		"
	>
		<slot />
	</a>
</template>

<script >
export default {
	props: {
		href: {
			type: String,
			default: '#',
		},
		className: {
			type: String,
			default: '',
		},
	},
}
</script>