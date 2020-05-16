import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile.vue";
import FindFriends from '../views/FindFriends.vue';
import Friends from '../components/Friends/Friends.vue';
import Body from '../components/Profile/Body/Body.vue';
import CreateEvents from '../components/CreateEvents/CreateEvents.vue';
import Home from '../components/Home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Profile, children: [
      {
        path: '/',
        component: Body
      },
      {
        path: '/friends',
        component: Friends
      }
    ]
  },
  {
    path: "/find-friends",
    name: "FindFriends",
    component: FindFriends
  },
  {
    path: "/create-events",
    component: CreateEvents
  },
  {
    path: "/home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
