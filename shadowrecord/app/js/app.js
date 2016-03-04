const ReactDOM = require('react-dom');
const React = require('react');

window.React = React;

let Index = require('./components/index.js');

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);

// Display some statistics about this computer, using node's os module.
var os = require('os');
var prettyBytes = require('pretty-bytes');

$('.stats-cpu').append('Number of cpu cores: <span>' + os.cpus().length + '</span>');

setInterval(function(){
    $('.stats-ram').html('Memory Usage: <span>' + prettyBytes(os.freemem())+ '</span>');
}, 1000);