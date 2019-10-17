<template>
    <div>
        <label class="control-label" :for="options.label || property.name"
            v-text="options.label || property.name"></label>
        <div v-if="displayMode === 'EDIT' || displayMode === 'CREATE'">
            <select :class="options.customClass" :name="options.label" :required="options.required"
                :placeholder="options.placeholder" v-model="clonedValue.value" @change="handler"
                @input="options.onChangeEvent" class="form-control" :disabled="options.disabled">
                <option value v-if="options.defaultLabelText != null && options.defaultLabelText.length > 0">\{{ options.defaultLabelText }}
                </option>
                <option v-for="(item,key) in items" :value="item.Id ? item.Id: item" :key="key">\{{ displayAs(item) }}
                </option>
            </select>
        </div>
        <p class="form-control-static" v-else-if="displayMode === 'VIEW'" v-text="clonedValue.value"></p>
    </div>
</template>

<script>
export default {
    name: 'SelectField',
    props: {
        options: {
            type: Object
        },
        value: {
            type: String
        },
        displayMode: {
            type: String
        },
        property: {
            type: Object
        }
    },
    data() {
        return {
            clonedValue: {}
        };
    },
    methods: {
        displayAs(item) {
            if (typeof item === 'object') {
                return item[this.displayField || 'Name'];
            } else
                return item;
        },
        handler() {
            this.validate();
            this.$emit('updateValue', this.clonedValue);
        },
        validate() {
            if (this.property) {
                if (this.property.required && !this.clonedValue.value) {
                    this.clonedValue.$invalid = true;
                    this.clonedValue.$error = 'required';
                } else {
                    this.clonedValue.$invalid = false;
                    this.clonedValue.$error = null;
                }
            }
        }
    },
    created() {
        this.items = this.options.selectFrom || (this.property ? this.property.enum : undefined);
        this.displayField = this.options.displayField;
        this.clonedValue.value = this.value || (this.property ? this.property.value : undefined);
        this.options.onChangeEvent = this.options.onChangeEvent || function () {};
        this.handler();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
