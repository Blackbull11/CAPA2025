const VideoPlayer = ({ ytId, disableAutoplay, className }) => {
    
    return (
        <>
        <iframe className={`w-full aspect-video ${ className }`}
            src={ `https://www.youtube.com/embed/${ ytId }?${ disableAutoplay ? '' : 'autoplay=1' }&rel=0&color=white` }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="origin-when-cross-origin"
            allowFullScreen
            >
        </iframe>
        </>
    );
}

export default VideoPlayer;