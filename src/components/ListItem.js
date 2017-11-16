import React, { Component } from 'react'
import { CardSection } from './common'
import { LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate (nextProps, nextState, nextContext) {
    LayoutAnimation.spring()
  }

  renderDescription () {
    const {library, expanded} = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render () {
    const {library} = this.props
    const {id, title} = library
    const {expandedTitleStyle, titleStyle} = styles

    return (
      <TouchableWithoutFeedback onPress={() => { this.props.selectLibrary(id) }}>
        <View>
          <CardSection>
            <Text style={this.props.expanded ? expandedTitleStyle : titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    paddingLeft: 15,
    fontSize: 18
  },
  expandedTitleStyle: {
    color: '#0074bb',
    paddingLeft: 15,
    fontSize: 18
  },
  descriptionStyles: {}
}

const mapStateToProps = (state, ownProps) => ({expanded: ownProps.library.id === state.selectedLibraryId})

export default connect(mapStateToProps, actions)(ListItem)
