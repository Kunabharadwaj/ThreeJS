import React from 'react'
import {useState, useEffect} from 'react'
import { AnimatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'
import config from '../config/config'
import state from '../store';
// import download from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import {EditorTabs, FilterTabs, DecalTypes} from '../config/constants'
import { fadeAnimation, slideAnimation} from '../config/motion'
import { AIPicker, ColorPicker, FilePicker, Tab, CustomeButton } from '../components'


const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer