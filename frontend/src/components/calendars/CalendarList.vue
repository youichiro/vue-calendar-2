<template>
  <v-list dense>
    <v-list-item>
      <v-list-item-content>マイカレンダー</v-list-item-content>
    </v-list-item>
    <v-list-item v-for="calendar in calendars" :key="calendar.id">
      ・{{ calendar.name }}
    </v-list-item>
  </v-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CalendarList',
  computed: {
    ...mapGetters('calendars', ['calendars']),
  },
  created() {
    this.fetchCalendars();
  },
  methods: {
    ...mapActions('calendars', ['fetchCalendars']),
  },
};
</script>
