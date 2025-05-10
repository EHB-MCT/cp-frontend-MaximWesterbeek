import { YoutubeEmbedType } from "~/shared/services/youtubeEmbed.types";

export const YoutubeEmbed = ({ embedId }: YoutubeEmbedType) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);