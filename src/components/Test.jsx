import { useState } from "react"

export default () => {
    const [cur, setCur] = useState('')
    const [prev, setPrev] = useState('')
    const [post, setPost] = useState('')


    function sample(n,e) {
        if (n == 1) {
            setCur('red')
            setPrev('')
            setPost('blue')
        }
    

    }
    return (
        <div>


            <button key={'1'} className={cur} onClick={(e) => {
                sample(1,e)
            //    setState(!state)
                

            }}>a</button><br />
            <button key={'2'} onClick={(e) => {
                sample(2,e)
                
            //    setState(!state)
            }}>b</button><br />
            <button key={'3'} onClick={(e) => {
                sample(3,e)
                
            }}>c</button><br />
            <button key={'4'} onClick={(e)=>{
                sample(4,e)

            }}>d</button><br />
            <button key={'5'} onClick={(e)=>{
                sample(5,e)

            }}>f</button><br />
        </div>
    )
}