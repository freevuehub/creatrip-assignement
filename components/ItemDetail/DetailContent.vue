<template>
  <v-card-title>
    <template v-if="editing">
      <v-layout column wrap>
        <v-flex>
          <v-text-field
            :value="contentText.title"
            @input="titleInput"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-textarea
            solo
            :value="contentText.comment"
            @input="commentInput"
          ></v-textarea>
        </v-flex>
      </v-layout>
    </template>
    <template v-else>
      <v-layout column wrap>
        <v-flex>
          <v-subheader class="headline">
            <v-divider></v-divider>
            {{ contentText.title }}
            <v-divider></v-divider>
          </v-subheader>
        </v-flex>
        <v-flex>
          <p class="pa-2">{{ contentText.comment }}</p>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </template>
  </v-card-title>
</template>

<script>
export default {
  name: 'DetailContent',
  props: {
    contentText: Object,
    editing: Boolean,
  },
  model: {
    props: 'contentText',
    event: 'input',
  },
  methods: {
    titleInput($e) {
      this.$emit('input', { ...this.contentText, title: $e });
    },
    commentInput($e) {
      this.$emit('input', { ...this.contentText, comment: $e });
    },
  },
};
</script>
