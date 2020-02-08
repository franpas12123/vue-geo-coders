<template>
  <v-row align="center" justify="center" style="margin-left: 0px">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-title class="justify-center">
          <h2 class="mt-3">Log In Using</h2>
        </v-card-title>
        <v-card-text class="justify-center">
          <v-form>
            <v-row class="text-center">
              <v-col>
                <!-- <v-label>Login with:</v-label> -->
                <v-btn fab color="error" class="ml-1 mr-1">
                  <v-icon>mdi-google</v-icon>
                </v-btn>
                <v-btn fab color="primary darken-2" class="ml-1 mr-1">
                  <v-icon large>mdi-facebook</v-icon>
                </v-btn>
                <v-btn fab color="primary lighten" class="ml-1 mr-1">
                  <v-icon large>mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="text-center mt-5">
              <v-col>
                <v-divider></v-divider>
              </v-col>or
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-col cols="10">
                <v-text-field
                  prepend-icon="mdi-email"
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn text small class="mt-2 mb-2">Forgot password</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text to="/auth/signup" nuxt>Create Account</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
</style>