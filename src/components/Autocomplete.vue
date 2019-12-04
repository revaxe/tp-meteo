<template>
    <div class="autocomplete" data-position="below"
         @keyup.down="downSelection"
         @keyup.up="upSelection"
         @keyup.enter="selectSelection(selectionIndex)"
         @keyup.escape="cancel"
    >
        <slot name="input"></slot>

        <transition name="slide-fade">
            <ul class="autocomplete-result-list" role="listbox" id="autocomplete-result-list-1"
                v-if="propositions && propositions.length > 0">
                <li v-for="(item, index) in propositions" :key="index"
                    :id="'autocomplete-result-'+index" :data-result-index="index"
                    class="autocomplete-result" :aria-selected="index === selectionIndex"
                    role="option" @click="selectSelection(index)"
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
                    this.$emit('select', item)
                }
            },
            transformText: {
                type: Function,
                default: function (item) {
                    return item;
                }
            }
        },
        data: function () {
            return {
                selectionIndex: null
            }
        },
        methods: {
            downSelection() {
                if (this.propositions && this.propositions.length > 0)
                    if (this.selectionIndex === null)
                        this.selectionIndex = 0;
                    else if (this.selectionIndex < this.propositions.length - 1)
                        this.selectionIndex++;
                    else
                        this.selectionIndex = null
            },
            upSelection() {
                if (this.propositions && this.propositions.length > 0) {
                    if (this.selectionIndex === null)
                        this.selectionIndex = this.propositions.length - 1;
                    else if (this.selectionIndex > 0)
                        this.selectionIndex--;
                    else
                        this.selectionIndex = null
                }
            },
            selectSelection(index) {
                if (index !== undefined) this.selectionIndex = index;
                if (this.selectionIndex !== null && this.selectionIndex < this.propositions.length) {
                    this.select(this.propositions[this.selectionIndex]);
                    this.selectionIndex = null;
                }
            },
            cancel() {
                this.$emit('cancel');
                this.selectionIndex = null;
            }
        }
    }
</script>
