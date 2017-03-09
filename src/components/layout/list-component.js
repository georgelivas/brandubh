import React from 'react';
import Media from 'react-media';

import ListMenu from '../utils/list';
import InlineListMenu from '../utils/inline-list';

const List = () => (
  <div>
    <Media query="(max-width: 1150px)">
      {(matches) => (
        matches ? (
          <InlineListMenu />
        ) : (
          <ListMenu />
        )
      )}
    </Media>
  </div>
);

export default List;
