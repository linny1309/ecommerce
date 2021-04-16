  
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Amphibians',
          imageUrl: 'https://images.theconversation.com/files/117973/original/image-20160408-23649-1qxbogn.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
          id: 1,
          linkUrl: 'amphibians'
        },
        {
          title: 'Reptiles',
          imageUrl: 'https://www.sustainability-times.com/wp-content/uploads/thumbs/snake_green_toxic_close_yellow-1360744-1-37ce5boseygd6f9gfv83r4.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Crustaceans',
          imageUrl: 'https://nationalzoo.si.edu/sites/default/files/animals/landhermitcrab-002.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Salt Water Fish',
          imageUrl: 'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Fresh Water Fish',
          imageUrl: 'https://nhlakes.org/wp-content/uploads/nh-lakes-our-programs.jpg',
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