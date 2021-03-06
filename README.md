# 추가내용

* 기존의 middleware방식을 Vuex의 Actions으로 수정했습니다.

Vuex 저장소는 Users, Items, User, Item으로 구성되어 각각 유저 리스트와 아이템 리스트, 유저 상세와 아이템 상세로 나누었습니다.

nuxt-child로 아이템 리스트 중첩 라우트를 적용했고, 상세부분은 팝업으로 적용해봤습니다.
          

# 상세내용
            
* 해당 페이지는 Vuetify를 사용하여 제작했습니다.
* 아이콘은 Font-Awesome을 사용했습니다.
* 로컬에 JSON파일을 만들어 사용합니다.
* Axios를 이용하여 비동기 통신을 합니다.
* middleware를 사용하여 Item을 가져옵니다.

Vuex 저장소는 Users와 Items로 구성되어 각각 유저 리스트와 해당 유저의 상세를 저장하고 있습니다.

Vuetify의 Grid시스템을 이용하여 유저 리스트와 상세 영역을 나누었습니다.

nuxt-child를 사용하여 상세영역을 중첩라우팅으로 제작했습니다.

v-show를 활용하여 이미지의 불러오는 로딩 부분을 제작했습니다.

Header의 Title을 클릭하면 메인화면으로 돌아옵니다.

# Creatrip Assignment (KR)

크리에이트립에 지원해주셔서 감사합니다.

과제는 이 repository 를 clone 받아서 작업해주시면 됩니다.
과제를 다 수행하시면 작업하신 github repository 를 알려주세요!


## Direction 해야할 일
1. Back-end 백엔드
    * Database 데이터베이스
        * 데이터베이스의 테이블에는 User 와 Item 이 주어졌습니다.
        * User 는 Item 을 여러개 가질 수 있습니다. 이 관계를 작성해주세요.
    * REST API 
        * Item 에 대해서 create, read, update, delete api 를 작성해주세요.
2. Front-end 프론트엔드
    * Item 을 보여주는 새로운 page 를 생성합니다.
    * 좌측에는 User 의 리스트가 우측에는 해당 User 의 Item 리스트가 보여집니다.
        * 좌측의 User 를 클릭하면, 우측에 해당 User 의 Item 이 보여집니다.
    * Vuex store 에 가져온 Item 을 저장합니다.
    * Item 에는 이름과 이미지URL 이 포함되어 있습니다. 카드 형식으로 보여주세요.
    * Item 을 삭제하는 기능을 작성해주세요.
    * Item 의 이름을 변경하는 기능을 작성해주세요.
    * Item 을 이름으로 정렬하는 기능을 작성해주세요. (오름차순, 내림차순)
    * 본인이 좋아하는 어떤 라이브러리도 사용할 수 있습니다. (vuetify, bootstrap...)

## 추가사항
1. api 서버는 hot-reload 가 구현되어 있지 않습니다. 필요하시면 구현해주세요. 
    
   
## 데이터베이스 초기화
    create database creatrip_assignement;
    create user creatrip@localhost identified by ‘7777’;
    grant all privileges on creatrip_assignement.* to creatrip@localhost with grant option;

## 빌드
    # install dependencies
    $ npm install
    
    # run api server
    $ npm run dev:api
    
    # run web server
    $ npm run dev:web
    
    
    
# Creatrip Assignement (EN)

Thank you for your application.

You are to clone the repository to solve the quiz.
Please submit your github repository address to recruit@creatrip.com after you solve the quiz.

## Direction 해야할 일
1. Back-end 
    * Database 
        * User and Item are given on tables in database.
        * User can have plural itmes. Please specify the relations.
    * REST API 
        * Please specify create, read, update, delete api for Item.
        
2. Front-end 
    * Create new page for representing Item.
    * The list of User is shown on the left, The Item list of the User is on the right. 
         * If you click User on the left size, Item of User is shown on the right.
    * Save Item from Vuex store.
    * Image URLs is included in the Item. Please present them in card format.
    * Write a function to delete Item.
    * Write a function to change the name of Item.
    * Write a function to sort Item by name (ascending order, descending order)
    * You're free to use any library that you like. (vuetify, bootstrap)
    

## Extra Comments
1. hot-reload server is not implemeted. Please implement if needed.
   
  
## Database Reset
    create database creatrip_assignement;
    create user creatrip@localhost identified by ‘7777’;
    grant all privileges on creatrip_assignement.* to creatrip@localhost with grant option;

## Build
    # install dependencies
    $ npm install
    
    # run api server
    $ npm run dev:api
    
    # run web server
    $ npm run dev:web
    
