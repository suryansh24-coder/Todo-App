<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import TaskFilter from './components/TaskFilter.vue'

interface Task {
  id: number
  title: string
  completed: boolean
}

// ── Theme ────────────────────────────────────────────────────
const theme = useTheme()
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  theme.global.name.value = isDark.value ? 'luxuryDark' : 'luxuryLight'
  localStorage.setItem('todo-app-theme', isDark.value ? 'dark' : 'light')
}

// ── Tasks ────────────────────────────────────────────────────
const tasks = ref<Task[]>([])
const filter = ref('all')

const addTask = (title: string) => {
  tasks.value.push({ id: Date.now(), title, completed: false })
}

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

const toggleTask = (id: number) => {
  const task = tasks.value.find(task => task.id === id)
  if (task) task.completed = !task.completed
}

const filteredTasks = computed(() => {
  if (filter.value === 'completed') return tasks.value.filter(t => t.completed)
  if (filter.value === 'pending')   return tasks.value.filter(t => !t.completed)
  return tasks.value
})

const totalCount     = computed(() => tasks.value.length)
const completedCount = computed(() => tasks.value.filter(t => t.completed).length)
const pendingCount   = computed(() => totalCount.value - completedCount.value)
const completionRate = computed(() =>
  totalCount.value === 0 ? 0 : Math.round((completedCount.value / totalCount.value) * 100)
)

// ── Persist tasks ────────────────────────────────────────────
watch(tasks, () => {
  localStorage.setItem('todo-app-tasks', JSON.stringify(tasks.value))
}, { deep: true })

// ── Restore on mount ─────────────────────────────────────────
onMounted(() => {
  // Restore tasks — check both keys for backward compat
  const raw = localStorage.getItem('todo-app-tasks') || localStorage.getItem('tasks')
  if (raw) {
    try { tasks.value = JSON.parse(raw) } catch { tasks.value = [] }
  }

  // Restore theme
  const savedTheme = localStorage.getItem('todo-app-theme')
  if (savedTheme) {
    isDark.value = savedTheme !== 'light'
    theme.global.name.value = isDark.value ? 'luxuryDark' : 'luxuryLight'
  }
})
</script>

<template>
  <v-app :class="isDark ? 'app-bg-dark' : 'app-bg-light'">

    <!-- ── Theme Toggle ── -->
    <v-btn
      :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'"
      class="theme-toggle-btn"
      variant="outlined"
      size="small"
      aria-label="Toggle theme"
      @click="toggleTheme"
    />

    <v-main class="py-10 px-4 d-flex justify-center align-start">
      <v-container class="app-container pa-0">

        <!-- ── Header ── -->
        <div class="text-center mb-8 mt-2">
          <div class="logo-icon-wrapper mb-3">
            <v-icon icon="mdi-check-circle-outline" size="large" color="primary" class="pulsate-icon" />
          </div>
          <h1 class="app-title">TODO</h1>
          <p class="app-subtitle">Stay focused. Stay productive.</p>
        </div>

        <!-- ── Stats Card ── -->
        <v-card class="stats-card mb-6 pa-5" elevation="0">
          <div class="d-flex justify-space-between align-center mb-3">
            <div>
              <div class="stats-heading text-uppercase text-caption font-weight-bold">Daily Focus</div>
              <div class="stats-count mt-1">
                {{ completedCount }}
                <span class="stats-total">of {{ totalCount }} completed</span>
              </div>
            </div>
            <div class="stats-percent">{{ completionRate }}%</div>
          </div>

          <v-progress-linear
            :model-value="completionRate"
            height="8"
            rounded
            class="stats-progress-bar"
          />

          <div class="d-flex justify-space-between mt-3 text-caption stats-footer-text">
            <span>Pending: {{ pendingCount }}</span>
            <span>Completed: {{ completedCount }}</span>
          </div>
        </v-card>

        <!-- ── Add Task ── -->
        <TaskInput @add-task="addTask" />

        <!-- ── Filters ── -->
        <TaskFilter :active-filter="filter" @change-filter="filter = $event" />

        <!-- ── Task List ── -->
        <TaskList
          :tasks="filteredTasks"
          @delete-task="deleteTask"
          @toggle-task="toggleTask"
        />

      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* ─── Fonts ──────────────────────────────────────────────── */
body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, sans-serif !important;
}
.v-application {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
}

