<template>
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
          <p>로컬에 JSON파일을 만들어 사용합니다.</p>
        </li>
        <li>
          <p>Axios를 이용하여 비동기 통신을 합니다.</p>
        </li>
        <li>
          <p>middleware를 사용하여 Item을 가져옵니다.</p>
        </li>
      </ul>
      <v-divider class="mb-3"></v-divider>
    </v-flex>
    <v-flex
      xs12
      class="pa-2"
    >
      <p class="subheading">
        Vuex 저장소는 Users와 Items로 구성되어 각각 유저 리스트와 해당 유저의 상세를 저장하고 있습니다.
      </p>
      <p class="subheading">
        Vuetify의 Grid시스템을 이용하여 유저 리스트와 상세 영역을 나누었습니다.
      </p>
      <p class="subheading">
        nuxt-child를 사용하여 상세영역을 중첩라우팅으로 제작했습니다.
      </p>
      <p class="subheading">
        v-show를 활용하여 이미지의 불러오는 로딩 부분을 제작했습니다.
      </p>
      <p class="subheading">
        Header의 Title을 클릭하면 메인화면으로 돌아옵니다.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ItemDefault',
};
</script>
