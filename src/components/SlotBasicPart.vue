<template>
<div>
  <slot><span>默认值</span></slot>

  <slot name="leftSlot"><span>具名插槽--left</span></slot>
  <slot name="rightSlot"><span>具名插槽--right</span></slot>
</div>
</template>

<script>
export default {
  name: "SlotBasicPart",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>