<template>
  <div>
    <h1>CalendarDetails</h1>
    <div v-for="event in events" :key="event.id">
      <h2>{{ event.name }}</h2>
      <p>{{ event.start }}</p>
      <p>{{ event.end }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDetails',
  data: () => ({
    events: [],
  }),
  methods: {
    fetchEvents() {
      axios
        .get('http://localhost:3000/events')
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
