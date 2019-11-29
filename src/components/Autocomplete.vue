<template>
    <div class="autocomplete" data-position="below">
        <slot name="input"></slot>

        <transition name="slide-fade">
            <ul class="autocomplete-result-list" role="listbox" id="autocomplete-result-list-1"
                v-if="propositions && propositions.length > 0">
                <li v-for="(item, index) in propositions" :key="index"
                    :id="'autocomplete-result-'+index" :data-result-index="index"
                    class="autocomplete-result"
                    role="option" @click="select(item)"
                >
                    {{transformText(item)}}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            propositions: Array,
            select: {
                type: Function,
                default: function (item) {
                    this.$emit('select-autocomplete', item)
                }
            },
            transformText: {
                type: Function,
                default: function (item) {
                    return item;
                }
            }
        }
    }
</script>
