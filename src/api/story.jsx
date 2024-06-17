import axios from 'axios'
import '@/api/axios'

import {API_URL, API_TIMEOUT} from "@/config"

const generate = async (values) => {
    const url = API_URL + "generate"

    const result =
        await axios.post(url, values, { timeout: API_TIMEOUT })
            .then(res => ({ status: true, content: res.data }))
            .catch(e => ({ status: false, content: undefined }))

    return result
}

export {generate}