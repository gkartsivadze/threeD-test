export default function Project({liveUrl = "#", repoUrl = "#", imageUrl, projectClass = ""}) {
    return (
        <div className={`project_container ${projectClass}`}>
            <img src={imageUrl} alt="" />
            <div className="buttons_container">
                <a target="_blank" href={liveUrl}>Live</a>
                <div className="horizontal_line"></div>
                <a target="_blank" href={repoUrl}>Repo</a>
            </div>
        </div>
    )
}