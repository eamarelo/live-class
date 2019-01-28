import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

function onChange(newValue) {
  console.log('change', newValue)
}

class Editor extends Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={onChange}
        name="eclipse"
        editorProps={{ $blockScrolling: true }}
      />
    )
  }
}

export default Editor
