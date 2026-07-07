<script setup lang="ts">
defineProps<{
  task: { id: number; title: string; completed: boolean }
}>()
const emit = defineEmits(['delete-task', 'toggle-task'])
</script>

<template>
  <v-card
    class="task-card d-flex align-center justify-space-between px-4 py-3"
    :class="{ 'task-completed': task.completed }"
    elevation="0"
    @click="emit('toggle-task', task.id)"
  >
    <!-- Left: checkbox + title -->
    <div class="d-flex align-center flex-grow-1 min-width-0">
      <v-btn
        icon
        variant="text"
        density="comfortable"
        class="checkbox-btn mr-2"
        :ripple="false"
        @click.stop="emit('toggle-task', task.id)"
      >
        <v-icon
          :icon="task.completed ? 'mdi-check-circle' : 'mdi-circle-outline'"
          :color="task.completed ? 'success' : undefined"
          class="checkbox-icon"
          :class="{ 'icon-completed': task.completed }"
          size="22"
        />
      </v-btn>

      <span class="task-title text-truncate" :class="{ 'completed-text': task.completed }">
        {{ task.title }}
      </span>
    </div>

    <!-- Right: delete -->
    <v-btn
      icon="mdi-trash-can-outline"
      variant="text"
      density="comfortable"
      class="delete-btn ml-2"
      @click.stop="emit('delete-task', task.id)"
    />
  </v-card>
</template>

<style scoped>
.task-card {
  background:              var(--card-bg) !important;
  backdrop-filter:         blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border:                  1px solid var(--card-border) !important;
  border-radius:           16px !important;
  cursor:                  pointer;
  user-select:             none;
  transition:              all 0.28s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.task-card:hover {
  transform:    translateY(-2px);
  border-color: rgba(139, 92, 246, 0.25) !important;
  box-shadow:   0 6px 22px rgba(0, 0, 0, 0.18) !important;
}

.task-completed         { opacity: 0.6; }
.task-completed:hover   { transform: none; box-shadow: none !important; }

.checkbox-btn:hover      { transform: scale(1.1); background: transparent !important; }
.checkbox-icon           { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.icon-completed          { filter: drop-shadow(0 0 6px rgba(5, 150, 105, 0.4)); }

.task-title {
  color:       var(--task-title);
  font-size:   0.93rem;
  font-weight: 550;
  transition:  all 0.28s ease;
}
.completed-text {
  text-decoration: line-through;
  color:           var(--task-done);
  font-weight:     400;
}

.delete-btn          { color: var(--del-btn) !important; opacity: 0.65; transition: all 0.2s ease !important; border-radius: 10px !important; }
.delete-btn:hover    { color: var(--del-btn-hover) !important; opacity: 1; background: var(--del-hover-bg) !important; }
</style>