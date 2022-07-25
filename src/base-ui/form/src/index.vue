<template>
  <div class="dy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="['input', 'password'].includes(item.type)">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
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
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, ref, watch, computed } from "vue"
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
const emits = defineEmits(["update:modelValue"])
// 方法一：
// const formData = ref({ ...props.modelValue })
// watch(formData, (newValue) => emits("update:modelValue", newValue), {
//   deep: true
// })
// 方法二：
const handleValueChange = (value: any, field: string) => {
  emits("update:modelValue", { ...props.modelValue, [field]: value })
}
</script>
<style lang="less" scoped>
.dy-form {
  padding-top: 20px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
