<template>
	<div>
		<div>
			<input type="text" v-model="loginRequest.email">
		</div>
		<div>
			<input type="password" v-model="loginRequest.password">
		</div>
		<div>
			{{msg}}
		</div>
		<div>
			<button type="button" v-on:click="onclickLogin">로그인</button>
		</div>
	</div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import { useI18n } from 'vue-i18n'
export default {
	setup () {
		const { cookies } = useCookies();
		const { t } = useI18n();
		return { cookies, t };
	},
	name: "login",
	data: function () {
		return {
			loginRequest: {
				email: "test13@gmail.com",
				password: "test"
			},
			msg: ""
		}
	},
	mounted () {
		this.cookies.remove("accessToken")
		this.cookies.remove("userRoles")
	},
	methods: {
		onclickLogin: function () {

			this.axios.post('/users/sign-in', this.$data.loginRequest).then(res => {

				this.cookies.set("accessToken", res.data.accessToken)
				this.cookies.set("userRoles", res.data.userRoles)

				console.log(this.cookies.get("accessToken"));
				console.log(this.cookies.get("userRoles"));
			}).catch(e => {
				const res = e.response;
				this.msg = this.$getMessage('Login', res.status, res.data.code);
			});

		}
	}
}
</script>

<style scoped>

</style>
