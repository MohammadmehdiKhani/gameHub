import styles from './PlatformList.module.scss'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../../hooks/usePlatforms'

interface Props {
    platforms: Platform[]
}
export default function PlatformList({ platforms }: Props) {
    const arrayOfPlatformNames = platforms.map(platform => platform.name)

    return (
        <div className={styles.iconsContainer}>
            {arrayOfPlatformNames.includes('PC') && <FaWindows />}
            {arrayOfPlatformNames.includes('PlayStation') && <FaPlaystation />}
            {arrayOfPlatformNames.includes('Xbox') && <FaXbox />}
            {arrayOfPlatformNames.includes('iOS') && <MdPhoneIphone />}
            {arrayOfPlatformNames.includes("Android") && <FaAndroid />}
            {arrayOfPlatformNames.includes("Apple Macintosh") && <FaApple />}
            {arrayOfPlatformNames.includes("Linux") && <FaLinux />}
            {arrayOfPlatformNames.includes("Nintendo") && <SiNintendo />}
            {arrayOfPlatformNames.includes("Web") && <BsGlobe />}
        </div>
    )
}
