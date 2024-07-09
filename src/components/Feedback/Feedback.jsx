import { useState } from 'react'
import './Feedback.css'
import MyButton from '../myButton/myButton'

export default function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
  
    const handleLike = () => {
      setLikes(likes + 1);
    };
  
    const handleDislike = () => {
      setDislikes(dislikes + 1);
    };
  
    const handleReset = () => {
      setLikes(0);
      setDislikes(0);
    };

    return (
        <div className='feedback-container'>
            <h3>Ставь 👍 если тебе понравилось!</h3>
            <div className='like-dislike-container'>
                <div className='feedback-like'>
                    <span>{likes}</span>
                    <MyButton onClick={handleLike} type='button' name='👍'>
                        Like
                    </MyButton>
                </div>
                <div className='feedback-dislike'>
                    <MyButton onClick={handleDislike} type='button' name='👎'>
                        Dislike
                    </MyButton>
                    <span>{dislikes}</span>
                </div>
            </div>
            <div className='feedback-reset'>
                <MyButton onClick={handleReset} type='button' name='RESET'>
                    Reset Results
                </MyButton>
            </div>
        </div>
    );
}