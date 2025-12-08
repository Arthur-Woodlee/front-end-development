import '../styles/global/_typography.scss'
import '../styles/global/_header.scss';
// index.js
import { initNavToggle } from '../scripts/nav-toggle.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
});