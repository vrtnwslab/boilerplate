import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as topojson from 'topojson-client'
import be from './BE.json'
import SvgContainer from 'components/SvgContainer/SvgContainer'

const d3 = require('d3')

class Belgium extends Component {
  render () {
    const {
      scale,
      center,
      width,
      height,
      selectedAdmin
    } = this.props.map.be
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
          be,
          be
          .objects[`BEL_adm${selectedAdmin}`]
      )
      .features
    return (
      <SvgContainer
        width={width}
        height={height}
      >
        {
          <g>
            {
              regions.map((e, i) => {
                if (process.env.NODE_ENV === `development`) {
                  console.log(e)
                }
                return (
                  <path
                    key={i}
                    d={path(e)}
                    fill={'#1B2935'}
                    stroke={'#fff'}
                    strokeWidth={1}
                  >
                    <title>
                      {e.properties['NAME_4']}
                    </title>
                  </path>
                )
              })
            }
          </g>
        }
      </SvgContainer>
    )
  }
}

const mapStateToProps = (store) => ({
  'map': store.map
})

export default connect(mapStateToProps)(Belgium)
