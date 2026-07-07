<script setup lang="ts">
defineProps<{ activeFilter: string }>()
const emit = defineEmits(['change-filter'])
</script>

<template>
  <v-card class="filter-card mb-6" elevation="0">
    <v-btn-toggle
      :model-value="activeFilter"
      mandatory
      class="filter-toggle"
      selected-class="active-filter-btn"
      @update:model-value="emit('change-filter', $event)"
    >
      <v-btn value="all"       class="filter-btn text-none" variant="text">All Tasks</v-btn>
      <v-btn value="pending"   class="filter-btn text-none" variant="text">Pending</v-btn>
      <v-btn value="completed" class="filter-btn text-none" variant="text">Completed</v-btn>
    </v-btn-toggle>
  </v-card>
</template>

<style scoped>
.filter-card {
  background:              var(--card-bg) !important;
  backdrop-filter:         blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border:                  1px solid var(--card-border) !important;
  border-radius:           16px !important;
  overflow:                hidden;
}

.filter-toggle {
  display:    flex !important;
  width:      100% !important;
  background: transparent !important;
  height:     48px !important;
}

.filter-btn {
  flex:           1 !important;
  height:         100% !important;
  border-radius:  0 !important;
  font-weight:    600 !important;
  font-size:      0.85rem !important;
  color:          var(--filter-inactive) !important;
  transition:     all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  letter-spacing: 0.03em !important;
}
.filter-btn:hover {
  background: rgba(139, 92, 246, 0.05) !important;
}

/* Active tab */
.filter-toggle :deep(.active-filter-btn) {
  background:    linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%) !important;
  border-bottom: 2px solid #8b5cf6 !important;
  color:         #8b5cf6 !important;
  font-weight:   700 !important;
}
</style>