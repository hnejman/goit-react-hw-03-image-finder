import { Searchbar } from 'components/Searchbar';
import {ImageGallery} from 'components/ImageGallery';
import {ImageGalleryItem} from 'components/ImageGalleryItem';
import {Loader} from 'components/Loader';
import {Button} from 'components/Button';
import {Modal} from 'components/Modal';
import 'components/styles.css';


export const App = () => {
  return (
    <>
      <Searchbar />
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal />
    </>
  );
};
