import toast, { Toaster } from 'react-hot-toast';
import './Day2.css';

function Day2() {

  const notify = () => toast('Here is your toast.');

    return (
        <div className='center-btn'>
     <button className='toast-btn' onClick={notify}>Make me a toast</button>
      <Toaster />
        </div>
    )
}

export default Day2;