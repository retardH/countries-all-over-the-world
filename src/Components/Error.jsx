import {BiMessageAltError} from 'react-icons/bi'

const Error = () => {
    return ( 
        <div className='mt-24 mx-auto flex items-center justify-center space-x-4'>
            <BiMessageAltError className='text-xl text-amber-500'/>
            <span className="text-xl text-amber-500">There's no country that match your search...</span>
        </div>
     );
}
 
export default Error;