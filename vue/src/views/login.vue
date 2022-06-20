<template>
  <div class="container">
    <h2 class="title">登录</h2>
    <div v-if="!formState.success" class="tip">用户名或密码错误</div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

}
.title {
  text-align: center;
  margin-bottom: 20px;
}
.tip{
    text-align: center;
    color: #ff0000;
    margin-left: 10px;
    margin-bottom: 10px;
}
</style>>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
interface FormState {
  username: string;
  password: string;
  success: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: "",
      password: "",
      success: true
    });

    const onFinish = (values: any) => {
      axios
        .post("http://localhost:7001/api/user/login", JSON.stringify(values))
        .then((res) => {
          const { code, result, message, data } = res.data;
          if (code === 200) {
            formState.success = true;
            console.log("登录成功");
          } else {
            formState.success = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
