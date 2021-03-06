import React from 'react';
import {Link} from 'react-router-dom';

export default function ManifestDisplay(props) {

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
                      <span className='camera-link' key={i}>
                        <Link to={`/rover/${props.manifest.name}/sol/${sol.sol}/camera/${camera}`}>{camera}</Link>
                      </span>
                    )
                  })}</td>
                  <td><Link to={`/rover/${props.manifest.name}/sol/${sol.sol}`}>{sol.total_photos}</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
