  
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20150922210911-multiple-hats-outside-shop.jpeg?width=700&crop=2:1',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://manmakesfire.com/wp-content/uploads/2018/01/best-down-jackets-lightweight-puffy-heavyweight-parka-copy.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://www.enlightenmedspa.com/wp-content/uploads/2017/05/many-women-hydrafacial-med-spa.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://fashionablymale.net/wp-content/uploads/2016/11/story-of-windy-city-by-hayden-su3.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;