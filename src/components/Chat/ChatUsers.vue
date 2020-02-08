<template>
  <v-card>
    ChatUser
    <v-card-title>
      <v-list-item-avatar>
        <v-img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-list-item-avatar>
      <span class="headline">{{this.name}}</span>
    </v-card-title>
    <v-list rounded three-line>
      <v-list-item link>
        <v-list-item-avatar>
          <v-img>
            <v-icon>mdi-account</v-icon>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>User</v-list-item-title>
          <v-list-item-subtitle>Message</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar>
          <v-img>
            <v-icon>mdi-account</v-icon>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>User</v-list-item-title>
          <v-list-item-subtitle>Message</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar>
          <v-img>
            <v-icon>mdi-account</v-icon>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>User</v-list-item-title>
          <v-list-item-subtitle>Messageasdasndkasdkasnkdnasnansjnasjdnaskjdkas</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ChatUsers",
  props: ["name"]
};
</script>

<style>
* {
  margin-left: 0;
}
</style>