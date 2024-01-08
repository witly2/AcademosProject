<template>
  <div class="about">
    <h1 class="font-weight-bold">Dark Mode</h1>
    <svg
      id="darkmode"
      width="69"
      height="65"
      viewBox="0 0 69 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="sun"
        d="M34.5 0C15.5466 0 0 14.6454 0 32.5C0 50.3546 15.5466 65 34.5 65C53.4534 65 69 50.3546 69 32.5C69 14.6454 53.4534 0 34.5 0Z"
        fill="#FDE50E"
      />
    </svg>

    <!-- <svg width="38" height="72" viewBox="0 0 38 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 35.5461C20 55.1522 37.5 71.0461 37.5 71.0461C16.7893 71.0461 0 55.1522 0 35.5461C0 15.94 16.7893 0.0460968 37.5 0.0460968C37.5 0.0460968 20 15.94 20 35.5461Z"
        fill="#FDE50E"
      />
    </svg> -->
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted() {
    // Exemple d'utilisation d'Anime.js pour animer un élément
    // anime({
    //   targets: '.votre-element',
    //   translateX: 250,
    //   easing: 'easeInOutQuad',
    //   duration: 1000
    // })
    this.ChangeMode()
  },
  data() {
    return {}
  },
  methods: {
    ChangeMode() {
      const darkmode = document.getElementById('darkmode')
      const lune =
        'M20 35.5461C20 55.1522 37.5 71.0461 37.5 71.0461C16.7893 71.0461 0 55.1522 0 35.5461C0 15.94 16.7893 0.0460968 37.5 0.0460968C37.5 0.0460968 20 15.94 20 35.5461Z'
      const soleil =
        'M34.5 0C15.5466 0 0 14.6454 0 32.5C0 50.3546 15.5466 65 34.5 65C53.4534 65 69 50.3546 69 32.5C69 14.6454 53.4534 0 34.5 0Z'
      let toggle = false

      darkmode.addEventListener('click', () => {
        const timeline = anime.timeline({
          duration: 750,
          easing: 'easeOutExpo'
        })

        timeline
          .add({
            targets: '.sun',
            d: [{ value: toggle ? soleil : lune }]
          })
          .add(
            {
              targets: '#darkmode',
              rotate: toggle ? 0 : 320
            },
            '-=350'
          )
          .add(
            {
              targets: '.about',
              backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
              color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
            },
            '-=700'
          )

        if (!toggle) {
          toggle = true
        } else {
          toggle = false
        }
      })
    }
  }
}
</script>

<style>
.about {
  background-color: rgb(255, 255, 255);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

svg {
  cursor: pointer;
}
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  
    align-items: center;
  }
  .soleil {
    cursor: pointer;
  }
} */
</style>
