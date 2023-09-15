import React, { useState } from 'react'
import './Tic.css'

function TicTacToe() {

    const[turn,setTurn] = useState('X');
    const [cells,setCells] = useState(Array(9).fill(''));
    const[winner,setWinner] = useState('');

    const Winner=(squares)=>{
        let combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down : [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnol : [
                [0,4,8],
                [2,4,6]
            ]
        }

        for(let combo in combos)
        {
            combos[combo].forEach((pattern) => {
                if(squares[pattern[0]] === '' || 
                   squares[pattern[1]] === '' ||
                   squares[pattern[2]] === '')
                   {

                   }
                   else if(
                    squares[pattern[0]] === squares[pattern[1]] && 
                    squares[pattern[1]] === squares[pattern[2]]
                   ){
                        setWinner(squares[pattern[0]]);
                   }
            })
        }
    }

    const handleClick=(num)=>{

        if(cells[num] !== '')
        {
            alert("Already clicked !!!");
            return;
        }

        let squares = [...cells];
        
        if(turn === 'X')
        {
            squares[num] = 'X';
            setTurn('O')
        }

        else{
            squares[num] = 'O';
            setTurn('X');
        }
        Winner(squares);
        setCells(squares);
        console.log(squares);
    }

    const Cell=({num})=>{
        return <td onClick={()=>handleClick(num)}>{cells[num]}</td>
    }

   

  return (
    <div className='container'>
        <center><p>Turn : {turn}</p> </center> 

        <table>
          
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>

                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>

                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        {
            winner && (
                <>
                <p className='winner'>{winner} is the Winner</p>
                <button onClick={()=> window.location.reload()} className='reload'>Play Again</button>
                </>
            )
        }
    </div>
  )
}

export default TicTacToe;
