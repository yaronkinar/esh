import  { useState } from "react";

const PostVideo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="video" style={{width:"100%"}}  onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? (
                <video autoPlay loop muted style={{ width:"100%", height:"100%",display:isHovered ? "block":"none" }}>
                    <source src="https://www.esh.com/assets/card-vid.e4092562.mp4"  type="video/mp4" />
                </video>
            ) : (
               <img src="https://www.esh.com/assets/card-image.bae01252.png" width="100%" height="300px" alt="card image"/>
            )}
        </div>
    );
};

export default PostVideo;
