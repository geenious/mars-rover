import React from 'react';

export default function ManifestDisplay(props) {

  console.log('props', props.manifest);


  if (props.manifest === undefined) {
    return (
      <div className='manifest'>
        <p>Select a rover and search to see that rover's manifest</p>
      </div>
    )
  } else {
    return (
      <div className='manifest'>
        <table>
          <tbody>
            <tr className='firstHeader'>
              <th colSpan='3'>{props.manifest.name}</th>
            </tr>
            <tr className='secondHeader'>
              <th>Sol</th>
              <th>Cameras</th>
              <th># of Photos</th>
            </tr>
            {props.manifest.photos.map((sol, i) => {
              return (
                <tr key={i}>
                  <td>{sol.sol}</td>
                  <td>{sol.cameras.map((camera, i) => {
                    return (
                      <span key={i}> {camera} </span>
                    )
                  })}</td>
                  <td>{sol.total_photos}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
