 import { TailSpin} from 'react-loader-spinner'

 import Lottie from 'react-lottie';
import * as animationData from '../../src/utiles/loading.json'
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

export default function App(){
    return <div className='d-flex justify-content-center align-items-center w-100'>
        <Lottie options={defaultOptions}
               width={130}
                
              />
    </div>
}