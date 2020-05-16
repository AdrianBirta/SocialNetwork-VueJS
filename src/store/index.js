import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// firacodeFont
export default new Vuex.Store({
  state: {
    profile: {
      name:'Mihai Eminesc', 
      picture:'friend.jpg', 
      posts: [],
      friends:['aaa','bbb'] 
    },
    users: [
    		{ 
          id:'aaa', 
          name: 'Mihai Eminesc', 
          picture: 'friend.jpg', 
          posts: [
            {
              id:'1',
              content:'MihaiTextContentPost1',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'MihaiTextContentPost2',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'MihaiTextContentPost3',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'MihaiTextContentPost4',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'bbb', 
          name: 'George Coșbuc', 
          picture: 'friend2.jpg', 
          posts: [
            {
              id:'1',
              content:'GeorgeTextContentPost1',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'GeorgeTextContentPost2',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'GeorgeTextContentPost3',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'GeorgeTextContentPost4',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'zzz', 
          name: 'John Cena', 
          picture: 'friend3.png', 
          posts: [
            {
              id:'1',
              content:'JohnTextContentPost1',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'JohnTextContentPost2',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'JohnTextContentPost3',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'JohnTextContentPost4',
              state:false,
              date:null
            }
          ]
        }
    		// { id:'4', name: 'Stefan Hrușcă', picture: 'friend4.png' },
    		// { id:'5', name: 'Ana Maria', picture: 'friend5.png' },
    		// { id:'6', name: 'Andreea', picture: 'friend6.jpg' },
    		// { id:'7', name: 'Iulia', picture: 'friend7.png' },
    		// { id:'8', name: 'Roxana', picture: 'friend8.jpg' },
    		// { id:'9', name: 'Vanessa', picture: 'friend9.png' },
    		// { id:'10', name: 'Dorel', picture: 'friend10.png' }
    	],
    events: [
        { id:'1', title:'Vizită Remeți', location:'Bihor', date:'2012' },
        { id:'2', title:'Campare Șuncuiuș', location:'Bihor', date:'2014' }
    ]
    
  },
  mutations: {
  	ADD_NEW_FRIEND(state, payload) {
      state.profile.friends.push(payload.id)
  	},
  	DELETE_USER(state, payload) {
  		state.users = state.users.filter(function(obj) {
  			return obj.id !== payload.id;
  		})
  	},
    ADD_NEW_EVENT(state, payload) {
      state.events.push(payload)
    },
    DELETE_FRIEND(state, payload) {
      state.profile.friends = state.profile.friends.filter(function(obj) {
        return obj !== payload.id;
      })
    },
    DELETE_EVENT(state, payload) {
      state.events = state.events.filter(function(obj) {
        return obj.title !== payload.title
      })
    },

    ADD_POST_PROFILE(state, {value}) {

      //date post
      let present= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
      
      //id post
      let idPost           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( let i = 0; i < 10; i++ ) {
        idPost += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      let obj = {
        id : idPost,
        userName : state.profile.name,
        content : value,
        picture : state.profile.picture,
        date : present,
        state: true
      };
      state.profile.posts.push(obj);
    },
    ADD_POST_HOME_FROM_FRIENDS(state, {getters}) {
      
      let SelectedFriend = Math.floor(Math.random() * getters.friendsLength)
      let SelectedFriendId = state.profile.friends[SelectedFriend]

      state.users.forEach(user => {
        if (user.id == SelectedFriendId) {
          let SelectRandomIdPost = Math.floor(Math.random() * user.posts.length)
          let present= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
          
          user.posts[SelectRandomIdPost].state = true;
          user.posts[SelectRandomIdPost].date = present;
        }
      })
    }
  },
  actions: {
  	addNewFriend({ state, commit }, value) {
  		if (state.users) {
  			commit('ADD_NEW_FRIEND', value)
  		}
  	},
    deleteFriend({state, commit}, value) {
      if (state.users) {
        commit('DELETE_FRIEND', value);
      }
    },
  	deleteUser({state, commit}, value) {
  		if (state.users) {
  			commit('DELETE_USER', value);
  		}
  	},
    addNewEvent({state, commit}, value) {
      if (state.events) {
        commit('ADD_NEW_EVENT', value);
      }
    },
    deleteEvent({state, commit}, value) {
      if (state.events) {
        commit('DELETE_EVENT', value);
      }
    },
    addNewPost({state, commit}, value) {
      if (state.profile.posts) {
        commit('ADD_POST_PROFILE', {value});
      }
    },
    addNewFriendPost({state, commit, getters}) {
      if (state.users) {
        commit('ADD_POST_HOME_FROM_FRIENDS',{getters});
      }
    }
  },
  getters: {
    friendsLength: state => {
      return state.profile.friends.length
    },
    eventsLength: state => {
      return state.events.length
    },

    getAllPosts: state => {
      let friendsPosts = []

      state.users.forEach(user => {
        state.profile.friends.forEach(friend => {
          if(friend == user.id) {
            return user.posts.forEach(post => {
              if (post.state == true) {
                post.userName = user.name;
                post.picture = user.picture;
                friendsPosts.push(post)
              }
            })
          }
        })
      })

      function compare(a, b) {
        const dateA = a.date;
        const dateB = b.date;

        let comparison = 0;
        if (dateA > dateB) {
          comparison = 1;
        } else if (dateA < dateB) {
          comparison = -1;
        }
        return comparison;
      }
      
      let allPosts = friendsPosts.concat(state.profile.posts)
      
      return allPosts.sort(compare);
    },


    getUsers: state => {
      //get users and friends arrays
      let users = [];
      state.users.forEach(user => {
        users.push(user.id)
      })
      // console.log(users, state.profile.friends)
      
      // get difference between arrays
      let difference = users.filter(x => !state.profile.friends.includes(x))
      // console.log(difference)
      
      //Get just simpleUsers 
      // users.filter(x => { return x})
      let simpleUsers = [];
      state.users.forEach(user => {
        difference.forEach(simpleUser => {
          if(simpleUser == user.id) {
            simpleUsers.push(user);
          }
          })
      })
      return simpleUsers;
    },

    getFriends: state => {
      
      let friends = [];
      let container = state.profile.friends

      state.users.forEach(user => {
        container.forEach(friend => {
          if(friend == user.id) {
            friends.push(user);
          }
          })
      })
      // console.log(friends)
      return friends;
    }
  },
  modules: {}
});
