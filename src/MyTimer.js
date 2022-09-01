import { useTimer } from 'react-timer-hook';
function MyTimer({ expiryTimestamp, nextQ }) {

    console.log(expiryTimestamp);
    const {
        seconds,
        restart,
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            
        }
    });
    


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Time left</h1>
            <div style={{ fontSize: '100px' }}>
                <span>{seconds}</span>
            </div>
            <button onClick={() => {
                nextQ();
            }}>Next</button>
        </div>
    );
}
export default MyTimer;