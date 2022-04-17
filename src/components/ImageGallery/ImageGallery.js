import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ arrayImage, toggleModal }) {
  return (
    <ul className={s.gallery}>
      {arrayImage.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImage={largeImageURL}
          onClickItem={() => {
            toggleModal(largeImageURL);
          }}
        />
      ))}
    </ul>
  );
}
ImageGallery.protoTypes = {
  onClickItem: PropTypes.func.isRequired,
  arrayImage: PropTypes.array.isRequired,
};

export default ImageGallery;