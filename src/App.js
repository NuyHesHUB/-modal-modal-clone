import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DraggableResizeModal from './components/common/DraggableResizeModal';
 
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        padding: theme.spacing(2)
    }
}));
 
function App() {
    const classes = useStyles();
    const [open ,setOpen] = useState(false);
    const [resizeOpen ,setResizeOpen] = useState(false);
 
    const handleOpenToggle = (evt) => {
        setOpen(!open)
    };
 
    const handleOpenResizeToggle = (evt) => {
        setResizeOpen(!resizeOpen);
    };
 
    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={handleOpenToggle}>
                Open Draggable Modal
            </Button>
            <Button variant="outlined" color="primary" onClick={handleOpenResizeToggle}>
                Open Draggable(+resize) Modal
            </Button>
            <DraggableResizeModal
                title={'모달 테스트1'}
                open={open}
                width={450}
                height={450}
                onClose={handleOpenToggle}
            >
                test1
            </DraggableResizeModal>
            <DraggableResizeModal
                title={'모달 테스트2'}
                open={resizeOpen}
                isResize={true}
                width={450}
                height={450}
                onClose={handleOpenResizeToggle}
            >
                test2
            </DraggableResizeModal>
        </div>
    );
}
 
export default App;