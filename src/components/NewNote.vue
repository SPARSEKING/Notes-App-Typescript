<template>
    <div class="new-note">
        <input type="text" v-model="note.title">
        <textarea v-model='note.description'></textarea>
        <button @click='addNote(note.title, note.description)' class="button-new-note">NEW NOTE</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'NewNote',
  inject: ['addNote', 'note'],
});
</script>