module.exports = {
  pwa: {
    manifestOptions: {
      background_color: 'green'
    },
    name: 'Rates app',
    themeColor: 'yellow',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.exchangeratesapi.io/latest'
        }
      ]
    }
  }
}

// module.exports = {
//   pwa: {
//     manifestOptions: {
//       background_color: 'green'
//     },
//     name: 'Rates app',
//     themeColor: 'yellow',
//     workboxOptions: {
//       runtimeCaching: [
//         {
//           handler: 'NetworkFirst',
//           options: {
//             networkTimeoutSeconds: 5
//           },
//           urlPattern: 'https://api.exchangeratesapi.io/latest'
//         }
//       ]
//     }
//   }
// }