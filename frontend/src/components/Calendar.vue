<template>
  <div>
    <v-sheet height="100vh">
      <v-calendar
        v-model="value"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Calendar',
  data: () => ({
    value: new Date('2020-10-01') // 表示する月を指定
  }),
  computed: {
    ...mapGetters('events', ['events'])
  },
  methods: {
    ...mapActions('events', ['fetchEvents'])
  }
};
</script>
