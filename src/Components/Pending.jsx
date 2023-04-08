import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Pending = () => {
    return ( 
        <div className='flex mt-24 items-center justify-center mx-auto'>
            <AiOutlineLoading3Quarters className='animate-spin text-7xl text-zinc-400 dark:text-slate-50 font-bold'/>
        </div>
     );
}
 
export default Pending;