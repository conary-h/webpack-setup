import _ from 'lodash';
import './style.scss';
import atk from './img/attack.jpeg';

function component() {
  const element = document.createElement('div');
  const oImg = document.createElement('img');

  oImg.setAttribute('src', atk);

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('kenny');

  return element;
}

document.body.appendChild(component());