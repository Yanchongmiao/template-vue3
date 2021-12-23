<template>
  <a-form ref="formRef" :model="formState" :rules="rules">
    <a-form-item style="width: 100%;" name="userName">
      <a-input v-model:value="formState.userName" placeholder="请输入用户名">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item style="width: 100%;" name="password">
      <a-input-password v-model:value="formState.password" type="password" placeholder="请输入密码">
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </a-input-password>
    </a-form-item>
    <div class="flex flex-j-sb">
      <p></p>
      <a target="v">忘记密码？</a>
    </div>
    <br />
    <a-form-item>
      <a-button type="primary" block class="loginBtn">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { Dayjs } from 'dayjs';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  userName: string;
  password: string;
}

const formRef = ref();
const formState: UnwrapRef<FormState> = reactive({
  userName: '',
  password: '',
});
const rules = {
  userName: [
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
    { min: 6, max: 12, message: '长度6到12位', trigger: ['blur', 'change'] },
  ],
  password: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch((error: any) => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>
<style lang="less" scoped>
.loginBtn {
  background-color: #0960bd;
  &:hover {
    background-color: #0a6cd5 !important;
    color: #fff !important;
  }
}
</style>

