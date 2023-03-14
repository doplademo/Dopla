import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/api/axiosInstance'

const accessor: Plugin = ({ $axios }) => {
	initializeAxios($axios)
}

export default accessor
