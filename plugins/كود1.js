let handler = async (m, { conn, args, usedPrefix, command }) => {      
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*♯ЅᗩFᏒOT꙯ 🧚‍♂️📌*'
            },
            body: {
              text: 'نورت قسم الاوامر بلازرار🕊💜'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '*_✓◡̈⃝✨✘ ━━│ قائـمـة 📰 الاوامـر│━━✘◡̈⃝🫣✨_*',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'yas',
                        rows: [
                          {
                            header: '*◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝_*',
                            title: '',
                            description: '',
                            id: '.قسم1'
                          },
                          {
                            header: ' *🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎_*',
                            title: '',
                            description: '',
                            id: '.قسم2'
                          },
                          {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                          {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                          {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          }, 
                          {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                            {
                            header: 'سفروت🤺🕊',
                            title: '',
                            description: '',
                            id: '.هات'
                          },
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['no']

export default handler
