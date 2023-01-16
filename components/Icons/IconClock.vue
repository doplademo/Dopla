<template>
	<svg
		v-if="size === 'large'"
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M16 4C22.6168 4 27.9999 9.38305 27.9999 15.9985C27.9999 22.6152 22.6168 27.9982 16 27.9982"
			stroke="black"
			stroke-width="2.73473"
			stroke-miterlimit="10"
		/>
		<path
			d="M4 15.9985C4 9.38305 9.38311 4 15.9999 4"
			stroke="black"
			stroke-width="2.73473"
			stroke-miterlimit="10"
		/>
		<path
			d="M15.9999 27.9978C9.38311 27.9978 4 22.6147 4 15.998"
			stroke="black"
			stroke-width="2.73473"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.3188 16.7279H15.2432V8.65234"
			stroke="black"
			stroke-width="2.73473"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>

	<svg
		v-else-if="size === 'medium'"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 4C16.4112 4 19.9999 7.5887 19.9999 11.999C19.9999 16.4101 16.4112 19.9988 12 19.9988"
			stroke="black"
			stroke-width="1.82315"
			stroke-miterlimit="10"
		/>
		<path
			d="M4 11.999C4 7.5887 7.58874 4 11.9999 4"
			stroke="black"
			stroke-width="1.82315"
			stroke-miterlimit="10"
		/>
		<path
			d="M11.9999 19.9988C7.58874 19.9988 4 16.4101 4 11.999"
			stroke="black"
			stroke-width="1.82315"
			stroke-miterlimit="10"
		/>
		<path
			d="M16.8789 12.4852H11.4951V7.10156"
			stroke="black"
			stroke-width="1.82315"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>

	<svg
		v-else
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_1286_71457)">
			<path
				d="M8 1C11.8598 1 14.9999 4.14011 14.9999 7.99912C14.9999 11.8589 11.8598 14.999 8 14.999"
				stroke="black"
				stroke-width="1.59526"
				stroke-miterlimit="10"
			/>
			<path
				d="M1 7.99912C1 4.14011 4.14015 1 7.99993 1"
				stroke="black"
				stroke-width="1.59526"
				stroke-miterlimit="10"
			/>
			<path
				d="M7.99993 14.9989C4.14015 14.9989 1 11.8588 1 7.99902"
				stroke="black"
				stroke-width="1.59526"
				stroke-miterlimit="10"
			/>
			<path
				d="M12.2694 8.42459H7.55859V3.71387"
				stroke="black"
				stroke-width="1.59526"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1286_71457">
				<rect width="16" height="16" fill="white" />
			</clipPath>
		</defs>
	</svg>
</template>
<script>
import { Colors } from '~/utils/Colors'
export default {
	props: {
		size: {
			type: String,
			default: 'medium',
		},
		color: {
			type: String,
			default: Colors.blackBold,
		},
	},
}
</script>