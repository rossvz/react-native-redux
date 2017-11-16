import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'

class App extends Component {
  render () {
    return (
      <Provider store={createStore(reducers)} >
        <View style={{flex: 1}} >
          <Header title={'Tech Stack'} />
          <LibraryList />
        </View >
      </Provider >
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App