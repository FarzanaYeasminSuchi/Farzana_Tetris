import React,{useState} from 'react';
import { createStage } from '../gameHelpers';
//styled components
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris';

//custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = ()=>
{
    const [dropTime,setDropTime] = useState(null);
    const [gameOver,setgameOver] = useState(false);  
    
    const [player,updaatePlayerPos,resetPlayer]=usePlayer();
    const [stage,setStage]=useStage(player);

    console.log('re-render');
     
    const movePlayer=dir=>{
        updatePlayerPos({x:dir, y:0});

    }
    const startGame=()=>{
        setStage(createStage());
        resetPlayer();
        

    }

    const drop = ()=>{
        updatePlayerPos({x:0, y:1,collided :false})
    }


    const dropPlayer = () =>{
        drop();

    }
    const move =({keycode})=>{
        if(!gameOver){
            if(e.keyCode===37){
                movePlayer(-1);
            } else if(keyCode===39){
                movePlayer(1);
            } else if (keyCode===40){
                dropPlayer();
            }

        }

    }
    return(
        <StyledTetrisWrapper role= "button" tabIndex="0" onKeyDown={e=>move(e)}>
            <StyledTetris>
             <Stage stage={stage}/>
             <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over"/>

                ):(
                <div>
                 <Display text="USERFACET"/>
                 <Display text="NextWord"/>
                 <Display text="Score"/>
                 <Display text="HINT"/>
                 </div>
                 )}
                 <StartButton onclick={startGame}/>
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};
    

export default Tetris;
