function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if ((document as any).mozCancelFullScreen) {
    (document as any).mozCancelFullScreen()
  } else if ((document as any).webkitCancelFullScreen) {
    (document as any).webkitCancelFullScreen()
  } else if ((document as any).msExitFullscreen) {
    (document as any).msExitFullscreen()
  }
}
function fullScreen() {
  var docElm = document.documentElement
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen()
  } else if ((docElm as any).mozRequestFullScreen) {
    (docElm as any).mozRequestFullScreen()
  } else if ((docElm as any).webkitRequestFullScreen) {
    (docElm as any).webkitRequestFullScreen()
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
