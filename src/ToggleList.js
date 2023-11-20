import React from 'react';
import { useState } from 'react';

function ToggleList(props) {
    const [shownComments, setShouwComments] = useState({});

    const toggleComments = (id, name) => {
        setShouwComments(prevShownComments => ({
            ...prevShownComments,
            [id] : !prevShownComments[id],
            name, 
        }));
    };
    
    return (
        <>
            {props.search_results.map(obj => (
                <div key={obj.id} className="toggle-list">
                    {obj.comment ? (
                        <button onClick={()=> toggleComments(obj.id)}>{obj.name}
                        <svg id="" viewBox="0 0 26 26" className="ico-plus" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                        </button>
                        ) : 
                        null
                    }
                    {/* <div>{obj.text}</div> */}
                    {shownComments[obj.id] ? <p>{obj.comment}</p> : null}
                </div>
            ))}
        </>
    )
}

export default ToggleList;
