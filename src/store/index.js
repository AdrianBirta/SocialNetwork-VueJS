import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// firacodeFont
export default new Vuex.Store({
  state: {
    profile: {
      id:'test',
      name:'Adrian Birta', 
      picture:'profile.jpg', 
      status:true,
      friends:['aaa','bbb'],
      posts: []
    },
    users: [
    		{ 
          id:'aaa', 
          name: 'Mihai Eminesc', 
          picture: 'friend.jpg',
          status:false,
          friends:['bbb','ccc'], 
          posts: [
            {
              id:'1',
              content:'MihaiTextContentPost1',
              userName:'Mihai Eminesc',
              picture:'friend.jpg',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'MihaiTextContentPost2',
              userName:'Mihai Eminesc',
              picture:'friend.jpg',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'MihaiTextContentPost3',
              userName:'Mihai Eminesc',
              picture:'friend.jpg',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'MihaiTextContentPost4',
              userName:'Mihai Eminesc',
              picture:'friend.jpg',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'bbb', 
          name: 'George Coșbuc', 
          picture: 'friend2.jpg',
          status:false,
          friends:['ccc','ddd'], 
          posts: [
            {
              id:'1',
              content:'GeorgeTextContentPost1',
              userName:'George Coșbuc',
              picture:'friend2.jpg',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'GeorgeTextContentPost2',
              userName:'George Coșbuc',
              picture:'friend2.jpg',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'GeorgeTextContentPost3',
              userName:'George Coșbuc',
              picture:'friend2.jpg',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'GeorgeTextContentPost4',
              userName:'George Coșbuc',
              picture:'friend2.jpg',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'zzz', 
          name: 'John Cena', 
          picture: 'friend3.png',
          status:false, 
          friends:['eee','fff'], 
          posts: [
            {
              id:'1',
              content:'JohnTextContentPost1',
              userName:'John Cena',
              picture:'friend3.png',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'JohnTextContentPost2',
              userName:'John Cena',
              picture:'friend3.png',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'JohnTextContentPost3',
              userName:'John Cena',
              picture:'friend3.png',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'JohnTextContentPost4',
              userName:'John Cena',
              picture:'friend3.png',
              state:false,
              date:null
            }
          ]
        },
        { 
          id:'ccc', 
          name: 'Stefan Hrușcă', 
          picture: 'friend4.png',
          status:false, 
          friends:['ddd','eee'], 
          posts: [
            {
              id:'1',
              content:'StefanTextContentPost1',
              userName:'Stefan Hrușcă',
              picture:'friend4.png',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'StefanTextContentPost2',
              userName:'Stefan Hrușcă',
              picture:'friend4.png',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'StefanTextContentPost3',
              userName:'Stefan Hrușcă',
              picture:'friend4.png',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'StefanTextContentPost4',
              userName:'Stefan Hrușcă',
              picture:'friend4.png',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'ddd', 
          name: 'Ana Maria', 
          picture: 'friend5.png' ,
          status:false,
          friends:['eee','fff'], 
          posts: [
            {
              id:'1',
              content:'ariaTextContentPost1',
              userName:'Ana Maria',
              picture:'',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'ariaTextContentPost2',
              userName:'Ana Maria',
              picture:'',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'ariaTextContentPost3',
              userName:'Ana Maria',
              picture:'',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'ariaTextContentPost4',
              userName:'Ana Maria',
              picture:'',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'eee', 
          name: 'Andreea', 
          picture: 'friend6.jpg',
          status:false,
          friends:['fff','ggg'], 
          posts: [
            {
              id:'1',
              content:'AndreeaTextContentPost1',
              userName:'Andreea',
              picture:'friend6.jpg',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'AndreeaTextContentPost2',
              userName:'Andreea',
              picture:'friend6.jpg',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'AndreeaTextContentPost3',
              userName:'Andreea',
              picture:'friend6.jpg',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'AndreeaTextContentPost4',
              userName:'Andreea',
              picture:'friend6.jpg',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'fff', 
          name: 'Iulia', 
          picture: 'friend7.png', 
          status:false,
          friends:['ggg','hhh'], 
          posts: [
            {
              id:'1',
              content:'IuliaTextContentPost1',
              userName:'Iulia',
              picture:'friend7.png',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'IuliaTextContentPost2',
              userName:'Iulia',
              picture:'friend7.png',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'IuliaTextContentPost3',
              userName:'Iulia',
              picture:'friend7.png',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'IuliaTextContentPost4',
              userName:'Iulia',
              picture:'friend7.png',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'ggg', 
          name: 'Roxana', 
          picture: 'friend8.jpg', 
          status:false,
          friends:['hhh','iii'], 
          posts: [
            {
              id:'1',
              content:'RoxanaTextContentPost1',
              userName:'Roxana',
              picture:'friend8.jpg',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'RoxanaTextContentPost2',
              userName:'Roxana',
              picture:'friend8.jpg',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'RoxanaTextContentPost3',
              userName:'Roxana',
              picture:'friend8.jpg',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'RoxanaTextContentPost4',
              userName:'Roxana',
              picture:'friend8.jpg',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'hhh', 
          name: 'Vanessa', 
          picture: 'friend9.png', 
          status:false,
          friends:['iii','aaa'], 
          posts: [
            {
              id:'1',
              content:'VanessaTextContentPost1',
              userName:'Vanessa',
              picture:'friend9.png',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'VanessaTextContentPost2',
              userName:'Vanessa',
              picture:'friend9.png',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'VanessaTextContentPost3',
              userName:'Vanessa',
              picture:'friend9.png',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'VanessaTextContentPost4',
              userName:'Vanessa',
              picture:'friend9.png',
              state:false,
              date:null
            }
          ]
        },
    		{ 
          id:'iii', 
          name: 'Dorel', 
          picture: 'friend10.png', 
          status:false,
          friends:['zzz','bbb'], 
          posts: [
            {
              id:'1',
              content:'DorelTextContentPost1',
              userName:'Dorel',
              picture:'friend10.png',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'DorelTextContentPost2',
              userName:'Dorel',
              picture:'friend10.png',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'DorelTextContentPost3',
              userName:'Dorel',
              picture:'friend10.png',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'DorelTextContentPost4',
              userName:'Dorel',
              picture:'friend10.png',
              state:false,
              date:null
            }
          ]
        },
        {
          id:'test',
          name:'Adrian Birta', 
          picture:'profile.jpg', 
          status:false,
          friends:['aaa','bbb'],
          posts: [
            {
              id:'1',
              content:'Adrian TextContentPost1',
              userName:'Adrian Birta',
              picture:'profile.jpg',
              state:true,
              date:null
            },
            {
              id:'2',
              content:'Adrian TextContentPost2',
              userName:'Adrian Birta',
              picture:'profile.jpg',
              state:false,
              date:null
            },
            {
              id:'3',
              content:'Adrian TextContentPost3',
              userName:'Adrian Birta',
              picture:'profile.jpg',
              state:false,
              date:null
            },
            {
              id:'4',
              content:'Adrian TextContentPost4',
              userName:'Adrian Birta',
              picture:'profile.jpg',
              state:false,
              date:null
            }
          ]
        },
    	],
    events: [
        { id:'1', title:'Vizită Remeți', location:'Bihor', date:'2012' },
        { id:'2', title:'Campare Șuncuiuș', location:'Bihor', date:'2014' }
    ]
    
  },
  mutations: {
    CHANGE_PROFILE(state, payload) {
      state.profile.status = false;
      state.users.forEach(user => {
        if (user.id == payload.value.id) {
          user.status = true;
        }
      })
      state.profile = payload.value;
      // console.log(payload.value);
    },
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
    },
    changeProfile({state, commit}, value) {
      if (state.users) {
        commit('CHANGE_PROFILE', {value});
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
          if(simpleUser == user.id && user.status == false) {
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
