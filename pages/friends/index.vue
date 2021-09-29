<template>
  <div
    class="flex justify-around items-start container space-x-6 mx-auto mt-16"
  >
    <div class="flex flex-col justify-center border-r w-full">
      <h2 class="text-lg underline mb-3">Friend Request</h2>
      <div>
        <div v-for="request in requests" :key="request.id" class="flex mb-3">
          <img
            src="https://image.flaticon.com/icons/svg/172/172163.svg"
            alt=""
            class="w-8 h-8 rounded-full object-cover"
          />
          <NuxtLink :to="`/users/${request.id}`" class="text-xl ml-2">
            {{ request.username }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center w-full">
      <h2 class="text-lg underline mb-3">Friends</h2>
      <div>
        <div v-for="friend in friends" :key="friend.id" class="flex mb-3">
          <img
            src="https://image.flaticon.com/icons/svg/172/172163.svg"
            alt=""
            class="w-8 h-8 rounded-full object-cover"
          />
          <NuxtLink :to="`/users/${friend.id}`" class="text-xl ml-2">
            {{ friend.username }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data: () => ({
    friends: [],
    requests: [],
  }),
  mounted() {
    this.getFriends();
  },
  methods: {
    getFriends() {
      this.$axios.$get("/api/friends").then((resp) => {
        this.friends = resp.friends;
        this.requests = resp.requests;
      });
    },
  },
};
</script>

<style>
</style>