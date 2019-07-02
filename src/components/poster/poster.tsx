import React from "react";

import NoPoster from "../../assets/icons/NoPoster.jpg";

interface IProps {
    posterPath: string;
    style?: string;
}

const Poster = ({ posterPath, style }: IProps) => {
    const poster = posterPath || NoPoster;
    return (
            <img src={poster} alt="" className={style} />
    );
};

export default Poster;