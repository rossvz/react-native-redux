import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  return (<View style={styles.viewStyle} >
    <Text style={styles.textStyle} >{props.title}</Text >
  </View >)
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    height: 70,
    paddingTop: 15,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export { Header }
