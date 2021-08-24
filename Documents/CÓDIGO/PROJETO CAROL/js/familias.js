
var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;


init();

function init() {
  resize();
  selectElements();
  attachListeners();
}


function selectElements() {
  cards = document.getElementsByClassName('card'),
  nCards = cards.length,
  cover = document.getElementById('cover'),
  openContent = document.getElementById('open-content'),
  openContentText = document.getElementById('open-content-text'),
  openContentImage = document.getElementById('open-content-image')
  closeContent = document.getElementById('close-content');
}


function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener('click', onCloseClick);
  window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener('click', function(e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  })
}


function onCardClick(card, i) {

  currentCard = card;

  currentCard.className += ' clicked';

  setTimeout(function() {animateCoverUp(currentCard)}, 500);

  animateOtherCards(currentCard, true);

  openContent.className += ' open';
}


function animateCoverUp(card) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition);
  // update the content of the opened page
  openContentText.innerHTML = '<h1>'+card.children[2].textContent+'</h1>'+texto+texto2+texto3+texto4+texto5+texto6+texto7+texto8+texto9+texto10+texto11+texto12+texto13+texto14+texto15+texto16+texto17+texto18+texto19+texto20+texto21+texto22+texto23+texto24+texto25+texto26+texto27+texto28+texto29+texto30+texto31+texto32+texto33+texto34+texto35+texto36+texto37+texto38 + texto39 + texto40 + texto41 + texto42  + texto43    ;
  openContentImage.src = card.children[1].src;
  setTimeout(function() {
    // update the scroll position to 0 (so it is at the top of the 'opened' page)
    window.scroll(0, 0);
    // set page to open
    pageIsOpen = true;
  }, 300);
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
 
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
  setTimeout(function() {
    openContentText.innerHTML = '';
    openContentImage.src = '';
    cover.style.width = '0px';
    cover.style.height = '0px';
    pageIsOpen = false;
    currentCard.className = currentCard.className.replace(' clicked', '');
  }, 301);
}

function setCoverPosition(cardPosition) {
  cover.style.left = cardPosition.left + 'px';
  cover.style.top = cardPosition.top + 'px';
  cover.style.width = cardPosition.width + 'px';
  cover.style.height = cardPosition.height + 'px';
}

function setCoverColor(cardStyle) {
  cover.style.backgroundColor = cardStyle.backgroundColor;
}

function scaleCoverToFillWindow(cardPosition) {

  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';
}

