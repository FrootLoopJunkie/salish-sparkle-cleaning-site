import ConsultationButton from "./ConsultationButton";

function ImageSlideshow({images, currentPage, changePageTo}) {
    return (
        <div className="ImageSlideshowContainer">
            <div className="ImageSlideshowOverlay">
                <ConsultationButton 
                    currentPage={currentPage}
                    changePageTo={changePageTo}
                />
            </div>
            {images.map((element, index) => {
                return <img key={index} className="SlideshowImage" src={element} alt={`Slide ${index}`}></img>
            })}
        </div>
    );
}

export default ImageSlideshow;
