import {motion} from 'framer-motion';

const FloatingShape = ({color, size, top, left,deley}) => {
  return (
    <motion.div className={`absolute ${color} ${size} opacity-20 blur-xl`}
    style={{top: top, left: left}}
    animate={{
        y: ['0%','100%','0%'],
        x: ['0%','100%','0%'],
        rotate: [0, 360],
    }}
    
    transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: deley 
    }}
    aria-hidden="true"
    />
    
  )
}

export default FloatingShape
