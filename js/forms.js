//gets screen size, we don't resize for mobile
const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

// const height = window.innerHeight|| document.documentElement.clientHeight|| 
// document.body.clientHeight;

// handles the weird iframe hard-style width...seriously hubspot?
(width > 600) ? window.onresize = function(){ location.reload(); } : "";