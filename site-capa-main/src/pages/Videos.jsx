import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import VideoPlayer from "../components/VideoPlayer";
import { ArrowRight } from "lucide-react";
import videos from "../data/list-videos";

// TODO: Bouton partager



const Videos = () => {

    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    return (
        <>
        <ScrollToTop />
        <div className="h-fit w-full flex flex-col-reverse md:flex-row m-auto">
            <div className="min-h-10 md:w-[36rem] my-4 md:my-6 mx-5 flex flex-col gap-2">
                { videos.map((video, index) => { return (
                    <label key={ index } className="cursor-pointer rounded-2xl hover:bg-secondary/50 has-[:checked]:bg-secondary">
                        <input className='hidden absolute peer/video' type="radio" name="video-select" defaultChecked={ index == 0 } onChange={ () => setCurrentVideo(video) }/>
                        <div className="flex flex-row p-2 gap-2">
                            <div className="h-14 aspect-video object-cover bg-primary rounded-xl" ><img className="rounded-xl" src={ video.image } /></div>
                            <div className="flex flex-col w-full">
                                <span className="text-lg font-subtitle font-extrabold line-clamp-1">{ video.name }</span>
                                <span className="text-neutral-500 truncate">{ video.shortDescription }</span>
                            </div>
                        </div>
                    </label>
                )}) }
            </div>
            <div className='h-1 w-full px-5 md:h-auto md:px-0 md:py-5 md:w-1'>
                <div className='h-full w-full bg-secondary/50 rounded' />
            </div>
            <div className="md:w-full">
                <div className="mx-5 my-4 md:mx-10 md:my-6">
                    <VideoPlayer className="rounded-2xl sm:rounded-3xl" ytId={ currentVideo.ytId }/>
                    <div className="mt-6 flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                            <span className="font-title text-2xl sm:text-3xl md:sm:text-4xl">{ currentVideo.name }</span>
                            { currentVideo.knowMoreLink &&
                                <Link to={ currentVideo.knowMoreLink } className="group badge md:badge-lg badge-accent badge-outline hover:shadow-md hover:shadow-accent/25">
                                    En savoir plus 
                                    <ArrowRight className="size-4 mr-1 ml-1 transition-all duration-150 group-hover:mr-0 group-hover:ml-2"/>
                                </Link>
                            }
                        </div>
                        <span className="md:text-lg opacity-70 text-pretty line-clamp-4">{ currentVideo.longDescription }</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Videos;