/* When the close is clicked */
function onCloseClick() {
  openContent.className = openContent.className.replace(' open', '');
  animateCoverBack(currentCard);
  animateOtherCards(currentCard, false);
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

function animateOutCard(card, delay) {
  setTimeout(function() {
    card.className += ' out';
   }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function() {
    card.className = card.className.replace(' out', '');
  }, delay);
}

function getCardElement(el) {
  if (el.className.indexOf('card ') > -1) return el;
  else return getCardElement(el.parentElement);
}

function resize() {
  if (pageIsOpen) {
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}


var texto = '<p>t teste</p>';
var texto2 = '';
var texto3 = '';
var texto4 = '';
var texto5 = '';
var texto6 = '';
var texto7 = '';
var texto8 = '';
var texto9 = '';
var texto10 = '';
var texto11 = '';
var texto12 = '';
var texto13 = '';
var texto14 = '';
var texto15 = '';
var texto16 = '';
var texto17 = '';
var texto18 = '';
var texto19 = '';
var texto20 = '';
var texto21 = '';
var texto22 = '';
var texto23 = '';
var texto24 = '';
var texto25 = '';
var texto26 = '';
var texto27 = '';
var texto28 = '';
var texto29 = '';
var texto30 = '';
var texto31 = '';
var texto32 = '';
var texto33 = '';
var texto34 = '';
var texto35 = '';
var texto36 = '';
var texto37 = '';
var texto38 = '';
var texto39 = '';
var texto40 = '';
var texto41 = '';
var texto42 = '';
var texto43 = '';



function mudaTexto1(){
  texto = '<h2> Histórias ampliadas: Fabiana comemora cada evolução da filha como superação </h2>';
  texto2 = '<p>Nataly teve uma regressão no desenvolvimento e sequelas devido à doença genética e rara</p>';
  texto3 = '<p>Cada gravidez da Fabiana Cristina Lopes foi um momento de tensão, pois ela desenvolve eclâmpsia, que são convulsões inexplicadas em mulheres que tem pré-eclâmpsia e problemas de hipertensão. No total, foram cinco gestações ㅡ  com dois abortos precoces e três partos prematuros. Nataly Lopes Andrade de Paula foi a quinta bebê de Fabiana. Além de nascer prematura, ela também é portadora de uma doença rara chamada Doença do Ciclo de Ureia. </p> ';
  texto4 = '<p> O Ciclo da Ureia são reações enzimáticas que transformam a amônia em uréia, substância que é eliminada do organismo pela urina. São cinco enzimas envolvidas nesse processo e os defeitos que causam a doença estão relacionados a uma delas. Mas todas elas geram uma alta concentração de amônia no organismo, que é altamente tóxica para as pessoas. E com isso, os portadores desenvolvem sequelas neurológicas e gastrointestinais.   </p>';
  texto5 = '<p>É uma doença genética, no qual o gene deve vir de ambos os pais, que podem ter a doença ou ser apenas portadores do gene. Além disso, a doença pode ser diagnosticada no Teste do Pezinho ampliado, que analisa 53 distúrbios. “Eu nunca tinha ouvido falar do Teste do Pezinho Ampliado. Tanto que a Nataly, quando nasceu, fez o primeiro teste, que é o normal. Por ela ser prematura, com cinco meses repetiu-se o Teste do Pezinho. Então, na verdade, ela fez dois, mas foram os básicos”, afirma Fabiana. A descoberta veio quando participou de um evento do Instituto Vidas Raras, o Vila Rara, realizado no parque Ibirapuera, em São Paulo.    </p>';
  texto7 = '<p>  Fabiana comemorou a sanção da lei do Teste do Pezinho Ampliado no SUS. Para ela, foi uma vitória e um alívio saber que outras mães não vão precisar passar pelas mesmas coisas que ela e a filha: “Foi uma luta, mas que obteve sucesso. E que outras crianças, outras Natalys, não vão precisar estar em cima de uma cama para ter os seus direitos garantidos. Não vão precisar ter inúmeras sequelas para poder ter um atendimento digno”, comemora.     </p>';
  texto8 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/3YovW7QoyyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto9 = '<h2> A doença: como a família descobriu </h2>';
  texto10 = '<p>A família demorou muito para perceber as sequelas da caçula. Nataly apresentou convulsões já duas horas após o nascimento, mas como existe um histórico familiar de epilepsia, foi encarada apenas como um episódio. Fabiana conta que a menina teve um desenvolvimento precoce: “Ela andou com nove meses, sem ter engatinhado  antes e com um ano e dois meses saiu das fraldas; com quatro anos foi alfabetizada e com cinco ela falava inglês fluentemente”. Mas aos seis anos, Nataly começou a regredir.   </p>';
  texto11 = '<p>A menina sempre teve acompanhamento neurológico devido às convulsões. Mas o quadro convulsivo dela foi se agravando, conforme ela foi crescendo. Geralmente, a volta do pós-convulsivo leva em torno de 20 minutos, mas Nataly começou a demorar muito para voltar: “Ela começou com um pós-convulsivo de 15 minutos, depois de 40 minutos, 3 horas, até que chegou a ficar num pós-convulsivo em período de três dias, um pequeno coma”, explica Fabiana.   </p>';
  texto12 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto1/2.jpg" />';
  
  texto13 = '<p style="font-size: 12px;">Até os seis anos, Nataly apresentava um desenvolvimento normal, mas a regressão veio rápida e agressiva (Foto: arquivo pessoal). </p>';
  texto14 = '<p> Aliado a isso, Nataly começou a apresentar uma regressão no desenvolvimento até ali conquistado, conforme relembra Fabiana: “Ela começou a apresentar dificuldade para caminhar, dificuldade para ler, para reconhecer, memorizar, foi quando ela começou a apresentar os sintomas mais graves”. Mas até o primeiro coma, os médicos e a família não tinham pensado na possibilidade de ser uma doença rara. Foram feitos vários diagnósticos errados, como epilepsia, depois alergia à proteína do leite ou alguma doença mitocondrial, até finalmente se chegar ao diagnóstico correto.  </p>';
  texto15 = '<p> “Quando veio o diagnóstico, foi complicado porque você não está preparada. É uma doença totalmente desconhecida. Então veio agonia, ansiedade, medo”, compartilha Fabiana. Para ela, foi angustiante tentar entender até onde e como a doença da filha poderia se desenvolver. </p>';
  texto16 = '<h2>A vida delas hoje  </h2>';
  texto17 = '<p>Hoje com 14 anos, Nataly apresenta várias sequelas neurológicas e gastrointestinais: ela tem uma atrofia do cerebelo, uma paralisia cerebral não completa, um retardo mental leve, escoliose, quadril deslocado, não anda, não come e não consegue fazer as necessidades básicas sozinha.   </p>';
  texto18 = '<p> “Não há tratamento pro Ciclo da Ureia. O que a gente consegue, uma vez que foi detectado e sabendo que ela tem essa deficiência, é fazer o controle do alimento”, fala Fabiana. Nataly se alimenta com uma fórmula à base da proteína da soja via sonda, que é controlada. Fabiana explica que eles controlam a quantidade a partir do peso, para não intoxicar o organismo: “Se ela engordar muito, o leite fica fraco, ela começa a absorver a proteína do próprio músculo. Se ela perder muito peso, o leite se torna tóxico pra ela”. </p>';
  texto19 = '<p>Mas a partir desse controle e ajuda da família, Nataly hoje está indo bem. Fabiana se emociona e conta que a maior superação foi voltar a fazer a Nataly sentar e se comunicar: “Chegou numa fase em que ela estava tão intoxicada por não ter tido ainda o tratamento certo, que já não tinha mais controle de braços, não falava, não sustentava mais o pescoço. E agora ela já tem tudo isso. Pra mim então foi a maior vitória e evolução”.   </p>';
  texto20 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto1/3.jpg" />';
  texto21 = '<p style="font-size: 12px;">Nataly é uma menina feliz e que ama cantar (Foto: arquivo pessoal).  </p>';
  texto22 = '<p>Além de aprender a controlar a doença e sobreviver no dia a dia, Fabiana teve que lidar com custos e burocracias. Uma criança com uma doença que não é diagnosticada cedo, desenvolve sequelas e precisa de insumos e terapias para ter boa qualidade de vida. Fabiana exemplifica: “Se a Nataly tivesse sido diagnosticada quando nasceu, digamos, ela ia parar de andar? Não. Ela poderia ter uma vida normal e não ia precisar de uma cadeira de banho e uma cadeira de rodas. Ela não teria essa necessidade. Não teria a necessidade de uma gastrostomia, não ia ter necessidade de uma cama hospitalar, porque ela teria uma vida normal sem sequelas. O que gera os gastos são as sequelas, não chega nem ser tanto a própria síndrome”.   </p>';
  texto23 = '<p>Fabiana conta que teve alguns problemas na rede pública em relação à acompanhamentos médicos e tratamentos, em especial com profissionais que não estão capacitados para atender crianças raras. E também sofreu com relação à ajuda do próprio governo. Para ela, há falhas na assistência e na rede de apoio: “O governo vai te dar o apoio? Vai porque ele não vai querer responder em cima de algo que ele não fez. Só que o apoio que o sistema dá, não é o aquele que, sinceramente, deveria ter para uma criança rara. Então uma criança que utiliza insumos, utiliza por 30 dias.  O que o Estado faz? Ele libera para uma semana, quinze dias no máximo. Os outros 15 você tem que ir atrás. Então não há assistência integral de ponta a ponta”, complementa.  </p>';
  texto24 = '<p>Para ela, fica a esperança que com a nova lei, a estrutura toda de saúde pública seja melhorada: “A criança ao nascer, já vai entrar no sistema de educação, de benefício, de mercado de trabalho, como uma criança com uma síndrome”, finaliza Fabiana.    </p>';
  texto25 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/wVAoi9KU3fQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto26 = '<p> </p>';
  texto27 = '<p> </p>';
  texto28 = '<p> </p>';
  texto29 = '<p> </p>';
  texto30 = '<p> </p>';
  texto31 = '<p> </p>';
  texto32 = '<p> </p>';
  texto33 = '<p> </p>';
  texto34 = '<p> </p>';
  texto35 = '<p> </p>';
  texto36 = '<p> </p>';
  texto37 = '<p> </p>';
  texto38 = '<p> </p>';
  texto39 = '';
  texto40 = '';
  texto41 = '';
  texto42 = '';
  texto43 = '';





}

function mudaTexto5(){
  texto = '<h2> Histórias Ampliadas: Joana perdeu a filha antes de ter um diagnóstico     </h2>';
  texto2 = '<p>Isabella tinha uma doença rara e teve sérios problemas de saúde      </p>';
  texto3 = '<p> por Carolina Calixto  </p> ';
  texto4 = '<p> O ano de 2020 foi de muitas emoções na vida de Joana Peceguini Zangrandi e da família 一 foi quando nasceu a filha, Isabella Peceguini Zangrandi. Os primeiros quatro meses juntos foram muito especiais. Mas a bebê tinha uma doença rara, que demorou a ser diagnosticada, e desenvolveu sérios problemas de saúde. Isabella faleceu aos cinco meses e meio, depois de muito lutar. O diagnóstico da doença só chegou no início de 2021.   </p>';
  texto5 = '<p>  Isabella tinha a chamada Oxidação dos Ácidos Graxos de Cadeia Longa. É um tipo de Distúrbios da Oxidação de Ácidos Graxos, um problema metabólico no qual o organismo não consegue decompor gorduras, essenciais para a produção de energia para o corpo. A criança portadora da doença tem uma deficiência ou não tem as enzimas responsáveis por essa decomposição e, com isso, o organismo não funciona direito, pela falta de energia, deixando elementos tóxicos se acumularem no corpo. A criança não pode fazer esforço, para não gastar energia e acelerar o metabolismo, e nem ficar em jejum, já que com isso, o organismo começa a decompor outras partes essenciais.   </p>';
  texto7 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/2.jpg" />';
  texto8 = '<p style="font-size: 12px;"> A doença da Isabella é genética e se manifesta quando os pais têm pelo menos um gene para transmissão (Foto: arquivo pessoal).  </p>';
  texto9 = '<p>  A doença da Isabella não está contemplada no Teste do Pezinho oferecido no SUS, apenas no Ampliado, quase nunca informado para as mães pelos médicos. Joana só descobriu sobre esse outro exame quando já estava buscando o diagnóstico da filha: “Depois eu conversei com o pediatra e ele falou: é muito difícil a gente pedir, ainda mais no seu caso que foi uma gestação tranquila, um parto tranquilo. Ela não tinha indícios de ter algum problema. Então ele me pediu desculpas por não ter informado”, conta a mãe.   </p>';
  texto10 = '<p> Para ela, a orientação dos profissionais da saúde em relação ao pós-parto é falha, já que muitas explicações poderiam ser dadas sobre testes importantes (e não só as vacinas), além das melhores dicas para a mãe e o bebê: “Até mesmo orientação quanto à amamentação, no meu caso deu tudo certo. Eu fazia um pouco da minha cabeça, um pouco eu acho com base no que lia na internet. Depois percebi que o que eu estava fazendo talvez não fosse o correto. Então, até a orientação sobre a amamentação acho que ainda é um pouco precária”, explica Joana. As consultas de pré-natal seriam o momento ideal para conversar com as mães e orientá-las em relação ao que esperar nas primeiras etapas da maternidade, segundo o próprio <a href="https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf"  target="_blank"> Ministério da Saúde. </a>   </p>';
  texto11 = '<h2>A doença: da descoberta à perda       </h2>';
  texto12 = '<p>  Como a maioria das doenças raras, os sintomas apareceram e foram notados em Isabella ao longo dos primeiros meses de vida. A gravidez de Joana foi tranquila, ela fez todos os exames e as consultas necessárias e, por conta da pandemia da Covid-19 e do medo de contaminação, ela marcou uma cesárea para evitar um hospital muito cheio: “ A gente teve um parto mais tranquilo. A Isabella nasceu no dia 15 de maio de 2020. Até aí estava correndo tudo bem”,  acrescenta.     </p>';
  texto13 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/3.jpg" />';
  texto14 = '<p style="font-size: 12px;"> Isabella era a primeira filha do casal (Foto: arquivo pessoal).     </p>';
  texto15 = '<p> A <a href="https://www.sbp.com.br/filiada/goias/noticias/noticia/nid/com-que-frequencia-ir-ao-pediatra/"  target="_blank">  orientação dos profissionais </a> é fazer um acompanhamento bem de perto no primeiro ano de vida. Após o primeiro mês, recomenda-se a ida mensal a consultas pediátricas até o sexto mês e, a partir disso, a cada dois meses. Nessas consultas são avaliados o desenvolvimento do recém-nascido, sanadas dúvidas dos pais e examina-se como está a criança. Nas consultas dos dois primeiros meses de Isabella, tudo estava bem.    </p>';
  texto16 = '<p>   Joana conta que estava muito animada para ver o crescimento e evolução da filha: “Como mãe de primeira viagem a gente fica ali esperando todos os passos do desenvolvimento do bebê, e eu estava muito atenta quanto a isso. E também, numa expectativa, até por conta de eu ser educadora física, assim: nossa minha filha antes de um ano vai estar andando. A gente quer muito que o nosso filho seja brilhante”, fala. Mas ela logo notou que Isabella estava com algumas dificuldades de sustentação.      </p>';
  texto17 = '<p>  Na consulta dos três meses, comentou com o pediatra a preocupação, mas ele explicou que cada criança se desenvolve de maneira diferente: algumas com três meses sustentam o corpo, mas outras não. Segundo ele, ainda não podia ser considerado um atraso e era preciso continuar estimulando a bebê até a próxima consulta.  </p>';
  texto18 = '<p>  “Na consulta de quatro meses a criança ainda não sustentava o pescocinho, inclusive, começou a perder o pouquinho da sustentação que tinha. Antes, eu às vezes conseguia tirar uma foto dela sentadinha, apoiada, porque ela não tinha sustentação ainda, mas chegou um momento em que eu colocava Isabella sentada e mesmo com o apoio ela ia [caindo]. Igual uma bonequinha de pano. Então foi nesse momento que a gente começou mesmo a se preocupar”, relembra Joana.     </p>';
  texto19 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/4.jpg" />';
  texto20 = '<p style="font-size: 12px;"> Como a doença da Isabella impedia a produção de energia, ela não conseguia sustentar o corpo e ter outros marcos de desenvolvimento (Foto: arquivo pessoal).  </p>';
  texto21 = '<p> A investigação foi muito longa. A princípio, o pediatra tentou não preocupar Joana. Foram realizados exames de sangue básicos, a fim de descartar doenças mais comuns, mas eles voltaram normais. Foi nesse momento que o médico pediu o Teste do Pezinho Ampliado e um teste de cariótipo, que estuda os cromossomos e pode indicar alguma alteração numérica ou estrutural (mas não alteração no gene).      </p>';
  texto22 = '<p> Mas no dia da realização dos exames, Isabella não estava bem. “Ela estava muito molinha, não mamava direito. Se você ia colocar ela na cama, ela resmungava. Se ia tirar da cama e pegar no colo, ela resmungava. Então, aparentemente, ela estava com dor também”, relembra Joana. Durante a noite,  a mãe levou a filha ao pronto-socorro e lá o diagnóstico foi de hipoglicemia, ou seja, o açúcar no sangue estava baixíssimo. “E ali a gente já começa a ficar apavorada, sem saber o que está acontecendo”, relata.   </p>';
  texto23 = '<p> Por conta da pandemia, Joana tinha se dirigido a um hospital pequeno de Guaratinguetá (SP), mas a filha teve que ser transferida de ambulância a outro hospital, com melhor estrutura.  “Quando chegamos, era o pediatra dela quem estava de plantão. E como ele já sabia do histórico de investigação, fez ali também os atendimentos, colheu mais exame de sangue, e a internação começou a partir desse dia”, conta. Isabella ficou internada durante 15 dias no hospital.      </p>';
  texto24 = '<p> Lá foram realizados exames diariamente e, em um desses, descobriram que o fígado da criança estava aumentado, o que gerou grande preocupação. Mas além das alterações, os exames não permitiam um diagnóstico. Joana explica que como a cidade é pequena, não existem muitos recursos e os médicos não são muito especializados: “Extremamente perdidos, os médicos não sabiam o que fazer. Não entendiam o que estava acontecendo, por conta de ser uma doença rara. O pediatra fez tudo o que podia – mas chegou o momento que não tinha mais para onde correr, não sabiam diagnosticar”.   </p>';
  texto25 = '<p>  Desse modo, mãe e filha foram transferidas para a Santa Casa, em São Paulo, onde ficaram internadas por um mês e meio, realizando mais exames, mas sem chegar a nenhum diagnóstico. “Eu ficava lá, presa no hospital, tinha dia que ela estava super bem, dava vontade de fugir do hospital porque parecia que ela não tinha nada”, conta Joana. Receberam alta e voltaram para casa até que saíssem novos resultados, mas Isabella teve outra piora com uma infecção e foi internada novamente.      </p>';
 
  texto26 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/5.jpg" />'
  texto27 = '<p style="font-size: 12px;"> O Teste do Pezinho Ampliado foi realizado alguns meses após o nascimento, mas o resultado demorou muito tempo para sair (Foto: arquivo pessoal).   </p>';
  texto28 = '<p> Na nova internação, os médicos decidiram fazer uma biópsia do fígado para ver se ajudava no diagnóstico. “E aí mais uma vez, no dia de fazer a biópsia, ela não estava bem, muito molinha, muito reclamona e desci pra biópsia apavorada –  como iam sedar minha filha se ela já estava não sei explicar, muito molinha, muito sonolenta, fraquinha”, lembra Joana. E, nesse dia, Isabella foi para a UTI entubada e, após três dias, faleceu. “Quando ela faleceu, infelizmente, não é fácil falar, mas de certa forma foi até um alívio. Porque acabou o sofrimento dela”, compartilha Joana.   </p>';
 
 //video
  texto29 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/Oh8mJ-11Jtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto30 = '<p>  Isabella faleceu sem ter um diagnóstico, que só chegou no início deste ano, após muita insistência dos pais, que tiveram que fazer um exame chamado de exoma, que analisa os genes e identifica doenças genéticas, a partir do sangue utilizado no Teste do Pezinho.        </p>';
  texto31 = '<h2>  O depois     </h2>';
  texto32 = '<p>  “A gente acaba pensando nos “e se”. Culpar ninguém, não culpo, mas me vejo às vezes…se tivesse feito coisas diferentes. Mas acaba que aí junta um pouco de vivência pessoal e fé também”, divide Joana. Algumas questões agora passam na cabeça da mãe, como a demora no resultado do teste do pezinho ampliado, o fato de não ter plano de saúde e ter ido a um hospital ao invés de outro.   </p>';
  texto33 = '<p> A dor pela perda da filha vai ficar com a família para sempre, mas a partir da experiência vivida, Joana decidiu que iria lutar para que outras mães conhecessem o Teste do Pezinho Ampliado e divulgaria a campanha: “No hospital, no período de investigação, eu estava no lactário e vi na televisão uma reportagem de uma mãe que tem um filho com sequelas, porque não descobriu a doença dele antes, né?. E daí eu decidi lutar por essa causa, pra mostrar para as pessoas a importância deste teste. Porque ele é realmente importante. O diagnóstico precoce pode salvar vidas. Talvez não pudesse ter salvo a vida da minha filha, mas a gente vê que pode salvar muitas outras crianças”.   </p>';
  texto34 = '  <img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/6.jpg" />';

  texto35 = '<p style="font-size: 12px;"> Joana mandou a história dela e da filha para uma exposição feita como campanha pelo Instituto Vidas Raras (Foto: arquivo pessoal).     </p>';
  texto36 = '<p>  Alguns meses após a morte da filha, Joana se reuniu com algumas mães da cidade e divulgou a campanha feita pelo Instituto Vidas Raras e a importância do teste. “Fiquei muito feliz do teste ampliado ir pro SUS, porque não é só quem tem dinheiro que deve ter a possibilidade de fazer esse exame. Todo mundo deve”, comenta sobre a sanção da lei que ampliou o Teste do Pezinho no SUS.   </p>';
  texto37 = '<p>      </p>';
  texto38 = '<p>      </p>';
  texto39 = '<p>      </p>';

  texto40 = '';
  texto41 = '';
  texto42 = '';
  texto43 = '';

}


function mudaTexto2(){
  texto = '<h2> Histórias ampliadas: a descoberta da doença rara do Miguel transformou a rotina da mãe e de toda a família      </h2>';
  texto2 = '<p>   Lidar com uma criança portadora de um problema genético que deixa sequelas exige muito cuidado e atenção     </p>';
  texto3 = '<p>  por Carolina Calixto      </p> ';
  texto4 = '<p> A descoberta da gravidez chegou como uma surpresa na vida da Caroline Granzotto e da família. Embora inesperada, foi muito celebrada. Quando nasceu, Miguel realizou todos os exames necessários, mas uma falha na comunicação mudou a vida dele e da família. E com isso, uma nova realidade teve que ser criada.      </p>';
  texto5 = '<p> Miguel tem uma doença rara, chamada de Acidúria Glutárica tipo I, doença genética na qual o organismo, pela falta de uma enzima, não transforma os aminoácidos em energia, o que deixa um acúmulo tóxico e gera uma crise metabólica aguda, deixando sequelas, principalmente motoras. A doença é uma das 53 triadas no Teste do Pezinho Ampliado, que é pouco divulgado na maioria das maternidades do país. Caroline conta que informaram a ela sobre a existência dos testes do Pezinho básico, da Orelhinha e sobre as vacinas na clínica onde se consultou: “Mas ninguém me falou sobre um teste complementar ou alguma coisa desse tipo”, esclarece. Ela só ficou sabendo sobre outro tipo de teste quando descobriu a doença do filho.      </p>';
  texto7 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/2.jpg" />';
  texto8 = '<p style="font-size: 12px;"> “Eu não me permito ficar revoltada com as coisas porque o Miguel é muito lindo”, fala Caroline. (Foto: arquivo pessoal).     </p>';
  texto9 = '<p> Recentemente, o Governo Federal sancionou a <a href="https://www.in.gov.br/web/dou/-/lei-n-14.154-de-26-de-maio-de-2021-322209993"  target="_blank"> Lei nº 14.154</a>, que amplia o Teste do Pezinho oferecido na rede pública de seis para mais de  50 doenças triadas. Agora o exame passará a abranger 14 grupos de doenças. A ampliação acontecerá de maneira escalonada e deve começar após um ano da publicação da Lei.  </p>';
  //VIDEO
  texto10 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/6mzcrmRkXTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto11 = '<h2>  A revelação da doença e a mudança de vida    </h2>';
  texto12 = '<p>  “Eu tive uma gravidez tranquila, pude fazer exercício, trabalhei até dois dias antes de ganhar o Miguel. Não tive nenhum problema durante e foi um parto bem tranquilo”, relembra a mãe, Caroline Granzotto. Miguel nasceu de cesárea, com 39 semanas e 5 dias, e era um bebê saudável –  os médicos brincaram que ele era um bebê grandão. Tudo aconteceu do jeito certo, Miguel mamou durante seis meses exclusivamente leite materno e era um bebê muito alegre.   </p>';
  texto13 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/3.jpg" />';
  texto14 = '<p style="font-size: 12px;">  Na foto, Miguel e a mãe, Caroline (Foto: arquivo pessoal)    </p>';
  texto15 = '<p>A avó foi a primeira pessoa a perceber alguns estranhamentos no desenvolvimento de Miguel. Enquanto ele tentava pegar os brinquedos, chupava o dedo e balbuciava alguns gritinhos, outros marcos comuns para a idade não eram alcançados, como explica a mãe: “Aos sete meses, minha mãe começou a pegar no meu pé, falando que ele já tinha que estar sentando sozinho, querendo engatinhar e o Miguel não queria”. Desse modo, ao questionar a pediatra, ela informou dizendo que era normal ele ficar um pouco mais preguiçoso, já que era um bebê grande. Na época, Miguel pesava 10,8 quilogramas. Mas para acalmar a família e estimular os movimentos do bebê, indicou fazer fisioterapia.      </p>';
  texto16 = '<p> Mas após um mês, a fisioterapeuta informou que, embora o Miguel fosse uma criança esperta e que compreendesse tudo, realmente havia um atraso no desenvolvimento e foi indicada a ida a uma neurologista. Carol conta que na hora já ficou assustada e foi se consultar com a médica: “A gente fez a consulta, ela fez alguns exames no Miguel, de colocar a toalhinha no rosto e o Miguel tentar tirar. De um lado ele tirou, do outro não tirou. Ela falou que era um reflexo normal para uma criança de cinco meses ter”, explica. Miguel já estava com quase nove meses. E assim iniciou-se o caminho para diagnosticar a doença.  </p>';
  texto17 = '<p>O primeiro grande sinal foi descoberto a partir de exames de ressonância magnética. A pediatra descobriu que Miguel tinha lesões no cérebro. O resultado foi desconhecido para a equipe médica consultada, pois nunca tinham testemunhado uma lesão igual a do menino: “Lembro que a pediatra falou: a gente achou no Google um artigo de Portugal, que diz que é Acidúria Glutárica. A imagem do cérebro do Miguel parece essa. Mas a gente não sabe. Se for essa, você precisa mudar a alimentação do Miguel com urgência”, narra Caroline.   </p>';
  texto18 = '<p>Como era uma doença que os médicos não conheciam, Miguel e a família foram encaminhados de Londrina, onde residiam, para Curitiba, onde, no Hospital Pequeno Príncipe, fizeram novos exames para ter a certeza do diagnóstico, que até então era uma hipótese. Mas não foi uma experiência rápida e tranquila, ocorreram divergências de um médico para outro.   </p>';
  texto19 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/4.jpg" />';
  texto20 = '<p style="font-size: 12px;">Miguel chegou a ficar internado no Hospital em meio aos exames para descobrir a doença (Foto: arquivo pessoal).  </p>';
  texto21 = '<p>Já em Curitiba, a nova pediatra analisou Miguel e viu que ele era um bebê grande e gordo, o que fugia do padrão da Acidúria Glutárica. “Eles começaram a desconfiar de outras coisas, me deram outros diagnósticos. E começaram a pesquisar. Passamos por cardiologista, oftalmologista, todos os médicos que você imaginar”, compartilha Caroline. Durante uma semana no hospital diversos exames foram realizados, como um painel de erros inatos do metabolismo, que analisa genes relacionados a aproximadamente 700 distúrbios que causam doenças metabólicas. Erros inatos do metabolismo são doenças raras com origem genética e estão relacionados com algum defeito de enzima, que podem causar problemas no funcionamento geral do organismo.   </p>';
  texto22 = '<p>Finalmente, com esse último exame, a família teve a certeza do diagnóstico. Era mesmo Acidúria Glutárica tipo I. Caroline expressa que foi desesperador descobrir a lesão e o diagnóstico: “Saber que teu filho tem uma lesão, descobrir que a lesão foi causada por falta de informação e pela comida, sendo que você acha que você estava fazendo o seu melhor. É uma situação que a gente tem que lidar todos os dias e que tem que trabalhar, com a cabeça e com o coração”.   </p>';
  texto23 = '<p>A partir do diagnóstico, Miguel, Caroline e a família precisaram se readaptar: “A gente tem essa situação e eu falo assim: o que a gente puder, a gente vai fazer para que ele seja o melhor. Mas não é fácil”, comenta.   </p>';
  texto24 = '<img style="width: 60%; height: 80%;  margin-left:17.5%"  src="../assets/familia/texto3/5.jpg" />';
  texto25 = '<p style="font-size: 12px;">  Miguel é uma criança muito risonha e feliz. (Foto: arquivo pessoal).     </p>';
  texto26 = '<h2>Criança com Acidúria Glutárica: o tratamento   </h2>';
  texto27 = '<p> Hoje, Miguel é cadeirante, não fala, não anda e precisa de ajuda para se apoiar. Caroline conta que, quando descobriu sobre a doença, sonhava em ver o filho andar. Agora, mesmo tendo que aceitar a situação da cadeira – o que não tem sido uma tarefa fácil, ela quer ver o filho falar: “Lembro até hoje que a gente sempre perguntava muito se ele ia andar. Hoje, brinco que a coisa que eu mais quero é que ele falasse. O andar eu já nem acho importante. Porque se ele não fala, é a minha maior agonia, não sei o que ele tá pensando, o que ele tá querendo, a gente fica tentando adivinhar”, conta.  </p>';
  texto28 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/6.jpg" />';
  texto29 = '<p style="font-size: 12px;">Um dos maiores desafios da mãe tem sido aceitar a cadeira de rodas e encontrar acessibilidade nos lugares. (Foto: arquivo pessoal).   </p>';
  texto30 = '<p> Com o diagnóstico firmado e as sequelas, novas rotinas começaram a ser seguidas e os comportamentos tiveram que mudar. A partir das consultas, descobriram que a restrição dos aminoácidos do Miguel são duas: lisina, relacionada com o crescimento da criança, que é encontrada em carnes e leites; e triptofano, que regula o sono e ajuda a formar o hormônio da serotonina, encontrado no queijo, ovo, banana, entre outros. Como são aminoácidos adquiridos através dos alimentos, Miguel precisa de uma dieta rígida para conseguir ser saudável. “É uma linha muito tênue, se você der muito você intoxica, se você der pouco ele não dorme ou não cresce. O exame para você ver se está intoxicado ou não, demora 30 dias para ficar pronto aqui no Brasil. E é uma mentira, porque quando fica pronto já não é o que está lá no organismo”, explica Caroline.   </p>';
  texto31 = '<p>Miguel é praticamente uma criança vegana. Mas como já está com 5 anos, tem conseguido se manter saudável, com direito a um ovo por semana, além de feijão com caldo de carne. Mas tudo é pesado e analisado a cada refeição. Além disso, ele toma um complemento de aminoácidos para conseguir que o organismo seja regulado. Nos últimos meses, Miguel parou de tomar o leite GlutarAde, que complementava a alimentação, pois já atingiu uma idade em que o leite não é mais necessário. A família tinha que trazer o leite dos Estados Unidos, pois não é vendido no Brasil ou fornecido pelo SUS.       </p>';
  texto32 = '<p>Aliado a isso, Miguel faz terapias. Nos primeiros anos, chegou a fazer mais de dez horas por semana, duas vezes ao dia. Hoje em dia, ele faz seis horas de terapia por semana: “A gente trabalha com o Miguel nas fisioterapias desde que ele tem oito meses para que ele tente se desenvolver e criar atalhos. A gente acredita na neuroplasticidade [do cérebro]”, relata Caroline.    </p>';
  
  //video
  texto33 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/d4rQt-blv8I?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto34 = '<p style="font-size: 12px;"> Miguel faz terapias que buscam diversificar os métodos existentes para estar sempre estimulando o cérebro (Vídeo: arquivo pessoal).     </p>';
  texto35 = '<p> Para dar conta da rotina, a família faz escalas. Enquanto Caroline está no trabalho, Miguel fica com a avó. Nas segundas e sextas-feira, a criança faz fisioterapia de manhã, enquanto nas terças e quintas-feiras, à noite. O único dia livre é na quarta, dia destinado à fonoaudiologia, mas a família espera a liberação pelo plano de saúde.   </p>';
  
  //video2
  texto36 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/CoEJ0vARPV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto37 = '<p style="font-size: 12px;">  Como a doença do Miguel não tem cura, o tratamento é através de fisioterapia e dieta pelo resto da vida. (Vídeo: arquivo pessoal).    </p>';
  texto38 = '<p> Antes da pandemia, Miguel também começou a ir para a escola e descobriu um novo mundo, onde existiam crianças como ele, o que ajudou na evolução. “A escola para o Miguel foi uma coisa muito boa. Confesso que não sabia que ele gostava de beterraba, porque eu não gosto então eu não faço, mas ele descobriu lá. Também a professora foi dar bolacha para ele na mão, e eu até fui lá para aprender como ela fazia, porque eu ficava com receio”, compartilha Caroline. Mas, com a pandemia, Miguel deu um tempo da escola.   </p>';
  texto39 = '<p> Uma grande dificuldade encontrada é conciliar os gastos médicos, entre as consultas particulares e aquelas bancadas pelo plano de saúde, tentando reembolso quando dá. Além disso, os acessórios que auxiliam o dia a dia do Miguel também são caros: “Eu tenho que comprar uma órtese, por exemplo, para a perna dele, que vai servir por um ano, porque ele cresce. Custa 950 reais. Aí, uma tala extensora, mais 950, mais o sapatinho, você precisa de no mínimo dois, uma sandália e um sapato, que custa 300 e pouco. Então o custo de uma criança rara é muito caro para a família”, exemplifica.      </p>';
  texto40 = '<h2> A saúde mental das famílias     </h2>';
  texto41 = '<p> Muitos pais de crianças portadoras de doenças sentem culpa, mesmo quando eles não têm relação direta com a doença. “Você começa a ter as culpas né, que não é sua culpa, mas isso é uma coisa que eu ainda tenho que trabalhar constantemente. Eu faço análise hoje, totalmente voltada para isso, porque tenho um sentimento de culpa – às vezes eu sonho, às vezes me martirizo”, expõe Caroline.      </p>';
  texto42 = '<p> A rede de apoio nesses casos tem um papel importante para ouvir as mães e permitir um espaço de acolhimento. Caroline tem, além da família, a ajuda de um grupo de pais e mães de crianças portadoras de Acidúria Glutárica, de que participa no Whatsapp. Lá eles acolhem uns aos outros e se ajudam. Uma dica que Caroline divide com todos os pais é a necessidade de procurar análise ou outro apoio psicológico, para ajudar a entender a realidade e os sentimentos. “Eu procurei para me reorganizar: quem eu era, o que eu estava fazendo. E acho muito necessário. Sempre digo que a prática do Pilates e a análise deveriam ser obrigatórios para todo mundo: que ajudar na postura, para poder pegar a criança; para você sentar melhor no seu trabalho e aprender a respirar. E para você se entender melhor, se organizar, entender o que está acontecendo em volta”, explica Caroline.   </p>'
  texto43 = '';


}


function mudaTexto3(){
  texto = '<h2> Histórias ampliadas: Nathália e Marlon realizam eventos de arrecadação para manter a qualidade de vida do filho </h2>';
  texto2 = '<p> Matias tem uma doença rara e necessita de diversas terapias, equipamentos e alimentação para viver bem </p>';
  texto3 = '<p> por Carolina Calixto </p> ';
  texto4 = '<p> A vida do casal, Nathália e Marlon da Silva, sofreu uma reviravolta após o nascimento do filho Matias, diagnosticado com uma doença genética rara, a Acidúria Glutárica tipo I. Eles tiveram que entender e aceitar a nova situação e aprender a se virar para bancar os custos e melhorar a qualidade de vida do filho, já que a descoberta veio tarde e as sequelas já tinham aparecido. Hoje, com quatro anos, Matias apresenta sequelas motoras e precisa de diversas terapias.     </p>';
  texto5 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto4/2.jpg" />';
  texto7 = '<p style="font-size: 12px;">  Com dois anos de idade, Matias precisou colocar a gastrostomia para conseguir se manter saudável  (Foto: Instagram Raro Matias | arquivo pessoal)    </p>';
  texto8 = '<h2>  As dificuldades na gravidez    </h2>';
  texto9 = '<p> No começo, a gravidez da Nathália foi tranquila. Mas quando estava com 35 semanas teve dores fortes e foi para o hospital, onde precisou ficar internada devido à pressão alta. Nos primeiros dias, os médicos achavam que se tratava de uma infecção urinária e, pelo estado avançado da gravidez, era melhor permanecer no hospital até a alta. Mas não houve melhora na condição e mais exames foram feitos: Nathália tinha uma síndrome rara chamada HELLP, uma complicação grave que se desenvolve antes da 37º semana e que exige o parto imediato. “A gente fez um parto às pressas, foi uma cesariana com anestesia geral, então o Marlon não pode participar”, relembra Nathália.      </p>';
  texto10 = '<p> Desse modo, Matias nasceu prematuro, com hemorragia interna cerebral nível 1 e nota 2 na <a href="https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf"  target="_blank">escala APGAR</a>, uma avaliação muito baixa para um recém-nascido, o que significa que ele nasceu com uma dificuldade grave e que precisa ser tratado imediatamente. No entanto, a nota na escala não indica nenhum atraso no desenvolvimento da criança ao longo da vida, apenas que na hora do nascimento aconteceram complicações. Desse modo, Matias foi entubado na hora e, ele e a mãe, precisaram ficar internados na UTI –  Nathália permaneceu por sete dias e Matias nove.      </p>';
  texto11 = '<p> Após a alta de ambos, o recém-nascido precisou receber um acompanhamento do pediatra e neurologista para garantir que tudo estava bem. Até então não existia nenhum indício da doença genética e nenhuma complicação relacionada a ela, como enfatiza Marlon: “Essa questão inicial do Matias não tem nada a ver com essa doença que ele tem hoje. Mesmo que ele não tivesse passado por esse episódio na maternidade na hora que nasceu, ele viria a ter essa doença de qualquer jeito”.     </p>';
  texto12 = '<h2>O descobrimento da doença      </h2>';
  texto13 = '<p>Quando Matias tinha dois meses, os pais começaram a perceber um crescimento precoce no tamanho da cabeça, além de um atraso no desenvolvimento das capacidades motoras: “Ele não rolava, só ficava com o pescocinho de um lado, não girava para o outro, o olhar era um pouco vago; eu amamentei, mas a gente percebia que não era uma criança que sugava durante muito tempo também”, explica Nathália. Os pais não sabiam, mas eram características da doença genética. Mas como Matias era um bebê prematuro, houve muita dúvida em relação aos sintomas: se era algo mais sério ou se eram consequências por ter nascido antes da hora. Aos três meses, ele continuava a ser um bebê mole, sem firmeza no corpo e os médicos ainda tratavam as sequelas como decorrência da prematuridade.      </p>';
  texto14 = '<p>“Quando estava com seis meses, a gente foi em uma neurologista, que disse pra mim que o Matias tinha uma paralisia cerebral. A gente já tinha ido a dois neuros, um com três meses e outro com quatro meses, que disseram que parecia ser um atraso no desenvolvimento”, conta Nathália, indicando dificuldades para o diagnóstico correto, que apareceu apenas aos oito meses.      </p>';
  texto15 = '<p>A investigação da doença só avançou quando foram a uma neurologista da Universidade Federal do Rio de Janeiro (UFRJ). Nathália relembra que a médica afirmou não ser paralisia cerebral e sim uma doença metabólica rara, que causa alteração no funcionamento geral do organismo, mas que era preciso investigar com outros exames: “A médica pediu alguns exames e teve que colocar a indicação do nome da doença. A gente começou a pesquisar na internet e encontramos um casal no Rio de Janeiro que tinha uma criança com a mesma doença. Entramos em contato e eles indicaram uma nutróloga no Rio de Janeiro”, explica. Com os exames em mão, descobriram finalmente o que o filho tinha: Acidúria Glutárica tipo I, doença genética derivada de erros inatos do metabolismo, que se manifesta quando ambos os pais são portadores de um gene que não permite o organismo de absorver aminoácidos, levando a um acúmulo tóxico e a uma crise metabólica aguda, se não tratada precocemente.      </p>';
  texto16 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto4/3.jpg" />';
  texto17 = '<p style="font-size: 12px;"> “Matias é o Matias. A doença não define quem ele é” (Foto: Instagram Raro Matias | arquivo pessoal)     </p>';
  texto18 = '<p>A doença do Matias é uma das 53 diagnosticadas pelo Teste do Pezinho ampliado, que ainda não é disponibilizado pelo SUS na maioria dos estados brasileiros, que tria apenas seis. “A nutróloga do Matias costuma dizer que não consegue entender como é que uma criança de UTI-neonatal, por exemplo, já não faz um teste do pezinho ampliado”, destaca Nathália. Quando nasceu, Matias fez o Teste do Pezinho, que em Niterói (RJ) tria 30 doenças, mas a dele não está contemplada. Com essa falta de informação dos profissionais, o sentimento dos pais foi de muita revolta, já que o filho deles podia estar hoje sem nenhuma sequela. Eles só descobriram a existência de outro tipo de teste, o ampliado, ao receberem o diagnóstico.       </p>';
  texto19 = '<p>“Costumamos falar que, na época, nem deu muito tempo de pensar, porque a gente tinha que agir muito, descobrir onde tratar, porque a nutróloga tratava mais a questão da dieta, mas a gente queria saber o que se tratava dessa doença", comenta Marlon. Já com o diagnóstico em mãos, os pais conseguiram se situar e ter conhecimento do que o filho tinha: “Então o diagnóstico veio como algo que a gente costuma falar, de alívio. Porque a gente estava com o diagnóstico de paralisia cerebral. Se a gente não continuasse investigando, talvez até hoje estaríamos com o diagnóstico de paralisia cerebral”, completa Nathália.      </p>';
  texto20 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto4/4.jpg" />';
  texto21 = '<p style="font-size: 12px;">Matias segue diversos métodos de reabilitação para estimular o cérebro e atingir marcos de desenvolvimento  (Foto: Instagram Raro Matias | arquivo pessoal)     </p>';
  texto22 = '<p>A aprovação da lei nº 5.043/2020 pelo Governo Federal, que ampliou as doenças triadas do Teste do Pezinho de seis para 53, foi muito comemorada pela família.      </p>';
  //video
  texto23 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/kwzfIRKBrbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto24 = '<h2>Qualidade de vida: tratamento e recursos      </h2>';
  texto25 = '<p>Hoje, Matias tem sequelas motoras. Ele não anda, não fala, não senta e não segura o pescoço. “Mas ele tem o cognitivo perfeito então ele entende a gente muito bem”, explica Nathália. Os tratamentos e as terapias são feitas pensando na manutenção da qualidade de vida do Matias.      </p>';
  texto26 = '<p> Com isso, a rotina da família é ocupada. Enquanto o Marlon trabalha fora e a Nathália se dedica a um curso de doutorado, eles têm que se organizar para as terapias de segunda a sexta-feira. Matias faz fisioterapia, terapia respiratória e motora, hidroterapia, fonoaudiologia e encontros com a psicopedagoga. Além do tratamento das sequelas, Matias tem uma dieta rígida, que é pesada e contada diariamente, junto do leite e de remédios, como os que ajudam no controle motor. Atualmente, ele se alimenta, principalmente, via gastrostomia, uma sonda ligada diretamente no estômago que permite que ele complete a alimentação e mantenha-se saudável, já que o momento de comer estava sendo estressante. Junto disso, Matias ainda conta com uma equipe médica que acompanha o desenvolvimento e o bem-estar, como ortopedista, pediatra, neurologista, nutróloga e um médico dos Estados Unidos. Existem outros custos adicionais, como sandálias ortopédicas, adaptação de cadeira e outros equipamentos essenciais para a qualidade de vida do menino.  </p>';
  texto27 = '<p> Ao receber o diagnóstico, o casal decidiu que iriam se consultar com um médico que é referência no tratamento da Acidúria Glutárica, Kevin Strauss, da Clinic for Special Children, nos Estados Unidos. Nathália explica a importância de conversar com quem entende da doença, uma das dificuldades que eles tinham aqui no Brasil: “Chegando lá foi incrível, porque a gente teve uma consulta com um médico que entendia da doença, que já tinha visto mais de cem pessoas. Então, ele explicou tudo com muitos detalhes e a gente teve noção da gravidade e de todas as sequelas que nosso filho adquiriu”. Além disso, na clínica americana eles ganharam  equipamentos e o leite que o Matias precisa. Com a pandemia, as consultas têm sido online e a família precisa se virar para conseguir trazer o leite, não disponível no Brasil – ele é essencial na dieta. Hoje em dia, em média, o Matias toma oito latas de leite por mês.     </p>';
  //video viagem aos eua
  texto28 = '<iframe  style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/MKv0hwuRCCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto29 = '<p>A última viagem ao médico dos Estados Unidos foi em agosto de 2019 (Vídeo: Facebook Raro Matias | arquivo pessoal)      </p>';
  texto30 = '<p> Percebe-se que o custo do tratamento é alto e a família precisa se virar para conseguir bancar tudo. “A maior dificuldade é justamente na questão do recurso. A gente costuma dizer que pra dar um tratamento de qualidade para uma criança deficiente você tem que ser rico ou se virar”, aponta Nathália. Então, para conseguir dar conta dos gastos, o casal começou a fazer bazares, rifas e eventos de feijoadas a fim de arrecadar dinheiro. A ideia surgiu quando precisaram ir pela primeira vez ao médico americano: “Fizemos uma vaquinha, depois bazar, almoço de feijoada, e conseguimos arrecadar recursos para a viagem. Na segunda vez, a gente já tinha uma estratégia para fazer bazares de três em três meses”, explica Nathália.     </p>';
  texto31 = '<img style="width: 30%;   margin-left:17.5%"  src="../assets/familia/texto4/5.jpg" />           <img style="width: 30%;   margin-left:17.5%"  src="../assets/familia/texto4/6.jpg" />';
  texto32 = '<p style="font-size: 12px;">  Informativos de bazar e de rifa divulgados nas redes sociais (Foto: divulgação).    </p>';
  texto33 = '<p> O sucesso das atividades de arrecadação tem sido grande que, além de complementar a renda familiar, criou uma rede de solidariedade. Marlon conta que, durante a pandemia, o bazar, que já é realizado há três anos, tem ajudado na economia de outras famílias: "Tanto as pessoas que iam lá comprar produtos para os filhos, quanto pessoas que não estavam tendo uma renda legal na pandemia, começaram a comprar do bazar do Matias para montar os seus bazares. Foi uma coisa ligando a outra. Foi bem legal isso, saber que outras pessoas estavam sendo ajudadas", compartilha.     </p>';
  texto34 = '<p>  Para aproveitar a rede de apoio, a família fez uma ação no quarto aniversário de Matias. Fizeram campanha nas redes sociais, no Instagram e Facebook do Raro Matias, venderam rifas por quatro reais e com o valor compraram 40 cestas básicas para doação: "A gente viu a situação que muitos estavam passando na pandemia, e juntamos esta rede de apoio pra comemorar o aniversário dele. São coisas que vão se estendendo, alcançando e ajudando outras pessoas também", conta Marlon.    </p>';
  texto35 = '<p> Todo esse esforço vale a pena. Nathália conta que são várias superações, desde quando eles saíram com vida da UTI até os avanços que o Matias faz: “A gente começou a valorizar mais a vida. O Matias é um tipo de criança que acorda e dorme sorrindo. E diversas coisas ele já conseguiu, por exemplo: ele só virava o pescoço pra um lado. Então hoje, ele virar o pescoço para os dois lados, pra gente é uma vitória”, finaliza.   </p>';
  texto36 = '<p>      </p>';
  texto37 = '<p>      </p>';
  texto38 = '<p>      </p>';
  texto39 = '<p>      </p>';
  texto40 = '<p>      </p>';

  texto41 = '';
  texto42 = '';
  texto43 = '';





}


function mudaTexto4(){
  texto = '<h2> Histórias ampliadas: Larissa Carvalho tem como missão pessoal a divulgação e ampliação do Teste do Pezinho. </h2>';
  texto2 = '<h3>O filho Théo tem uma doença rara que poderia ter sido diagnosticada e tratada precocemente se tivessem descoberto antes  </h3>';
  texto3 = '<p>O sonho da Larissa Carvalho, jornalista da TV Globo Minas, sempre foi ser mãe de dois meninos. Desde criança ela desejava ter um João e um Théo. Primeiro nasceu o João. Mas o desenvolvimento do filho mais novo, o Théo, não ocorreu como o esperado. A família descobriu que Théo nasceu com uma doença rara e genética, que deixa sequelas no bebê se não tratada precocemente, a Acidúria Glutárica tipo I (GA I), um erro inato do metabolismo, que impede que o organismo da criança absorva proteína, que acaba acumulando e sendo tóxica. Essa doença, como várias outras raras, não é detectada no Teste do Pezinho básico, amplamente divulgado e realizado pelo SUS. </p> ';
  texto4 = '<p>Hoje, o Théo tem seis anos e é uma criança hipotônica. Ele não anda, não fala e precisa de uma dieta restrita, além de várias fisioterapias para o tratamento das sequelas e uma melhor qualidade de vida. A vida da família mudou de várias maneiras.       </p>';
  texto5 = '<p> “Eu tive gravidez e parto totalmente como esperei na vida”, conta Larissa. Théo nasceu de cesárea, no hospital e com a equipe desejada pela mãe: “Quando ele nasceu, eu escutei uma pessoa da equipe dizendo: tá tudo bem com ele viu, seu filho é lindo”, complementa. No nascimento do Théo tudo correu bem, ele obteve uma nota 9 na escala APGAR, teste realizado nos primeiros minutos de vida do bebê e que avalia o estado geral do recém-nascido como atividade, batimento cardíaco e respiração.   </p>';
  texto7 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto5/2.jpg" />';
  texto8 = '<p style="font-size: 12px;">"Desde pequena eu quis ser mãe de dois, e meninos ainda, e fui uma grávida muito feliz”, conta Larissa. Na foto: Larissa Carvalho com seus filhos, Théo e João. (Foto: Bárbara Dutra)  </p>';
  texto9 = '<p> “Então eu não tive o menor sinal de que tudo isso ia acontecer na minha vida”, explica Larissa. Os primeiros meses foram todos dentro do esperado, a vida da família não podia ser melhor.    </p>';
  texto10 = '<h2> A descoberta da doença   </h2>';
  texto11 = '<p>A jornalista relata que começou a perceber que o desenvolvimento do Théo não estava indo como o esperado entre o quarto e o quinto mês: “Era um bebê muito mole, hipotônico, parecia um bonequinho de pano. Então, ele nunca chupou o pé, ele tentava segurar as coisas, os bichinhos, para levar na boca e nunca conseguiu segurar nada”.       </p>';
  texto12 = '<p> O desenvolvimento infantil não é linear e não é igual para todos os bebês, mas pode-se esperar, de maneira geral, alguns marcos conforme o recém-nascido for crescendo. Por exemplo, é no quarto mês que o bebê começa a ter mais movimentos, como virar o pescoço, tentar pegar um objeto e reconhecer a mãe e os sons. A partir daí, com o passar dos meses, eles desenvolvem melhor o tônus e ampliam os movimentos, como sentar com apoio, pegar os brinquedos, engatinhar e andar. Mas, o desenvolvimento do Théo seguiu diferente e indicou que algo mais sério tinha acontecido.     </p>';
  texto13 = '<p>  Preocupada, Larissa foi à pediatra, que também percebeu os atrasos e que ele não tinha firmeza no corpo, a cabeça e o pescoço não ficavam erguidos, os braços não seguravam os objetos: “A gente fez uma ressonância magnética e viu, por essa fotografia do cérebro, que havia um lugar no cérebro dele com pouquíssimos neurônios”, explica. Théo tinha poucos neurônios numa região chamada de putâmen, localizado na parte central do cérebro e responsável pelo controle motor do corpo. E assim, iniciou-se uma longa trajetória com médicos e exames para descobrir o diagnóstico e o que tinha acontecido – uma das principais perguntas a serem respondidas pelos médicos era em que momento aconteceu a perda de neurônios.   </p>';
  texto14 = '<p> Do quinto mês de idade até um ano e 10 meses, a Larissa e o Théo foram a diversos médicos, fizeram vários exames e receberam muitos diagnósticos, todos errados: “Todos insistiam que em algum momento ele tinha perdido neurônios por falta de oxigênio. Não era isso. Eu sabia que não era, porque a minha gravidez foi ótima, meu parto foi ótimo, então não tinha porque ter perdido neurônio por falta de ar. Em que momento teria faltado ar?”, questiona Larissa.     </p>';
  texto15 = '<p>Enquanto a resposta não vinha, a mãe de Theo continuou na longa busca. “Eu rezava todas as noites na janela, só pedia isso a Deus: eu já entendi que tenho um filho com deficiência, já entendi que tenho um filho sem neurônios e isso está determinando nele uma situação de sequelas. Mas eu queria saber pelo menos o porquê”, lembra.       </p>';
  texto16 = '';
  texto17 = '<p> Finalmente, mais de um ano depois, no Hospital Sara Kubitschek, em Belo Horizonte (MG), profissionais de saúde descobriram que Théo tinha uma doença genética, um erro inato do metabolismo, chamada de Acidúria Glutárica tipo I. Com essa doença, o organismo da criança não consegue quebrar os aminoácidos, que ao invés de virarem energia, ficam acumulados e viram toxinas prejudiciais. Quando um bebê não é diagnosticado precocemente, ele tem uma crise aguda que deixa sequelas. Toda vez que Théo ingeria alimentos com proteínas, acabava perdendo neurônios, já que o corpo não conseguia quebrar e absorver este nutriente. Para Larissa, foi como se ela tivesse levado um golpe: “Meu primeiro sentimento foi de pavor. Eu entendi que eu tinha matado os neurônios do meu filho, dando para ele a melhor comida do mundo, leite de mãe, ovo, feijão, carne”, expressa.      </p>';
  texto18 = '<img style="width: 60%;   margin-left:17.5%" src="../assets/familia/texto5/3.jpg" />';
  texto19 = '<p style="font-size: 12px;">Théo ajudou sua mãe a transformar a vida de milhares de famílias lutando pelo teste do pezinho ampliado (Foto: Carol Salgado).   </p>';
  texto20 = '<h2> O começo de uma nova vida     </h2>';
  texto21 = '<p> Após o choque e o medo inicial, a vida da família começou a se endireitar. Larissa continuou trabalhando como repórter, o João mantém as atividades cotidianas, como escola, ginástica, psicóloga e, com jeitinho, a vida achou um novo normal. “Aos poucos as coisas foram se ajeitando, no coração, nos sonhos, no orçamento, na rotina. A gente se adaptou, a família absorveu esse menino como ele é exatamente, com amor. E a gente parou de sonhar que ele vai ficar com todas as competências recuperadas. A gente vive o Théo como ele é”, conta Larissa.     </p>';
  texto22 = '<img style="width: 60%;   margin-left:17.5%" src="../assets/familia/texto5/4.png" /> ';
  texto24 = '<p style="font-size: 12px;">A doença do Théo não tem cura, apenas o tratamento das sequelas e o incentivo ao cérebro de aprender novas coisas (Foto: Larissa Carvalho | Instagram)  </p>';
  texto25 = '<p>A rotina do Théo é intensa: ele faz dez horas de reabilitação na semana, com  fisioterapia, terapia ocupacional, equoterapia e escola especial. Além disso, ele precisa de remédios e tem uma dieta especial, no qual toda a comida é pesada e contada durante o dia e a semana, junto de uma fórmula que custa, em média, 2.400 reais, que precisa ser comprada a cada 15 dias.      </p>';
  texto26 = '<p>Nesses momentos, a rede de apoio é fundamental. “Eu tenho pessoas no meu entorno que me amam, que amam o Théo, com quem posso contar, muitos amigos, uma boa funcionária, meu filho João, o pai também colabora um pouco”, compartilha Larissa. O apoio é necessário, seja para levar e buscar nas terapias, cuidar dentro de casa, ajudar nas compras e estar presente. Larissa explica que as mães precisam de uma mão estendida e um cuidado: “As pessoas precisam abrir mais o coração, prestar mais atenção quando tem uma pessoa com deficiência ao redor”.   </p>';
  texto27 = '<p> Além da rotina adaptada, o modo de encarar a vida também mudou, e para melhor. A família começou a olhar com mais carinho as situações diárias, especialmente em relação às pessoas com deficiência – um observar mais respeitoso e paciente. E também a vivenciar na pele os desafios, como andar de cadeira de rodas nas calçadas, muitas vezes mal feitas; uma vaga de estacionamento preferencial utilizada por outras pessoas que não se encaixam na prioridade. Além disso, a situação também influenciou na iniciativa de trabalho voluntário junto ao terceiro setor em várias frentes.   </p>';
  texto28 = '<h2>  A luta e a conquista da ampliação    </h2>';
  texto29 = '<p>Quando nasceu, o Théo fez o Teste do Pezinho básico, que não detecta a sua doença. Larissa não recebeu bem a notícia de que a doença poderia ter sido descoberta a tempo de ser tratada precocemente, por meio do Teste do Pezinho ampliado, atualmente ainda disponível, na maioria dos estados, apenas na rede particular. “Eu tive muita raiva de saber que existe um Teste do Pezinho que poderia ter salvo o meu filho. E que essa informação não é compartilhada”, explica.   </p>';
  texto30 = '<p>  Para ela, existem falhas de comunicação, estrutural e de comportamento envolvendo médicos, enfermeiros, técnicos em enfermagem, professores e alunos de cursos da área médica, além do Estado não oferecer ajuda. Larissa só conseguiu o leite necessário à alimentação do filho, após atuação da Defensoria Pública de Minas Gerais: “O Estado brasileiro deveria vir na nossa porta com pedido de perdão por ter feito isso com os nossos filhos. E o tratamento totalmente pago e garantido, mas não. Eles não só colocaram os nossos filhos numa cadeira de rodas, como também não fornecem pra gente o tratamento, a gente tem que ir pra justiça”, exclama.   </p>';
  texto31 = '<p> Além disso, Larissa explica que não existe a informação sobre os testes ampliados realizados na rede privada para as famílias, na maioria dos casos: “As famílias têm o direito de saber. Se o pai ou a mãe não vai fazer porque ele confia no SUS ou porque não tem o dinheiro para pagar o particular, é uma questão de cada um. Quando não indicam, não esclarecem dentro de um consultório, dentro de um posto de saúde que existe um Teste do Pezinho ampliado na rede particular, também são responsáveis por cada Théo numa cadeira de rodas”, argumenta Larissa.     </p>';
  texto32 = '<p> Essa realidade de desinformação e de indignação, que afetou diretamente Larissa e diversas outras famílias pelo Brasil, acabou inspirando a vontade de divulgar o teste para todos e lutar para que ele fosse ampliado na rede pública. Assim, a repórter se juntou ao Instituto Vidas Raras na campanha “Pezinho no Futuro”, com eventos e conversas, além de uma petição, que atingiu mais de 620 mil assinaturas. “Eu me juntei a eles nessa luta e a partir daí comecei a fazer muitas reportagens sobre o assunto, que chamaram muita atenção do Congresso Nacional”, comenta. Desse modo, ela e o Théo se tornaram umas das principais forças na luta pela ampliação do Teste do Pezinho.   </p>';
  texto33 = '<p> Além das reportagens e do trabalho na campanha, Larissa Carvalho também fez palestras, como no <a href="https://www.youtube.com/watch?v=ElqZ7-FXHdw"  target="_blank">TedxPUCMinas</a>, contando sua história; participou do programa “Encontro com Fátima Bernardes”, da TV Globo, em <a href="https://globoplay.globo.com/v/8976348/"  target="_blank">outubro de 2020</a> e <a href="https://globoplay.globo.com/v/9483461/"  target="_blank">maio de 2021</a>; e, recentemente, lançou o documentário <a href="https://globoplay.globo.com/uma-gota-de-esperanca/t/h22XpPF75z/"  target="_blank">“Uma gota de esperança”</a>, sobre a história dela e do Théo, no Globoplay. Assim, chamou a atenção das pessoas e mostrou a importância das famílias realizarem o Teste do Pezinho e da necessidade de sua ampliação na rede pública de saúde.     </p>';
  texto34 = '<p>Assim, juntos, Larissa e o Instituto Vidas Raras, conseguiram transformar a realidade de diversas famílias. A ampliação do Teste do Pezinho virou lei e vai salvar milhares de crianças. Larissa explica que o Brasil tem a capacidade de ampliar porque o sistema público é eficiente e que a ampliação vale a pena: “Vai precisar de um investimento no começo. Quando a gente faz a conta, de quanto custa tratar as crianças com sequelas e quanto custa investir nessa rede, em três anos a conta se ajeita. Tá paga. E aí a gente não vai ter mais nenhum Théo na cadeira de rodas por causa de um Teste do Pezinho ineficiente”.      </p>';
  texto35 = '<img style="width: 60%;   margin-left:17.5%" src="../assets/familia/texto5/5.png" />';
  texto36 = '<p style="font-size: 12px;"> Evento realizado em São Paulo para divulgar o teste do pezinho ampliado. Na foto: Larissa Carvalho, a atriz Bianca Rinaldi, e a presidente do Instituto Vidas Raras, Regina Próspero. (Foto: instagram Larissa Carvalho).      </p>';
  texto37 = '<p>  “Eu acho que a maior superação foi ter conseguido construir essa história de mudar o teste do pezinho no Brasil. Eu não conseguiria dormir sabendo de tanto de Larissa e tanto de Théo vivendo numa hora dessa no Brasil. É um compromisso ético-social mesmo”, explica Larissa.   </p>';
 //video
  texto38 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/wSZ3Tgv6ghk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  texto39 = '';
  texto40 = '';
  texto41 = '';
  texto42 = '';
  texto43 = '';

}



