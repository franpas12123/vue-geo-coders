<template>
  <v-row justify="center" style="margin-left: 0px">
    <v-col cols="10" xl="4" lg="6" md="8">
      <v-card>
        <v-card-title class="justify-center">
          <span class="display-1 mt-3">Welcome</span>
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="10">
              <v-text-field
                color="success"
                name="name"
                label="Enter your name"
                id="id"
                v-model="name"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn class="mb-3" color="success" @click="submit">Join Chat</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    submit: function() {
      alert("name: " + this.name);
      this.$router.push({ name: "chat", params: { name: this.name } });
    }
  }
};
</script>

<style>
</style>