import './style.css';
import { initRouter } from './router';
import { createIcons, icons } from 'lucide';

createIcons({ icons })

window.addEventListener('DOMContentLoaded', initRouter)