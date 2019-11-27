<template>
    <div class="autocomplete" data-position="below">
        <slot name="input"></slot>

        <ul class="autocomplete-result-list" role="listbox" id="autocomplete-result-list-1" v-if="propositions && propositions.length > 0">
            <li v-for="(item, index) in propositions" :key="index"
                :id="'autocomplete-result-'+index" :data-result-index="index"
                class="autocomplete-result"
                role="option" @click="select(item)"
            >
                {{transformText(item)}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            propositions: Array,
            select: Function,
            transformText: Function
        }
    }
</script>
