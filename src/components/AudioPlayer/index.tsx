import * as React from 'react'
import * as Mousetrap from 'mousetrap'

import PlayerTime from './PlayerTime'

class AudioPlayer extends React.Component {
  public componentDidMount() {
    Mousetrap.bind(
      ['space', 'left', 'right'],
      e => {
        e.preventDefault();
      },
      'keydown'
    );
  }

  public render() {

    return (
      <div>
        <div>
          <div>
            img
          </div>
          <div>
            <h1>title</h1>
            artistName albumName hot
          </div>
        </div>
        <PlayerTime />
        <div>
          left
          play or parse
          right
        </div>
        <div>
          volume control
          random or sequential or single
          list
        </div>
      </div>
    )
  }
}

export default AudioPlayer
