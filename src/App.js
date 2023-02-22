import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DraggableResizeModal from './components/common/DraggableResizeModal';
/* 추가 */
import './App.css'
 
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
                width={550}
                height={550}
                onClose={handleOpenResizeToggle}
            >   
            <div id="testWrap">
                <div className="img-box">
                    <img className='profile-img' src="https://images.unsplash.com/photo-1643834776503-891726ed42c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="profile" />
                </div>
                <div className="title-box">nuy</div>
                <p className="content-box">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laborum, culpa ea ut sequi, at similique natus eveniet vitae esse saepe, ipsa eos reiciendis atque voluptatum totam cupiditate odit laboriosam.
                </p>
                <p className="content-box">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laborum, culpa ea ut sequi, at similique natus eveniet vitae esse saepe, ipsa eos reiciendis atque voluptatum totam cupiditate odit laboriosam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cumque numquam sequi! Consequuntur nisi rerum sunt exercitationem incidunt quo illum iusto voluptatibus tenetur dolorum. Ab quibusdam similique culpa vel voluptas?
                </p>
                <div className="sub-title-box">lorem232</div>
                <div className='sub-contents-wrap'>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>JQUERY</li>
                        <li>REACT</li>
                        <li>VUE</li>
                    </ul>
                </div>
                <p className="content-box">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laborum, culpa ea ut sequi, at similique natus eveniet vitae esse saepe, ipsa eos reiciendis atque voluptatum totam cupiditate odit laboriosam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cumque numquam sequi! Consequuntur nisi rerum sunt exercitationem incidunt quo illum iusto voluptatibus tenetur dolorum. Ab quibusdam similique culpa vel voluptas?
                </p>
            </div>
            </DraggableResizeModal>
        </div>
    );
}
 
export default App;