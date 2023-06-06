import{ motion, AnimatePresence }from 'framer-motion'
import {useSnapshot} from 'valtio';
import state from '../store';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import { CustomeButton } from '../components';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src='./threejs.png' alt='threejs logo' className='w-8 h-8 object-contain'/>
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation} className='flex flex-col gap-5'>
                        <h1 className='head-text'>
                            MandM <br className='x1:block hidden'/>
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p className='max-w-md font-normal text-gray-600 text-base my-8'>
                            Create your own 3D unique and exclusive shirts with our brand-new 3D Customization tool.
                            <strong> Unleash your imagination</strong>
                            {''} and define your own style.
                        </p>
                        <CustomeButton 
                            type='filled'
                            title='Customize it'
                            handleClick={() => state.intro = false}
                            customStyle = "w-fit px-4 py-2.5 font-bold text-sm"
                        
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home