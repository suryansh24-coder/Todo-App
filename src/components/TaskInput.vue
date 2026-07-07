<script setup lang="ts">
import { ref } from 'vue'

const taskTitle = ref('')
const emit = defineEmits(['add-task'])

const submitTask = () => {
  if (taskTitle.value.trim() === '') return
  emit('add-task', taskTitle.value.trim())
  taskTitle.value = ''
}
</script>

<template>
  <v-card class="pa-3 task-input-card mb-6" elevation="0">
    <div class="d-flex align-center">
      <v-text-field
        v-model="taskTitle"
        placeholder="Add a new task..."
        variant="solo"
        flat
        hide-details
        density="comfortable"
        bg-color="transparent"
        class="task-text-field mr-2"
        @keydown.enter="submitTask"
      >
        <template #prepend-inner>
          <v-icon icon="mdi-plus" color="primary" class="input-icon-glow" />
        </template>
      </v-text-field>

      <v-btn
        class="add-btn text-none"
        elevation="0"
        height="44"
        @click="submitTask"
      >
        <v-icon icon="mdi-plus" class="mr-1" size="small" />
        Add
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.task-input-card {
  background:              var(--card-bg) !important;
  backdrop-filter:         blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border:                  1px solid var(--card-border) !important;
  border-radius:           16px !important;
  transition:              all 0.3s ease;
}
.task-input-card:focus-within {
  border-color: rgba(139, 92, 246, 0.4) !important;
  box-shadow:   0 0 20px rgba(139, 92, 246, 0.14) !important;
}

.task-text-field :deep(.v-field)        { border-radius: 12px !important; box-shadow: none !important; }
.task-text-field :deep(.v-field__input) { color: var(--input-text) !important; font-size: 0.95rem; font-weight: 500; }
.task-text-field :deep(.v-field__input::placeholder) { color: var(--placeholder) !important; opacity: 1 !important; }

.input-icon-glow { opacity: 0.8; }

.add-btn {
  background:    linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
  color:         #ffffff !important;
  font-weight:   600;
  border-radius: 12px !important;
  padding:       0 20px !important;
  letter-spacing: 0.05em;
  transition:    all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.add-btn:hover  { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4) !important; }
.add-btn:active { transform: translateY(1px); }
</style>