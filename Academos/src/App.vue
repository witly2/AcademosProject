<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import gsap from 'gsap'

const animationPage = () => {
  const navButton = document.querySelector('.nav-button')
  const navOpen = document.querySelector('.nav-open')

  // const tween = gsap.to('.cover',1,{
  //   width:'40%',
  //   ease:'power2.inOut'
  // })
  const tl = new gsap.timeline({ paused: true })
  let toggle = false
  tl.to('.cover', 1, {
    width: '60%',
    ease: 'power2.easeOut'
  }).to(
    'nav',
    1,
    {
      height: '100%',
      ease: 'power2.easeOut'
    },
    '-=0.5'
  )
  .fromTo(
    '.nav-open',
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: 'power2.easeOut'
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = 'auto'
        console.log('done')
      }
    }
  )

  navButton.addEventListener('click', () => {
    tl.play()
  })
}

onMounted(animationPage)
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <nav>
      <div class="nav-closed">
        <h3>Porfolio</h3>
        <ul class="nav-link">
          <li class="nav-button">shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="nav-open">
        <div class="clothing">
          <h2>Clothes</h2>
          <ul class="nav-link">
            <li><a href="#">Hats</a></li>
            <li><a href="#">Swimsuit</a></li>
            <li><a href="#">Underwear</a></li>
            <li><a href="#">Misc</a></li>
          </ul>
        </div>
        <div class="nav-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUvR0OO8CAxNkIdsgQsD7dNRiEllkMczKtQ&usqp=CAU"
            alt=""
          />
          <img
            src="https://www.lockhatters.com/cdn/shop/files/LIZA-FEDORA-LIFESTYLE-SHOT-1_1600x.jpg?v=1697196861"
            alt=""
          />
        </div>
      </div>
    </nav>
    <img
      class="cover"
      src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <h1 class="cover-date">03/03/2023</h1>
  </header>

  <RouterView />
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  background: black;
  font-family: 'Raleway', sans-serif;
}
.nav-images {
  img {
    height: 250px;
    position: center;
  }
  display: flex;
  justify-content: space-around;
  width: 100%;
}
header {
  height: 100vh;
  position: relative;
  display: flex;
}

.cover {
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  object-fit: cover;
  object-position: top;
}

.cover-date {
  position: absolute;
  left: 10%;
  bottom: 10%;
  color: white;
  opacity: 0.7;
}
nav {
  background: white;
  z-index: 2;
  width: 40%;
  height: 20%;
  color: #916356;
}
.clothing {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  h2 {
    font-size: 50px;
  }
  ul {
    list-style: none;
    li {
      padding-bottom: 10px;
      //list-style: none;

      a {
        text-decoration: none;
        color: #916356;
      }
    }
  }
}

.nav-closed {
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 20%;
  width: 40%;
  position: absolute;
  ul {
    display: flex;
    width: 50%;
    justify-content: space-around;
    list-style: none;
  }
}

.nav-open {
  position: absolute;
  width: 40%;
  height: 80%;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
  pointer-events: none;
}
</style>
