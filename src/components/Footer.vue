<template>
    <section>
        <div class="w-full ">
            <img :src="require(`../${ty}`)" alt="" />
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        const ty = "assets/projects/ty.webp";
        return { ty };
    },
};
</script>

<style lang="scss" scoped>
</style>