import {
 backendApiHosts,
} from '../app.config'
export default function ({
 $axios
}, inject) {
 // ---- BOOK MANAGEMENT ---- //
 const bookManagementUrl = backendApiHosts.bookManagement
 let bookManagementApi = $axios.create({
 baseURL: bookManagementUrl,
 timeout: 30000
 })
 inject('bookManagementApi', bookManagementApi)
 // ------------------------ //
};