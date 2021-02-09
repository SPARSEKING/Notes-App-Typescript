<template>
    <div class="new-note">
        <input type="text" v-model="note.title">
        <textarea v-model='note.description'></textarea>
        <button @click='addNote' class="button-new-note">NEW NOTE</button>
        </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'NewNote',
  props: {
    note: {
        type: Object as PropType<{ title: string; description: string }>,
        required: true, 
    }
  },
  methods: {
      addNote(): void {
          this.$emit('addNote', this.note);
      }
  }
});
</script>