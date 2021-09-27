function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
function fullScreen() {
  var docElm = document.documentElement
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen()
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen()
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen()
  }
}

export default {
  fullScreen,
  closeFullScreen
}

// export default {
//   install:(app:any) => {
//     app.config.globaProperties['$fullScreen'] = fullScreen
//     app.config.globaProperties['$closeScreen'] = closeScreen
//   }
// }
