export default function Project({liveUrl = "#", repoUrl = "#", imageUrl}) {
    return (
        <div className='project_container'>
            <img src={imageUrl} alt="" />
            <div className="buttons_container">
                <a target="_blank" href={liveUrl}>Live</a>
                <div className="horizontal_line"></div>
                <a target="_blank" href={repoUrl}>Repo</a>
            </div>
        </div>
    )
}