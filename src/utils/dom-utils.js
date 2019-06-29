import sizes from 'styles/sizes';

//jquery
import $ from 'jquery';
const $body = $('html, body');

export const scrollToSection = (section) => {
  $(document).ready(() => {
    const bodyScrolltop = $body.scrollTop();

    if (bodyScrolltop !== 0) { //scroll only when user enters the site for the first time (is on 0 position)
      return false;
    }

    setTimeout(() => { //wait for intro animation to finish
      const foundElement = $(`#${section}`);
      if (foundElement.length !== 0) { //if element is found
        $body.animate({
          scrollTop: foundElement.offset().top - 30 - sizes.header.height //scroll to the offsetTop - the fixed header height
        }, 300);
      }
    }, 500);
  });

}

export const scrollBodyToTop = () => {
  $body.scrollTop(0);
}