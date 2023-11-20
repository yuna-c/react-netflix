/*
깃허브에 올리기 전에! 
깃허브에 업로드 되도 배포 될 수 있게 보여주는 페이지
$ npm i gh-pages

pakage.json 열고 script 확인 build

압축/ 최적화
$ npm run build 

pakage.json 하단에
,
"homepage" : "https://yuna-c.github.io/movie/"

script 에 추가
,
"deploy": "gh-pages -d build",
"predeploy": "npm run build"

후 
$ npm run deploy
*/

/*
swiper

$ npm i swiper
$ npm i swiper@6.8.4

*/