import { useI18n } from 'vue-i18n'

export default {
    setup (){
        const { t } = useI18n();
        return { t }
    },
    install (Vue) {
        Vue.config.globalProperties.$getMessage = function (ctg, status, code) {
            const key = ctg + '.' + code

            if(this.t(key) === key){
                return this.t(status)
            }else{
                return this.t(key)
            }
        }
    }
}
