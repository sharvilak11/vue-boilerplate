<template>
    <div class="descriptive-card" @click="goToRoute" :class="{'pointer': rNavTo}">
        <div class="background-image-wrapper" v-if="accessors.LogoUrl" :style="calculateHeight()">
            <div class="background-image-holder image" :style="{'background-image': 'url(' + accessors.LogoUrl(item)+ ')'}"></div>
        </div>
        <div class="info">
            <slot name="title"></slot>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DescriptiveCard',
    props: {
        item: {
            type: Object,
            required: true
        },
        accessors: {
            type: Object,
            required: true
        },
        rNavTo: {
            type: String
        },
        height: {
            type: Number,
            required: true
        }
    },
    methods: {
        calculateHeight() {
            return {
                'height': this.height + 'px'
            };
        },
        goToRoute() {
            if (this.rNavTo) {
                this.$router.push(this.rNavTo, () => {});
            }
        }
    }
};
</script>

<style scoped lang="scss">
    .descriptive-card {
        .background-image-wrapper {
            position: relative;
        }
        .info {
            background-color: $white;
            padding: 16px;
        }
    }
</style>
