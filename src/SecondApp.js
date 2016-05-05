import React from 'react'

export default class SecondApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
  }


  render() {
    console.log(this.state)
    return (
      <div>Skeleton ready</div>)
  }
}
