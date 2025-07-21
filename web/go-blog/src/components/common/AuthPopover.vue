<script setup lang="ts">
// import { User } from '@element-plus/icons-vue'
import { computed, ref, watch } from 'vue'
// import LoginForm from '@/components/forms/LoginForm.vue'
import { useLayoutStore } from '@/stores/layout'
import { ClickOutside as vClickOutside } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import { useRoute } from 'vue-router'
// import RegisterForm from '@/components/forms/RegisterForm.vue'
// import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm.vue'
import { qqLoginURL } from '@/services/modules/base'

const useStore = useUserStore()
const route = useRoute()
const isLoggedIn = computed(() => useStore.isLoggedIn)
const isInDashboard = route.matched.some((record) => record.name === 'dashboard')
// const label = isInDashboard ? '返回首页' : '进入后台'
const goIndexOrToDashboard = () => {
  if (isInDashboard) {
    router.push({ name: 'index' })
  } else {
    router.push({ name: 'home' })
  }
}
goIndexOrToDashboard()
const layoutStore = useLayoutStore()

const popoverVisible = ref(layoutStore.state.value.popoverVisible)
watch(
  () => layoutStore.state.value.popoverVisible,
  (newValue) => {
    popoverVisible.value = newValue
  },
)

const onClickOutside = () => {
  layoutStore.state.value.popoverVisible = false
}

const registerVisible = ref(layoutStore.state.value.registerVisible)
watch(
  () => layoutStore.state.value.registerVisible,
  (newValue) => {
    registerVisible.value = newValue
  },
)

const forgotPasswordVisible = ref(layoutStore.state.value.forgotPasswordVisible)
watch(
  () => layoutStore.state.value.forgotPasswordVisible,
  (newValue) => {
    forgotPasswordVisible.value = newValue
  },
)

const qqLogin = async () => {
  const res = await qqLoginURL()
  if (res.code === 0) {
    window.location.href = res.data
  }
}
</script>

<template>
  <div class="auth-popover">
    <el-popover v-if="isLoggedIn" width="280" trigger="click">
      <template #reference> </template>
      <template #default>
        <div class="title"></div>
        <div class="user-info"></div>
        <div class="container"></div>
      </template>
    </el-popover>

    <el-popover v-else :visible="popoverVisible" width="280">
      <template #reference> </template>
      <template #default>
        <div class="default" v-click-outside="onClickOutside">
          <div class="title">
            <el-row>请登录以获取完整的功能体验。</el-row>
          </div>
          <div class="auth-button">
            <div class="button-item"></div>

            <div class="button-item"></div>

            <div class="button-item"></div>
          </div>
          <div class="container">
            <el-divider>快速登录</el-divider>
            <div class="oauth-login">
              <div class="login-item">
                <el-image class="qq-login" src="/image/qq_symbol.jpg" alt="" @click="qqLogin" />
                QQ登录
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="less" scoped>
.auth-popover {
  --el-text-color-disabled: transparent;

  .el-avatar--icon {
    font-size: 24px;
  }
}

.el-popover.el-popper {
  .title {
    display: flex;
    height: 60px;

    .el-row {
      margin: auto auto;
    }
  }

  .user-info {
    text-align: center;

    .el-row {
      display: flex;
      justify-content: center;
      margin: 5px;
    }
  }

  .uuid {
    margin: 10px 20px;
  }

  .container {
    background-color: white;

    .el-row {
      padding: 20px;
    }

    .action-button {
      display: flex;
      justify-content: center;

      .el-button {
        border: none;
        background-color: transparent;
        margin-bottom: 10px;
      }
    }
  }
}

.el-popover.el-popper {
  .default {
    .title {
      display: flex;
      height: 60px;

      .el-row {
        margin: auto auto;
      }
    }

    .auth-button {
      display: flex;
      justify-content: center;

      .button-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;

        .el-button {
          border: none;
          --el-font-size-base: 32px;
          height: 62px;
          background-color: transparent;
        }
      }
    }

    .container {
      background-color: white;

      .el-divider {
        --el-bg-color: transparent;
      }

      .oauth-login {
        display: flex;
        justify-content: center;

        .login-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80px;
          margin-top: auto;

          .el-image {
            height: 32px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-popover.el-popper {
  background-color: rgba(255, 255, 255, 0.75);
  padding: 0;

  .el-popper__arrow:before {
    background-color: transparent;
  }
}
</style>
