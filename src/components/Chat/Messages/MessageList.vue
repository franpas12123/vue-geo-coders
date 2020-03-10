<template>
  <v-container>
    <!-- MessageList -->
    <v-list style="max-height: 50vh" class="overflow-y-auto" scrollable>
      <v-list-tile avatar v-for="msg in messages" :key="msg.id">
        <!-- <v-list-tile-content> -->
        <Messages :date="msg.date" :content="msg.content" :name="msg.name" />
        <!-- <span>{{ msg.date }}</span> -->
        <!-- </v-list-tile-content> -->
      </v-list-tile>
    </v-list>
    <!-- <v-card-text v-for="(msg) in messages" :key="msg">
    </v-card-text>-->
  </v-container>
</template>

<script>
import Messages from './Messages';
import { firestore } from '@/firebase/firebase';
import moment from 'moment';

export default {
  name: 'MessageList',
  data() {
    return {
      // messages: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      //   "Mauris quis ante id dui porttitor fermentum.",
      //   "Vestibulum eget nisl non enim aliquam scelerisque sed vitae erat.",
      //   "Nam a urna ut mi hendrerit consectetur.",
      //   "Integer molestie neque eu semper egestas.",
      //   "Pellentesque id neque sed ligula condimentum auctor.",
      //   "Morbi mattis sem nec felis lacinia aliquet.",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      //   "Mauris quis ante id dui porttitor fermentum.",
      //   "Vestibulum eget nisl non enim aliquam scelerisque sed vitae erat.",
      //   "Nam a urna ut mi hendrerit consectetur.",
      //   "Integer molestie neque eu semper egestas.",
      //   "Pellentesque id neque sed ligula condimentum auctor.",
      //   "Morbi mattis sem nec felis lacinia aliquet."
      // ]
      messages: []
    };
  },
  components: {
    Messages
  },
  created() {
    // const user = "pas";
    let message = {};

    // auto-update collection
    firestore
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(docChange => {
          const { timestamp, content, name } = docChange.doc.data();
          const id = docChange.id;
          message.id = id;
          message.date = moment(timestamp).format('llLT');
          // message.date =
          //   message.date.toDateString() + ' at ' + message.date.toTimeString();
          message.content = content;
          message.name = name;

          if (docChange.type === 'added') {
            // added
            this.messages = [...this.messages, message];
            // alert("document added!");
          } else if (docChange.type === 'removed') {
            // removed
            this.messages = this.messages.filter(item => item.id != id);
          } else if (docChange.type === 'modified') {
            // modified
            alert('document modified!');
          }

          message = {};
        });
      });

    // traditional get collection
    // firestore
    //   .collection("messages")
    //   .where("name", "==", user)
    //   .get()
    //   .then(snapshot =>
    //     snapshot.forEach(doc => {
    //       const data = doc.data();
    //       alert(doc.data().content);
    //       message.date = new Date(data.timestamp).toString;
    //       message.content = data.content;

    //       this.messages.push(message);
    //       message = {};
    //     })
    //   );
  }
};
</script>

<style></style>
