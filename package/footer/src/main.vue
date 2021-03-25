<template>
    <footer class="c-footer" :style="{ height }">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'CFooter',
    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
}
</script>