import React, { useState } from 'react'

const ScoreTable = ({ cwData, cwIndex }) => {
  return (
    <table id="scoreTable" cellSpacing={0}>
      <thead>
        <tr>
          <th colSpan="3">Week {cwIndex + 1}</th>
        </tr>
        <tr>
          <th>Day</th>
          <th>Kate</th>
          <th>Will</th>
        </tr>
      </thead>
      <tbody>
        {
          cwData[cwIndex].map(day => (
            <tr key={day.Date} style={{fontFamily: "monospace"}}>
              <td>
                {
                  new Date(
                    day.Date.slice(0, 4),
                    day.Date.slice(4, 6) - 1,
                    day.Date.slice(6, 8)
                  ).toLocaleString(
                    undefined, {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    }
                  )
                }
              </td>
              <td>{day.Kate}</td>
              <td>{day.Will}</td>
            </tr>
          ))
        }


        {/* {
          currentWeek.map(x => (
            <tr style={{fontFamily: "monospace"}}>
              <td>
              {
                x.toLocaleString(
                  undefined, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  }
                )
              }
              </td>
              <td></td>
              <td></td>
            </tr>
          ))
        } */}
      </tbody>
    </table>
  )
}

export default ScoreTable