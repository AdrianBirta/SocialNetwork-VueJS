<template>
  <div class="rightHomeBox">
    <span class="SpecialButtons">
      <div class="playPosts"><p @click="addPosts">Start posts</p></div>
      <div class="ChangeAccount"><router-link to="/change-account">Change Account</router-link></div>
    </span>
    <div class="gamesRightHomeBox">
      <div class="headerGames">
        <p>Jocurile tale</p>
        <div class="headerGamesImages">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/15436624_10154167923035784_9511621688819712_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=VcI527BlLxQAX94vmj_&_nc_ht=scontent.fomr1-1.fna&oh=f41d349868d0a94e060b705cad8bebeb&oe=5EE024EC">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2080-6/c0.0.76.76a/p75x75/851557_563661850351972_1278017488_n.gif?_nc_cat=1&_nc_sid=eaa83b&_nc_ohc=5TR9fDsorasAX_Pg5iC&_nc_ht=scontent.fomr1-1.fna&oh=9869025783dddbd93e328b3a6ce9b562&oe=5EE17906">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/28129019_2483664821859568_4104156145445240832_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=1e2gbSaLqa8AX-GmT2Z&_nc_ht=scontent.fomr1-1.fna&oh=876bc8e9da7f48664da8e70871513062&oe=5EE0B770">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/37826797_1419176584850865_8749714633905930240_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=dhGUPlKA2lUAX8gqh2B&_nc_ht=scontent.fomr1-1.fna&oh=eb9a9bfb501e96cc24680364e5770663&oe=5EE28B72">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/11891365_726141290823610_1062843466_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=yBn0MGs3G-4AX9IZBcU&_nc_ht=scontent.fomr1-1.fna&oh=dd0cbda5d5d6d75505061a7ed62e92f5&oe=5EE0D093">
        </div>
      </div>
      <div class="bodyGames">
        <img src="@/assets/home/basketball.png">
      </div>
      <div class="footerGames">
        <p>Jocuri Instant</p>
        <div class="footerGamesFriendsImages">
          <img src="@/assets/friend6.jpg">
          <img src="@/assets/friend7.png">
          <img src="@/assets/friend3.png">
          <img src="@/assets/friend8.jpg">
          <img src="@/assets/friend.jpg">

          <div class="headerGamesImages">
            <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/37826797_1419176584850865_8749714633905930240_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=dhGUPlKA2lUAX8gqh2B&_nc_ht=scontent.fomr1-1.fna&oh=eb9a9bfb501e96cc24680364e5770663&oe=5EE28B72">
            <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/28129019_2483664821859568_4104156145445240832_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=1e2gbSaLqa8AX-GmT2Z&_nc_ht=scontent.fomr1-1.fna&oh=876bc8e9da7f48664da8e70871513062&oe=5EE0B770">
            <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2080-6/c0.0.76.76a/p75x75/851557_563661850351972_1278017488_n.gif?_nc_cat=1&_nc_sid=eaa83b&_nc_ohc=5TR9fDsorasAX_Pg5iC&_nc_ht=scontent.fomr1-1.fna&oh=9869025783dddbd93e328b3a6ce9b562&oe=5EE17906">
            <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/11891365_726141290823610_1062843466_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=yBn0MGs3G-4AX9IZBcU&_nc_ht=scontent.fomr1-1.fna&oh=dd0cbda5d5d6d75505061a7ed62e92f5&oe=5EE0D093">
            <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t39.2081-0/15436624_10154167923035784_9511621688819712_n.png?_nc_cat=1&_nc_sid=b12fbb&_nc_ohc=VcI527BlLxQAX94vmj_&_nc_ht=scontent.fomr1-1.fna&oh=f41d349868d0a94e060b705cad8bebeb&oe=5EE024EC">
          </div>

        </div>
      </div>
    </div>

    <div class="sponsorsRightHomeBox">
      <div class="sponsorsHeader">
        <p>Sponsorizat</p>
        <a href="#">Creează o reclamă</a>
      </div>
      <div class="sponsorsBody">
        <div class="sponsor1">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/92843537_6205290084070_8448075223827218432_n.jpg?_nc_cat=1&_nc_sid=67cdda&_nc_ohc=iKIb-1PmW2QAX9nsq39&_nc_ht=scontent.fomr1-1.fna&oh=88d8e0ebb79ec66e6c9e10542f53f440&oe=5EE01513">
          <strong>Machine Learning A-Z (Python & R in Data Science Course)</strong>
          <a href="#">www.udemy.com</a>
          <p style="color:gray;">Designed for anyone interested in Machine Learning, this course will teach you how to make...</p>
        </div>
        <div class="sponsor1">
          <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/95906413_23844794024400120_8619154096328278016_n.jpg?_nc_cat=103&_nc_sid=67cdda&_nc_ohc=oj2y0HhsIPQAX-_qJ9z&_nc_ht=scontent.fomr1-1.fna&oh=414aa882255fbe3dbc861961ab2120f5&oe=5EE03C28">
          <strong>Submit your CV!</strong>
          <a href="#">bestjobs.eu</a>
          <p style="color:gray;">Are you looking for a better job? Picture this: you as a IT Service Desk Analyst at B. Bra...</p>
        </div>
      </div>
    </div>
    <div class="languageRightHomeBox">
      <p>Română · <span> English (US) · Magyar · Español · Português (Brasil)</span></p>
      <div class="plus"><p>+</p></div>
    </div>
    <p class="bottom">
      Confidenţialitate · Condiţii de utilizare ·<br> Publicitate · Opţiuni · Module cookie ·<br> Mai mult <br>Facebook © 2020
    </p>
    
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  	addPosts() {
  		let interval = Math.floor(Math.random() * (4000 - 3000) + 3000)
  		setInterval(() => {

  		interval = Math.floor(Math.random() * (4000 - 3000) + 3000)
  		
  		this.$store.dispatch('addNewFriendPost');

  		}, interval)
  		

  	}
  },
}
</script>

