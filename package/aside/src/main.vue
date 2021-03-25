<template>
    <aside class="c-aside" :style="{ width }">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'CAside',
    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
}
</script>