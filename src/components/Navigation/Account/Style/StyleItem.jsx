import React, {useState} from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

export const StyleItem = (props) => {
    const [selected, select] = useState(false)

    return (
        <div className={'style-page-content-item'}>
            <img src={props.url} style={selected
                ? {opacity: 0.5}
                : {opacity: 1}}/>
            <button style={selected
                ? {backgroundColor: '#2b2b2b', color: 'white'}
                : {backgroundColor: 'white', color: '#2b2b2b'}}
                    onClick={() => {
                        !selected && props.addToAnalyse(props.category)
                        select(true)
                    }}>
                <ThumbUpAltIcon className={'style-page-like'}/>
            </button>
        </div>
    )
}