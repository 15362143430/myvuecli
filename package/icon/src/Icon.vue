<template>
    <i :class='"l-icon-"+name'></i>
</template>

<script>
export default {
    name: 'CIcon',
    props:{
        name:String
    }
}
</script>