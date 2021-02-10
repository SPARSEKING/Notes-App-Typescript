<template>

<div class="notes">
    <div class="note" :class="{ full: !grid.value}" v-for='(note, index) in notes' :key='index'>
        <div class="note-header">
            <p >{{ note.title }}</p>
            <p style="cursor: pointer;" @click="removeNote(index)">x</p>
        </div>
        <div class="note-body">
            <p class="descr">{{ note.description }}</p>
            <span class="date">{{ note.date }}</span>
        </div>
    </div>
</div>
    
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import  { Note }  from '../Note';

export default defineComponent({
  name: 'Notes',
  inject: ['notes', 'grid','removeNote'],
  methods: {
        // removeNote(index: number): void {
        //     this.$emit('remove', index);
        // }
    }
});
</script>