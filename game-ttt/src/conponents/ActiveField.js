import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system';
import Cell from './Cell';


const ActiveField = ({ game, actions }) => {
  
const getStepType = function(steps, row, column){
  var step = steps.filter(s => s.row === row && s.column === column);
  return step?.stepType;
}
  var options = game.options;
   var rows = [];
   for (let row = 0; row < options.rows; row++) {
     var cellls = [];
     for (let column = 0; column < options.columns; column++) {
     cellls.push(
     <Col sm={3} key={`${row}_${column}`}>
       <Cell  addPoint={() => actions.addPoint(row, column)} 
              stepType={getStepType(game.steps, row, column)} />
     </Col>
     );
     }
    rows.push(<Row key={row.toString()}>{cellls}</Row>)
   }  
    return (
        <div>
            <h1>{game.title}</h1>
            <h1>{game.steps.length}</h1>
            <Container>
             {rows}
            </Container>
            
        </div>
    )
}

ActiveField.propTypes = {
    game: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

export default ActiveField

  /*
  PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
    */