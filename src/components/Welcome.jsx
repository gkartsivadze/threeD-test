import { gsap } from "gsap"
import { useEffect } from "react"

export default function Welcome() {
    useEffect(() => {
        let skillHeight = document.querySelector("#skills_carousel > svg").clientHeight;
        let roadHeight = document.querySelector("#skills_carousel").clientHeight + skillHeight * 2;
        let itemsInContainer = 6;
        let spaceBetween = (roadHeight - itemsInContainer * skillHeight) / itemsInContainer;
        let fullHeight = spaceBetween + skillHeight;
            gsap.set("#skills_carousel svg", {left: "50%",
                            x: "-50%",
                            top: -fullHeight,
                            y: (i) => i * fullHeight
                    })
            gsap.to("#skills_carousel svg", {
                            duration: 7,
                            y: "+=" + roadHeight,
                            ease: "none",
                            modifiers: {
                                y: gsap.utils.unitize(x => parseFloat(x) % roadHeight) //force x value to be between 0 and 500 using modulus
                            },
                            repeat: -1
                            })
    }, [])
    return (
        <section id='welcome_section'>
            <div className="hero_div">
                <h1>GIORGI KARTSIVADZE</h1>
                <h2>Front End Developer</h2>
            </div>
            <p>Progress-lover and passionate about coding. Creating new projects and putting my best to start a career in this field.</p>
            <div id="skills_carousel">
                <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html5</title> <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z"></path> </g></svg>
                <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>css3</title> <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path> </g></svg>
                <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e75c7"> <path display="inline" fillRule="evenodd" clipRule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"> </path> </g> </g></svg>
                <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>react</title> <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path> </g></svg>
                <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51ef0ed"> <path display="inline" d="M499.161,364.63c0,0-63.554,171.386-282.354,131.488c-3.443-0.641-6.745-1.838-10.089-2.849 c-0.782-0.229-1.572-0.479-2.354-0.703c-3.285-1.022-6.537-2.07-9.769-3.197c-0.37-0.129-0.723-0.25-1.098-0.383 c-2.944-1.035-5.872-2.134-8.762-3.244c-0.757-0.295-1.51-0.582-2.263-0.89c-3.114-1.23-6.212-2.516-9.277-3.859 c-0.565-0.249-1.11-0.499-1.684-0.752c-2.683-1.193-5.332-2.429-7.959-3.685c-0.682-0.346-1.368-0.666-2.055-0.99 c-0.374-0.187-0.777-0.374-1.16-0.565c-1.696-0.848-3.352-1.729-5.023-2.604c-1.289-0.665-2.599-1.313-3.88-2 c-2.366-1.289-4.699-2.599-7.02-3.938c-0.861-0.491-1.73-0.965-2.583-1.46c-3.152-1.854-6.271-3.78-9.344-5.727 c-0.869-0.557-1.729-1.147-2.586-1.722c-2.004-1.297-4.009-2.595-5.972-3.95c-0.208-0.142-0.407-0.291-0.611-0.437 c-0.761-0.516-1.484-1.044-2.241-1.593c-2.071-1.439-4.121-2.911-6.15-4.408c-0.981-0.74-1.959-1.484-2.932-2.229 c-1.838-1.402-3.667-2.837-5.481-4.284c-0.902-0.723-1.817-1.438-2.719-2.17c-2.212-1.822-4.417-3.677-6.575-5.548 c-0.408-0.357-0.84-0.707-1.256-1.081c-0.042-0.017-0.071-0.05-0.117-0.088c-2.449-2.146-4.853-4.346-7.236-6.591 c-0.719-0.657-1.435-1.36-2.158-2.05c-1.78-1.71-3.543-3.432-5.277-5.178c-0.72-0.707-1.431-1.422-2.121-2.138 c-2.241-2.304-4.454-4.611-6.616-6.97c-0.079-0.107-0.158-0.17-0.253-0.274c-0.038-0.041-0.092-0.096-0.129-0.142 c-2.212-2.437-4.383-4.928-6.508-7.427c-0.595-0.703-1.193-1.422-1.78-2.133c-1.584-1.909-3.144-3.813-4.674-5.743 c-0.636-0.803-1.272-1.613-1.9-2.42c-1.717-2.217-3.414-4.45-5.057-6.721c-0.308-0.424-0.636-0.84-0.932-1.256 c-0.063-0.07-0.116-0.146-0.158-0.216c-1.904-2.633-3.742-5.315-5.547-8.001c-0.561-0.824-1.089-1.672-1.63-2.521 c-1.306-1.987-2.587-3.976-3.826-5.988c-0.648-1.031-1.264-2.066-1.888-3.103c-1.127-1.879-2.229-3.759-3.298-5.655 c-0.611-1.073-1.214-2.121-1.805-3.223c-0.329-0.582-0.686-1.182-1.006-1.792c-0.562-1.016-1.069-2.075-1.618-3.111 c-0.848-1.626-1.709-3.26-2.528-4.915c-34.557-69.094-40.196-153.694,5.048-218.723l35.314-44.789 c-39.843,77.007-21.936,170.778,27.908,238.76c1.8,2.475,3.643,4.916,5.526,7.356c0.583,0.736,1.168,1.477,1.751,2.184 c1.567,1.996,3.168,3.967,4.786,5.918c0.583,0.686,1.152,1.359,1.747,2.066c2.163,2.554,4.375,5.09,6.646,7.564 c0.108,0.12,0.212,0.229,0.316,0.345c2.146,2.342,4.333,4.653,6.558,6.933c0.69,0.698,1.393,1.389,2.096,2.088 c1.747,1.783,3.531,3.514,5.344,5.235c0.686,0.682,1.376,1.339,2.088,2.017c2.449,2.279,4.919,4.545,7.435,6.758 c0.262,0.229,0.532,0.44,0.773,0.652c2.329,2.025,4.687,3.997,7.074,5.96c0.832,0.678,1.68,1.355,2.528,2.029 c1.875,1.509,3.772,2.978,5.681,4.437c0.911,0.699,1.846,1.41,2.791,2.108c2.075,1.539,4.171,3.053,6.288,4.55 c0.719,0.486,1.418,1.015,2.146,1.505c2.188,1.514,4.417,2.986,6.654,4.425c0.84,0.558,1.672,1.14,2.52,1.681 c3.086,1.954,6.205,3.875,9.357,5.73c0.811,0.466,1.622,0.902,2.42,1.352c2.379,1.376,4.762,2.731,7.19,4.029 c1.314,0.731,2.666,1.393,3.996,2.096c1.988,1.023,3.976,2.063,5.988,3.044c0.761,0.374,1.501,0.724,2.246,1.077 c2.566,1.235,5.14,2.425,7.743,3.605c0.616,0.267,1.214,0.545,1.834,0.811c3.032,1.327,6.096,2.6,9.186,3.817 c0.794,0.316,1.589,0.62,2.387,0.937c2.811,1.089,5.643,2.146,8.508,3.156c0.445,0.158,0.89,0.32,1.322,0.478 c3.194,1.099,6.408,2.146,9.648,3.136c0.827,0.258,1.655,0.508,2.503,0.757c3.318,0.981,6.616,2.042,10.018,2.812 C351.039,452.521,445.783,434.173,499.161,364.63z M182.44,254.758c4.907,7.024,10.338,15.386,16.846,21.031 c2.354,2.598,4.824,5.13,7.34,7.621c0.632,0.648,1.285,1.272,1.938,1.908c2.437,2.371,4.932,4.704,7.494,6.97 c0.108,0.079,0.204,0.188,0.308,0.263c0.029,0.033,0.054,0.041,0.075,0.074c2.845,2.487,5.781,4.887,8.758,7.244 c0.662,0.508,1.318,1.036,1.988,1.552c2.99,2.291,6.039,4.545,9.166,6.69c0.096,0.066,0.17,0.134,0.266,0.2 c1.376,0.956,2.782,1.846,4.175,2.761c0.674,0.433,1.31,0.898,1.983,1.306c2.237,1.435,4.496,2.828,6.795,4.167 c0.325,0.2,0.641,0.366,0.961,0.553c1.975,1.14,3.992,2.267,6.005,3.356c0.698,0.391,1.414,0.74,2.129,1.114 c1.389,0.724,2.786,1.468,4.2,2.171c0.212,0.1,0.433,0.199,0.637,0.287c2.882,1.418,5.788,2.79,8.762,4.079 c0.632,0.283,1.289,0.532,1.934,0.799c2.375,1.006,4.77,1.992,7.178,2.915c1.022,0.387,2.059,0.757,3.073,1.127 c2.191,0.815,4.383,1.556,6.595,2.296c1.003,0.319,1.984,0.648,2.986,0.956c3.144,0.973,6.254,2.212,9.535,2.753 C472.501,366.942,511.5,236.873,511.5,236.873c-35.16,50.633-103.243,74.791-175.897,55.936c-3.223-0.849-6.403-1.776-9.56-2.77 c-0.974-0.292-1.922-0.607-2.883-0.928c-2.245-0.728-4.479-1.501-6.694-2.308c-1.011-0.37-2.025-0.74-3.02-1.123 c-2.425-0.932-4.824-1.896-7.198-2.902c-0.653-0.283-1.306-0.533-1.942-0.824c-2.981-1.299-5.917-2.663-8.812-4.094 c-1.493-0.729-2.953-1.499-4.425-2.254c-0.849-0.437-1.701-0.875-2.549-1.312c-1.88-1.021-3.751-2.08-5.594-3.154 c-0.437-0.252-0.894-0.491-1.339-0.755c-2.283-1.339-4.537-2.718-6.77-4.134c-0.687-0.438-1.352-0.915-2.038-1.366 c-1.477-0.954-2.944-1.921-4.392-2.902c-3.11-2.146-6.138-4.399-9.128-6.678c-0.69-0.543-1.376-1.073-2.059-1.616 c-31.796-25.111-57-59.423-68.994-98.33c-12.555-40.352-9.847-85.647,11.914-122.406l-26.735,37.738 c-32.715,47.085-30.939,110.113-5.419,159.91C172.252,238.95,177.063,247.046,182.44,254.758z M360.5,196.506 c1.393,0.52,2.782,0.981,4.191,1.458c0.616,0.189,1.231,0.401,1.851,0.584c1.988,0.626,3.963,1.352,6.018,1.738 c93.284,18.023,118.58-47.869,125.317-57.566c-22.165,31.91-59.405,39.57-105.111,28.481c-3.605-0.881-7.572-2.185-11.058-3.416 c-4.462-1.591-8.849-3.404-13.124-5.456c-8.121-3.899-15.848-8.629-23.025-14.045c-40.891-31.029-66.291-90.221-39.61-138.425 L291.51,29.76c-19.287,28.386-21.179,63.638-7.801,94.991C297.823,158.025,326.745,184.132,360.5,196.506z"> </path> </g> </g></svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sass</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2A10,10,0,1,1,2,12,10,10,0,0,1,12,2M10,15.33a2.55,2.55,0,0,1,0,1.5c0,.05,0,.1-.06.17s0,.07-.07.12a2.5,2.5,0,0,1-.46.67c-.58.64-1.41.88-1.74.68s-.17-1.12.49-1.83a6.91,6.91,0,0,1,1.76-1.26h0l.08-.05m8.27-9c-.45-1.78-3.4-2.36-6.18-1.37A14,14,0,0,0,7.34,7.63c-1.53,1.44-1.78,2.69-1.68,3.21.34,1.84,2.88,3.05,3.92,3.94h0c-.3.15-2.54,1.28-3.08,2.44A1.62,1.62,0,0,0,7,19.45a3.16,3.16,0,0,0,3.41-1.38A3.44,3.44,0,0,0,10.75,15a4.34,4.34,0,0,1,1.53-.08c1.76.21,2.1,1.3,2,1.76a1.16,1.16,0,0,1-.55.79c-.12.07-.16.1-.15.16s.07.08.17.06a1.36,1.36,0,0,0,1-1.22c0-1.08-1-2.28-2.81-2.25a4.84,4.84,0,0,0-1.56.22l-.08-.09c-1.13-1.2-3.21-2-3.12-3.67,0-.59.23-2.13,4-4,3.08-1.54,5.55-1.12,6-.17.61,1.33-1.32,3.82-4.52,4.18a2.44,2.44,0,0,1-2-.51c-.17-.17-.19-.2-.25-.17s0,.23,0,.33a2,2,0,0,0,1.15.91,6.18,6.18,0,0,0,3.76-.37C17.2,10.12,18.72,8,18.27,6.28Z"></path> </g></svg>
            </div>
        </section>
    )
}