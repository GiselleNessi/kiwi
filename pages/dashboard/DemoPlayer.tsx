import { Player } from '@livepeer/react';
 
import Image from 'next/image';
 
const playbackId =
  'bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy';
 
import img from '../../public/CKSblack.png';
 
const PosterImage = () => {
  return (
    <Image
          src={img}
          priority
          placeholder="blur" alt={''}    />
  );
};
 
export const DemoPlayer = () => {
  return (
    <iframe
    src="https://lvpr.tv?v={PLAYBACK_ID}"
    allowFullScreen
    allow="autoplay; encrypted-media; picture-in-picture"
    sandbox="allow-same-origin allow-scripts"
  >
  </iframe>
  );
};