import { Component } from 'react';

// оптимізація
const cars = [
  {
    id: 1,
    name: 'audi',
  },
  {
    id: 2,
    name: 'bmw',
  },
  {
    id: 3,
    name: 'ford',
  },
];

export class LanguageFilter extends Component {
  showActiveCar = (id) => {
    console.log(`Active car is ${id}`);
  };

  render() {
    return (
      <div>
        <h2>Events</h2>
        <button onClick={() => this.toggleGallery}>Toggle Gallery</button>
        {cars.map((car) => (
          <Button id={car.id} onClick={this.showActiveCar}>
            {car.name}
          </Button>
        ))}
      </div>
    );
  }
}

class Button extends Component {
  handleButtonClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  };

  render() {
    const { children } = this.props;
    return <button onClick={this.handleButtonClick}>{children}</button>;
  }
}
