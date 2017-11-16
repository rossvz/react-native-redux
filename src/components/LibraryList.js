import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
  componentWillMount () {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow (library) {
    return <ListItem library={library} />
  }

  renderList () {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
  }

  render () {
    console.log(this.props)
    if (!this.props.libraries) return <Text />
    return (
      <View>
        {this.renderList()}
      </View>
    )
  }
}

LibraryList.propTypes = {}
LibraryList.defaultProps = {}
const mapStateToProps = state => {
  return {libraries: state.libraries}
}

export default connect(mapStateToProps)(LibraryList)
