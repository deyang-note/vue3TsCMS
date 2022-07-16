<template>
  <div class="dy-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="['input', 'password'].includes(item.type)">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                <el-date-picker
                  :="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { PropType, ref, watch } from "vue"
import { IFormItem } from "../types"

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: "100px"
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: "20px 30px" })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // > 1920 -> 4
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
const formData = ref({ ...props.modelValue })
const emits = defineEmits(["update:modelValue"])
watch(formData, (newValue) => emits("update:modelValue", newValue), {
  deep: true
})
</script>
<style lang="less" scoped>
.dy-form {
  padding-top: 20px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
