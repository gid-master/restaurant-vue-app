<template>
  <div class="empty">
    <div class="image">
      <img src="@/assets/icons/primary/thumb_down.svg" />
    </div>
    <h2>Sorry, no product found</h2>
    <p>try a different search term</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MenuEmpty"
  });
</script>

<style scoped lang="scss">
  .empty {
    margin-top: 35%;
    display: flex;
    align-items: center;
    flex-flow: column;

    .image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid $primary-color;

      img {
        padding: 15px;
        width: 100%;
        height: 100%;
      }
    }

    h2 {
      font-weight: 500;
      color: $text-dark-secondary;
      margin-bottom: 10px;
    }

    p {
      color: $text-dark-secondary;
    }
  }
</style>
