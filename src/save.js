/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
  const { title, text, buttons, image, showTitle, showText } = attributes;

  return (
    <section {...useBlockProps.save({ className: 'hero-block' })}>
      <div class="wrapper">
        <div class="hero-block__left">
          {showTitle && <RichText.Content tagName="h1" className="hero-block__title" value={title} />}
          {showText && <RichText.Content tagName="p" className="hero-block__text" value={text} />}
          <div class="hero-block__buttons">
            {buttons.map((button, index) =>
              button.show ? (
                <a key={index} href={button.url} className={`button ${button.style}`}>
                  {button.text}
                </a>
              ) : null,
            )}
          </div>
        </div>
        <div class="hero-block__right">{image.url && <img src={image.url} loading="eager" alt={image.alt} srcSet={image.srcSet} sizes="100vw" />}</div>
      </div>
    </section>
  );
}
