<template>
    <header class="c-header" :style="{ height }">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'CHeader',
    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
}
</script>