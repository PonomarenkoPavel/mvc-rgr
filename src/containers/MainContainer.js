import React, { PureComponent } from 'react';
import { MainComponent } from '../components/MainComponent';
import { connect } from 'react-redux';
import * as mainSelectors from '../ducks/main/selectors';
import mainActions from '../ducks/main/actions';

class MainContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      operation: 1,
    }
  }

  handleChange = callback => ({ target: { value }}) => {
    callback(value);
  }

  setOperation = ({ target: { value }}) => {
    this.setState({operation: value});
  }

  getResultOfOperation = () => {
    const { operation } = this.state;
    const { width, length, height } = this.props;
    switch(+operation) {
      case 1: 
        return {
          type: 'Объем параллелепипеда',
          value: (width*length*height),
        };
      case 2:
        return {
          type: 'Площадь поверхности параллелепипеда',
          value: 2*(width*length + length*height + width*height),
        };
      case 3: 
        return {
          type: 'Диагональ',
          value: Math.sqrt(length**2 + width**2 + height**2).toFixed(2),
        };
      case 4: 
        return {
          type: 'Площадь лицевой грани',
          value: (length*height),
        };
      case 5:
        return {
          type: 'Площадь боковой грани',
          value: (width*height),
        };
      default: 
        return {
          type: 'Некорректное значение',
          value: null,
        };
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { setResult } = this.props;
    const result = this.getResultOfOperation();
    setResult(result);
  }

  render() {
    const { width, length, height, setHeight, setLength, setWidth, result } = this.props;
    const { operation } = this.state;
    return (
      <MainComponent 
        width={width} 
        length={length} 
        height={height} 
        operation={operation}
        setHeight={this.handleChange(setHeight)}
        setLength={this.handleChange(setLength)}
        setWidth={this.handleChange(setWidth)}
        setOperation={this.setOperation}
        handleSubmit={this.handleSubmit}
        result={result}
      />
    );
  }
}

const MapStateToProps = state => ({
  width: mainSelectors.selectWidth(state),
  length: mainSelectors.selectLength(state),
  height: mainSelectors.selectHeight(state),
  result: mainSelectors.selectResult(state),
});

const MapDispatchToProps = {
  setLength: mainActions.setLength,
  setWidth: mainActions.setWidth,
  setHeight: mainActions.setHeight,
  setResult: mainActions.setResult,
};

export const MainContainerConnect = connect(MapStateToProps, MapDispatchToProps)(MainContainer);