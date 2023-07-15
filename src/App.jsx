import { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import './App.css'
import Welcome from './components/Welcome';
import Form from './components/Form';
import { projects } from './projects.json';
import Project from './components/Project';

function App() {
  const [moonMode, setMoonMode] = useState(true);
  useEffect(() => {
    if (!moonMode) {
      document.documentElement.classList.add("sun_mode");
    } else {
      document.documentElement.classList.remove("sun_mode");
    }
  }, [moonMode])
  useLayoutEffect(() => {
    handleScroll();
    function handleScroll() {
      let scrollTop = document.documentElement.scrollTop
      let lightHeight = document.querySelector(".light_through").clientHeight
      let welcomeHeight = document.querySelector("#welcome_section").clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollProgress = parseInt(scrollTop - welcomeHeight) / (scrollHeight - 2 * welcomeHeight);

      // Animating carousel rotateZ
      gsap.to("#carousel", { '--carouselZ': document.documentElement.clientWidth > 800 ? scrollProgress * 10 + "deg" : "0deg" })

      // Positioning and animating each card of project
      const cards = gsap.utils.toArray("#carousel .project_container");
      cards.forEach((elem, ind) => {
        let newRotation = ind / cards.length * 360 - scrollProgress * 405;
        gsap.to(elem, {
          '--cards-rotation': `${newRotation}deg`
        })
      })

      // Animating lighting comes up
      if (document.documentElement.clientWidth > 800) {
        gsap.to(".light_through",
          scrollTop < welcomeHeight
            ?
            {
              '--light-transform': (-welcomeHeight - lightHeight) / 2 + scrollTop + "px",
              '--light-rotate': 360 * scrollProgress + "deg"
            }
            :
            {
              '--light-transform': 200 + lightHeight / 2 - scrollProgress * 100 + "px",
              '--light-rotate': 90 * scrollProgress + "deg"
            })
        gsap.to(":root", {
          '--background-top-position': scrollTop > welcomeHeight ? 80 * scrollProgress + "%" : 0
        })
      } else {
        gsap.set(".light_through", { '--light-transform': (-welcomeHeight - lightHeight) / 2 + "px" })
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
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
          <span onClick={() => setMoonMode(prev => !prev)} className={`light_through ${moonMode ? "moon_mode" : "sun_mode"}`}></span>
        </div>
      </section>
      <Form />
    </main>
  )
}

export default App
