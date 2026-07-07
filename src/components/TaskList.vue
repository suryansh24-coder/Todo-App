<script setup lang="ts">
import TaskItem from './TaskItem.vue'

defineProps<{
  tasks: Array<{ id: number; title: string; completed: boolean }>
}>()
const emit = defineEmits(['delete-task', 'toggle-task'])
</script>

<template>
  <div class="task-list-container">

    <!-- Empty State -->
    <div v-if="tasks.length === 0" class="empty-state text-center py-12 px-4">
      <div class="empty-icon-wrapper mb-4">
        <v-icon icon="mdi-playlist-check" size="36" color="primary" style="opacity:0.5" />
      </div>
      <h3 class="empty-title mb-1">All clear!</h3>
      <p class="empty-subtitle">Add a task above to get started.</p>
    </div>

    <!-- Task List -->
    <div v-else>
      <transition-group name="list" tag="div" class="list-group">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @delete-task="emit('delete-task', $event)"
          @toggle-task="emit('toggle-task', $event)"
        />
      </transition-group>
    </div>

  </div>
</template>

<style scoped>
.task-list-container { min-height: 160px; }

.empty-state {
  background:              var(--empty-bg) !important;
  backdrop-filter:         blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border:                  1px dashed var(--empty-border) !important;
  border-radius:           20px;
  display:                 flex;
  flex-direction:          column;
  align-items:             center;
  justify-content:         center;
}

.empty-icon-wrapper {
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  width:         68px;
  height:        68px;
  border-radius: 50%;
  background:    rgba(139, 92, 246, 0.06);
  border:        1px solid rgba(139, 92, 246, 0.12);
}

.empty-title {
  font-family: 'Outfit', sans-serif !important;
  font-weight: 700;
  font-size:   1.1rem;
  color:       var(--empty-title);
}
.empty-subtitle {
  font-size:   0.85rem;
  color:       var(--empty-sub);
  max-width:   300px;
  line-height: 1.5;
}

/* ─── List transitions ── */
.list-enter-active, .list-leave-active { transition: all 0.38s cubic-bezier(0.3, 0, 0.2, 1); }
.list-enter-from   { opacity: 0; transform: translateY(18px) scale(0.96); }
.list-leave-to     { opacity: 0; transform: translateY(-18px) scale(0.96); }
.list-move         { transition: transform 0.38s cubic-bezier(0.3, 0, 0.2, 1); }

.list-group {
  display:        flex;
  flex-direction: column;
  gap:            12px;
}
</style>