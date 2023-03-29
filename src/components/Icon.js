import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
const Icon = ({ name }) => {

    // eslint-disable-next-line default-case
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icons fs-2" />
        case 'cross':
            return <FaTimes className="icons fs-2" />
        default:
            return <FaPen className="icons fs-3" />
            
        }

};

export default Icon;
