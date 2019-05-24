<template>
  <v-flex
    md6
    xs12
    class="pa-2"
  >
    <v-card
      flat
      class="pa-2"
    >
      <list-header label="Manual" />
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <ul class="subheading">
            <li>
              <p>해당 페이지는 Vuetify를 사용하여 제작했습니다.</p>
            </li>
            <li>
              <p>아이콘은 Font-Awesome을 사용했습니다.</p>
            </li>
            <li>
              <p>로컬에 JSON파일을 만들어 사용합니다.</p>
            </li>
            <li>
              <p>Axios를 이용하여 비동기 통신을 합니다.</p>
            </li>
            <li>
              <p>기존의 middleware방식을 라우트 관찰로 변경했습니다.</p>
            </li>
          </ul>
          <v-divider class="mb-3"></v-divider>
        </v-flex>
        <v-flex
          xs12
          class="pa-2"
        >
          <p class="subheading">
            Vuex 저장소는 Users, Items, User, Item으로 구성되어 각각 유저 리스트와 아이템 리스트, 유저 상세와 아이템 상세로 나누었습니다.
          </p>
          <p class="subheading">
            Vuetify의 Grid시스템을 이용하여 각각의 리스트 영역을 나누었습니다.
          </p>
          <p class="subheading">
            nuxt-child로 아이템 리스트 중첩 라우트를 적용했고, 상세부분은 팝업으로 적용해봤습니다.
          </p>
          <p class="subheading mb-0">
            Header의 Title을 클릭하면 메인화면으로 돌아옵니다.
          </p>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import ListHeader from './ListHeader';

export default {
  name: 'ItemManual',
  components: { ListHeader },
};
</script>
