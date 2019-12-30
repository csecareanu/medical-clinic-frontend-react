import React from 'react';

import classes from './ToolbarGroup.module.css';

 export const ToolbarSepPos = {
    UP: 1,
    DOWN: 2,
    LEFT: 4,
    RIGHT: 8
  };


/* 
 * 1. Groups items on toolbar (surrounding them with a <div> element)
 * 2. Adds separators (some space) on the indicated sides. 
 *    The separators are also enclosed in a '<div>' in order to keep their horizontal/vertical 
 *    position with the group they belongs to, on toolbar resize.
*/
const ToolbarGroup = (props) => {

    let content = props.children;

    if( (ToolbarSepPos.UP & props.separator) || (ToolbarSepPos.DOWN & props.separator)) {
        content = (
            <div className={classes.ColSep}>
                {ToolbarSepPos.UP & props.separator
                    ? <div className={classes.ColSepContent}/> 
                    : null
                }
                {content}
                {ToolbarSepPos.DOWN & props.separator
                    ? <div className={classes.ColSepContent}/> 
                    : null
                }
            </div>
        );
    }

    if( (ToolbarSepPos.LEFT & props.separator) || (ToolbarSepPos.RIGHT & props.separator)) {
        content = (
            <div className={classes.RowSep}>
                {ToolbarSepPos.LEFT & props.separator
                    ? <div className={classes.RowSepContent}/> 
                    : null
                }
                {content}
                {ToolbarSepPos.RIGHT & props.separator
                    ? <div className={classes.RowSepContent}/> 
                    : null
                }
            </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

ToolbarGroup.VerticalSep = (props) =>
{
    let separatorsArray = [' '];
    if(props.repeat) {
        separatorsArray = new Array(parseInt(props.repeat)).fill(' ');
    }

    return (
        <React.Fragment>
            {separatorsArray.map( (elem, idx) => (
                <span key={idx} className={classes.ElementVertSep}></span>
             ))}
        </React.Fragment>
    );
}

export default ToolbarGroup;