import styles from './channels.module.css'
import channel1 from '../../assets/Channel1.png'
import channel2 from '../../assets/Channel2.png'
import channel3 from '../../assets/Channel3.png'
import channel4 from '../../assets/Channel4.png'
import channel5 from '../../assets/Channel5.png'
import channel6 from '../../assets/Channel6.png'
import channel7 from '../../assets/Channel7.png'
import channel8 from '../../assets/Channel8.png'
import channel9 from '../../assets/Channel9.png'
import channel10 from '../../assets/Channel10.png'

const Channels = () => {
    return (
        <>
            <div className={styles.channels}>
                    <img src={channel1} alt="channel1" />
                    <img src={channel2} alt="channel2" />
                    <img src={channel3} alt="channel3" />
                    <img src={channel4} alt="channel4" />
                    <img src={channel5} alt="channel5" />
                    <img src={channel6} alt="channel6" />
                    <img src={channel7} alt="channel7" />
                    <img src={channel8} alt="channel8" />
                    <img src={channel9} alt="channel9" />
                    <img src={channel10} alt="channel10" />
            </div>
        </>
    )
}

export default Channels