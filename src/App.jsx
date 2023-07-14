import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './App.css'
import Welcome from './components/Welcome';
import Form from './components/Form';
import { projects } from './projects.json';
import Project from './components/Project';

function App() {
  
  useLayoutEffect(() => {
    handleScroll();
    function handleScroll() {
      let scrollTop = document.documentElement.scrollTop
      let lightHeight = document.querySelector(".light_through").clientHeight
      let welcomeHeight = document.querySelector("#welcome_section").clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollProgress = parseInt(scrollTop - welcomeHeight) / (scrollHeight - 2 * welcomeHeight);

      // Animating carousel rotateZ
      gsap.to("#carousel", { '--carouselZ': scrollProgress * 10 + "deg" })

      // Positioning and animating each card of project
      const cards = gsap.utils.toArray("#carousel .project_container");
      cards.forEach((elem, ind) => {
        let newRotation = ind / cards.length * 360 - scrollProgress * 405;
        gsap.to(elem, {
          '--cards-rotation': `${newRotation}deg`,
          duration: 1
        })
      })

      // Animating lighting comes up
      gsap.to(".light_through",
        scrollTop < welcomeHeight
          ?
          {
            '--light-transform': (-welcomeHeight - lightHeight) / 2 + scrollTop + "px",
            '--light-rotate': 720 * scrollProgress + "deg",
            duration: 2
          }
          :
          {
            '--light-transform': 200 + lightHeight / 2 - scrollProgress * 100 + "px"
          })
      gsap.to(":root", 1 , {
        '--background-top-position': scrollTop > welcomeHeight ? 10 * scrollProgress + "%" : 0
      })
    }


    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("mousemove", handleScroll)
  }, [])

  return (
    <main>
      <Welcome />
      <section id="carousel_container">
        <div id="carousel">
          {
            projects.map(elem => {
              return (
                <Project imageUrl={elem.imgUrl} liveUrl={elem.liveUrl} repoUrl={elem.repoUrl} projectClass={elem.className} key={elem.id} />
              )
            })
          }
          <span className='light_through moon_mode'></span>
        </div>
      </section>
      <Form />
    </main>
  )
}

export default App
