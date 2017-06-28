import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as topojson from 'topojson-client'
import eu from './EU.json'
import SvgContainer from 'components/SvgContainer/SvgContainer'

const d3 = require('d3')

class Europe extends Component {
  render () {
    const {
        scale,
        width,
        height,
        center
    } = this.props.map.eu
    const projection = d3
      .geoMercator()
      .scale(scale)
      .translate([width / 2, height / 2])
      .center(center)
    const path = d3
      .geoPath()
      .projection(
          projection
      )
    const regions = topojson
      .feature(
          eu,
          eu
          .objects
          .europe
      )
      .features

    return (
      <div>
        <div>
          <SvgContainer
            width={width}
            height={height}
          >
            {
              regions.map((e, i) => {
                return (
                  <path
                    key={e.properties.name}
                    d={path(e)}
                    stroke={'#fff'}
                    fill={'#1B2935'}
                    strokeWidth={1}
                  >
                    <title>
                      {e.properties.name}
                    </title>
                  </path>
                )
              })
            }
          </SvgContainer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  'map': store.map
})

export default connect(mapStateToProps)(Europe)
