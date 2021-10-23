<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="card-body" v-bind:class="cardStyle">
      <div class="flex flex-col content-start">
        <p class="card-title">
          Title
        </p>
        <p class="text-left text-gray-500">Subtitle</p>
      </div>
      <div class="ml-0 mt-4 flex flex-col content-start">
        <div class="flex flex-col lg:flex-row">
          <p>Body</p>
        </div>
      </div>
    </div>
  </div>
</template>
