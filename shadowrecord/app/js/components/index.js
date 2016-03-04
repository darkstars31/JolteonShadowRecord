module.exports = React.createClass({
  getInitialState () {
    let shiny = ((Math.random() * 8192) > 8191);
    let image = shiny ? 'assets/sprite_shiny.png' : 'assets/sprite.png';
    return {
      shiny: shiny,
      image_src: image
    }
  },

  render () {
    return (
        <div className="window">
          <div className="header">

          </div>
          <div className="main center">
            <h3>Congratulations! Jolteon was caught!</h3>
            <img src={this.state.image_src} />
            <div className="">
              <button className="btn">Start</button>
              <button className="btn">Stop</button>
            </div>
          </div>
          <div className="footer center">
              <div className="stats-cpu"></div>
              <div className="stats-ram"></div>
          </div>
        </div>
    )
  }
})
