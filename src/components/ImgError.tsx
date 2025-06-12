import { Icon } from '@iconify/react/dist/iconify.js';

export const ImgError = () => <div className='flex flex-col justify-center items-center gap-[1em]'>
    <Icon icon='subway:error' color='#f00' width='4em'></Icon>
    <span className='text-[2em] font-bold'>No image found</span>
</div>