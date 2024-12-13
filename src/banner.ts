import colors from 'picocolors'

const {
  blue,
  bold,
} = colors

export function banner() {
  console.log(blue(bold(`
      ███╗   ███╗ ██████╗      ██╗██╗
      ████╗ ████║██╔═══██╗     ██║██║
      ██╔████╔██║██║   ██║     ██║██║
      ██║╚██╔╝██║██║   ██║██   ██║██║
      ██║ ╚═╝ ██║╚██████╔╝╚█████╔╝██║
      ╚═╝     ╚═╝ ╚═════╝  ╚════╝ ╚═╝
                                                                
     Create your Tauri app with ease!
  `)))
}
