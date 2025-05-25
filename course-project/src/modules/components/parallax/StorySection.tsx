export const StorySection = ({ text, height }: { text: string, height: string }) => {
    return (
        <div
            className="story-section"
            style={{ height: height }}
        >
            <h2>{text}</h2>
        </div>
    );
};