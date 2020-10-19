import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function Loading(props) {
  console.log(props)
  return (
    <div className="ui active dimmer">
      <Segment>
      <Dimmer active>
      <div className="ui big text loader">
        <Loader>{props.message}</Loader>
        </div>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
    </div>
  );
}

Loading.defaultProps = {
  message: 'Loading...'
}

export default Loading;