<template>
	<div>
		<h2>登录界面</h2>
		<van-form @submit="onSubmit">
			<van-field
				v-model="username"
				name="用户名"
				label="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div style="margin: 16px">
				<van-button round block type="info" native-type="submit">
					登录
				</van-button>
			</div>
		</van-form>
	</div>
</template>
<script>
import { Toast } from 'vant';
export default {
	data() {
		return {
			username: '',
			password: '',
			value1: '',
			value2: '',
			value3: '',
			pattern: /\d{6}/,
			usernames: [
				{ id: 1, name: 111, password: 111 },
				{ id: 2, name: 222, password: 222 },
				{ id: 3, name: 333, password: 333 },
				{ id: 4, name: 444, password: 444 }
			],
			userna: [
				{ id: 2, name: "111", password: 111 },
				{ id: 2, name: "222", password: 222 },
				{ id: 2, name: "333", password: 333 },
				{ id: 2, name: "444", password: 444 }
			]
		};
	},
	methods: {
		onSubmit(values) {
			console.log(this.username);
			var token = document.cookie.split(";")[0].split("=")[1];
			var tokens = JSON.parse(token);

			for (var i = 0; i < tokens.length; i++) {
				if (tokens[i].name == this.username) {
					if (tokens[i].password == this.password) {
						// 一个等于是赋值,两个等于是比较,有隐式转换,三个等于必须类型都一样
						// 上边输入的是字符串,usernames的值是number,所以只能两个等于,三个等于报错
						sessionStorage.setItem("token", JSON.stringify(values));
						alert("登陆成功");
						this.$router.push("/")
						break;
					} else {
						alert("密码错误");
						break;
					}
				} else {
					alert("账号不错在");
					break;
				}
			}

		},
		// 校验函数返回 true 表示校验通过，false 表示不通过
		validator(val) {
			return /1\d{10}/.test(val);
		},
		// 异步校验函数返回 Promise
		asyncValidator(val) {
			return new Promise((resolve) => {
				Toast.loading('验证中...');

				setTimeout(() => {
					Toast.clear();
					resolve(/\d{6}/.test(val));
				}, 1000);
			});
		},
		onFailed(errorInfo) {
			console.log('failed', errorInfo);
		},
		cookies() {
			var strs = JSON.stringify(this.usernames);
			// var strss = JSON.stringify(this.userna);
			document.cookie = "users=" + strs;
			// document.cookie = "users11=" + strss;
		}
	},
	mounted() {
		this.cookies();
	}
};
</script>
