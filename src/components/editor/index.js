import React, { Component } from 'react'
import AceEditor from 'react-ace'
import axios from 'axios'

import 'brace/mode/javascript'
import 'brace/mode/java'
import 'brace/mode/css'
import 'brace/mode/html'
import 'brace/mode/json'
import 'brace/mode/jsx'
import 'brace/mode/php'
import 'brace/mode/python'
import 'brace/mode/sql'

import 'brace/theme/monokai'

function onChange(newValue) {
  console.log('change', newValue)
}

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.getData()
  }

  getData() {
    const { match } = this.props
    const apiUrl = `http://localhost:3000/class/get${match.url}`
    axios.get(apiUrl)
      .then((response) => {
        console.log('responseeeeeeeeeeeeeeeeeeee', response.data)
        this.setState({
          data: response.data
        })
        console.log('-this.statethis.statethis.statethis.statethis.state', this.state)
      })
      .catch(() => {
      })
  }

  render() {
    const { data } = this.state
    console.log('dataaaaaaaaaaaaRender', data)
    return (
      <div>
        { data.map(item => (
          <AceEditor
            mode={item.mode}
            theme="monokai"
            onChange={onChange}
            name="eclipse"
            editorProps={{ $blockScrolling: true }}
          />
        ))}
      </div>
    )
  }
}

export default Editor
