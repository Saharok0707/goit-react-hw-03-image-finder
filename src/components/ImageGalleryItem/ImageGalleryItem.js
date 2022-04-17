import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onClickItem,
}) {
  return (
    <li key={id} className={s.gallery_item}>
      <img
        className={s.gallery_item_image}
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={() => {
          onClickItem(largeImageURL);
        }}
      />
    </li>
  );
}

ImageGalleryItem.protoTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};