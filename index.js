const elementAnswer = document.querySelector('#answer')
const inputQuest = document.querySelector('#question')
const questButton = document.querySelector('#idbutton')
const answer = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

function makeQuest() {
  if (inputQuest.value == 0) {
    alert('Type your question!!!')
    return
  }
  questButton.setAttribute('disabled', true)
  const theQuest = '<div>' + inputQuest.value + '</div>'

  const totalAnswers = answer.length

  const randomizer = Math.floor(Math.random() * totalAnswers)
  console.log(answer[randomizer])
  elementAnswer.innerHTML = theQuest + answer[randomizer]
  elementAnswer.style.opacity = 1

  setTimeout(function () {
    elementAnswer.style.opacity = 0
    questButton.removeAttribute('disabled')
  }, 3000)
}

makeQuest()