/* ─── Dark Theme Variables ───────────────────────────────── */
.app-bg-dark {
  --card-bg:          rgba(19, 21, 32, 0.55);
  --card-border:      rgba(255, 255, 255, 0.07);
  --input-text:       #f1f5f9;
  --placeholder:      #64748b;
  --task-title:       #f1f5f9;
  --task-done:        #475569;
  --del-btn:          #64748b;
  --del-btn-hover:    #ef4444;
  --del-hover-bg:     rgba(239, 68, 68, 0.08);
  --filter-inactive:  #64748b;
  --empty-title:      #f1f5f9;
  --empty-sub:        #64748b;
  --empty-border:     rgba(255, 255, 255, 0.07);
  --empty-bg:         rgba(19, 21, 32, 0.2);
  background:
    radial-gradient(circle at 15% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 45%),
    linear-gradient(135deg, #07080d 0%, #10121d 100%) !important;
  min-height: 100vh;
}

/* ─── Light Theme Variables ──────────────────────────────── */
.app-bg-light {
  --card-bg:          rgba(255, 255, 255, 0.82);
  --card-border:      rgba(124, 58, 237, 0.14);
  --input-text:       #1e293b;
  --placeholder:      #94a3b8;
  --task-title:       #1e293b;
  --task-done:        #94a3b8;
  --del-btn:          #94a3b8;
  --del-btn-hover:    #dc2626;
  --del-hover-bg:     rgba(220, 38, 38, 0.07);
  --filter-inactive:  #94a3b8;
  --empty-title:      #1e293b;
  --empty-sub:        #64748b;
  --empty-border:     rgba(124, 58, 237, 0.14);
  --empty-bg:         rgba(245, 243, 255, 0.6);
  background:
    radial-gradient(circle at 15% 20%, rgba(124, 58, 237, 0.09) 0%, transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(219, 39, 119, 0.07) 0%, transparent 45%),
    linear-gradient(135deg, #f5f3ff 0%, #fdf2f8 100%) !important;
  min-height: 100vh;
}

/* ─── Theme Toggle Button ────────────────────────────────── */
.theme-toggle-btn {
  position: fixed !important;
  top: 16px !important;
  right: 16px !important;
  z-index: 999 !important;
  border-radius: 12px !important;
  border-color: rgba(139, 92, 246, 0.35) !important;
  color: #8b5cf6 !important;
  transition: all 0.3s ease !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  background: var(--card-bg) !important;
}
.theme-toggle-btn:hover {
  background: rgba(139, 92, 246, 0.12) !important;
  box-shadow: 0 0 18px rgba(139, 92, 246, 0.28) !important;
  transform: scale(1.05);
}

/* ─── App Container ──────────────────────────────────────── */
.app-container {
  max-width: 540px !important;
  width: 100%;
}

/* ─── App Title ──────────────────────────────────────────── */
.app-title {
  font-family: 'Outfit', sans-serif !important;
  font-weight: 800;
  letter-spacing: 0.25em;
  font-size: 2.6rem;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 55%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}
.app-subtitle {
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #94a3b8;
  opacity: 0.75;
}

/* ─── Stats Card ─────────────────────────────────────────── */
.v-card.stats-card {
  background:         var(--card-bg) !important;
  backdrop-filter:    blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border:             1px solid var(--card-border) !important;
  border-radius:      20px !important;
}
.stats-heading { font-weight: 700; color: #8b5cf6; letter-spacing: 0.1em !important; }
.stats-count   { font-weight: 600; font-size: 1.2rem; font-family: 'Outfit', sans-serif !important; }
.stats-total   { font-weight: 400; font-size: 0.85rem; color: #64748b; }
.stats-percent {
  font-family: 'Outfit', sans-serif !important;
  font-weight: 800;
  font-size: 1.85rem;
  background: linear-gradient(135deg, #a78bfa, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stats-footer-text { color: #64748b; }
.stats-progress-bar { background-color: rgba(139, 92, 246, 0.08) !important; }
.stats-progress-bar .v-progress-linear__determinate {
  background: linear-gradient(90deg, #8b5cf6, #ec4899) !important;
  border-radius: 4px;
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.45);
}

/* ─── Logo / Icon ────────────────────────────────────────── */
.logo-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
}
@keyframes pulsate {
  0%   { transform: scale(1);    opacity: 0.8; }
  50%  { transform: scale(1.12); opacity: 1;
         filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.6)); }
  100% { transform: scale(1);    opacity: 0.8; }
}
.pulsate-icon { animation: pulsate 4s infinite ease-in-out; }
</style>