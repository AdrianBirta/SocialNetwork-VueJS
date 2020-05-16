<template>
	<div class="body">
		<div class="body-box">
			<div class="topHeader">
				<div class="topHeaderLeft">
					<img src="../../../assets/profile.jpg" alt="">
					<h2><router-link to="/">Adrian Birta</router-link></h2>
				</div>
				<div class="topHeaderRight">
					<div class="topHeaderRightFirst">
						<i class="fas fa-pen"></i>
						<p>Editeaza profilul</p>
					</div>
					<div class="topHeaderRightSecond">
						<i class="fas fa-list"></i>
						<p>Jurnal de activități</p>
						<i class="fas fa-ellipsis-h"></i>
					</div>
				</div>
			</div>
			<div class="bottomHeader">
				<ul>
					<li>
						<p>
							Cronologie
							<i 
								class="fas fa-sort-down"
								style="margin-left:5px;"
								></i>
						</p>
					</li>
					<li>
						<p>Despre</p>
					</li>
					<li><p>
							<router-link to="/friends">Prieteni</router-link>
							<small style="color:gray;">{{ friendsLength }}</small>
						</p>
					</li>
					<li><p>Fotografii</p></li>
					<li>
						<p>
							<i class="fas fa-lock" style="margin-right:5px;"></i> 
							Arhivă
						</p>
					</li>
					<li>	
						<p>Mai multe 
							<i class="fas fa-sort-down" style="margin-left:5px;"></i>
						</p> 
					</li>
				</ul>
			</div>		
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {}
		},
		computed: {
			...mapGetters(['friendsLength'])
		}
	}
</script>

<style lang="css" scoped>
	.bottomHeader ul li:last-child {
		border-right:1px solid lightgray;
	}
	.bottomHeader ul li {
		padding:0 16px;
		border-left:1px solid lightgray;
	}
	.bottomHeader ul li p a {
		text-decoration: none;
		padding: 0 0.2rem;
		color: #ee0505;
		font-weight: bold;
	}
	.bottomHeader ul {
		list-style: none;
		display: flex;
		margin: 0;
		justify-content: flex-end;
		padding: 0 2rem;
		color: #ee0505;
		font-weight: bold;
		font-family: arial;
	}
	.bottomHeader {
		background: #fff;
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
		border:1px solid lightgray;
	}
	.topHeader .topHeaderRight .topHeaderRightSecond p {
			border-right: 1px solid gray;
			padding-right: 7px;
			line-height: 40px;
	}
	.topHeader .topHeaderRight .topHeaderRightSecond i:last-child {
		position:absolute;
		right:15px;
	}
	.topHeader .topHeaderRight .topHeaderRightFirst i, .topHeader .topHeaderRight .topHeaderRightSecond i:first-child {
		position: absolute;
		left:10px;
	}
	.topHeader .topHeaderRight .topHeaderRightSecond {
		background: #ebedf0;
		position: relative;
		width: 200px;
		padding-left: 35px;
		height: 40px;
		display: flex;
		align-items: center;
		margin-left:20px;
	}
	.topHeader .topHeaderRight .topHeaderRightFirst {
		background: #ebedf0;
		position: relative;
		width: 150px;
		padding-left: 35px;
		height: 40px;
		display: flex;
		align-items: center;
		margin-left:20px;
	}
	.topHeader .topHeaderRight {
		display: flex;
	}
	.topHeader .topHeaderLeft h2 a{
		margin-bottom: 0px;
	}
	.topHeader .topHeaderLeft img {
		width:160px;
		height:160px;
		border:5px solid #fff;
		border-radius: 50%;	
		position: relative;
		top:40px;
		margin-right: 20px;
	}
	.topHeader .topHeaderLeft h2 a{
		text-decoration: none;
		color:#fff;
	}
	.topHeader .topHeaderLeft {
		display: flex;
		align-items: flex-end;
	}
	.topHeader {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 1rem 1rem;
		background:#1c1e21;
		height: 270px;
	}
	.body .body-box {
		width:915px;
		border-radius: 5px;
		overflow:hidden;
		margin:0 auto;
	}
	.body {
		margin:0;
		background:#e9ebee;
	}
</style>