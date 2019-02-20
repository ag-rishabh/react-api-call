import React from 'react';

const ImageCard = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4 col-md-6">
                <div className="thumbnail">
                    <img
                        alt={props.image.description}
                        src={props.image.urls.regular}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageCard;