<style lang="css" scoped>
  .SpecialButtons {
    display: flex;
    align-items: center;
  }
  .SpecialButtons .ChangeAccount a {
    text-decoration: none;
    color:#fff;
  }
  .SpecialButtons .ChangeAccount:hover {
    background:#f73c3c;
  }
  .SpecialButtons .ChangeAccount {
    background:red;
    color:#fff;
    font-weight: bold;
    padding:1rem;
    border-radius:16px;
    display: inline-block;
    cursor:pointer;
    transition:.5s;
  }
  .bottom {
    color:gray;
    padding:1rem;
  }
  .languageRightHomeBox .plus {
    background: #f5f6f7;
    padding:0.5rem 1rem;
    font-size:1.3rem;
    border:1px solid lightgray;
    font-weight: bold;
  }
  .languageRightHomeBox p span {
    color:red;
  }
  .languageRightHomeBox p {
    color:gray;
  }
  .languageRightHomeBox {
    background: #fff;
    display: flex;
    /*align-items: center;*/
    margin-top:1rem;
    border-radius: 5px;
    border:1px solid lightgray;
    padding:0.8rem;
  }
  .sponsorsRightHomeBox .sponsorsBody .sponsor1 a {
    text-decoration: none;
    color:red;
  }
  .sponsorsRightHomeBox .sponsorsBody .sponsor1 img {
    width:50%;
    margin-bottom: 1rem;
  }
  .sponsorsRightHomeBox .sponsorsBody .sponsor1 strong {
    color:red;
  }
  .sponsorsRightHomeBox .sponsorsBody .sponsor1 {
    display: flex;
    flex-direction: column;
    line-height: 1;
    margin:1.5rem 0;
  }
  .sponsorsRightHomeBox .sponsorsHeader a {
    text-decoration: none;
    color:red;
  }
  .sponsorsRightHomeBox .sponsorsHeader p {
    font-weight: bold;
    color:gray;
    font-size:1.1rem;
  }
  .sponsorsRightHomeBox .sponsorsHeader {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.2rem;
  }
  .sponsorsRightHomeBox {
    background:#fff;
    margin-top:1rem;
    border-radius: 5px;
    border:1px solid lightgray;
    padding:0.7rem;
  }
  .footerGames .footerGamesFriendsImages .headerGamesImages img {
    width:35px!important;
    height:35px!important;
    border:1px solid #fff;
    margin-right:2.5rem;
  }
  .footerGames .footerGamesFriendsImages .headerGamesImages {
    position: absolute;
    bottom:0.5rem;
    left:3rem;
  }
  .gamesRightHomeBox .bodyGames img {
    width:100%;
    margin-top:1rem;
  }
  .rightHomeBox .gamesRightHomeBox .headerGamesImages img, 
  .gamesRightHomeBox .footerGames .footerGamesFriendsImages img{
    width:60px;
    height:60px;
    border-radius: 50%;
  }
  .rightHomeBox .gamesRightHomeBox .headerGamesImages,
  .gamesRightHomeBox .footerGames .footerGamesFriendsImages {
    display: flex;
    justify-content: space-around;
  }
  .rightHomeBox .gamesRightHomeBox p {
    color:gray;
    font-weight: bold;
    font-size:1.2rem;
    margin-bottom: 0.8rem;
  }
  .gamesRightHomeBox .footerGames {
    padding-bottom:1rem!important;
  }
  .rightHomeBox .gamesRightHomeBox .headerGames, .gamesRightHomeBox .footerGames {
    padding:0.7rem;
    position: relative;
  }
  .rightHomeBox .gamesRightHomeBox {
    background:#fff;
    border-radius: 5px;
    border:1px solid lightgray;
  }
	.rightHomeBox .playPosts p:hover {
		background: red;
	}
	.rightHomeBox .playPosts p {
		display: inline-block;
		margin:1rem;
		padding:1rem 2rem;
		background:#f73c3c;
		color:#fff;
		border-radius: 16px;
		font-weight:bold;
		cursor:pointer;
		transition: .3s;
	}
  .rightHomeBox p {
    margin:0;
  }
	.homeBox .rightHomeBox {
		border:none;
		width:408px;
	}
</style>